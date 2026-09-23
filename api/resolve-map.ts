const MAX_URL_LENGTH = 2048;
const MAX_HTML_BYTES = 1_500_000;
const MAX_REDIRECTS = 5;
const FETCH_TIMEOUT_MS = 7500;

// Do not turn this into an unrestricted URL proxy. Only Google Maps domains are fetched.
const ALLOWED_HOSTS = new Set([
  'maps.app.goo.gl',
  'goo.gl',
  'google.com',
  'www.google.com',
  'maps.google.com',
  'google.co.id',
  'www.google.co.id',
  'maps.google.co.id',
  'google.co.uk',
  'www.google.co.uk',
  'google.com.sg',
  'www.google.com.sg'
]);

function validCoordinates(lat, lng) {
  return Number.isFinite(lat) && Number.isFinite(lng)
    && lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180;
}

function makePoint(lat, lng) {
  const latitude = Number(lat);
  const longitude = Number(lng);
  return validCoordinates(latitude, longitude) ? { lat: latitude, lng: longitude } : null;
}

function parsePair(value) {
  const match = String(value || '').match(/^\s*(-?\d{1,2}(?:\.\d+)?)\s*(?:,|%2c|\s)\s*(-?\d{1,3}(?:\.\d+)?)\s*$/i);
  return match ? makePoint(match[1], match[2]) : null;
}

function decodeSafely(value) {
  try { return decodeURIComponent(value); } catch { return value; }
}

function coordinatesFromText(value) {
  const text = String(value || '').replace(/&amp;/gi, '&');
  let match = text.match(/@(-?\d{1,2}(?:\.\d+)?),\s*(-?\d{1,3}(?:\.\d+)?)/);
  if (match) {
    const point = makePoint(match[1], match[2]);
    if (point) return point;
  }

  // Common Google Maps data URL forms.
  match = text.match(/!3d(-?\d{1,2}(?:\.\d+)?)!4d(-?\d{1,3}(?:\.\d+)?)/);
  if (match) {
    const point = makePoint(match[1], match[2]);
    if (point) return point;
  }
  match = text.match(/!2d(-?\d{1,3}(?:\.\d+)?)!3d(-?\d{1,2}(?:\.\d+)?)/);
  if (match) {
    const point = makePoint(match[2], match[1]);
    if (point) return point;
  }

  // Coordinates embedded in Google Maps page state.
  match = text.match(/"lat(?:itude)?"\s*:\s*(-?\d{1,2}(?:\.\d+)?)[\s\S]{0,180}?"(?:lng|lon|longitude)"\s*:\s*(-?\d{1,3}(?:\.\d+)?)/i);
  if (match) {
    const point = makePoint(match[1], match[2]);
    if (point) return point;
  }

  const decoded = decodeSafely(text);
  match = decoded.match(/(?:[?&"'\s])(?:q|query|center|destination)=(-?\d{1,2}(?:\.\d+)?)(?:,|\s)+(-?\d{1,3}(?:\.\d+)?)/i);
  if (match) {
    const point = makePoint(match[1], match[2]);
    if (point) return point;
  }

  // Parse the normal query parameters in a URL (q=lat,lng, center=lat,lng, etc.).
  try {
    const url = new URL(text);
    for (const key of ['q', 'query', 'center', 'destination']) {
      const point = parsePair(url.searchParams.get(key));
      if (point) return point;
    }
  } catch {}
  return null;
}

function safeMapsUrl(value) {
  let url;
  try { url = new URL(value); } catch { return null; }
  const hostname = url.hostname.toLowerCase().replace(/\.$/, '');
  if (url.protocol !== 'https:' || url.username || url.password) return null;
  if (url.port && url.port !== '443') return null;
  if (!ALLOWED_HOSTS.has(hostname)) return null;
  return url;
}

async function readTextBounded(response) {
  const declaredLength = Number(response.headers.get('content-length') || 0);
  if (declaredLength > MAX_HTML_BYTES) throw new Error('Google Maps response exceeded the size limit.');
  if (!response.body) return '';
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let total = 0;
  let text = '';
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    total += value.byteLength;
    if (total > MAX_HTML_BYTES) {
      await reader.cancel().catch(() => {});
      throw new Error('Google Maps response exceeded the size limit.');
    }
    text += decoder.decode(value, { stream: true });
  }
  return text + decoder.decode();
}

function sendJson(response, status, body, cache = 'no-store') {
  response.setHeader('Cache-Control', cache);
  response.setHeader('X-Content-Type-Options', 'nosniff');
  response.setHeader('Referrer-Policy', 'no-referrer');
  return response.status(status).json(body);
}

export default async function handler(request, response) {
  if (request.method !== 'GET') {
    response.setHeader('Allow', 'GET');
    return sendJson(response, 405, { ok: false, error: 'Metode tidak didukung.' });
  }

  const raw = request.query?.url;
  if (typeof raw !== 'string' || !raw.trim() || raw.length > MAX_URL_LENGTH) {
    return sendJson(response, 400, { ok: false, error: 'Tautan Maps tidak valid atau terlalu panjang.' });
  }

  let current = safeMapsUrl(raw.trim());
  if (!current) {
    return sendJson(response, 400, { ok: false, error: 'Gunakan tautan HTTPS Google Maps yang valid.' });
  }
  const directPoint = coordinatesFromText(current.href);
  if (directPoint) {
    return sendJson(response, 200, { ok: true, ...directPoint }, 'public, s-maxage=1800, stale-while-revalidate=3600');
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  const visited = new Set();
  try {
    for (let redirects = 0; redirects <= MAX_REDIRECTS; redirects += 1) {
      const safeCurrent = safeMapsUrl(current.href);
      if (!safeCurrent) return sendJson(response, 400, { ok: false, error: 'Tautan dialihkan ke domain yang tidak diizinkan.' });
      if (visited.has(safeCurrent.href)) return sendJson(response, 422, { ok: false, error: 'Tautan Maps memiliki pengalihan berulang.' });
      visited.add(safeCurrent.href);

      const upstream = await fetch(safeCurrent.href, {
        method: 'GET',
        redirect: 'manual',
        signal: controller.signal,
        headers: {
          Accept: 'text/html,application/xhtml+xml,application/json;q=0.9,*/*;q=0.5',
          'User-Agent': 'ParangbaddoStore-MapResolver/1.0'
        }
      });

      if (upstream.status >= 300 && upstream.status < 400) {
        const location = upstream.headers.get('location');
        if (!location) return sendJson(response, 422, { ok: false, error: 'Google Maps tidak memberikan tujuan tautan.' });
        if (redirects === MAX_REDIRECTS) return sendJson(response, 422, { ok: false, error: 'Tautan memiliki terlalu banyak pengalihan.' });
        let next;
        try { next = new URL(location, safeCurrent); } catch { return sendJson(response, 422, { ok: false, error: 'Tujuan pengalihan tidak valid.' }); }
        const safeNext = safeMapsUrl(next.href);
        if (!safeNext) return sendJson(response, 400, { ok: false, error: 'Tautan dialihkan ke domain yang tidak diizinkan.' });
        const redirectPoint = coordinatesFromText(safeNext.href);
        if (redirectPoint) return sendJson(response, 200, { ok: true, ...redirectPoint }, 'public, s-maxage=1800, stale-while-revalidate=3600');
        current = safeNext;
        continue;
      }

      if (!upstream.ok) {
        return sendJson(response, 502, { ok: false, error: 'Google Maps tidak dapat membuka tautan tersebut.' });
      }
      const contentType = upstream.headers.get('content-type') || '';
      if (!/text\/html|application\/xhtml\+xml|application\/json/i.test(contentType)) {
        return sendJson(response, 422, { ok: false, error: 'Halaman Maps tidak memuat koordinat yang dapat dibaca.' });
      }
      const html = await readTextBounded(upstream);
      const point = coordinatesFromText(html) || coordinatesFromText(safeCurrent.href);
      if (point) {
        return sendJson(response, 200, { ok: true, ...point }, 'public, s-maxage=1800, stale-while-revalidate=3600');
      }
      return sendJson(response, 422, { ok: false, error: 'Koordinat tidak ditemukan. Masukkan latitude dan longitude secara manual.' });
    }
  } catch (error) {
    if (error?.name === 'AbortError') {
      return sendJson(response, 504, { ok: false, error: 'Google Maps terlalu lama merespons. Coba lagi atau masukkan koordinat manual.' });
    }
    console.error('Map resolver upstream error:', error);
    return sendJson(response, 502, { ok: false, error: 'Tautan Maps tidak dapat diproses saat ini.' });
  } finally {
    clearTimeout(timeout);
  }
  return sendJson(response, 422, { ok: false, error: 'Koordinat tidak ditemukan.' });
}
