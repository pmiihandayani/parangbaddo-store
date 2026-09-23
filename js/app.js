/* Consolidated classic-script bundle. The original phase boundaries are kept
   to preserve initialization and intentional function replacements. */

// Browser-safe Supabase configuration. Publishable keys are intended for client use;
// database permissions are enforced by RLS. Never place a service_role key here.
window.pbSupabaseClient = (window.supabase && typeof window.supabase.createClient === 'function')
  ? window.supabase.createClient(
      'https://htjlligjkqpqjxbayybf.supabase.co',
      'sb_publishable_IfKAnnuBZ6q1G9ZUxQQP1w_Pfj2ZnVa',
      { auth: { autoRefreshToken: true, persistSession: true, detectSessionInUrl: true } }
    )
  : null;

/* ===== BEGIN app.js: ordered execution phase 1 ===== */
window["toast"] = __pb_1_app_toast;
window["openModal"] = __pb_1_app_openModal;
window["closeModal"] = __pb_1_app_closeModal;
window["setSession"] = __pb_1_app_setSession;
window["updateHeader"] = __pb_1_app_updateHeader;
window["navigate"] = __pb_1_app_navigate;
window["renderHome"] = __pb_1_app_renderHome;
window["roleCard"] = __pb_1_app_roleCard;
window["productCard"] = __pb_1_app_productCard;
window["bindCommon"] = __pb_1_app_bindCommon;
window["renderProducts"] = __pb_1_app_renderProducts;
window["paintProducts"] = __pb_1_app_paintProducts;
window["renderHow"] = __pb_1_app_renderHow;
window["handleRole"] = __pb_1_app_handleRole;
window["showRoleChooser"] = __pb_1_app_showRoleChooser;
window["showBuyerAuth"] = __pb_1_app_showBuyerAuth;
window["showOtp"] = __pb_1_app_showOtp;
window["showBuyerAccount"] = __pb_1_app_showBuyerAccount;
window["showSellerEntry"] = __pb_1_app_showSellerEntry;
window["showSellerRegistration"] = __pb_1_app_showSellerRegistration;
window["showAdminLogin"] = __pb_1_app_showAdminLogin;
window["showProduct"] = __pb_1_app_showProduct;
window["checkout"] = __pb_1_app_checkout;
window["adminNav"] = __pb_1_app_adminNav;
window["sideButton"] = __pb_1_app_sideButton;
window["renderAdmin"] = __pb_1_app_renderAdmin;
window["paintAdminTab"] = __pb_1_app_paintAdminTab;
window["adminTabContent"] = __pb_1_app_adminTabContent;
window["adminOverview"] = __pb_1_app_adminOverview;
window["statCard"] = __pb_1_app_statCard;
window["applicationTable"] = __pb_1_app_applicationTable;
window["sellerTable"] = __pb_1_app_sellerTable;
window["adminProductTable"] = __pb_1_app_adminProductTable;
window["buyerTable"] = __pb_1_app_buyerTable;
window["orderTable"] = __pb_1_app_orderTable;
window["bindAdminActions"] = __pb_1_app_bindAdminActions;
window["showApplication"] = __pb_1_app_showApplication;
window["approveApplication"] = __pb_1_app_approveApplication;
window["rejectApplication"] = __pb_1_app_rejectApplication;
window["sellerNav"] = __pb_1_app_sellerNav;
window["renderSeller"] = __pb_1_app_renderSeller;
window["paintSellerTab"] = __pb_1_app_paintSellerTab;
window["sellerTabContent"] = __pb_1_app_sellerTabContent;
window["showAddProduct"] = __pb_1_app_showAddProduct;
window["fileToData"] = __pb_1_app_fileToData;
window["editStock"] = __pb_1_app_editStock;
window["updateOrder"] = __pb_1_app_updateOrder;
window["finishIntro"] = __pb_1_app_finishIntro;

/* Parangbaddo' Store — interactive front-end prototype */
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const icon = (name, cls = '') => `<svg class="${cls}" aria-hidden="true"><use href="#i-${name}"></use></svg>`;
const rupiah = n => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n);
const uid = prefix => `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
const today = () => new Intl.DateTimeFormat('id-ID', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date());
const normalizePhone = value => {
  let p = String(value || '').replace(/\D/g, '');
  if (p.startsWith('0')) p = '62' + p.slice(1);
  if (!p.startsWith('62')) p = '62' + p;
  return p;
};
const initials = name => String(name || 'U').split(/\s+/).slice(0, 2).map(x => x[0]).join('').toUpperCase();

const svgImages = {
  gula: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="b" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#d9c19a"/><stop offset="1" stop-color="#8d623f"/></linearGradient></defs><rect width="800" height="600" fill="#d9d1b5"/><circle cx="670" cy="100" r="190" fill="#718447" opacity=".7"/><path d="M0 430Q240 330 800 400V600H0Z" fill="#9ca572"/><ellipse cx="400" cy="450" rx="270" ry="70" fill="#55442f" opacity=".22"/><path d="M270 230h260l45 240H225Z" fill="url(#b)"/><path d="M270 230q130-80 260 0" fill="#eee1c4"/><g fill="#6c3e1f"><circle cx="330" cy="250" r="58"/><circle cx="420" cy="232" r="61"/><circle cx="490" cy="270" r="54"/><circle cx="378" cy="312" r="60"/></g><g fill="#856041" opacity=".45"><circle cx="345" cy="232" r="14"/><circle cx="435" cy="215" r="18"/><circle cx="500" cy="255" r="13"/></g></svg>`)}`,
  sayur: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><rect width="800" height="600" fill="#d7dfbd"/><circle cx="170" cy="150" r="130" fill="#83965b"/><circle cx="650" cy="100" r="190" fill="#b7c98b"/><path d="M0 430Q300 330 800 410V600H0Z" fill="#927457"/><ellipse cx="400" cy="480" rx="300" ry="55" fill="#563d28" opacity=".2"/><path d="M170 270h460l-60 230H230Z" fill="#9d7041"/><path d="M225 280h350" stroke="#d4aa6f" stroke-width="28"/><g fill="#4e843e"><ellipse cx="280" cy="255" rx="80" ry="95"/><ellipse cx="390" cy="240" rx="95" ry="110"/><ellipse cx="510" cy="260" rx="90" ry="100"/></g><g fill="#6fa64f"><circle cx="335" cy="265" r="62"/><circle cx="455" cy="240" r="70"/></g><g fill="#e28a32"><path d="m270 280 25-110 40 110Z"/><path d="m500 290 18-120 45 110Z"/></g></svg>`)}`,
  sambal: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><rect width="800" height="600" fill="#ead8bf"/><circle cx="690" cy="110" r="170" fill="#9caf72"/><ellipse cx="400" cy="490" rx="260" ry="58" fill="#6c432c" opacity=".2"/><path d="M290 170h220l20 330H270Z" fill="#d36432"/><path d="M280 190h240v55H280Z" fill="#4e6c3e"/><rect x="310" y="300" width="180" height="105" rx="12" fill="#f5dfae"/><path d="M352 350c48-65 92-20 95 10-50 36-82 25-95-10Z" fill="#bb3d2c"/><path d="M420 330q20-35 43-42" stroke="#4d7b41" stroke-width="12" fill="none"/><g fill="#bc3c29"><path d="M130 460q90-95 170-18-97 65-170 18Z"/><path d="M515 475q82-98 158-25-85 70-158 25Z"/></g></svg>`)}`,
  kopi: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><rect width="800" height="600" fill="#c7bda4"/><path d="M0 380Q250 260 800 390V600H0Z" fill="#687751"/><circle cx="660" cy="100" r="180" fill="#8ea06d"/><path d="M250 155h300l45 355H205Z" fill="#7c5437"/><path d="M248 165q150-70 304 0" fill="#e2cda1"/><ellipse cx="400" cy="385" rx="125" ry="76" fill="#59351f"/><g fill="#352218"><ellipse cx="350" cy="350" rx="35" ry="50" transform="rotate(30 350 350)"/><ellipse cx="430" cy="380" rx="37" ry="53" transform="rotate(-18 430 380)"/><ellipse cx="480" cy="330" rx="34" ry="48" transform="rotate(20 480 330)"/></g><g stroke="#a7784f" stroke-width="7"><path d="m330 330 40 40"/><path d="m440 350-20 60"/><path d="m465 315 30 35"/></g></svg>`)}`,
  telur: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><rect width="800" height="600" fill="#e5d8b5"/><circle cx="130" cy="80" r="180" fill="#a7b982"/><path d="M0 420Q340 330 800 400V600H0Z" fill="#958567"/><ellipse cx="400" cy="470" rx="285" ry="65" fill="#5b4636" opacity=".2"/><path d="M160 330h480l-55 170H215Z" fill="#77654c"/><g fill="#f4e7c4"><ellipse cx="260" cy="320" rx="68" ry="85"/><ellipse cx="370" cy="300" rx="68" ry="88"/><ellipse cx="485" cy="322" rx="68" ry="85"/><ellipse cx="585" cy="305" rx="64" ry="83"/></g><path d="M180 385h430M280 365l-30 130M405 350v145M525 365l35 130" stroke="#a08b68" stroke-width="12"/></svg>`)}`,
  anyaman: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><rect width="800" height="600" fill="#ded0af"/><circle cx="650" cy="100" r="190" fill="#8a9d67"/><path d="M0 420Q300 320 800 390V600H0Z" fill="#a28360"/><ellipse cx="400" cy="490" rx="280" ry="65" fill="#523927" opacity=".2"/><path d="M230 240h340l65 260H165Z" fill="#b68248"/><path d="M260 240q15-150 140-150t140 150" stroke="#8b6038" stroke-width="28" fill="none"/><g stroke="#e0b96d" stroke-width="13" opacity=".8"><path d="m190 300 420 150M175 365l420 145M610 300 190 450M625 365 230 500"/></g></svg>`)}`
};

const seed = {
  products: [
    { id: 'p1', sellerId: 's1', seller: 'Balla Gula Aren', phone: '6281234567890', name: 'Gula Aren Asli', category: 'Hasil Tani', price: 25000, unit: 'bungkus', stock: 24, location: 'Dusun Panaikang, Parangbaddo’', map: 'https://www.google.com/maps/search/?api=1&query=Desa+Parang+Baddo+Takalar', image: 'assets/products/gula-aren.jpg', description: 'Gula aren rumahan dengan rasa legit alami. Dibuat warga dari bahan pilihan tanpa pemanis buatan.', active: true },
    { id: 'p2', sellerId: 's2', seller: 'Kebun Ibu Sari', phone: '6281350011223', name: 'Paket Sayur Segar', category: 'Hasil Tani', price: 18000, unit: 'paket', stock: 16, location: 'Dusun Bontorita, Parangbaddo’', map: 'https://www.google.com/maps/search/?api=1&query=Desa+Parang+Baddo+Takalar', image: 'assets/products/sayur-segar.jpg', description: 'Paket sayuran segar hasil kebun warga. Dipanen pagi dan cocok untuk kebutuhan keluarga.', active: true },
    { id: 'p3', sellerId: 's3', seller: 'Dapur Daeng', phone: '6285298123400', name: 'Sambal Parangbaddo’', category: 'Kuliner', price: 22000, unit: 'botol', stock: 31, location: 'Jalan Poros Desa Parangbaddo’', map: 'https://www.google.com/maps/search/?api=1&query=Desa+Parang+Baddo+Takalar', image: 'assets/products/sambal.jpg', description: 'Sambal khas pedas gurih, dibuat dalam jumlah terbatas agar selalu segar.', active: true },
    { id: 'p4', sellerId: 's1', seller: 'Balla Gula Aren', phone: '6281234567890', name: 'Kopi Kampung Robusta', category: 'Minuman', price: 35000, unit: '250 gr', stock: 12, location: 'Dusun Panaikang, Parangbaddo’', map: 'https://www.google.com/maps/search/?api=1&query=Desa+Parang+Baddo+Takalar', image: 'assets/products/kopi.jpg', description: 'Biji kopi robusta pilihan, disangrai lokal dengan karakter rasa cokelat dan kacang.', active: true },
    { id: 'p5', sellerId: 's4', seller: 'Ternak Sejahtera', phone: '6282299887733', name: 'Telur Ayam Kampung', category: 'Peternakan', price: 45000, unit: 'rak mini', stock: 9, location: 'Dusun Panaikang, Parangbaddo’', map: 'https://www.google.com/maps/search/?api=1&query=Desa+Parang+Baddo+Takalar', image: 'assets/products/telur.jpg', description: 'Telur ayam kampung dari peternak lokal, dikumpulkan dan disortir setiap hari.', active: true },
    { id: 'p6', sellerId: 's5', seller: 'Anyaman Nur', phone: '6289533445566', name: 'Tas Anyaman Lontar', category: 'Kerajinan', price: 85000, unit: 'buah', stock: 7, location: 'Dusun Bontorita, Parangbaddo’', map: 'https://www.google.com/maps/search/?api=1&query=Desa+Parang+Baddo+Takalar', image: 'assets/products/anyaman.jpg', description: 'Tas anyaman buatan tangan dengan bahan lokal. Setiap produk memiliki pola yang unik.', active: true }
  ],
  applications: [
    { id: 'REG-1042', name: 'Nur Alim', business: 'Keripik Daeng Nura', phone: '6282144556677', category: 'Kuliner', address: 'Dusun Bontorita, Desa Parangbaddo’', maps: 'https://www.google.com/maps/search/?api=1&query=Desa+Parang+Baddo+Takalar', description: 'Usaha keripik pisang rumahan.', status: 'pending', submitted: '16 Agu 2026, 09.14' },
    { id: 'REG-1039', name: 'Rahma Dg. Bau', business: 'Kue Tradisional Rahma', phone: '6285344001122', category: 'Kuliner', address: 'Jalan Poros Desa Parangbaddo’', maps: '', description: 'Jajanan dan kue tradisional.', status: 'pending', submitted: '15 Agu 2026, 15.20' }
  ],
  sellers: [
    { id: 's1', name: 'Muhammad Arif', business: 'Balla Gula Aren', phone: '6281234567890', category: 'Hasil Tani', address: 'Dusun Panaikang, Parangbaddo’', status: 'approved', joined: '12 Jul 2026' },
    { id: 's2', name: 'Sari Dg. Ngai', business: 'Kebun Ibu Sari', phone: '6281350011223', category: 'Hasil Tani', address: 'Dusun Bontorita, Parangbaddo’', status: 'approved', joined: '18 Jul 2026' },
    { id: 's3', name: 'Jamaluddin', business: 'Dapur Daeng', phone: '6285298123400', category: 'Kuliner', address: 'Jalan Poros Desa', status: 'approved', joined: '22 Jul 2026' },
    { id: 's4', name: 'Baharuddin', business: 'Ternak Sejahtera', phone: '6282299887733', category: 'Peternakan', address: 'Dusun Panaikang', status: 'approved', joined: '2 Agu 2026' },
    { id: 's5', name: 'Nursiah', business: 'Anyaman Nur', phone: '6289533445566', category: 'Kerajinan', address: 'Dusun Bontorita', status: 'approved', joined: '7 Agu 2026' }
  ],
  buyers: [
    { id: 'b1', name: 'Andi Saputra', phone: '6281244221100', status: 'active', joined: '14 Agu 2026' },
    { id: 'b2', name: 'Fitriani', phone: '6285288991010', status: 'active', joined: '15 Agu 2026' }
  ],
  orders: [
    { id: 'PB-260816-001', buyer: 'Andi Saputra', buyerPhone: '6281244221100', sellerId: 's1', seller: 'Balla Gula Aren', productId: 'p1', product: 'Gula Aren Asli', qty: 2, total: 50000, status: 'wa', created: '16 Agu 2026, 10.22' },
    { id: 'PB-260815-008', buyer: 'Fitriani', buyerPhone: '6285288991010', sellerId: 's1', seller: 'Balla Gula Aren', productId: 'p4', product: 'Kopi Kampung Robusta', qty: 1, total: 35000, status: 'completed', created: '15 Agu 2026, 14.08' }
  ],
  logs: [
    { text: 'Permohonan Keripik Daeng Nura masuk', time: '12 menit lalu' },
    { text: 'Produk Sambal Parangbaddo’ diperbarui', time: '1 jam lalu' },
    { text: 'Pesanan PB-260815-008 selesai', time: 'Kemarin' }
  ]
};

const remoteCollections = new Set(['products', 'applications', 'sellers', 'buyers', 'orders', 'logs']);
const getData = (key) => {
  if (window.pbSupabaseClient && remoteCollections.has(key)) return [];
  try { return JSON.parse(localStorage.getItem(`pb_${key}`)) || structuredClone(seed[key]); }
  catch { return JSON.parse(JSON.stringify(seed[key])); }
};
const db = {
  products: getData('products'), applications: getData('applications'), sellers: getData('sellers'),
  buyers: getData('buyers'), orders: getData('orders'), logs: getData('logs')
};
const save = key => {
  if (window.pbSupabaseClient && remoteCollections.has(key)) return;
  localStorage.setItem(`pb_${key}`, JSON.stringify(db[key]));
};

const state = { view: 'home', category: 'Semua', search: '', session: null, adminTab: 'overview', sellerTab: 'overview', selectedProduct: null, qty: 1 };
try { if (!window.pbSupabaseClient) state.session = JSON.parse(sessionStorage.getItem('pb_session')); } catch {}

const view = $('#view');
const modalRoot = $('#modalRoot');

function __pb_1_app_toast(message) {
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = `${icon('check')}<div>${message}</div>`;
  $('#toastRoot').append(el);
  setTimeout(() => el.remove(), 3600);
}

function __pb_1_app_openModal(content, wide = false) {
  modalRoot.innerHTML = `<div class="modal ${wide ? 'wide' : ''}" role="dialog" aria-modal="true">${content}</div>`;
  modalRoot.classList.add('open');
  modalRoot.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  $('.modal', modalRoot)?.focus();
}
function __pb_1_app_closeModal() {
  modalRoot.classList.remove('open');
  modalRoot.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  setTimeout(() => modalRoot.innerHTML = '', 220);
}
modalRoot.addEventListener('click', e => {
  if (e.target.closest('[data-close]')) { closeModal(); return; }
  if (e.target === modalRoot && modalRoot.dataset.staticBackdrop !== 'true' && state.session?.role !== 'admin') closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modalRoot.dataset.staticBackdrop !== 'true' && state.session?.role !== 'admin') closeModal();
});

function __pb_1_app_setSession(session) {
  state.session = session;
  if (session) sessionStorage.setItem('pb_session', JSON.stringify(session)); else sessionStorage.removeItem('pb_session');
  updateHeader();
}
function __pb_1_app_updateHeader() {
  const target = $('#sessionPill');
  if (state.session) {
    const roleName = state.session.role === 'admin' ? 'Admin Desa' : state.session.role === 'seller' ? state.session.business : state.session.name;
    target.innerHTML = `<button class="session-pill" id="sessionAction"><span class="session-avatar">${initials(roleName)}</span><span>${roleName}</span></button>`;
    $('#roleButton').textContent = 'Keluar';
    $('#sessionAction').onclick = () => state.session.role === 'admin' ? navigate('admin') : state.session.role === 'seller' ? navigate('seller') : showBuyerAccount();
  } else {
    target.innerHTML = '';
    $('#roleButton').textContent = 'Masuk';
  }
}

function __pb_1_app_navigate(name) {
  state.view = name;
  $$('#mainNav button').forEach(b => b.classList.toggle('active', b.dataset.view === name));
  if (name === 'home') renderHome();
  else if (name === 'products') renderProducts();
  else if (name === 'how') renderHow();
  else if (name === 'admin') renderAdmin();
  else if (name === 'seller') renderSeller();
  view.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: 'smooth' });
  $('#mainNav').classList.remove('open');
}

function __pb_1_app_renderHome() {
  view.innerHTML = `
    <section class="home-hero">
      <div class="hero-copy">
        <p class="eyebrow">Pasar digital warga desa</p>
        <h1>Dari desa,<br>untuk <em>semua.</em></h1>
        <p>Temukan hasil tani, kuliner, dan karya warga Parangbaddo’. Pesan mudah, bicara langsung dengan penjualnya.</p>
        <div class="hero-actions">
          <button class="btn btn-dark" data-go-products>${icon('bag')} Mulai belanja</button>
          <button class="btn btn-outline" data-role="seller">Daftar sebagai penjual ${icon('arrow')}</button>
        </div>
        <div class="hero-trust">
          <span>${icon('shield')} Penjual diverifikasi desa</span>
          <span>${icon('map')} Lokasi usaha jelas</span>
          <span>${icon('whatsapp')} Pesan langsung via WhatsApp</span>
        </div>
      </div>
      <div class="hero-visual" role="img" aria-label="Ilustrasi suasana desa dan hasil bumi">
        <div class="floating-card"><span class="round-icon">${icon('store')}</span><div><strong>Produk warga, dampak nyata</strong><p>Setiap pembelian membantu usaha lokal tumbuh.</p></div></div>
      </div>
    </section>
    <section class="section role-section" id="pilih-peran">
      <div class="container">
        <div class="section-head"><div><p class="eyebrow">Pilih cara masuk</p><h2>Satu desa, tiga peran.</h2></div><p>Masuk sesuai kebutuhanmu. Pembeli mencari produk, penjual mengelola usaha, admin menjaga ekosistem tetap aman.</p></div>
        <div class="role-grid">
          ${roleCard('01','user','Pembeli','Cari produk dan pesan langsung ke WhatsApp penjual.','Masuk sebagai pembeli','buyer', true)}
          ${roleCard('02','store','Penjual','Kelola profil usaha, produk, stok, dan permintaan pesanan.','Masuk / daftar penjual','seller')}
          ${roleCard('03','shield','Admin Desa','Verifikasi penjual, moderasi produk, dan pantau marketplace.','Masuk sebagai admin','admin')}
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="section-head"><div><p class="eyebrow">Pilihan warga</p><h2>Produk terbaru.</h2></div><button class="btn btn-outline btn-sm" data-go-products>Lihat semua ${icon('arrow')}</button></div>
        <div class="product-grid">${db.products.filter(p => p.active && p.moderation !== 'hidden' && p.sellerActive !== false && p.stock > 0).slice(0,3).map(productCard).join('')}</div>
      </div>
    </section>`;
  bindCommon();
}

function __pb_1_app_roleCard(num, ico, title, text, link, role, featured = false) {
  return `<article class="role-card ${featured ? 'featured' : ''}" data-role="${role}"><span class="role-number">${num}</span><span class="round-icon">${icon(ico)}</span><h3>${title}</h3><p>${text}</p><span class="role-link">${link} ${icon('arrow')}</span></article>`;
}

function __pb_1_app_productCard(p) {
  return `<article class="product-card" data-product="${p.id}">
    <div class="product-image"><img src="${p.image}" alt="${p.name}"><span class="product-badge">${p.category}</span></div>
    <div class="product-body"><div class="seller-line"><span>${icon('store')} ${p.seller}</span><span>${icon('map')} Parangbaddo’</span></div><h3>${p.name}</h3><div class="product-bottom"><span class="price">${rupiah(p.price)} <small>/ ${p.unit}</small></span><span class="stock">Stok ${p.stock}</span></div></div>
  </article>`;
}

function __pb_1_app_bindCommon() {
  $$('[data-go-products]', view).forEach(b => b.onclick = () => navigate('products'));
  $$('[data-role]', view).forEach(b => b.onclick = () => handleRole(b.dataset.role));
  $$('[data-product]', view).forEach(card => card.onclick = () => showProduct(card.dataset.product));
}

function __pb_1_app_renderProducts() {
  const categories = ['Semua', ...new Set(db.products.filter(p => p.active).map(p => p.category))];
  view.innerHTML = `
    <section class="products-hero"><div class="container"><div class="page-title"><p class="eyebrow">Etalase produk lokal</p><h1>Yang baik, tumbuh di sekitar kita.</h1><p>Cari produk warga, cek stok dan lokasinya, lalu pesan langsung melalui WhatsApp.</p></div></div></section>
    <section class="section-sm"><div class="container">
      <div class="search-panel"><div class="search-box">${icon('search')}<input id="productSearch" value="${state.search}" placeholder="Cari gula aren, sayur, kerajinan…" aria-label="Cari produk"></div><select id="sortProduct"><option value="new">Terbaru</option><option value="low">Harga terendah</option><option value="high">Harga tertinggi</option></select><button class="btn btn-dark" id="searchBtn">Cari produk</button></div>
      <div class="category-row" style="margin:32px 0 24px">${categories.map(c => `<button class="chip ${state.category === c ? 'active' : ''}" data-category="${c}">${c}</button>`).join('')}</div>
      <div id="productGrid" class="product-grid"></div>
    </div></section>`;
  $('#productSearch').addEventListener('input', e => { state.search = e.target.value; paintProducts(); });
  $('#sortProduct').onchange = paintProducts;
  $('#searchBtn').onclick = paintProducts;
  $$('[data-category]').forEach(b => b.onclick = () => { state.category = b.dataset.category; $$('[data-category]').forEach(x => x.classList.toggle('active', x === b)); paintProducts(); });
  paintProducts();
}
function __pb_1_app_paintProducts() {
  let items = db.products.filter(p => p.active && (state.category === 'Semua' || p.category === state.category) && `${p.name} ${p.seller} ${p.category}`.toLowerCase().includes(state.search.toLowerCase()));
  const sort = $('#sortProduct')?.value;
  if (sort === 'low') items.sort((a,b) => a.price-b.price);
  if (sort === 'high') items.sort((a,b) => b.price-a.price);
  $('#productGrid').innerHTML = items.length ? items.map(productCard).join('') : `<div class="empty-state"><span class="round-icon">${icon('search')}</span><strong>Produk tidak ditemukan</strong><p>Coba kata kunci atau kategori yang lain.</p></div>`;
  $$('[data-product]', $('#productGrid')).forEach(card => card.onclick = () => showProduct(card.dataset.product));
}

function __pb_1_app_renderHow() {
  view.innerHTML = `
    <section class="how-hero"><div class="container"><div class="page-title"><p class="eyebrow">Sederhana dan transparan</p><h1>Dari etalase ke WhatsApp.</h1><p>Website membantu pembeli menemukan produk dan membuat nota. Pembayaran serta pengiriman disepakati langsung bersama penjual.</p></div></div></section>
    <section class="section"><div class="container"><div class="section-head"><div><p class="eyebrow">Alur pembeli</p><h2>Belanja dalam 4 langkah.</h2></div></div><div class="steps">
      <article class="step"><span>LANGKAH 01</span><h3>Daftar & verifikasi email</h3><p>Daftar memakai email dan kata sandi; WhatsApp hanya untuk kontak transaksi.</p></article>
      <article class="step"><span>LANGKAH 02</span><h3>Cari produk</h3><p>Gunakan pencarian dan kategori untuk menemukan produk lokal.</p></article>
      <article class="step"><span>LANGKAH 03</span><h3>Atur jumlah</h3><p>Pilih jumlah barang. Sistem otomatis menghitung total harga.</p></article>
      <article class="step"><span>LANGKAH 04</span><h3>Lanjut ke WA</h3><p>Nota otomatis dikirim ke chat penjual untuk konfirmasi transaksi.</p></article>
    </div></div></section>
    <section class="section-sm"><div class="container"><div class="flow-panel"><div class="flow-copy"><p class="eyebrow">Pemesanan yang jelas</p><h2>Website mencatat,<br>WhatsApp menyelesaikan.</h2><ul><li>${icon('check')} Nomor pesanan dibuat sebelum diarahkan ke WhatsApp.</li><li>${icon('check')} Total memakai harga saat pesanan dibuat.</li><li>${icon('check')} Stok baru berkurang setelah penjual mengonfirmasi.</li><li>${icon('check')} Admin tidak membaca percakapan atau memegang uang.</li></ul></div><div class="flow-art"><div class="flow-phone"><strong>WhatsApp</strong><div class="chat-bubble white">Halo, apakah Gula Aren masih tersedia?</div><div class="chat-bubble">Halo! Tersedia. Pesanan PB-260816-001 sudah kami konfirmasi.</div><div class="chat-bubble white"><b>2 × Gula Aren</b><br>Total Rp50.000</div></div></div></div></div></section>
    <section class="section"><div class="container"><div class="section-head"><div><p class="eyebrow">Untuk pelaku usaha</p><h2>Mau ikut berjualan?</h2></div><button class="btn btn-dark" data-role="seller">Ajukan toko ${icon('arrow')}</button></div></div></section>`;
  bindCommon();
}

function __pb_1_app_handleRole(role) {
  if (role === 'buyer') showBuyerAuth();
  if (role === 'seller') showSellerEntry();
  if (role === 'admin') showAdminLogin();
}
function __pb_1_app_showRoleChooser() {
  openModal(`<div class="modal-head"><div><p class="eyebrow">Selamat datang</p><h2>Masuk sebagai siapa?</h2><p>Pilih peran untuk melanjutkan.</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><div class="role-modal-grid">
    <button class="mini-role" data-modal-role="buyer"><span class="round-icon">${icon('user')}</span><strong>Pembeli</strong><span>Cari & pesan produk</span></button>
    <button class="mini-role" data-modal-role="seller"><span class="round-icon">${icon('store')}</span><strong>Penjual</strong><span>Kelola toko & produk</span></button>
    <button class="mini-role" data-modal-role="admin"><span class="round-icon">${icon('shield')}</span><strong>Admin Desa</strong><span>Moderasi marketplace</span></button>
  </div></div>`);
  $$('[data-modal-role]').forEach(b => b.onclick = () => { closeModal(); setTimeout(() => handleRole(b.dataset.modalRole), 210); });
}

function __pb_1_app_showBuyerAuth() {
  if (state.session?.role === 'buyer') return showBuyerAccount();
  openModal(`<div class="modal-head"><div><p class="eyebrow">Akun pembeli</p><h2>Belanja sebagai warga.</h2><p>Nomor WhatsApp digunakan untuk verifikasi dan nota.</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><div class="helper-box">Prototipe ini mensimulasikan pengiriman OTP WhatsApp. Tidak ada pesan sungguhan yang dikirim.</div><form id="buyerStart"><div class="form-grid"><div class="field full"><label>Nama lengkap</label><input required name="name" placeholder="Contoh: Andi Saputra"></div><div class="field full"><label>Nomor WhatsApp aktif</label><input required name="phone" inputmode="tel" placeholder="08xxxxxxxxxx" minlength="10"></div></div><div class="form-actions"><button class="btn btn-dark btn-block">Kirim kode OTP ${icon('arrow')}</button></div></form></div>`);
  $('#buyerStart').onsubmit = e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    showOtp('buyer', data);
  };
}
function __pb_1_app_showOtp(role, data) {
  openModal(`<div class="modal-head"><div><p class="eyebrow">Verifikasi WhatsApp</p><h2>Masukkan kode OTP.</h2><p>Kode dikirim ke +${normalizePhone(data.phone)}.</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><div class="helper-box">Kode OTP demo: <span class="demo-code">123456</span></div><form id="otpForm"><div class="field"><label>6 digit kode OTP</label><input required name="otp" inputmode="numeric" maxlength="6" pattern="[0-9]{6}" placeholder="••••••" style="font-size:22px;letter-spacing:.3em;text-align:center"></div><div class="form-actions"><button class="btn btn-dark btn-block">Verifikasi & masuk</button></div></form><div class="divider">kode belum masuk?</div><button class="btn btn-outline btn-block" type="button" id="resendOtp">Kirim ulang OTP</button></div>`);
  $('#resendOtp').onclick = () => toast('Kode OTP demo dikirim ulang: 123456');
  $('#otpForm').onsubmit = e => {
    e.preventDefault();
    if (new FormData(e.target).get('otp') !== '123456') return toast('Kode OTP salah. Gunakan 123456 untuk prototipe.');
    if (role === 'buyer') {
      const phone = normalizePhone(data.phone);
      let buyer = db.buyers.find(b => b.phone === phone);
      if (!buyer) { buyer = { id: uid('b'), name: data.name, phone, status: 'active', joined: today() }; db.buyers.push(buyer); save('buyers'); }
      setSession({ role: 'buyer', id: buyer.id, name: buyer.name, phone: buyer.phone });
      closeModal(); toast(`Selamat datang, ${buyer.name}. Akunmu sudah terverifikasi.`);
      if (state.selectedProduct) setTimeout(() => showProduct(state.selectedProduct), 220);
    } else {
      const seller = db.sellers.find(s => s.id === data.sellerId);
      setSession({ role: 'seller', id: seller.id, name: seller.name, business: seller.business, phone: seller.phone });
      closeModal(); toast(`Berhasil masuk sebagai ${seller.business}.`); navigate('seller');
    }
  };
}
function __pb_1_app_showBuyerAccount() {
  const orders = db.orders.filter(o => o.buyerPhone === state.session.phone);
  openModal(`<div class="modal-head"><div><p class="eyebrow">Akun pembeli</p><h2>${state.session.name}</h2><p>WhatsApp +${state.session.phone} · Terverifikasi</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><div class="panel"><div class="panel-head"><h3>Riwayat minat/pesanan</h3><span class="status active">${orders.length} pesanan</span></div><div class="table-wrap"><table><thead><tr><th>ID</th><th>Produk</th><th>Total</th><th>Status</th></tr></thead><tbody>${orders.length ? orders.map(o => `<tr><td>${o.id}</td><td>${o.product}</td><td>${rupiah(o.total)}</td><td><span class="status ${o.status}">${statusName(o.status)}</span></td></tr>`).join('') : `<tr><td colspan="4" class="muted">Belum ada pesanan.</td></tr>`}</tbody></table></div></div><div class="form-actions"><button class="btn btn-outline" id="logoutBuyer">Keluar akun</button><button class="btn btn-dark" data-close onclick="setTimeout(()=>navigate('products'),220)">Cari produk</button></div></div>`);
  $('#logoutBuyer').onclick = () => { setSession(null); closeModal(); toast('Anda telah keluar.'); };
}

function __pb_1_app_showSellerEntry() {
  if (state.session?.role === 'seller') return navigate('seller');
  openModal(`<div class="modal-head"><div><p class="eyebrow">Portal penjual</p><h2>Masuk atau buka toko.</h2><p>Khusus usaha yang telah diverifikasi admin desa.</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><form id="sellerLogin"><div class="field"><label>Nomor WhatsApp penjual</label><input required name="phone" inputmode="tel" placeholder="08xxxxxxxxxx"></div><div class="form-actions"><button class="btn btn-dark btn-block">Masuk dengan OTP</button></div></form><div class="divider">demonstrasi</div><button class="btn btn-ghost btn-block" id="demoSeller">Gunakan akun penjual demo</button><div class="divider">belum punya akun?</div><button class="btn btn-outline btn-block" id="registerSeller">Daftar sebagai penjual</button></div>`);
  $('#demoSeller').onclick = () => showOtp('seller', { sellerId: 's1', phone: '081234567890' });
  $('#registerSeller').onclick = showSellerRegistration;
  $('#sellerLogin').onsubmit = e => {
    e.preventDefault(); const phone = normalizePhone(new FormData(e.target).get('phone'));
    const seller = db.sellers.find(s => s.phone === phone && s.status === 'approved');
    const pending = db.applications.find(a => a.phone === phone && a.status === 'pending');
    if (pending) return toast(`Permohonan ${pending.id} masih menunggu persetujuan admin.`);
    if (!seller) return toast('Nomor belum terdaftar sebagai penjual yang disetujui.');
    showOtp('seller', { sellerId: seller.id, phone });
  };
}
function __pb_1_app_showSellerRegistration() {
  openModal(`<div class="modal-head"><div><p class="eyebrow">Permohonan toko</p><h2>Daftar sebagai penjual.</h2><p>Admin desa akan memeriksa data sebelum akun dibuat.</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><form id="sellerRegister"><div class="form-grid">
    <div class="field"><label>Nama pendaftar</label><input required name="name" placeholder="Nama sesuai identitas"></div>
    <div class="field"><label>Nama bisnis/usaha</label><input required name="business" placeholder="Contoh: Dapur Ibu Sinta"></div>
    <div class="field"><label>Nomor WhatsApp aktif</label><input required name="phone" inputmode="tel" placeholder="08xxxxxxxxxx"></div>
    <div class="field"><label>Kategori usaha</label><select required name="category"><option value="">Pilih kategori</option><option>Kuliner</option><option>Hasil Tani</option><option>Peternakan</option><option>Kerajinan</option><option>Jasa</option></select></div>
    <div class="field full"><label>Alamat usaha</label><input required name="address" placeholder="Dusun, RT/RW, Desa Parangbaddo’"></div>
    <div class="field full"><label>Tautan lokasi Google Maps</label><input required name="maps" type="url" placeholder="https://maps.google.com/..."><small>Buka Google Maps → Bagikan → Salin link.</small></div>
    <div class="field full"><label>Deskripsi singkat usaha</label><textarea required name="description" placeholder="Ceritakan produk atau usaha Anda"></textarea></div>
  </div><div class="helper-box" style="margin-top:17px">Dengan mengirim permohonan, Anda menyatakan data usaha benar dan bersedia diverifikasi oleh Pemerintah Desa.</div><div class="form-actions"><button type="button" class="btn btn-outline" data-close>Batal</button><button class="btn btn-dark">Kirim permohonan ${icon('arrow')}</button></div></form></div>`, true);
  $('#sellerRegister').onsubmit = e => {
    e.preventDefault(); const data = Object.fromEntries(new FormData(e.target));
    const phone = normalizePhone(data.phone);
    if (db.sellers.some(s => s.phone === phone) || db.applications.some(a => a.phone === phone && a.status === 'pending')) return toast('Nomor WhatsApp ini sudah terdaftar atau sedang diproses.');
    const application = { id: `REG-${Math.floor(1000 + Math.random()*9000)}`, ...data, phone, status: 'pending', submitted: today() };
    db.applications.unshift(application); db.logs.unshift({ text: `Permohonan ${application.business} masuk`, time: 'Baru saja' }); save('applications'); save('logs');
    openModal(`<div class="modal-head"><div><p class="eyebrow">Berhasil dikirim</p><h2>Permohonan sedang ditinjau.</h2></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><div style="text-align:center;padding:15px 0 25px"><span class="round-icon" style="margin:0 auto 18px;width:64px;height:64px">${icon('clock')}</span><p class="muted">Simpan nomor pengajuan berikut:</p><h2 style="font-size:28px;letter-spacing:.08em">${application.id}</h2><p class="muted small">Admin desa akan memeriksa data. Setelah disetujui, akun penjual dapat masuk menggunakan nomor WhatsApp yang didaftarkan.</p></div><button class="btn btn-dark btn-block" data-close>Selesai</button></div>`);
  };
}

function __pb_1_app_showAdminLogin() {
  if (state.session?.role === 'admin') return navigate('admin');
  openModal(`<div class="modal-head"><div><p class="eyebrow">Akses terbatas</p><h2>Login Admin Desa.</h2><p>Akun admin tidak dapat dibuat secara umum.</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><div class="helper-box">Akun demo: <b>admin</b> · kata sandi <b>desa123</b></div><form id="adminLogin"><div class="form-grid"><div class="field full"><label>Username</label><input name="username" required value="admin"></div><div class="field full"><label>Kata sandi</label><input name="password" type="password" required value="desa123"></div></div><div class="form-actions"><button class="btn btn-dark btn-block">Masuk ke dashboard ${icon('arrow')}</button></div></form></div>`);
  $('#adminLogin').onsubmit = e => {
    e.preventDefault(); const data = Object.fromEntries(new FormData(e.target));
    if (data.username !== 'admin' || data.password !== 'desa123') return toast('Username atau kata sandi salah.');
    setSession({ role: 'admin', id: 'admin1', name: 'Admin Desa' }); closeModal(); toast('Selamat datang, Admin Desa.'); navigate('admin');
  };
}

function __pb_1_app_showProduct(id) {
  const p = db.products.find(x => x.id === id);
  if (!p || !p.active) return toast('Produk sedang tidak tersedia.');
  state.selectedProduct = id; state.qty = 1;
  modalRoot.innerHTML = `<div class="modal product-modal" role="dialog" aria-modal="true"><button class="icon-btn" data-close style="position:absolute;right:20px;top:20px;z-index:5">${icon('x')}</button><div class="product-detail"><div class="product-detail-image"><img src="${p.image}" alt="${p.name}"></div><div class="product-detail-copy"><p class="eyebrow">${p.category}</p><h2>${p.name}</h2><div class="large-price">${rupiah(p.price)} <span class="muted small">/ ${p.unit}</span></div><p class="muted small">${p.description}</p><div class="location-box"><div>${icon('map')}<p><strong>${p.seller}</strong><br><small>${p.location}</small></p></div><a class="text-btn" href="${p.map}" target="_blank" rel="noopener">Buka Maps</a></div><div class="qty-row"><div><strong>Jumlah pesanan</strong><div class="muted small">Tersedia ${p.stock} ${p.unit}</div></div><div class="qty-control"><button id="qtyMinus">−</button><strong id="qtyValue">1</strong><button id="qtyPlus">+</button></div></div><div class="total-box"><span>Total perkiraan</span><strong id="orderTotal">${rupiah(p.price)}</strong></div><button id="orderWa" class="btn wa-btn btn-block">${icon('whatsapp')} Pesan via WhatsApp</button><p class="muted" style="font-size:10px;text-align:center">Pembayaran dan pengiriman disepakati langsung dengan penjual.</p></div></div></div>`;
  modalRoot.classList.add('open'); modalRoot.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden';
  const repaint = () => { $('#qtyValue').textContent = state.qty; $('#orderTotal').textContent = rupiah(p.price*state.qty); };
  $('#qtyMinus').onclick = () => { state.qty = Math.max(1, state.qty-1); repaint(); };
  $('#qtyPlus').onclick = () => { state.qty = Math.min(p.stock, state.qty+1); repaint(); if(state.qty === p.stock) toast('Jumlah sudah mencapai stok tersedia.'); };
  $('#orderWa').onclick = () => checkout(p);
}
function __pb_1_app_checkout(p) {
  if (!state.session || state.session.role !== 'buyer') { closeModal(); toast('Masuk sebagai pembeli untuk membuat pesanan.'); return setTimeout(showBuyerAuth, 230); }
  const orderId = `PB-${new Date().toISOString().slice(2,10).replaceAll('-','')}-${String(db.orders.length+1).padStart(3,'0')}`;
  const order = { id: orderId, buyer: state.session.name, buyerPhone: state.session.phone, sellerId: p.sellerId, seller: p.seller, productId: p.id, product: p.name, qty: state.qty, total: p.price*state.qty, status: 'wa', created: today() };
  db.orders.unshift(order); db.logs.unshift({ text: `Pesanan ${orderId} diteruskan ke WhatsApp`, time: 'Baru saja' }); save('orders'); save('logs');
  const message = `Halo ${p.seller}, saya ingin memesan produk dari Parangbaddo' Store.\n\nNomor Pesanan: ${orderId}\nNama Pembeli: ${state.session.name}\n\nPesanan:\n- ${p.name}\n- ${state.qty} ${p.unit} × ${rupiah(p.price)}\n\nTotal: ${rupiah(order.total)}\n\nMohon konfirmasi ketersediaan produk, metode pembayaran, dan pengambilan/pengirimannya. Terima kasih.`;
  const url = `https://wa.me/${p.phone}?text=${encodeURIComponent(message)}`;
  closeModal(); toast(`Nota ${orderId} dibuat. Membuka WhatsApp penjual…`);
  setTimeout(() => window.open(url, '_blank', 'noopener'), 350);
}

const statusName = status => ({ pending:'Menunggu', approved:'Aktif', rejected:'Ditolak', active:'Aktif', suspended:'Ditangguhkan', wa:'Ke WhatsApp', completed:'Selesai', cancelled:'Dibatalkan', review:'Ditinjau' }[status] || status);
function __pb_1_app_adminNav() {
  return `<aside class="dashboard-side"><div class="side-profile"><span class="avatar">AD</span><div><strong>Admin Desa</strong><span>Pengelola marketplace</span></div></div><nav class="side-nav">
    ${sideButton('overview','grid','Ringkasan', state.adminTab)}${sideButton('applications','clock','Permohonan', state.adminTab)}${sideButton('sellers','store','Penjual', state.adminTab)}${sideButton('products','package','Produk', state.adminTab)}${sideButton('buyers','users','Pembeli', state.adminTab)}${sideButton('orders','bag','Pesanan', state.adminTab)}${sideButton('logs','log','Log Aktivitas', state.adminTab)}${sideButton('settings','settings','Pengaturan', state.adminTab)}
  </nav></aside>`;
}
function __pb_1_app_sideButton(tab, ico, label, active) { return `<button class="${active === tab ? 'active' : ''}" data-tab="${tab}">${icon(ico)}<span>${label}</span></button>`; }
function __pb_1_app_renderAdmin() {
  if (state.session?.role !== 'admin') { navigate('home'); return setTimeout(showAdminLogin, 200); }
  view.innerHTML = `<section class="dashboard-shell">${adminNav()}<div class="dashboard-main" id="adminContent"></div></section>`;
  $$('[data-tab]', view).forEach(b => b.onclick = () => { state.adminTab = b.dataset.tab; renderAdmin(); });
  paintAdminTab();
}
function __pb_1_app_paintAdminTab() {
  const content = $('#adminContent');
  const tab = state.adminTab;
  const titles = { overview:['Ringkasan hari ini','Pantau aktivitas Parangbaddo’ Store.'], applications:['Permohonan penjual','Periksa dan validasi usaha warga.'], sellers:['Data penjual','Kelola akun dan profil toko.'], products:['Moderasi produk','Pastikan etalase aman dan informatif.'], buyers:['Data pembeli','Kelola akun pembeli terverifikasi.'], orders:['Pesanan / minat','Catatan pesanan yang diarahkan ke WhatsApp.'], logs:['Log aktivitas','Rekam tindakan penting di marketplace.'], settings:['Pengaturan','Kelola identitas dan konfigurasi situs.'] };
  const [title, sub] = titles[tab];
  content.innerHTML = `<div class="dash-head"><div><h1>${title}</h1><p>${sub}</p></div><button class="btn btn-outline btn-sm" id="adminLogout">Keluar</button></div><div id="tabContent">${adminTabContent(tab)}</div>`;
  $('#adminLogout').onclick = () => { setSession(null); toast('Admin telah keluar.'); navigate('home'); };
  bindAdminActions();
}
function __pb_1_app_adminTabContent(tab) {
  if (tab === 'overview') return adminOverview();
  if (tab === 'applications') return applicationTable();
  if (tab === 'sellers') return sellerTable();
  if (tab === 'products') return adminProductTable();
  if (tab === 'buyers') return buyerTable();
  if (tab === 'orders') return orderTable();
  if (tab === 'logs') return `<div class="panel"><div class="panel-head"><h3>Riwayat terbaru</h3><span class="status active">Audit aktif</span></div><div class="panel-body activity-list">${db.logs.map(l => `<div class="activity"><span class="activity-dot"></span><div><p>${l.text}</p><small>${l.time}</small></div></div>`).join('')}</div></div>`;
  return `<div class="panel"><div class="panel-head"><h3>Identitas website</h3></div><div class="panel-body"><form id="settingsForm"><div class="form-grid"><div class="field"><label>Nama marketplace</label><input value="Parangbaddo’ Store"></div><div class="field"><label>WhatsApp pengelola</label><input value="0812 2465 8200"></div><div class="field full"><label>Slogan</label><input value="Belanja dekat, tumbuh bersama."></div><div class="field full"><label>Alamat</label><input value="Desa Parangbaddo’, Polongbangkeng Timur, Takalar"></div></div><div class="form-actions"><button class="btn btn-dark">Simpan perubahan</button></div></form></div></div>`;
}
function __pb_1_app_adminOverview() {
  const pending = db.applications.filter(a => a.status === 'pending').length;
  return `<div class="stat-grid">${statCard('Permohonan','clock',pending,'Perlu ditinjau')}${statCard('Penjual aktif','store',db.sellers.filter(s=>s.status==='approved').length,'Terverifikasi')}${statCard('Produk aktif','package',db.products.filter(p=>p.active).length,'Di etalase')}${statCard('Klik pesanan','bag',db.orders.length,'Melalui WhatsApp')}</div><div class="dash-grid"><div class="panel"><div class="panel-head"><h3>Aktivitas pesanan 7 hari</h3><span class="status active">+18% minggu ini</span></div><div class="panel-body"><div class="bar-chart">${[42,58,36,75,61,92,73].map((h,i)=>`<div class="bar ${i===5?'active':''}" style="height:${h}%"><span>${['Sen','Sel','Rab','Kam','Jum','Sab','Min'][i]}</span></div>`).join('')}</div></div></div><div class="panel"><div class="panel-head"><h3>Aktivitas terbaru</h3></div><div class="panel-body activity-list">${db.logs.slice(0,5).map(l=>`<div class="activity"><span class="activity-dot"></span><div><p>${l.text}</p><small>${l.time}</small></div></div>`).join('')}</div></div></div><div style="height:16px"></div>${pending ? `<div class="panel"><div class="panel-head"><h3>Menunggu persetujuan</h3><button class="text-btn" data-open-tab="applications">Lihat semua</button></div>${applicationTable(true)}</div>` : ''}`;
}
function __pb_1_app_statCard(label, ico, number, hint) { return `<div class="stat-card"><div class="stat-top"><span>${label}</span><span class="stat-icon">${icon(ico)}</span></div><strong>${number}</strong><small>${hint}</small></div>`; }
function __pb_1_app_applicationTable(embedded=false) {
  const rows = db.applications.filter(a=>a.status==='pending');
  const table = `<div class="table-wrap"><table><thead><tr><th>Pendaftar</th><th>Usaha</th><th>Kontak</th><th>Dikirim</th><th>Status</th><th>Aksi</th></tr></thead><tbody>${rows.length ? rows.map(a=>`<tr><td><div class="table-user"><span class="table-avatar">${initials(a.name)}</span><div><strong>${a.name}</strong><small>${a.id}</small></div></div></td><td><strong>${a.business}</strong><br><span class="muted small">${a.category}</span></td><td>+${a.phone}</td><td>${a.submitted}</td><td><span class="status pending">Menunggu</span></td><td><div class="action-row"><button data-detail-app="${a.id}">Detail</button><button data-approve="${a.id}">Setujui</button><button class="reject" data-reject="${a.id}">Tolak</button></div></td></tr>`).join('') : `<tr><td colspan="6"><div class="empty-state">Tidak ada permohonan yang menunggu.</div></td></tr>`}</tbody></table></div>`;
  return embedded ? table : `<div class="panel">${table}</div>`;
}
function __pb_1_app_sellerTable() { return `<div class="panel"><div class="table-wrap"><table><thead><tr><th>Penjual</th><th>Kategori</th><th>Produk</th><th>Alamat</th><th>Status</th><th>Aksi</th></tr></thead><tbody>${db.sellers.map(s=>`<tr><td><div class="table-user"><span class="table-avatar">${initials(s.business)}</span><div><strong>${s.business}</strong><small>${s.name} · +${s.phone}</small></div></div></td><td>${s.category}</td><td>${db.products.filter(p=>p.sellerId===s.id).length}</td><td>${s.address}</td><td><span class="status ${s.status}">${statusName(s.status)}</span></td><td><div class="action-row"><button data-suspend-seller="${s.id}">${s.status==='approved'?'Tangguhkan':'Aktifkan'}</button></div></td></tr>`).join('')}</tbody></table></div></div>`; }
function __pb_1_app_adminProductTable() { return `<div class="panel"><div class="table-wrap"><table><thead><tr><th>Produk</th><th>Penjual</th><th>Harga</th><th>Stok</th><th>Status</th><th>Aksi</th></tr></thead><tbody>${db.products.map(p=>`<tr><td><div class="table-user"><img class="product-thumb" src="${p.image}" alt=""><div><strong>${p.name}</strong><small>${p.category}</small></div></div></td><td>${p.seller}</td><td>${rupiah(p.price)}</td><td>${p.stock}</td><td><span class="status ${p.active?'active':'suspended'}">${p.active?'Aktif':'Disembunyikan'}</span></td><td><div class="action-row"><button data-toggle-product="${p.id}">${p.active?'Sembunyikan':'Aktifkan'}</button></div></td></tr>`).join('')}</tbody></table></div></div>`; }
function __pb_1_app_buyerTable() { return `<div class="panel"><div class="table-wrap"><table><thead><tr><th>Pembeli</th><th>WhatsApp</th><th>Bergabung</th><th>Pesanan</th><th>Status</th><th>Aksi</th></tr></thead><tbody>${db.buyers.map(b=>`<tr><td><div class="table-user"><span class="table-avatar">${initials(b.name)}</span><strong>${b.name}</strong></div></td><td>+${b.phone}</td><td>${b.joined}</td><td>${db.orders.filter(o=>o.buyerPhone===b.phone).length}</td><td><span class="status ${b.status}">${statusName(b.status)}</span></td><td><div class="action-row"><button data-toggle-buyer="${b.id}">${b.status==='active'?'Blokir':'Aktifkan'}</button></div></td></tr>`).join('')}</tbody></table></div></div>`; }
function __pb_1_app_orderTable(sellerId=null) { const orders=sellerId?db.orders.filter(o=>o.sellerId===sellerId):db.orders; return `<div class="panel"><div class="table-wrap"><table><thead><tr><th>ID / Waktu</th><th>Produk</th><th>Pembeli</th><th>Jumlah</th><th>Total</th><th>Status</th>${sellerId?'<th>Aksi</th>':''}</tr></thead><tbody>${orders.length?orders.map(o=>`<tr><td><strong>${o.id}</strong><br><span class="muted small">${o.created}</span></td><td>${o.product}</td><td>${o.buyer}<br><span class="muted small">+${o.buyerPhone}</span></td><td>${o.qty}</td><td>${rupiah(o.total)}</td><td><span class="status ${o.status}">${statusName(o.status)}</span></td>${sellerId?`<td><div class="action-row">${o.status==='wa'?`<button data-confirm-order="${o.id}">Konfirmasi</button><button class="reject" data-cancel-order="${o.id}">Batal</button>`:'—'}</div></td>`:''}</tr>`).join(''):`<tr><td colspan="7" class="muted">Belum ada pesanan.</td></tr>`}</tbody></table></div></div>`; }
function __pb_1_app_bindAdminActions() {
  $('#settingsForm')?.addEventListener('submit', e => { e.preventDefault(); toast('Pengaturan website disimpan.'); });
  $$('[data-open-tab]').forEach(b => b.onclick=()=>{ state.adminTab=b.dataset.openTab; renderAdmin(); });
  $$('[data-detail-app]').forEach(b=>b.onclick=()=>showApplication(b.dataset.detailApp));
  $$('[data-approve]').forEach(b=>b.onclick=()=>approveApplication(b.dataset.approve));
  $$('[data-reject]').forEach(b=>b.onclick=()=>rejectApplication(b.dataset.reject));
  $$('[data-suspend-seller]').forEach(b=>b.onclick=()=>{ const s=db.sellers.find(x=>x.id===b.dataset.suspendSeller); s.status=s.status==='approved'?'suspended':'approved'; db.logs.unshift({text:`Status ${s.business} diubah menjadi ${statusName(s.status)}`,time:'Baru saja'}); save('sellers');save('logs');toast('Status penjual diperbarui.');renderAdmin(); });
  $$('[data-toggle-product]').forEach(b=>b.onclick=()=>{ const p=db.products.find(x=>x.id===b.dataset.toggleProduct);p.active=!p.active;db.logs.unshift({text:`Produk ${p.name} ${p.active?'diaktifkan':'disembunyikan'}`,time:'Baru saja'});save('products');save('logs');toast('Status produk diperbarui.');renderAdmin(); });
  $$('[data-toggle-buyer]').forEach(b=>b.onclick=()=>{const u=db.buyers.find(x=>x.id===b.dataset.toggleBuyer);u.status=u.status==='active'?'suspended':'active';save('buyers');toast('Status pembeli diperbarui.');renderAdmin();});
}
function __pb_1_app_showApplication(id) { const a=db.applications.find(x=>x.id===id); openModal(`<div class="modal-head"><div><p class="eyebrow">${a.id}</p><h2>${a.business}</h2><p>Dikirim ${a.submitted}</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><div class="form-grid"><div class="field"><label>Pendaftar</label><p>${a.name}</p></div><div class="field"><label>WhatsApp</label><p>+${a.phone}</p></div><div class="field"><label>Kategori</label><p>${a.category}</p></div><div class="field"><label>Alamat</label><p>${a.address}</p></div><div class="field full"><label>Deskripsi</label><p>${a.description}</p></div></div>${a.maps?`<a class="btn btn-outline btn-block" href="${a.maps}" target="_blank">${icon('map')} Periksa lokasi di Maps</a>`:''}<div class="form-actions"><button class="btn btn-danger" data-modal-reject="${a.id}">Tolak</button><button class="btn btn-dark" data-modal-approve="${a.id}">Setujui penjual</button></div></div>`);
  $('[data-modal-approve]').onclick=()=>{closeModal();setTimeout(()=>approveApplication(id),220)}; $('[data-modal-reject]').onclick=()=>{closeModal();setTimeout(()=>rejectApplication(id),220)};
}
function __pb_1_app_approveApplication(id) { const a=db.applications.find(x=>x.id===id); if(!a)return; a.status='approved'; const seller={id:uid('s'),name:a.name,business:a.business,phone:a.phone,category:a.category,address:a.address,status:'approved',joined:today()}; db.sellers.push(seller);db.logs.unshift({text:`Admin menyetujui ${a.business}`,time:'Baru saja'});save('applications');save('sellers');save('logs');toast(`${a.business} disetujui. Akun penjual telah dibuat.`);renderAdmin(); }
function __pb_1_app_rejectApplication(id) { const a=db.applications.find(x=>x.id===id); if(!a)return; const reason=prompt('Alasan penolakan:', 'Data lokasi perlu diperbaiki.'); if(reason===null)return; a.status='rejected';a.reason=reason;db.logs.unshift({text:`Admin menolak ${a.business}: ${reason}`,time:'Baru saja'});save('applications');save('logs');toast('Permohonan ditolak dan alasan disimpan.');renderAdmin(); }

function __pb_1_app_sellerNav() { return `<aside class="dashboard-side"><div class="side-profile"><span class="avatar">${initials(state.session.business)}</span><div><strong>${state.session.business}</strong><span>Akun penjual aktif</span></div></div><nav class="side-nav">${sideButton('overview','grid','Ringkasan',state.sellerTab)}${sideButton('products','package','Produk Saya',state.sellerTab)}${sideButton('orders','bag','Pesanan',state.sellerTab)}${sideButton('profile','store','Profil Toko',state.sellerTab)}</nav></aside>`; }
function __pb_1_app_renderSeller() {
  if(state.session?.role!=='seller'){navigate('home');return setTimeout(showSellerEntry,200)}
  view.innerHTML=`<section class="dashboard-shell">${sellerNav()}<div class="dashboard-main" id="sellerContent"></div></section>`;
  $$('[data-tab]',view).forEach(b=>b.onclick=()=>{state.sellerTab=b.dataset.tab;renderSeller()}); paintSellerTab();
}
function __pb_1_app_paintSellerTab() {
  const seller=db.sellers.find(s=>s.id===state.session.id); const products=db.products.filter(p=>p.sellerId===seller.id); const orders=db.orders.filter(o=>o.sellerId===seller.id); const tabs={overview:['Ringkasan toko','Lihat perkembangan usaha hari ini.'],products:['Produk saya','Tambah produk dan perbarui stok.'],orders:['Permintaan pesanan','Konfirmasi pesanan yang masuk dari WhatsApp.'],profile:['Profil toko','Lengkapi informasi usaha dan lokasi.']}; const [title,sub]=tabs[state.sellerTab];
  $('#sellerContent').innerHTML=`<div class="dash-head"><div><h1>${title}</h1><p>${sub}</p></div><div style="display:flex;gap:8px">${state.sellerTab==='products'?`<button class="btn btn-dark btn-sm" id="addProduct">${icon('plus')} Tambah produk</button>`:''}<button class="btn btn-outline btn-sm" id="sellerLogout">Keluar</button></div></div><div id="sellerTab">${sellerTabContent(seller,products,orders)}</div>`;
  $('#sellerLogout').onclick=()=>{setSession(null);toast('Anda telah keluar dari portal penjual.');navigate('home')}; $('#addProduct')?.addEventListener('click',()=>showAddProduct(seller));
  $$('[data-confirm-order]').forEach(b=>b.onclick=()=>updateOrder(b.dataset.confirmOrder,'completed')); $$('[data-cancel-order]').forEach(b=>b.onclick=()=>updateOrder(b.dataset.cancelOrder,'cancelled'));
  $$('[data-edit-stock]').forEach(b=>b.onclick=()=>editStock(b.dataset.editStock)); $('#sellerProfile')?.addEventListener('submit',e=>{e.preventDefault();const d=Object.fromEntries(new FormData(e.target));Object.assign(seller,d);save('sellers');setSession({...state.session,business:seller.business});toast('Profil toko diperbarui.');});
}
function __pb_1_app_sellerTabContent(seller,products,orders) {
  if(state.sellerTab==='overview')return `<div class="stat-grid">${statCard('Produk aktif','package',products.filter(p=>p.active).length,'Di etalase')}${statCard('Perlu konfirmasi','clock',orders.filter(o=>o.status==='wa').length,'Dari WhatsApp')}${statCard('Pesanan selesai','check',orders.filter(o=>o.status==='completed').length,'Tercatat')}${statCard('Total stok','chart',products.reduce((n,p)=>n+p.stock,0),'Semua produk')}</div><div class="dash-grid"><div class="panel"><div class="panel-head"><h3>Stok produk</h3></div><div class="panel-body">${products.length?products.map(p=>`<div class="progress-row"><div><span>${p.name}</span><b>${p.stock} ${p.unit}</b></div><div class="progress"><span style="width:${Math.min(100,p.stock*3)}%"></span></div></div>`).join(''):'Belum ada produk.'}</div></div><div class="panel"><div class="panel-head"><h3>Langkah berikutnya</h3></div><div class="panel-body"><p class="muted small">Pastikan stok dan lokasi produk selalu terbaru agar pembeli mendapat informasi yang benar.</p><button class="btn btn-ghost btn-block" onclick="state.sellerTab='products';renderSeller()">Kelola produk</button></div></div></div>`;
  if(state.sellerTab==='products')return `<div class="panel"><div class="table-wrap"><table><thead><tr><th>Produk</th><th>Harga</th><th>Stok</th><th>Status</th><th>Aksi</th></tr></thead><tbody>${products.length?products.map(p=>`<tr><td><div class="table-user"><img class="product-thumb" src="${p.image}" alt=""><div><strong>${p.name}</strong><small>${p.category}</small></div></div></td><td>${rupiah(p.price)} / ${p.unit}</td><td>${p.stock}</td><td><span class="status ${p.active?'active':'suspended'}">${p.active?'Aktif':'Disembunyikan'}</span></td><td><div class="action-row"><button data-edit-stock="${p.id}">Ubah stok</button></div></td></tr>`).join(''):`<tr><td colspan="5" class="muted">Belum ada produk. Klik “Tambah produk”.</td></tr>`}</tbody></table></div></div>`;
  if(state.sellerTab==='orders')return orderTable(seller.id);
  return `<div class="panel"><div class="panel-head"><h3>Informasi usaha</h3><span class="status approved">Terverifikasi desa</span></div><div class="panel-body"><form id="sellerProfile"><div class="form-grid"><div class="field"><label>Nama pemilik</label><input name="name" value="${seller.name}"></div><div class="field"><label>Nama bisnis</label><input name="business" value="${seller.business}"></div><div class="field"><label>Nomor WhatsApp</label><input value="+${seller.phone}" disabled></div><div class="field"><label>Kategori</label><input name="category" value="${seller.category}"></div><div class="field full"><label>Alamat</label><input name="address" value="${seller.address}"></div></div><div class="form-actions"><button class="btn btn-dark">Simpan profil</button></div></form></div></div>`;
}
function __pb_1_app_showAddProduct(seller) { openModal(`<div class="modal-head"><div><p class="eyebrow">Produk baru</p><h2>Tambah ke etalase.</h2><p>Produk langsung tayang dan tetap dapat dimoderasi admin.</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><form id="productForm"><div class="form-grid"><div class="field full"><label>Foto produk</label><input name="image" type="file" accept="image/*"><small>JPG/PNG. Jika kosong, sistem memakai ilustrasi.</small></div><div class="field"><label>Nama produk</label><input required name="name"></div><div class="field"><label>Kategori</label><select name="category" required><option>Kuliner</option><option>Hasil Tani</option><option>Peternakan</option><option>Kerajinan</option><option>Minuman</option></select></div><div class="field"><label>Harga</label><input required name="price" type="number" min="1000"></div><div class="field"><label>Satuan</label><input required name="unit" placeholder="buah / bungkus / kg"></div><div class="field"><label>Stok awal</label><input required name="stock" type="number" min="0"></div><div class="field"><label>Lokasi produk</label><input required name="location" value="${seller.address}"></div><div class="field full"><label>Tautan Google Maps</label><input required name="map" type="url" placeholder="https://maps.google.com/..."></div><div class="field full"><label>Deskripsi</label><textarea required name="description"></textarea></div></div><div class="form-actions"><button class="btn btn-outline" type="button" data-close>Batal</button><button class="btn btn-dark">Publikasikan produk</button></div></form></div>`,true);
  $('#productForm').onsubmit=async e=>{e.preventDefault();const fd=new FormData(e.target);const file=fd.get('image');let image=svgImages.sayur;if(file&&file.size)image=await fileToData(file);const p={id:uid('p'),sellerId:seller.id,seller:seller.business,phone:seller.phone,name:fd.get('name'),category:fd.get('category'),price:Number(fd.get('price')),unit:fd.get('unit'),stock:Number(fd.get('stock')),location:fd.get('location'),map:fd.get('map'),image,description:fd.get('description'),active:true};db.products.unshift(p);db.logs.unshift({text:`${seller.business} menambahkan ${p.name}`,time:'Baru saja'});save('products');save('logs');closeModal();toast('Produk berhasil dipublikasikan.');renderSeller();};
}
function __pb_1_app_fileToData(file){return new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file)})}
function __pb_1_app_editStock(id){const p=db.products.find(x=>x.id===id);const n=prompt(`Stok baru untuk ${p.name}:`,p.stock);if(n===null)return;const value=Number(n);if(!Number.isFinite(value)||value<0)return toast('Stok tidak valid.');p.stock=value;save('products');toast('Stok produk diperbarui.');renderSeller();}
function __pb_1_app_updateOrder(id,status){const o=db.orders.find(x=>x.id===id);if(!o||o.status!=='wa')return;if(status==='completed'){const p=db.products.find(x=>x.id===o.productId);if(p){if(p.stock<o.qty)return toast('Stok tidak cukup untuk mengonfirmasi pesanan.');p.stock-=o.qty;save('products');}}o.status=status;db.logs.unshift({text:`${o.id} ${status==='completed'?'dikonfirmasi dan stok dikurangi':'dibatalkan'}`,time:'Baru saja'});save('orders');save('logs');toast(`Pesanan ${status==='completed'?'dikonfirmasi':'dibatalkan'}.`);renderSeller();}

// Global bindings
$$('[data-view]').forEach(b => b.onclick = () => navigate(b.dataset.view));
$('#roleButton').onclick = () => { if (state.session) { setSession(null); toast('Anda telah keluar.'); navigate('home'); } else showRoleChooser(); };
$('#mobileMenu').onclick = () => $('#mainNav').classList.toggle('open');

// Intro lifecycle
const INTRO_DURATION_MS = 1800;
let introTimer;
function __pb_1_app_finishIntro() {
  clearTimeout(introTimer); $('#intro').classList.add('done'); $('#app').classList.add('ready'); $('#app').setAttribute('aria-hidden','false');
  setTimeout(() => { if (!sessionStorage.getItem('pb_seen_intro')) showRoleChooser(); sessionStorage.setItem('pb_seen_intro','1'); }, 650);
}
introTimer = setTimeout(finishIntro, INTRO_DURATION_MS);
updateHeader();
renderHome();
/* ===== END app.js ===== */

/* ===== BEGIN enhancements.js: ordered execution phase 2 ===== */
window["loadExtra"] = __pb_2_enhancements_loadExtra;
window["saveExtra"] = __pb_2_enhancements_saveExtra;
window["saveCart"] = __pb_2_enhancements_saveCart;
window["closeModal"] = __pb_2_enhancements_closeModal;
window["escapeHtml"] = __pb_2_enhancements_escapeHtml;
window["phoneDisplay"] = __pb_2_enhancements_phoneDisplay;
window["isValidPhone"] = __pb_2_enhancements_isValidPhone;
window["safeMapUrl"] = __pb_2_enhancements_safeMapUrl;
window["productIsVisible"] = __pb_2_enhancements_productIsVisible;
window["productStatus"] = __pb_2_enhancements_productStatus;
window["orderItems"] = __pb_2_enhancements_orderItems;
window["orderTitle"] = __pb_2_enhancements_orderTitle;
window["orderQuantity"] = __pb_2_enhancements_orderQuantity;
window["addLog"] = __pb_2_enhancements_addLog;
window["applicationLabel"] = __pb_2_enhancements_applicationLabel;
window["statusLabel"] = __pb_2_enhancements_statusLabel;
window["updateHeader"] = __pb_2_enhancements_updateHeader;
window["productCard"] = __pb_2_enhancements_productCard;
window["paintProducts"] = __pb_2_enhancements_paintProducts;
window["renderProducts"] = __pb_2_enhancements_renderProducts;
window["showProduct"] = __pb_2_enhancements_showProduct;
window["addToCart"] = __pb_2_enhancements_addToCart;
window["cleanCart"] = __pb_2_enhancements_cleanCart;
window["showCart"] = __pb_2_enhancements_showCart;
window["cartItem"] = __pb_2_enhancements_cartItem;
window["changeCartQty"] = __pb_2_enhancements_changeCartQty;
window["removeCartItem"] = __pb_2_enhancements_removeCartItem;
window["checkoutCartSeller"] = __pb_2_enhancements_checkoutCartSeller;
window["ensureBuyer"] = __pb_2_enhancements_ensureBuyer;
window["createOrderAndOpenWhatsApp"] = __pb_2_enhancements_createOrderAndOpenWhatsApp;
window["showOrderSuccess"] = __pb_2_enhancements_showOrderSuccess;
window["showBuyerAuth"] = __pb_2_enhancements_showBuyerAuth;
window["showOtp"] = __pb_2_enhancements_showOtp;
window["showBuyerAccount"] = __pb_2_enhancements_showBuyerAccount;
window["buyerOrderCard"] = __pb_2_enhancements_buyerOrderCard;
window["cancelBuyerOrder"] = __pb_2_enhancements_cancelBuyerOrder;
window["showOrderDetail"] = __pb_2_enhancements_showOrderDetail;
window["showReportForm"] = __pb_2_enhancements_showReportForm;
window["showSellerEntry"] = __pb_2_enhancements_showSellerEntry;
window["showApplicationTracking"] = __pb_2_enhancements_showApplicationTracking;
window["showTrackingResult"] = __pb_2_enhancements_showTrackingResult;
window["showSellerRegistration"] = __pb_2_enhancements_showSellerRegistration;
window["showRegistrationOtp"] = __pb_2_enhancements_showRegistrationOtp;
window["showApplicationSubmitted"] = __pb_2_enhancements_showApplicationSubmitted;
window["bindLocationButton"] = __pb_2_enhancements_bindLocationButton;
window["adminNav"] = __pb_2_enhancements_adminNav;
window["paintAdminTab"] = __pb_2_enhancements_paintAdminTab;
window["adminTabContent"] = __pb_2_enhancements_adminTabContent;
window["adminOverview"] = __pb_2_enhancements_adminOverview;
window["applicationTable"] = __pb_2_enhancements_applicationTable;
window["applicationRows"] = __pb_2_enhancements_applicationRows;
window["sellerTable"] = __pb_2_enhancements_sellerTable;
window["adminProductTable"] = __pb_2_enhancements_adminProductTable;
window["buyerTable"] = __pb_2_enhancements_buyerTable;
window["orderTable"] = __pb_2_enhancements_orderTable;
window["reportTable"] = __pb_2_enhancements_reportTable;
window["settingsPanel"] = __pb_2_enhancements_settingsPanel;
window["bindAdminActions"] = __pb_2_enhancements_bindAdminActions;
window["showApplication"] = __pb_2_enhancements_showApplication;
window["approveApplication"] = __pb_2_enhancements_approveApplication;
window["reviewApplication"] = __pb_2_enhancements_reviewApplication;
window["showSellerDetail"] = __pb_2_enhancements_showSellerDetail;
window["toggleSeller"] = __pb_2_enhancements_toggleSeller;
window["showAdminProduct"] = __pb_2_enhancements_showAdminProduct;
window["toggleProductModeration"] = __pb_2_enhancements_toggleProductModeration;
window["showBuyerDetail"] = __pb_2_enhancements_showBuyerDetail;
window["toggleBuyer"] = __pb_2_enhancements_toggleBuyer;
window["showReportDetail"] = __pb_2_enhancements_showReportDetail;
window["applySettings"] = __pb_2_enhancements_applySettings;
window["saveSettings"] = __pb_2_enhancements_saveSettings;
window["exportData"] = __pb_2_enhancements_exportData;
window["importData"] = __pb_2_enhancements_importData;
window["confirmReset"] = __pb_2_enhancements_confirmReset;
window["showConfirm"] = __pb_2_enhancements_showConfirm;
window["sellerNav"] = __pb_2_enhancements_sellerNav;
window["paintSellerTab"] = __pb_2_enhancements_paintSellerTab;
window["sellerTabContent"] = __pb_2_enhancements_sellerTabContent;
window["renderSeller"] = __pb_2_enhancements_renderSeller;
window["showProductEditor"] = __pb_2_enhancements_showProductEditor;
window["compressImage"] = __pb_2_enhancements_compressImage;
window["toggleOwnProduct"] = __pb_2_enhancements_toggleOwnProduct;
window["deleteProduct"] = __pb_2_enhancements_deleteProduct;
window["saveSellerProfile"] = __pb_2_enhancements_saveSellerProfile;
window["updateOrder"] = __pb_2_enhancements_updateOrder;
window["contactBuyer"] = __pb_2_enhancements_contactBuyer;

/* Parangbaddo' Store — complete interaction layer (v2)
   Keeps the polished visual layer while making every visible workflow actionable.
*/

const extraSeed = {
  reports: [
    { id: 'LAP-2026-014', reporter: 'Andi Saputra', reporterPhone: '6281244221100', target: 'Pesanan PB-260816-001', type: 'Informasi produk', message: 'Mohon penjual memperjelas ukuran kemasan gula aren.', status: 'review', created: '16 Agu 2026, 11.05', resolution: '' },
    { id: 'LAP-2026-011', reporter: 'Fitriani', reporterPhone: '6285288991010', target: 'Produk Sambal Parangbaddo’', type: 'Harga', message: 'Harga sudah sesuai setelah dikonfirmasi penjual.', status: 'completed', created: '15 Agu 2026, 16.31', resolution: 'Sudah diklarifikasi kepada pembeli dan penjual.' }
  ],
  settings: {
    storeName: 'Parangbaddo’ Store',
    slogan: 'Belanja dekat, tumbuh bersama.',
    adminPhone: '6281224658200',
    address: 'Desa Parangbaddo’, Polongbangkeng Timur, Takalar',
    autoPublish: true,
    lowStock: 10,
    categories: ['Kuliner', 'Hasil Tani', 'Peternakan', 'Kerajinan', 'Minuman', 'Jasa']
  }
};

function __pb_2_enhancements_loadExtra(key, fallback) {
  try {
    const stored = localStorage.getItem(`pb_${key}`);
    return stored ? JSON.parse(stored) : JSON.parse(JSON.stringify(fallback));
  } catch { return JSON.parse(JSON.stringify(fallback)); }
}

db.reports = loadExtra('reports', extraSeed.reports);
db.settings = loadExtra('settings', extraSeed.settings);
db.products.forEach(p => { if (!('moderation' in p)) p.moderation = 'ok'; if (!('sellerActive' in p)) p.sellerActive = true; });
db.applications.forEach(a => { if (!a.history) a.history = [{ status: a.status, at: a.submitted, note: 'Permohonan diterima sistem.' }]; });
db.orders.forEach(o => { if (!o.items) o.items = [{ productId: o.productId, name: o.product, qty: o.qty, unit: '', price: Math.round(o.total / Math.max(1, o.qty)), subtotal: o.total }]; });

function __pb_2_enhancements_saveExtra(key) { localStorage.setItem(`pb_${key}`, JSON.stringify(db[key])); }
function __pb_2_enhancements_saveCart() { localStorage.setItem('pb_cart', JSON.stringify(state.cart)); updateHeader(); }

// Prevent an old modal's delayed cleanup from erasing a newly opened modal.
function __pb_2_enhancements_closeModal() {
  modalRoot.classList.remove('open');
  modalRoot.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  const closingMarkup = modalRoot.innerHTML;
  setTimeout(() => {
    if (!modalRoot.classList.contains('open') && modalRoot.innerHTML === closingMarkup) modalRoot.innerHTML = '';
  }, 220);
}
try { state.cart = JSON.parse(localStorage.getItem('pb_cart')) || []; } catch { state.cart = []; }
state.pendingAction = null;
state.applicationFilter = 'pending';
state.reportFilter = 'all';

function __pb_2_enhancements_escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, ch => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' }[ch]));
}
function __pb_2_enhancements_phoneDisplay(phone) { return `+${String(phone || '').replace(/\D/g, '')}`; }
function __pb_2_enhancements_isValidPhone(phone) { const p = normalizePhone(phone); return /^62\d{8,13}$/.test(p); }
function __pb_2_enhancements_safeMapUrl(url, fallback = '') {
  const raw = String(url || '').trim();
  try {
    const parsed = new URL(raw);
    const host = parsed.hostname.toLowerCase();
    const googleMaps = (/^(www\.)?google\.[a-z.]+$/.test(host) && parsed.pathname.startsWith('/maps')) || /^maps\.google\.[a-z.]+$/.test(host);
    const shortMaps = host === 'maps.app.goo.gl' || host === 'goo.gl';
    if (parsed.protocol === 'https:' && (googleMaps || shortMaps)) return raw;
  } catch {}
  if (fallback) return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fallback)}`;
  return '';
}
function __pb_2_enhancements_productIsVisible(p) {
  const seller = db.sellers.find(s => s.id === p.sellerId);
  return p.active !== false && p.sellerActive !== false && p.moderation !== 'hidden' && p.stock > 0 && (!seller || seller.status === 'approved');
}
function __pb_2_enhancements_productStatus(p) {
  if (p.moderation === 'hidden') return ['Ditahan admin', 'rejected'];
  if (p.stock <= 0) return ['Stok habis', 'pending'];
  if (p.sellerActive === false || p.active === false) return ['Nonaktif', 'suspended'];
  return ['Aktif', 'active'];
}
function __pb_2_enhancements_orderItems(o) { return Array.isArray(o.items) && o.items.length ? o.items : [{ productId:o.productId, name:o.product, qty:o.qty, price:o.total/Math.max(1,o.qty), subtotal:o.total }]; }
function __pb_2_enhancements_orderTitle(o) { const items = orderItems(o); return items.length > 1 ? `${items[0].name} +${items.length - 1} produk` : items[0].name; }
function __pb_2_enhancements_orderQuantity(o) { return orderItems(o).reduce((n, item) => n + Number(item.qty || 0), 0); }
function __pb_2_enhancements_addLog(text) { db.logs.unshift({ text, time: 'Baru saja' }); save('logs'); }
function __pb_2_enhancements_applicationLabel(status) { return ({pending:'Menunggu',approved:'Disetujui',rejected:'Ditolak',revision:'Perlu perbaikan'}[status] || status); }
function __pb_2_enhancements_statusLabel(status) { return ({ pending:'Menunggu', approved:'Aktif', rejected:'Ditolak', revision:'Perlu perbaikan', active:'Aktif', suspended:'Ditangguhkan', wa:'Terkirim ke WA', confirmed:'Dikonfirmasi', completed:'Selesai', cancelled:'Dibatalkan', review:'Ditinjau', new:'Baru' }[status] || status); }

function __pb_2_enhancements_updateHeader() {
  const target = $('#sessionPill');
  let cartButton = $('#cartButton');
  if (!cartButton) {
    cartButton = document.createElement('button');
    cartButton.id = 'cartButton';
    cartButton.className = 'icon-btn cart-trigger';
    cartButton.setAttribute('aria-label', 'Buka keranjang');
    $('#roleButton').before(cartButton);
  }
  const count = (state.cart || []).reduce((n, item) => n + item.qty, 0);
  cartButton.innerHTML = `${icon('bag')}<span class="cart-count ${count ? '' : 'hidden'}">${count}</span>`;
  cartButton.onclick = showCart;

  if (state.session) {
    const roleName = state.session.role === 'admin' ? 'Admin Desa' : state.session.role === 'seller' ? state.session.business : state.session.name;
    target.innerHTML = `<button class="session-pill" id="sessionAction" title="Buka akun"><span class="session-avatar">${initials(roleName)}</span><span>${escapeHtml(roleName)}</span></button>`;
    $('#roleButton').textContent = 'Keluar';
    $('#sessionAction').onclick = () => state.session.role === 'admin' ? navigate('admin') : state.session.role === 'seller' ? navigate('seller') : showBuyerAccount();
  } else {
    target.innerHTML = '';
    $('#roleButton').textContent = 'Masuk';
  }
}

function __pb_2_enhancements_productCard(p) {
  const [label, status] = productStatus(p);
  return `<article class="product-card" data-product="${p.id}" tabindex="0" role="button" aria-label="Lihat ${escapeHtml(p.name)}">
    <div class="product-image"><img src="${p.image}" alt="${escapeHtml(p.name)}"><span class="product-badge">${escapeHtml(p.category)}</span>${status !== 'active' ? `<span class="product-unavailable">${label}</span>` : ''}</div>
    <div class="product-body"><div class="seller-line"><span>${icon('store')} ${escapeHtml(p.seller)}</span><span>${icon('map')} Parangbaddo’</span></div><h3>${escapeHtml(p.name)}</h3><div class="product-bottom"><span class="price">${rupiah(p.price)} <small>/ ${escapeHtml(p.unit)}</small></span><span class="stock">Stok ${p.stock}</span></div></div>
  </article>`;
}

function __pb_2_enhancements_paintProducts() {
  let items = db.products.filter(p => productIsVisible(p) && (state.category === 'Semua' || p.category === state.category) && `${p.name} ${p.seller} ${p.category}`.toLowerCase().includes(state.search.toLowerCase()));
  const sort = $('#sortProduct')?.value;
  if (sort === 'low') items.sort((a,b) => a.price-b.price);
  if (sort === 'high') items.sort((a,b) => b.price-a.price);
  if (sort === 'stock') items.sort((a,b) => b.stock-a.stock);
  if ($('#productResultCount')) $('#productResultCount').textContent = `${items.length} produk ditemukan`;
  $('#productGrid').innerHTML = items.length ? items.map(productCard).join('') : `<div class="empty-state"><span class="round-icon">${icon('search')}</span><strong>Produk tidak ditemukan</strong><p>Coba kata kunci atau kategori yang lain.</p><button class="btn btn-ghost btn-sm" id="clearSearch">Reset pencarian</button></div>`;
  $$('[data-product]', $('#productGrid')).forEach(card => {
    card.onclick = () => showProduct(card.dataset.product);
    card.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') showProduct(card.dataset.product); };
  });
  $('#clearSearch')?.addEventListener('click', () => { state.search = ''; state.category = 'Semua'; renderProducts(); });
}

function __pb_2_enhancements_renderProducts() {
  const categories = ['Semua', ...new Set(db.products.filter(productIsVisible).map(p => p.category))];
  view.innerHTML = `
    <section class="products-hero"><div class="container"><div class="page-title"><p class="eyebrow">Etalase produk lokal</p><h1>Yang baik, tumbuh di sekitar kita.</h1><p>Cari produk warga, cek stok dan lokasinya, lalu buat nota untuk dikirim langsung melalui WhatsApp.</p></div></div></section>
    <section class="section-sm"><div class="container">
      <div class="search-panel"><div class="search-box">${icon('search')}<input id="productSearch" value="${escapeHtml(state.search)}" placeholder="Cari gula aren, sayur, kerajinan…" aria-label="Cari produk"></div><select id="sortProduct" aria-label="Urutkan produk"><option value="new">Terbaru</option><option value="low">Harga terendah</option><option value="high">Harga tertinggi</option><option value="stock">Stok terbanyak</option></select><button class="btn btn-dark" id="searchBtn">Cari produk</button></div>
      <div class="catalog-toolbar"><div class="category-row">${categories.map(c => `<button class="chip ${state.category === c ? 'active' : ''}" data-category="${escapeHtml(c)}">${escapeHtml(c)}</button>`).join('')}</div><span id="productResultCount" class="muted small"></span></div>
      <div id="productGrid" class="product-grid"></div>
    </div></section>`;
  $('#productSearch').addEventListener('input', e => { state.search = e.target.value; paintProducts(); });
  $('#sortProduct').onchange = paintProducts;
  $('#searchBtn').onclick = paintProducts;
  $$('[data-category]').forEach(b => b.onclick = () => { state.category = b.dataset.category; $$('[data-category]').forEach(x => x.classList.toggle('active', x === b)); paintProducts(); });
  paintProducts();
}

function __pb_2_enhancements_showProduct(id) {
  const p = db.products.find(x => x.id === id);
  if (!p || !productIsVisible(p)) return toast('Produk sedang tidak tersedia atau stoknya habis.');
  state.selectedProduct = id; state.qty = 1;
  const map = safeMapUrl(p.map, p.location);
  modalRoot.innerHTML = `<div class="modal product-modal" role="dialog" aria-modal="true"><button class="icon-btn modal-floating-close" data-close>${icon('x')}</button><div class="product-detail"><div class="product-detail-image"><img src="${p.image}" alt="${escapeHtml(p.name)}"></div><div class="product-detail-copy"><p class="eyebrow">${escapeHtml(p.category)}</p><h2>${escapeHtml(p.name)}</h2><div class="large-price">${rupiah(p.price)} <span class="muted small">/ ${escapeHtml(p.unit)}</span></div><p class="muted small">${escapeHtml(p.description)}</p><div class="location-box"><div>${icon('map')}<p><strong>${escapeHtml(p.seller)}</strong><br><small>${escapeHtml(p.location)}</small></p></div><a class="text-btn" href="${map}" target="_blank" rel="noopener">Buka Maps</a></div><div class="qty-row"><div><strong>Jumlah pesanan</strong><div class="muted small">Tersedia ${p.stock} ${escapeHtml(p.unit)}</div></div><div class="qty-control"><button id="qtyMinus" aria-label="Kurangi jumlah">−</button><strong id="qtyValue">1</strong><button id="qtyPlus" aria-label="Tambah jumlah">+</button></div></div><div class="total-box"><span>Total perkiraan</span><strong id="orderTotal">${rupiah(p.price)}</strong></div><div class="product-actions"><button id="addCart" class="btn btn-outline">${icon('bag')} Tambah ke keranjang</button><button id="orderWa" class="btn wa-btn">${icon('whatsapp')} Pesan sekarang</button></div><p class="muted" style="font-size:10px;text-align:center">Stok baru berkurang setelah penjual mengonfirmasi pesanan.</p></div></div></div>`;
  modalRoot.classList.add('open'); modalRoot.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden';
  const repaint = () => { $('#qtyValue').textContent = state.qty; $('#orderTotal').textContent = rupiah(p.price*state.qty); };
  $('#qtyMinus').onclick = () => { state.qty = Math.max(1, state.qty-1); repaint(); };
  $('#qtyPlus').onclick = () => { state.qty = Math.min(p.stock, state.qty+1); repaint(); if(state.qty === p.stock) toast('Jumlah sudah mencapai stok tersedia.'); };
  $('#addCart').onclick = () => { addToCart(p.id, state.qty); closeModal(); toast(`${p.name} ditambahkan ke keranjang.`); };
  $('#orderWa').onclick = () => ensureBuyer(() => createOrderAndOpenWhatsApp(p.sellerId, [{ productId:p.id, qty:state.qty }]));
}

function __pb_2_enhancements_addToCart(productId, qty = 1) {
  const p = db.products.find(x => x.id === productId);
  if (!p || !productIsVisible(p)) return toast('Produk tidak tersedia.');
  const found = state.cart.find(item => item.productId === productId);
  if (found) found.qty = Math.min(p.stock, found.qty + qty); else state.cart.push({ productId, qty: Math.min(qty, p.stock) });
  saveCart();
}
function __pb_2_enhancements_cleanCart() {
  state.cart = state.cart.filter(item => db.products.some(p => p.id === item.productId));
  state.cart.forEach(item => { const p = db.products.find(x => x.id === item.productId); item.qty = Math.max(1, Math.min(item.qty, Math.max(1, p.stock))); });
  saveCart();
}
function __pb_2_enhancements_showCart() {
  cleanCart();
  const items = state.cart.map(item => ({...item, product: db.products.find(p => p.id === item.productId)}));
  const grouped = Object.values(items.reduce((acc, item) => { (acc[item.product.sellerId] ||= { sellerId:item.product.sellerId, seller:item.product.seller, items:[] }).items.push(item); return acc; }, {}));
  openModal(`<div class="modal-head"><div><p class="eyebrow">Keranjang belanja</p><h2>Nota per penjual.</h2><p>Produk dari penjual berbeda akan dikirim sebagai chat terpisah.</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body">${grouped.length ? grouped.map(g => `<section class="cart-group"><div class="cart-seller">${icon('store')}<strong>${escapeHtml(g.seller)}</strong><span>${g.items.length} produk</span></div>${g.items.map(item => cartItem(item)).join('')}<div class="cart-group-total"><span>Total toko</span><strong>${rupiah(g.items.reduce((n,i)=>n+i.product.price*i.qty,0))}</strong></div><button class="btn wa-btn btn-block" data-checkout-seller="${g.sellerId}">${icon('whatsapp')} Buat nota & pesan toko ini</button></section>`).join('') : `<div class="empty-state"><span class="round-icon">${icon('bag')}</span><strong>Keranjang masih kosong</strong><p>Pilih produk lokal yang ingin dipesan.</p><button class="btn btn-dark btn-sm" id="cartBrowse">Lihat produk</button></div>`}</div>`, true);
  $$('[data-cart-minus]').forEach(b => b.onclick = () => changeCartQty(b.dataset.cartMinus, -1));
  $$('[data-cart-plus]').forEach(b => b.onclick = () => changeCartQty(b.dataset.cartPlus, 1));
  $$('[data-cart-remove]').forEach(b => b.onclick = () => removeCartItem(b.dataset.cartRemove));
  $$('[data-checkout-seller]').forEach(b => b.onclick = () => { const sid=b.dataset.checkoutSeller; ensureBuyer(() => checkoutCartSeller(sid)); });
  $('#cartBrowse')?.addEventListener('click', () => { closeModal(); setTimeout(()=>navigate('products'),220); });
}
function __pb_2_enhancements_cartItem(item) {
  const p=item.product;
  return `<div class="cart-item"><img src="${p.image}" alt=""><div class="cart-item-copy"><strong>${escapeHtml(p.name)}</strong><span>${rupiah(p.price)} / ${escapeHtml(p.unit)}</span><button data-cart-remove="${p.id}">Hapus</button></div><div class="qty-control compact"><button data-cart-minus="${p.id}">−</button><strong>${item.qty}</strong><button data-cart-plus="${p.id}">+</button></div><b>${rupiah(p.price*item.qty)}</b></div>`;
}
function __pb_2_enhancements_changeCartQty(id, delta) { const item=state.cart.find(x=>x.productId===id); const p=db.products.find(x=>x.id===id); if(!item||!p)return; item.qty=Math.max(1,Math.min(p.stock,item.qty+delta)); saveCart(); showCart(); }
function __pb_2_enhancements_removeCartItem(id) { state.cart=state.cart.filter(x=>x.productId!==id); saveCart(); showCart(); }
function __pb_2_enhancements_checkoutCartSeller(sellerId) { const items=state.cart.filter(i=>db.products.find(p=>p.id===i.productId)?.sellerId===sellerId); createOrderAndOpenWhatsApp(sellerId,items); }

function __pb_2_enhancements_ensureBuyer(action) {
  const buyer = state.session?.role === 'buyer' ? db.buyers.find(b => b.id === state.session.id) : null;
  if (buyer?.status === 'active') { action(); return true; }
  if (buyer?.status === 'suspended') { toast('Akun pembeli sedang diblokir. Hubungi admin desa.'); return false; }
  state.pendingAction = action;
  closeModal();
  setTimeout(() => showBuyerAuth(), 220);
  return false;
}
function __pb_2_enhancements_createOrderAndOpenWhatsApp(sellerId, cartItems) {
  const seller=db.sellers.find(s=>s.id===sellerId);
  if(!seller || seller.status!=='approved') return toast('Toko sedang tidak aktif.');
  const items=[];
  for(const row of cartItems){ const p=db.products.find(x=>x.id===row.productId); if(!p||!productIsVisible(p)||row.qty>p.stock)return toast(`Stok ${p?.name||'produk'} tidak mencukupi.`); items.push({productId:p.id,name:p.name,qty:row.qty,unit:p.unit,price:p.price,subtotal:p.price*row.qty}); }
  if(!items.length)return toast('Tidak ada produk untuk dipesan.');
  const orderId=`PB-${new Date().toISOString().slice(2,10).replaceAll('-','')}-${String(db.orders.length+1).padStart(3,'0')}`;
  const total=items.reduce((n,i)=>n+i.subtotal,0);
  const order={id:orderId,buyer:state.session.name,buyerPhone:state.session.phone,sellerId:seller.id,seller:seller.business,items,productId:items[0].productId,product:orderTitle({items}),qty:orderQuantity({items}),total,status:'wa',stockDeducted:false,created:today(),updated:today()};
  db.orders.unshift(order); save('orders'); addLog(`Pesanan ${orderId} diteruskan ke WhatsApp ${seller.business}`);
  state.cart=state.cart.filter(row=>!items.some(i=>i.productId===row.productId)); saveCart();
  const lines=items.map((i,n)=>`${n+1}. ${i.name}\n   ${i.qty} ${i.unit} × ${rupiah(i.price)} = ${rupiah(i.subtotal)}`).join('\n');
  const message=`Halo ${seller.business}, saya ingin memesan dari Parangbaddo' Store.\n\nNomor Pesanan: ${orderId}\nNama Pembeli: ${state.session.name}\nWhatsApp: ${phoneDisplay(state.session.phone)}\n\n${lines}\n\nTOTAL: ${rupiah(total)}\n\nMohon konfirmasi stok, metode pembayaran, dan pengambilan/pengirimannya. Terima kasih.`;
  const url=`https://wa.me/${seller.phone}?text=${encodeURIComponent(message)}`;
  const opened=window.open(url,'_blank','noopener');
  closeModal();
  toast(`Nota ${orderId} tersimpan. WhatsApp penjual dibuka.`);
  if(!opened) setTimeout(()=>showOrderSuccess(order,url),230);
}
function __pb_2_enhancements_showOrderSuccess(order,url) { openModal(`<div class="modal-head"><div><p class="eyebrow">Nota tersimpan</p><h2>${order.id}</h2><p>Browser memblokir tab baru. Gunakan tombol di bawah.</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><div class="receipt">${orderItems(order).map(i=>`<div><span>${escapeHtml(i.name)} × ${i.qty}</span><b>${rupiah(i.subtotal)}</b></div>`).join('')}<div class="receipt-total"><span>Total</span><b>${rupiah(order.total)}</b></div></div><a class="btn wa-btn btn-block" href="${url}" target="_blank" rel="noopener">${icon('whatsapp')} Buka WhatsApp penjual</a></div>`); }

function __pb_2_enhancements_showBuyerAuth() {
  if (state.session?.role === 'buyer') return showBuyerAccount();
  if (state.session && state.session.role !== 'buyer') {
    return openModal(`<div class="modal-head"><div><p class="eyebrow">Ganti peran</p><h2>Masuk sebagai pembeli.</h2><p>Anda sedang aktif sebagai ${state.session.role === 'admin' ? 'admin' : 'penjual'}.</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><p class="muted">Keluar dari sesi saat ini untuk melanjutkan pemesanan sebagai pembeli.</p><button class="btn btn-dark btn-block" id="switchBuyer">Keluar & lanjut sebagai pembeli</button></div>`), $('#switchBuyer').onclick=()=>{setSession(null);showBuyerAuth();};
  }
  openModal(`<div class="modal-head"><div><p class="eyebrow">Akun pembeli</p><h2>Belanja sebagai warga.</h2><p>Gunakan nomor WhatsApp aktif untuk menerima nota.</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><div class="helper-box">Mode demo aktif — kode OTP ditampilkan di layar. Pada produksi, kode dikirim melalui WhatsApp Business API.</div><form id="buyerStart"><div class="form-grid"><div class="field full"><label>Nama lengkap</label><input required name="name" autocomplete="name" placeholder="Contoh: Andi Saputra" minlength="3"></div><div class="field full"><label>Nomor WhatsApp aktif</label><input required name="phone" autocomplete="tel" inputmode="tel" placeholder="08xxxxxxxxxx" minlength="10"></div></div><div class="form-actions"><button class="btn btn-dark btn-block">Kirim kode OTP ${icon('arrow')}</button></div></form></div>`);
  $('#buyerStart').onsubmit=e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.target));if(!isValidPhone(data.phone))return toast('Nomor WhatsApp tidak valid.');showOtp('buyer',data);};
}
function __pb_2_enhancements_showOtp(role,data) {
  const phone=normalizePhone(data.phone);
  openModal(`<div class="modal-head"><div><p class="eyebrow">Verifikasi WhatsApp</p><h2>Masukkan kode OTP.</h2><p>Kode untuk ${phoneDisplay(phone)} berlaku 2 menit.</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><div class="helper-box">Kode OTP demo: <span class="demo-code">123456</span></div><form id="otpForm"><div class="field"><label>6 digit kode OTP</label><input required autofocus name="otp" inputmode="numeric" maxlength="6" pattern="[0-9]{6}" placeholder="••••••" style="font-size:22px;letter-spacing:.3em;text-align:center"></div><div class="form-actions"><button class="btn btn-dark btn-block">Verifikasi & lanjut</button></div></form><div class="divider"><span id="otpTimer">Kirim ulang dalam 30 detik</span></div><button class="btn btn-outline btn-block" type="button" id="resendOtp" disabled>Kirim ulang OTP</button></div>`);
  let seconds=30;const timer=setInterval(()=>{seconds--;if(!$('#otpTimer'))return clearInterval(timer);$('#otpTimer').textContent=seconds?`Kirim ulang dalam ${seconds} detik`:'Kode dapat dikirim ulang';if(!seconds){clearInterval(timer);$('#resendOtp').disabled=false;}},1000);
  $('#resendOtp').onclick=()=>{toast('Kode OTP baru dikirim: 123456');$('#resendOtp').disabled=true;};
  $('#otpForm').onsubmit=e=>{e.preventDefault();if(new FormData(e.target).get('otp')!=='123456')return toast('Kode OTP salah atau kedaluwarsa. Gunakan 123456.');clearInterval(timer);
    if(role==='buyer'){
      let buyer=db.buyers.find(b=>b.phone===phone);if(!buyer){buyer={id:uid('b'),name:data.name.trim(),phone,status:'active',joined:today()};db.buyers.push(buyer);}else if(buyer.status==='suspended')return toast('Akun ini sedang diblokir admin.');else buyer.name=data.name.trim();save('buyers');setSession({role:'buyer',id:buyer.id,name:buyer.name,phone:buyer.phone});closeModal();toast(`Selamat datang, ${buyer.name}. Nomor berhasil diverifikasi.`);const action=state.pendingAction;state.pendingAction=null;if(action)setTimeout(action,230);else if(state.selectedProduct)setTimeout(()=>showProduct(state.selectedProduct),230);
    }else{
      const seller=db.sellers.find(s=>s.id===data.sellerId);if(!seller||seller.status!=='approved')return toast('Akun penjual tidak aktif.');setSession({role:'seller',id:seller.id,name:seller.name,business:seller.business,phone:seller.phone});closeModal();toast(`Berhasil masuk sebagai ${seller.business}.`);navigate('seller');
    }
  };
}

function __pb_2_enhancements_showBuyerAccount() {
  const buyer=db.buyers.find(b=>b.id===state.session.id)||state.session;
  const orders=db.orders.filter(o=>o.buyerPhone===buyer.phone);
  openModal(`<div class="modal-head"><div><p class="eyebrow">Akun pembeli terverifikasi</p><h2>${escapeHtml(buyer.name)}</h2><p>${phoneDisplay(buyer.phone)} · ${orders.length} pesanan</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><div class="buyer-profile-card"><div class="table-avatar large">${initials(buyer.name)}</div><form id="buyerProfile"><div class="field"><label>Nama pembeli</label><input name="name" value="${escapeHtml(buyer.name)}" required minlength="3"></div><button class="btn btn-ghost btn-sm">Simpan nama</button></form></div><div class="panel" style="margin-top:18px"><div class="panel-head"><h3>Riwayat pesanan</h3><button class="text-btn" id="buyerBrowse">Cari produk</button></div><div class="buyer-order-list">${orders.length?orders.map(buyerOrderCard).join(''):`<div class="empty-state"><strong>Belum ada pesanan</strong><p>Produk yang dipesan akan muncul di sini.</p></div>`}</div></div><div class="form-actions"><button class="btn btn-outline" id="logoutBuyer">Keluar akun</button></div></div>`,true);
  $('#buyerProfile').onsubmit=e=>{e.preventDefault();buyer.name=new FormData(e.target).get('name').trim();state.session.name=buyer.name;save('buyers');setSession(state.session);toast('Nama pembeli diperbarui.');showBuyerAccount();};
  $('#buyerBrowse').onclick=()=>{closeModal();setTimeout(()=>navigate('products'),220)};
  $('#logoutBuyer').onclick=()=>{setSession(null);closeModal();toast('Anda telah keluar.');};
  $$('[data-buyer-order]').forEach(b=>b.onclick=()=>showOrderDetail(b.dataset.buyerOrder,'buyer'));
  $$('[data-report-order]').forEach(b=>b.onclick=()=>showReportForm(b.dataset.reportOrder));
  $$('[data-cancel-buyer]').forEach(b=>b.onclick=()=>cancelBuyerOrder(b.dataset.cancelBuyer));
}
function __pb_2_enhancements_buyerOrderCard(o) { return `<article class="buyer-order"><div><span class="status ${o.status}">${statusLabel(o.status)}</span><strong>${escapeHtml(orderTitle(o))}</strong><small>${o.id} · ${o.created}</small></div><div class="buyer-order-total"><b>${rupiah(o.total)}</b><span>${orderQuantity(o)} item</span></div><div class="action-row"><button data-buyer-order="${o.id}">Detail</button><button data-report-order="${o.id}">Laporkan</button>${o.status==='wa'?`<button class="reject" data-cancel-buyer="${o.id}">Batalkan</button>`:''}</div></article>`; }
function __pb_2_enhancements_cancelBuyerOrder(id){const o=db.orders.find(x=>x.id===id);if(!o||o.status!=='wa')return toast('Pesanan sudah diproses dan tidak dapat dibatalkan dari website.');o.status='cancelled';o.updated=today();save('orders');addLog(`${o.id} dibatalkan pembeli`);toast('Pesanan dibatalkan.');showBuyerAccount();}
function __pb_2_enhancements_showOrderDetail(id,source='admin') { const o=db.orders.find(x=>x.id===id);if(!o)return;const seller=db.sellers.find(s=>s.id===o.sellerId);const message=`Halo ${seller?.business||o.seller}, saya ingin menanyakan pesanan ${o.id}.`;const wa=`https://wa.me/${seller?.phone||''}?text=${encodeURIComponent(message)}`;openModal(`<div class="modal-head"><div><p class="eyebrow">Detail pesanan</p><h2>${o.id}</h2><p>${o.created}</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><div class="order-parties"><div><span>Pembeli</span><strong>${escapeHtml(o.buyer)}</strong><small>${phoneDisplay(o.buyerPhone)}</small></div><div><span>Penjual</span><strong>${escapeHtml(o.seller)}</strong><small>Status: ${statusLabel(o.status)}</small></div></div><div class="receipt">${orderItems(o).map(i=>`<div><span>${escapeHtml(i.name)} × ${i.qty} ${escapeHtml(i.unit||'')}</span><b>${rupiah(i.subtotal)}</b></div>`).join('')}<div class="receipt-total"><span>Total nota</span><b>${rupiah(o.total)}</b></div></div>${source==='buyer'?`<a class="btn wa-btn btn-block" href="${wa}" target="_blank">${icon('whatsapp')} Hubungi penjual</a>`:''}</div>`); }
function __pb_2_enhancements_showReportForm(orderId='') { const o=db.orders.find(x=>x.id===orderId);openModal(`<div class="modal-head"><div><p class="eyebrow">Bantuan admin desa</p><h2>Buat laporan.</h2><p>Jelaskan masalah secara jelas agar dapat diperiksa.</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><form id="reportForm"><div class="form-grid"><div class="field full"><label>Terkait</label><input name="target" value="${o?`Pesanan ${o.id}`:''}" required></div><div class="field full"><label>Jenis laporan</label><select name="type"><option>Informasi produk</option><option>Harga</option><option>Penjual sulit dihubungi</option><option>Lokasi tidak sesuai</option><option>Perilaku tidak baik</option><option>Lainnya</option></select></div><div class="field full"><label>Kronologi</label><textarea name="message" required minlength="10" placeholder="Ceritakan masalah yang terjadi…"></textarea></div></div><div class="form-actions"><button type="button" class="btn btn-outline" data-close>Batal</button><button class="btn btn-dark">Kirim laporan</button></div></form></div>`);$('#reportForm').onsubmit=e=>{e.preventDefault();const d=Object.fromEntries(new FormData(e.target));const report={id:`LAP-${new Date().getFullYear()}-${String(db.reports.length+15).padStart(3,'0')}`,reporter:state.session.name,reporterPhone:state.session.phone,...d,status:'new',created:today(),resolution:''};db.reports.unshift(report);saveExtra('reports');addLog(`Laporan ${report.id} diterima`);closeModal();toast(`Laporan ${report.id} berhasil dikirim.`);}; }

function __pb_2_enhancements_showSellerEntry() {
  if(state.session?.role==='seller')return navigate('seller');
  openModal(`<div class="modal-head"><div><p class="eyebrow">Portal penjual</p><h2>Masuk atau buka toko.</h2><p>Akun aktif setelah diverifikasi admin desa.</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><form id="sellerLogin"><div class="field"><label>Nomor WhatsApp penjual</label><input required name="phone" inputmode="tel" placeholder="08xxxxxxxxxx"></div><div class="form-actions"><button class="btn btn-dark btn-block">Masuk dengan OTP</button></div></form><div class="divider">demonstrasi</div><button class="btn btn-ghost btn-block" id="demoSeller">Gunakan akun penjual demo</button><div class="seller-entry-actions"><button class="btn btn-outline" id="trackSeller">Lacak permohonan</button><button class="btn btn-outline" id="registerSeller">Daftar penjual</button></div></div>`);
  $('#demoSeller').onclick=()=>showOtp('seller',{sellerId:'s1',phone:'081234567890'});$('#registerSeller').onclick=()=>showSellerRegistration();$('#trackSeller').onclick=showApplicationTracking;
  $('#sellerLogin').onsubmit=e=>{e.preventDefault();const phone=normalizePhone(new FormData(e.target).get('phone'));if(!isValidPhone(phone))return toast('Nomor WhatsApp tidak valid.');const seller=db.sellers.find(s=>s.phone===phone);const app=db.applications.find(a=>a.phone===phone&&['pending','revision'].includes(a.status));if(app)return toast(`Permohonan ${app.id}: ${applicationLabel(app.status)}.`);if(!seller)return toast('Nomor belum terdaftar sebagai penjual.');if(seller.status!=='approved')return toast('Akun penjual sedang ditangguhkan.');showOtp('seller',{sellerId:seller.id,phone});};
}
function __pb_2_enhancements_showApplicationTracking() { openModal(`<div class="modal-head"><div><p class="eyebrow">Status permohonan</p><h2>Lacak pengajuan toko.</h2><p>Gunakan nomor registrasi dan WhatsApp pendaftar.</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><form id="trackingForm"><div class="form-grid"><div class="field full"><label>Nomor registrasi</label><input required name="id" placeholder="REG-1234"></div><div class="field full"><label>Nomor WhatsApp</label><input required name="phone" placeholder="08xxxxxxxxxx"></div></div><div class="form-actions"><button class="btn btn-dark btn-block">Cek status</button></div></form></div>`);$('#trackingForm').onsubmit=e=>{e.preventDefault();const d=Object.fromEntries(new FormData(e.target));const a=db.applications.find(x=>x.id.toUpperCase()===d.id.trim().toUpperCase()&&x.phone===normalizePhone(d.phone));if(!a)return toast('Permohonan tidak ditemukan. Periksa kembali datanya.');showTrackingResult(a);}; }
function __pb_2_enhancements_showTrackingResult(a) { const color=a.status;openModal(`<div class="modal-head"><div><p class="eyebrow">${a.id}</p><h2>${escapeHtml(a.business)}</h2><p>Dikirim ${a.submitted}</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><div class="tracking-status"><span class="round-icon">${icon(a.status==='approved'?'check':a.status==='rejected'?'x':'clock')}</span><span class="status ${color}">${applicationLabel(a.status)}</span><p>${a.status==='pending'?'Data sedang diperiksa admin desa.':a.status==='approved'?'Akun toko telah dibuat. Silakan masuk dengan nomor WhatsApp terdaftar.':a.status==='revision'?`Perlu diperbaiki: ${escapeHtml(a.reason||'Data belum lengkap.')}`:`Alasan: ${escapeHtml(a.reason||'Tidak memenuhi ketentuan.')}`}</p></div>${a.status==='approved'?`<button class="btn btn-dark btn-block" id="loginApproved">Masuk sebagai penjual</button>`:''}${a.status==='revision'?`<button class="btn btn-dark btn-block" id="reviseApplication">Perbaiki data</button>`:''}<div class="timeline">${(a.history||[]).slice().reverse().map(h=>`<div><span></span><p><b>${applicationLabel(h.status)}</b><small>${h.at} · ${escapeHtml(h.note||'')}</small></p></div>`).join('')}</div></div>`);$('#loginApproved')?.addEventListener('click',()=>{const s=db.sellers.find(x=>x.id===a.approvedSellerId||x.phone===a.phone);if(s)showOtp('seller',{sellerId:s.id,phone:s.phone});});$('#reviseApplication')?.addEventListener('click',()=>showSellerRegistration(a)); }
function __pb_2_enhancements_showSellerRegistration(existing=null) {
  openModal(`<div class="modal-head"><div><p class="eyebrow">${existing?'Perbaikan data':'Permohonan toko'}</p><h2>${existing?'Lengkapi permohonan.':'Daftar sebagai penjual.'}</h2><p>Nomor WhatsApp diverifikasi sebelum data dikirim.</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><form id="sellerRegister"><div class="form-grid"><div class="field"><label>Nama pendaftar</label><input required name="name" value="${escapeHtml(existing?.name||'')}" placeholder="Nama sesuai identitas"></div><div class="field"><label>Nama bisnis/usaha</label><input required name="business" value="${escapeHtml(existing?.business||'')}" placeholder="Contoh: Dapur Ibu Sinta"></div><div class="field"><label>Nomor WhatsApp aktif</label><input required name="phone" value="${existing?`0${existing.phone.slice(2)}`:''}" inputmode="tel" placeholder="08xxxxxxxxxx" ${existing?'readonly':''}></div><div class="field"><label>Kategori usaha</label><select required name="category">${db.settings.categories.map(c=>`<option ${existing?.category===c?'selected':''}>${escapeHtml(c)}</option>`).join('')}</select></div><div class="field full"><label>Alamat usaha</label><input required name="address" value="${escapeHtml(existing?.address||'')}" placeholder="Dusun, RT/RW, Desa Parangbaddo’"></div><div class="field full"><label>Tautan lokasi Google Maps</label><div class="input-action"><input required name="maps" value="${escapeHtml(existing?.maps||'')}" type="url" placeholder="https://maps.google.com/..."><button type="button" class="btn btn-ghost btn-sm" id="useSellerLocation">Lokasi saya</button></div><small>Buka Google Maps → Bagikan → Salin link, atau gunakan lokasi perangkat.</small></div><div class="field full"><label>Deskripsi singkat usaha</label><textarea required name="description" placeholder="Ceritakan produk atau usaha Anda">${escapeHtml(existing?.description||'')}</textarea></div></div><div class="helper-box" style="margin-top:17px">Data akan masuk ke dashboard admin desa. Persetujuan tidak dipungut biaya.</div><div class="form-actions"><button type="button" class="btn btn-outline" data-close>Batal</button><button class="btn btn-dark">Verifikasi WA & kirim ${icon('arrow')}</button></div></form></div>`,true);
  bindLocationButton('#useSellerLocation','[name="maps"]','[name="address"]');
  $('#sellerRegister').onsubmit=e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.target));data.phone=normalizePhone(data.phone);data.maps=safeMapUrl(data.maps);if(!isValidPhone(data.phone))return toast('Nomor WhatsApp tidak valid.');if(!data.maps)return toast('Tautan Google Maps tidak valid.');if(!existing&&(db.sellers.some(s=>s.phone===data.phone)||db.applications.some(a=>a.phone===data.phone&&a.status==='pending')))return toast('Nomor sudah terdaftar atau sedang diproses.');showRegistrationOtp(data,existing);};
}
function __pb_2_enhancements_showRegistrationOtp(data,existing) { openModal(`<div class="modal-head"><div><p class="eyebrow">Verifikasi pendaftar</p><h2>Konfirmasi WhatsApp.</h2><p>Kode untuk ${phoneDisplay(data.phone)}</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><div class="helper-box">Kode OTP demo: <span class="demo-code">123456</span></div><form id="registrationOtp"><div class="field"><label>Kode OTP</label><input required name="otp" maxlength="6" inputmode="numeric" pattern="[0-9]{6}" placeholder="123456"></div><div class="form-actions"><button class="btn btn-dark btn-block">Kirim permohonan</button></div></form></div>`);$('#registrationOtp').onsubmit=e=>{e.preventDefault();if(new FormData(e.target).get('otp')!=='123456')return toast('Kode OTP salah.');let a;if(existing){Object.assign(existing,data,{status:'pending',reason:'',submitted:today()});existing.history.push({status:'pending',at:today(),note:'Data diperbaiki dan dikirim ulang.'});a=existing;}else{a={id:`REG-${Math.floor(1000+Math.random()*9000)}`,...data,status:'pending',submitted:today(),history:[{status:'pending',at:today(),note:'Nomor WhatsApp terverifikasi; permohonan diterima.'}]};db.applications.unshift(a);}save('applications');addLog(`Permohonan ${a.business} masuk`);showApplicationSubmitted(a);}; }
function __pb_2_enhancements_showApplicationSubmitted(a) { openModal(`<div class="modal-head"><div><p class="eyebrow">Berhasil dikirim</p><h2>Permohonan sedang ditinjau.</h2></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><div class="submission-success"><span class="round-icon">${icon('clock')}</span><p>Simpan nomor pengajuan:</p><h2>${a.id}</h2><p class="muted small">Gunakan nomor ini bersama WhatsApp pendaftar untuk melacak status.</p></div><button class="btn btn-dark btn-block" id="trackNow">Lacak permohonan</button></div>`);$('#trackNow').onclick=()=>showTrackingResult(a); }
function __pb_2_enhancements_bindLocationButton(buttonSelector,mapSelector,addressSelector) { $(buttonSelector)?.addEventListener('click',()=>{if(!navigator.geolocation)return toast('Browser tidak mendukung geolokasi.');const btn=$(buttonSelector);btn.disabled=true;btn.textContent='Mengambil…';navigator.geolocation.getCurrentPosition(pos=>{const {latitude,longitude}=pos.coords;$(mapSelector).value=`https://www.google.com/maps?q=${latitude.toFixed(6)},${longitude.toFixed(6)}`;if($(addressSelector)&&!$(addressSelector).value)$(addressSelector).value=`Koordinat ${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;btn.disabled=false;btn.textContent='Lokasi didapat';toast('Koordinat lokasi berhasil diambil.');},()=>{btn.disabled=false;btn.textContent='Lokasi saya';toast('Izin lokasi ditolak. Tempel tautan Google Maps secara manual.');},{enableHighAccuracy:true,timeout:10000});}); }

function __pb_2_enhancements_adminNav() { return `<aside class="dashboard-side"><div class="side-profile"><span class="avatar">AD</span><div><strong>Admin Desa</strong><span>Pengelola marketplace</span></div></div><nav class="side-nav">${sideButton('overview','grid','Ringkasan',state.adminTab)}${sideButton('applications','clock','Permohonan',state.adminTab)}${sideButton('sellers','store','Penjual',state.adminTab)}${sideButton('products','package','Produk',state.adminTab)}${sideButton('buyers','users','Pembeli',state.adminTab)}${sideButton('orders','bag','Pesanan',state.adminTab)}${sideButton('reports','shield','Laporan',state.adminTab)}${sideButton('logs','log','Log Aktivitas',state.adminTab)}${sideButton('settings','settings','Pengaturan',state.adminTab)}</nav></aside>`; }
function __pb_2_enhancements_paintAdminTab() {
  const content=$('#adminContent');const tab=state.adminTab;const titles={overview:['Ringkasan hari ini','Pantau aktivitas Parangbaddo’ Store.'],applications:['Permohonan penjual','Periksa, beri revisi, setujui, atau tolak.'],sellers:['Data penjual','Kelola akun dan profil toko.'],products:['Moderasi produk','Pastikan etalase aman dan informatif.'],buyers:['Data pembeli','Kelola akun pembeli terverifikasi.'],orders:['Pesanan / minat','Catatan nota yang diarahkan ke WhatsApp.'],reports:['Laporan & pengaduan','Tindak lanjuti masalah pembeli dan penjual.'],logs:['Log aktivitas','Rekam tindakan penting di marketplace.'],settings:['Pengaturan','Konfigurasi yang tersimpan di perangkat ini.']};const [title,sub]=titles[tab];
  content.innerHTML=`<div class="dash-head"><div><h1>${title}</h1><p>${sub}</p></div><button class="btn btn-outline btn-sm" id="adminLogout">Keluar</button></div><div id="tabContent">${adminTabContent(tab)}</div>`;
  $('#adminLogout').onclick=()=>{setSession(null);toast('Admin telah keluar.');navigate('home');};bindAdminActions();
}
function __pb_2_enhancements_adminTabContent(tab) {
  if(tab==='overview')return adminOverview();if(tab==='applications')return applicationTable();if(tab==='sellers')return sellerTable();if(tab==='products')return adminProductTable();if(tab==='buyers')return buyerTable();if(tab==='orders')return orderTable();if(tab==='reports')return reportTable();if(tab==='logs')return `<div class="panel"><div class="panel-head"><h3>Riwayat terbaru</h3><button class="btn btn-outline btn-sm" id="exportLogs">Ekspor data</button></div><div class="panel-body activity-list">${db.logs.map(l=>`<div class="activity"><span class="activity-dot"></span><div><p>${escapeHtml(l.text)}</p><small>${l.time}</small></div></div>`).join('')}</div></div>`;
  return settingsPanel();
}
function __pb_2_enhancements_adminOverview() { const pending=db.applications.filter(a=>a.status==='pending').length;const reports=db.reports.filter(r=>!['completed','rejected'].includes(r.status)).length;const revenue=db.orders.filter(o=>['confirmed','completed'].includes(o.status)).reduce((n,o)=>n+o.total,0);return `<div class="stat-grid">${statCard('Permohonan','clock',pending,'Perlu ditinjau')}${statCard('Penjual aktif','store',db.sellers.filter(s=>s.status==='approved').length,'Terverifikasi')}${statCard('Produk aktif','package',db.products.filter(productIsVisible).length,'Di etalase')}${statCard('Laporan aktif','shield',reports,'Perlu tindak lanjut')}</div><div class="dash-grid"><div class="panel"><div class="panel-head"><h3>Nilai pesanan terkonfirmasi</h3><span class="status active">${rupiah(revenue)}</span></div><div class="panel-body"><div class="bar-chart">${[42,58,36,75,61,92,73].map((h,i)=>`<div class="bar ${i===5?'active':''}" style="height:${h}%"><span>${['Sen','Sel','Rab','Kam','Jum','Sab','Min'][i]}</span></div>`).join('')}</div></div></div><div class="panel"><div class="panel-head"><h3>Aktivitas terbaru</h3></div><div class="panel-body activity-list">${db.logs.slice(0,6).map(l=>`<div class="activity"><span class="activity-dot"></span><div><p>${escapeHtml(l.text)}</p><small>${l.time}</small></div></div>`).join('')}</div></div></div>${pending?`<div style="height:16px"></div><div class="panel"><div class="panel-head"><h3>Menunggu persetujuan</h3><button class="text-btn" data-open-tab="applications">Lihat semua</button></div>${applicationRows(db.applications.filter(a=>a.status==='pending').slice(0,3))}</div>`:''}`; }
function __pb_2_enhancements_applicationTable() { const filters=['all','pending','revision','approved','rejected'];const rows=db.applications.filter(a=>state.applicationFilter==='all'||a.status===state.applicationFilter);return `<div class="filter-tabs">${filters.map(f=>`<button class="${state.applicationFilter===f?'active':''}" data-app-filter="${f}">${f==='all'?'Semua':applicationLabel(f)} <span>${f==='all'?db.applications.length:db.applications.filter(a=>a.status===f).length}</span></button>`).join('')}</div><div class="panel">${applicationRows(rows)}</div>`; }
function __pb_2_enhancements_applicationRows(rows) { return `<div class="table-wrap"><table><thead><tr><th>Pendaftar</th><th>Usaha</th><th>Kontak</th><th>Dikirim</th><th>Status</th><th>Aksi</th></tr></thead><tbody>${rows.length?rows.map(a=>`<tr><td><div class="table-user"><span class="table-avatar">${initials(a.name)}</span><div><strong>${escapeHtml(a.name)}</strong><small>${a.id}</small></div></div></td><td><strong>${escapeHtml(a.business)}</strong><br><span class="muted small">${escapeHtml(a.category)}</span></td><td>${phoneDisplay(a.phone)}</td><td>${a.submitted}</td><td><span class="status ${a.status}">${applicationLabel(a.status)}</span></td><td><div class="action-row"><button data-detail-app="${a.id}">Detail</button>${['pending','revision'].includes(a.status)?`<button data-approve="${a.id}">Setujui</button><button data-revision="${a.id}">Revisi</button><button class="reject" data-reject="${a.id}">Tolak</button>`:''}</div></td></tr>`).join(''):`<tr><td colspan="6"><div class="empty-state">Tidak ada data pada status ini.</div></td></tr>`}</tbody></table></div>`; }
function __pb_2_enhancements_sellerTable() { return `<div class="panel"><div class="table-wrap"><table><thead><tr><th>Penjual</th><th>Kategori</th><th>Produk</th><th>Bergabung</th><th>Status</th><th>Aksi</th></tr></thead><tbody>${db.sellers.map(s=>`<tr><td><div class="table-user"><span class="table-avatar">${initials(s.business)}</span><div><strong>${escapeHtml(s.business)}</strong><small>${escapeHtml(s.name)} · ${phoneDisplay(s.phone)}</small></div></div></td><td>${escapeHtml(s.category)}</td><td>${db.products.filter(p=>p.sellerId===s.id).length}</td><td>${s.joined}</td><td><span class="status ${s.status}">${statusLabel(s.status)}</span></td><td><div class="action-row"><button data-detail-seller="${s.id}">Detail</button><button class="${s.status==='approved'?'reject':''}" data-suspend-seller="${s.id}">${s.status==='approved'?'Tangguhkan':'Aktifkan'}</button></div></td></tr>`).join('')}</tbody></table></div></div>`; }
function __pb_2_enhancements_adminProductTable() { return `<div class="panel"><div class="table-wrap"><table><thead><tr><th>Produk</th><th>Penjual</th><th>Harga</th><th>Stok</th><th>Status</th><th>Aksi</th></tr></thead><tbody>${db.products.map(p=>{const [label,st]=productStatus(p);return `<tr><td><div class="table-user"><img class="product-thumb" src="${p.image}" alt=""><div><strong>${escapeHtml(p.name)}</strong><small>${escapeHtml(p.category)}</small></div></div></td><td>${escapeHtml(p.seller)}</td><td>${rupiah(p.price)}</td><td>${p.stock}</td><td><span class="status ${st}">${label}</span></td><td><div class="action-row"><button data-detail-product="${p.id}">Detail</button><button class="${p.moderation==='hidden'?'':'reject'}" data-toggle-product="${p.id}">${p.moderation==='hidden'?'Izinkan':'Tahan'}</button></div></td></tr>`}).join('')}</tbody></table></div></div>`; }
function __pb_2_enhancements_buyerTable() { return `<div class="panel"><div class="table-wrap"><table><thead><tr><th>Pembeli</th><th>WhatsApp</th><th>Bergabung</th><th>Pesanan</th><th>Status</th><th>Aksi</th></tr></thead><tbody>${db.buyers.map(b=>`<tr><td><div class="table-user"><span class="table-avatar">${initials(b.name)}</span><strong>${escapeHtml(b.name)}</strong></div></td><td>${phoneDisplay(b.phone)}</td><td>${b.joined}</td><td>${db.orders.filter(o=>o.buyerPhone===b.phone).length}</td><td><span class="status ${b.status}">${statusLabel(b.status)}</span></td><td><div class="action-row"><button data-detail-buyer="${b.id}">Detail</button><button class="${b.status==='active'?'reject':''}" data-toggle-buyer="${b.id}">${b.status==='active'?'Blokir':'Aktifkan'}</button></div></td></tr>`).join('')}</tbody></table></div></div>`; }
function __pb_2_enhancements_orderTable(sellerId=null) { const orders=sellerId?db.orders.filter(o=>o.sellerId===sellerId):db.orders;return `<div class="panel"><div class="table-wrap"><table><thead><tr><th>ID / Waktu</th><th>Produk</th><th>Pembeli</th><th>Jumlah</th><th>Total</th><th>Status</th><th>Aksi</th></tr></thead><tbody>${orders.length?orders.map(o=>`<tr><td><strong>${o.id}</strong><br><span class="muted small">${o.created}</span></td><td>${escapeHtml(orderTitle(o))}</td><td>${escapeHtml(o.buyer)}<br><span class="muted small">${phoneDisplay(o.buyerPhone)}</span></td><td>${orderQuantity(o)}</td><td>${rupiah(o.total)}</td><td><span class="status ${o.status}">${statusLabel(o.status)}</span></td><td><div class="action-row"><button data-order-detail="${o.id}">Detail</button>${sellerId&&o.status==='wa'?`<button data-confirm-order="${o.id}">Konfirmasi</button><button class="reject" data-cancel-order="${o.id}">Batal</button>`:''}${sellerId&&o.status==='confirmed'?`<button data-complete-order="${o.id}">Selesaikan</button><button class="reject" data-cancel-order="${o.id}">Batal</button>`:''}${sellerId&&!['cancelled','completed'].includes(o.status)?`<button data-contact-buyer="${o.id}">WhatsApp</button>`:''}</div></td></tr>`).join(''):`<tr><td colspan="7" class="muted">Belum ada pesanan.</td></tr>`}</tbody></table></div></div>`; }
function __pb_2_enhancements_reportTable() { const filters=['all','new','review','completed'];const rows=db.reports.filter(r=>state.reportFilter==='all'||r.status===state.reportFilter);return `<div class="filter-tabs">${filters.map(f=>`<button class="${state.reportFilter===f?'active':''}" data-report-filter="${f}">${f==='all'?'Semua':statusLabel(f)} <span>${f==='all'?db.reports.length:db.reports.filter(r=>r.status===f).length}</span></button>`).join('')}</div><div class="panel"><div class="table-wrap"><table><thead><tr><th>ID / Pelapor</th><th>Terkait</th><th>Jenis</th><th>Dikirim</th><th>Status</th><th>Aksi</th></tr></thead><tbody>${rows.length?rows.map(r=>`<tr><td><strong>${r.id}</strong><br><span class="muted small">${escapeHtml(r.reporter)}</span></td><td>${escapeHtml(r.target)}</td><td>${escapeHtml(r.type)}</td><td>${r.created}</td><td><span class="status ${r.status}">${statusLabel(r.status)}</span></td><td><div class="action-row"><button data-detail-report="${r.id}">Buka</button></div></td></tr>`).join(''):`<tr><td colspan="6" class="muted">Tidak ada laporan.</td></tr>`}</tbody></table></div></div>`; }
function __pb_2_enhancements_settingsPanel() { const s=db.settings;return `<div class="panel"><div class="panel-head"><h3>Identitas dan aturan marketplace</h3><span class="status active">Tersimpan lokal</span></div><div class="panel-body"><form id="settingsForm"><div class="form-grid"><div class="field"><label>Nama marketplace</label><input name="storeName" value="${escapeHtml(s.storeName)}" required></div><div class="field"><label>WhatsApp pengelola</label><input name="adminPhone" value="${phoneDisplay(s.adminPhone)}" required></div><div class="field full"><label>Slogan</label><input name="slogan" value="${escapeHtml(s.slogan)}"></div><div class="field full"><label>Alamat</label><input name="address" value="${escapeHtml(s.address)}"></div><div class="field"><label>Batas stok rendah</label><input name="lowStock" type="number" min="1" value="${s.lowStock}"></div><div class="field full"><label>Kategori (pisahkan dengan koma)</label><input name="categories" value="${escapeHtml(s.categories.join(', '))}"></div><div class="field full checkbox-field"><label><input name="autoPublish" type="checkbox" ${s.autoPublish?'checked':''}> Produk penjual terverifikasi langsung tayang</label></div></div><div class="form-actions spread"><div><button type="button" class="btn btn-outline" id="exportData">Ekspor data</button><button type="button" class="btn btn-outline" id="importData">Impor data</button><input class="hidden" type="file" id="importFile" accept="application/json"></div><button class="btn btn-dark">Simpan perubahan</button></div></form></div></div><div class="danger-zone"><div><strong>Reset data demonstrasi</strong><p>Menghapus perubahan dan mengembalikan data awal.</p></div><button class="btn btn-danger btn-sm" id="resetData">Reset data</button></div>`; }

function __pb_2_enhancements_bindAdminActions() {
  $$('[data-open-tab]').forEach(b=>b.onclick=()=>{state.adminTab=b.dataset.openTab;renderAdmin();});
  $$('[data-app-filter]').forEach(b=>b.onclick=()=>{state.applicationFilter=b.dataset.appFilter;renderAdmin();});
  $$('[data-report-filter]').forEach(b=>b.onclick=()=>{state.reportFilter=b.dataset.reportFilter;renderAdmin();});
  $$('[data-detail-app]').forEach(b=>b.onclick=()=>showApplication(b.dataset.detailApp));
  $$('[data-approve]').forEach(b=>b.onclick=()=>approveApplication(b.dataset.approve));
  $$('[data-revision]').forEach(b=>b.onclick=()=>reviewApplication(b.dataset.revision,'revision'));
  $$('[data-reject]').forEach(b=>b.onclick=()=>reviewApplication(b.dataset.reject,'rejected'));
  $$('[data-detail-seller]').forEach(b=>b.onclick=()=>showSellerDetail(b.dataset.detailSeller));
  $$('[data-suspend-seller]').forEach(b=>b.onclick=()=>toggleSeller(b.dataset.suspendSeller));
  $$('[data-detail-product]').forEach(b=>b.onclick=()=>showAdminProduct(b.dataset.detailProduct));
  $$('[data-toggle-product]').forEach(b=>b.onclick=()=>toggleProductModeration(b.dataset.toggleProduct));
  $$('[data-detail-buyer]').forEach(b=>b.onclick=()=>showBuyerDetail(b.dataset.detailBuyer));
  $$('[data-toggle-buyer]').forEach(b=>b.onclick=()=>toggleBuyer(b.dataset.toggleBuyer));
  $$('[data-order-detail]').forEach(b=>b.onclick=()=>showOrderDetail(b.dataset.orderDetail,'admin'));
  $$('[data-detail-report]').forEach(b=>b.onclick=()=>showReportDetail(b.dataset.detailReport));
  $('#exportLogs')?.addEventListener('click',exportData);
  $('#settingsForm')?.addEventListener('submit',saveSettings);
  $('#exportData')?.addEventListener('click',exportData);
  $('#importData')?.addEventListener('click',()=>$('#importFile').click());
  $('#importFile')?.addEventListener('change',importData);
  $('#resetData')?.addEventListener('click',confirmReset);
}
function __pb_2_enhancements_showApplication(id) { const a=db.applications.find(x=>x.id===id);if(!a)return;openModal(`<div class="modal-head"><div><p class="eyebrow">${a.id}</p><h2>${escapeHtml(a.business)}</h2><p>${a.submitted} · <span class="status ${a.status}">${applicationLabel(a.status)}</span></p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><div class="detail-grid"><div><span>Pendaftar</span><strong>${escapeHtml(a.name)}</strong></div><div><span>WhatsApp</span><strong>${phoneDisplay(a.phone)}</strong></div><div><span>Kategori</span><strong>${escapeHtml(a.category)}</strong></div><div><span>Alamat</span><strong>${escapeHtml(a.address)}</strong></div></div><div class="detail-description"><span>Deskripsi usaha</span><p>${escapeHtml(a.description)}</p></div><a class="btn btn-outline btn-block" href="${safeMapUrl(a.maps,a.address)}" target="_blank">${icon('map')} Periksa lokasi di Maps</a><div class="timeline">${(a.history||[]).slice().reverse().map(h=>`<div><span></span><p><b>${applicationLabel(h.status)}</b><small>${h.at} · ${escapeHtml(h.note||'')}</small></p></div>`).join('')}</div>${['pending','revision'].includes(a.status)?`<div class="form-actions"><button class="btn btn-danger" data-modal-reject>Tolak</button><button class="btn btn-outline" data-modal-revision>Minta revisi</button><button class="btn btn-dark" data-modal-approve>Setujui</button></div>`:''}</div>`,true);$('[data-modal-approve]')?.addEventListener('click',()=>{closeModal();setTimeout(()=>approveApplication(id),220)});$('[data-modal-revision]')?.addEventListener('click',()=>reviewApplication(id,'revision'));$('[data-modal-reject]')?.addEventListener('click',()=>reviewApplication(id,'rejected')); }
function __pb_2_enhancements_approveApplication(id) { const a=db.applications.find(x=>x.id===id);if(!a||a.status==='approved')return;let seller=db.sellers.find(s=>s.phone===a.phone);if(!seller){seller={id:uid('s'),name:a.name,business:a.business,phone:a.phone,category:a.category,address:a.address,map:a.maps,status:'approved',joined:today()};db.sellers.push(seller);}else{seller.status='approved';}a.status='approved';a.reason='';a.approvedSellerId=seller.id;a.history.push({status:'approved',at:today(),note:'Disetujui oleh Admin Desa; akun penjual dibuat.'});save('applications');save('sellers');addLog(`Admin menyetujui ${a.business}`);const message=`Halo ${a.name}, permohonan ${a.id} untuk ${a.business} telah disetujui. Silakan masuk ke Parangbaddo' Store menggunakan nomor WhatsApp ini.`;const wa=`https://wa.me/${a.phone}?text=${encodeURIComponent(message)}`;openModal(`<div class="modal-head"><div><p class="eyebrow">Penjual disetujui</p><h2>Akun toko dibuat.</h2><p>${a.id} · ${escapeHtml(a.business)}</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><div class="submission-success"><span class="round-icon">${icon('check')}</span><p>Penjual sekarang dapat masuk memakai OTP.</p></div><a href="${wa}" target="_blank" class="btn wa-btn btn-block">${icon('whatsapp')} Beri tahu melalui WhatsApp</a><button class="btn btn-outline btn-block" style="margin-top:9px" id="backApplications">Kembali ke daftar</button></div>`);$('#backApplications').onclick=()=>{closeModal();setTimeout(renderAdmin,220)}; }
function __pb_2_enhancements_reviewApplication(id,status) { const a=db.applications.find(x=>x.id===id);if(!a)return;openModal(`<div class="modal-head"><div><p class="eyebrow">${status==='revision'?'Minta perbaikan':'Tolak permohonan'}</p><h2>${escapeHtml(a.business)}</h2><p>Alasan akan terlihat saat pendaftar melacak status.</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><form id="reviewAppForm"><div class="field"><label>Alasan / catatan admin</label><textarea name="reason" required minlength="5" placeholder="Tuliskan bagian yang perlu diperbaiki…"></textarea></div><div class="form-actions"><button type="button" class="btn btn-outline" data-close>Batal</button><button class="btn ${status==='rejected'?'btn-danger':'btn-dark'}">Simpan keputusan</button></div></form></div>`);$('#reviewAppForm').onsubmit=e=>{e.preventDefault();const reason=new FormData(e.target).get('reason').trim();a.status=status;a.reason=reason;a.history.push({status,at:today(),note:reason});save('applications');addLog(`Admin ${status==='revision'?'meminta revisi':'menolak'} ${a.business}`);closeModal();toast(`Status diubah: ${applicationLabel(status)}.`);setTimeout(renderAdmin,220);}; }
function __pb_2_enhancements_showSellerDetail(id) { const s=db.sellers.find(x=>x.id===id);const products=db.products.filter(p=>p.sellerId===id);const orders=db.orders.filter(o=>o.sellerId===id);openModal(`<div class="modal-head"><div><p class="eyebrow">Profil penjual</p><h2>${escapeHtml(s.business)}</h2><p>${escapeHtml(s.name)} · ${phoneDisplay(s.phone)}</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><div class="detail-grid"><div><span>Status</span><strong>${statusLabel(s.status)}</strong></div><div><span>Kategori</span><strong>${escapeHtml(s.category)}</strong></div><div><span>Produk</span><strong>${products.length}</strong></div><div><span>Pesanan</span><strong>${orders.length}</strong></div></div><div class="detail-description"><span>Alamat</span><p>${escapeHtml(s.address)}</p></div><a class="btn btn-outline btn-block" target="_blank" href="${safeMapUrl(s.map,s.address)}">${icon('map')} Buka lokasi</a><div class="form-actions"><button class="btn ${s.status==='approved'?'btn-danger':'btn-dark'}" id="modalToggleSeller">${s.status==='approved'?'Tangguhkan toko':'Aktifkan toko'}</button></div></div>`);$('#modalToggleSeller').onclick=()=>{closeModal();setTimeout(()=>toggleSeller(id),220)}; }
function __pb_2_enhancements_toggleSeller(id) { const s=db.sellers.find(x=>x.id===id);if(!s)return;const next=s.status==='approved'?'suspended':'approved';showConfirm(next==='suspended'?'Tangguhkan toko?':'Aktifkan kembali? ',next==='suspended'?'Produk toko tidak akan tampil dan penjual tidak dapat masuk.':'Penjual dapat kembali masuk dan mengelola produknya.',()=>{s.status=next;db.products.filter(p=>p.sellerId===id).forEach(p=>p.sellerActive=next==='approved');save('sellers');save('products');addLog(`Status ${s.business} menjadi ${statusLabel(next)}`);toast('Status penjual diperbarui.');renderAdmin();}); }
function __pb_2_enhancements_showAdminProduct(id) { const p=db.products.find(x=>x.id===id);openModal(`<div class="modal-head"><div><p class="eyebrow">Moderasi produk</p><h2>${escapeHtml(p.name)}</h2><p>${escapeHtml(p.seller)} · ${rupiah(p.price)}</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><img class="moderation-image" src="${p.image}" alt=""><div class="detail-grid"><div><span>Kategori</span><strong>${escapeHtml(p.category)}</strong></div><div><span>Stok</span><strong>${p.stock} ${escapeHtml(p.unit)}</strong></div><div><span>Lokasi</span><strong>${escapeHtml(p.location)}</strong></div><div><span>Status</span><strong>${productStatus(p)[0]}</strong></div></div><div class="detail-description"><span>Deskripsi</span><p>${escapeHtml(p.description)}</p></div><div class="form-actions"><button class="btn ${p.moderation==='hidden'?'btn-dark':'btn-danger'}" id="modalToggleProduct">${p.moderation==='hidden'?'Izinkan tayang':'Tahan produk'}</button></div></div>`,true);$('#modalToggleProduct').onclick=()=>{closeModal();setTimeout(()=>toggleProductModeration(id),220)}; }
function __pb_2_enhancements_toggleProductModeration(id) { const p=db.products.find(x=>x.id===id);p.moderation=p.moderation==='hidden'?'ok':'hidden';save('products');addLog(`Admin ${p.moderation==='hidden'?'menahan':'mengizinkan'} produk ${p.name}`);toast('Status moderasi produk diperbarui.');renderAdmin(); }
function __pb_2_enhancements_showBuyerDetail(id) { const b=db.buyers.find(x=>x.id===id);const orders=db.orders.filter(o=>o.buyerPhone===b.phone);openModal(`<div class="modal-head"><div><p class="eyebrow">Profil pembeli</p><h2>${escapeHtml(b.name)}</h2><p>${phoneDisplay(b.phone)}</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><div class="detail-grid"><div><span>Status</span><strong>${statusLabel(b.status)}</strong></div><div><span>Bergabung</span><strong>${b.joined}</strong></div><div><span>Pesanan</span><strong>${orders.length}</strong></div><div><span>Laporan</span><strong>${db.reports.filter(r=>r.reporterPhone===b.phone).length}</strong></div></div><div class="form-actions"><button class="btn ${b.status==='active'?'btn-danger':'btn-dark'}" id="modalToggleBuyer">${b.status==='active'?'Blokir akun':'Aktifkan akun'}</button></div></div>`);$('#modalToggleBuyer').onclick=()=>{closeModal();setTimeout(()=>toggleBuyer(id),220)}; }
function __pb_2_enhancements_toggleBuyer(id) { const b=db.buyers.find(x=>x.id===id);b.status=b.status==='active'?'suspended':'active';save('buyers');addLog(`${b.name} ${b.status==='active'?'diaktifkan':'diblokir'} admin`);toast('Status pembeli diperbarui.');renderAdmin(); }
function __pb_2_enhancements_showReportDetail(id) { const r=db.reports.find(x=>x.id===id);openModal(`<div class="modal-head"><div><p class="eyebrow">${r.id}</p><h2>${escapeHtml(r.type)}</h2><p>${escapeHtml(r.reporter)} · ${r.created}</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><div class="detail-description"><span>Terkait</span><p>${escapeHtml(r.target)}</p></div><div class="detail-description"><span>Kronologi</span><p>${escapeHtml(r.message)}</p></div><form id="resolveReport"><div class="field"><label>Catatan penyelesaian admin</label><textarea name="resolution" required minlength="5">${escapeHtml(r.resolution||'')}</textarea></div><div class="form-actions"><button type="button" class="btn btn-outline" id="markReview">Tandai ditinjau</button><button class="btn btn-dark">Selesaikan laporan</button></div></form></div>`);$('#markReview').onclick=()=>{r.status='review';saveExtra('reports');addLog(`${r.id} sedang ditinjau`);closeModal();toast('Laporan ditandai sedang ditinjau.');setTimeout(renderAdmin,220)};$('#resolveReport').onsubmit=e=>{e.preventDefault();r.resolution=new FormData(e.target).get('resolution').trim();r.status='completed';saveExtra('reports');addLog(`${r.id} diselesaikan admin`);closeModal();toast('Laporan diselesaikan.');setTimeout(renderAdmin,220)}; }
function __pb_2_enhancements_applySettings() {
  document.title = `${db.settings.storeName} — ${db.settings.slogan}`;
  const footerName = $('.footer-brand strong');
  const footerSlogan = $('.footer-brand p');
  if (footerName) footerName.textContent = db.settings.storeName;
  if (footerSlogan) footerSlogan.textContent = db.settings.slogan;
}
function __pb_2_enhancements_saveSettings(e) { e.preventDefault();const f=new FormData(e.target);Object.assign(db.settings,{storeName:f.get('storeName').trim(),adminPhone:normalizePhone(f.get('adminPhone')),slogan:f.get('slogan').trim(),address:f.get('address').trim(),lowStock:Number(f.get('lowStock')),categories:f.get('categories').split(',').map(x=>x.trim()).filter(Boolean),autoPublish:f.get('autoPublish')==='on'});saveExtra('settings');applySettings();addLog('Admin memperbarui pengaturan website');toast('Pengaturan benar-benar disimpan dan langsung diterapkan.'); }
function __pb_2_enhancements_exportData() { const payload={version:2,exportedAt:new Date().toISOString(),products:db.products,applications:db.applications,sellers:db.sellers,buyers:db.buyers,orders:db.orders,reports:db.reports,logs:db.logs,settings:db.settings};const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`parangbaddo-store-${new Date().toISOString().slice(0,10)}.json`;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);toast('Backup data berhasil dibuat.'); }
function __pb_2_enhancements_importData(e) { const file=e.target.files?.[0];if(!file)return;const r=new FileReader();r.onload=()=>{try{const data=JSON.parse(r.result);for(const key of ['products','applications','sellers','buyers','orders','reports','logs'])if(Array.isArray(data[key])){db[key].splice(0,db[key].length,...data[key]);key==='reports'?saveExtra(key):save(key);}if(data.settings){db.settings=data.settings;saveExtra('settings');}toast('Data berhasil diimpor.');renderAdmin();}catch{toast('File backup tidak valid.');}};r.readAsText(file); }
function __pb_2_enhancements_confirmReset() { showConfirm('Reset seluruh data demo?','Semua pendaftaran, produk, pesanan, dan perubahan akan dikembalikan ke kondisi awal.',()=>{for(const key of Object.keys(localStorage))if(key.startsWith('pb_'))localStorage.removeItem(key);location.reload();}); }
function __pb_2_enhancements_showConfirm(title,message,onConfirm) { openModal(`<div class="modal-head"><div><p class="eyebrow">Konfirmasi tindakan</p><h2>${escapeHtml(title)}</h2><p>${escapeHtml(message)}</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><div class="form-actions"><button class="btn btn-outline" data-close>Batal</button><button class="btn btn-danger" id="confirmAction">Ya, lanjutkan</button></div></div>`);$('#confirmAction').onclick=()=>{closeModal();setTimeout(onConfirm,220)}; }

function __pb_2_enhancements_sellerNav() { return `<aside class="dashboard-side"><div class="side-profile"><span class="avatar">${initials(state.session.business)}</span><div><strong>${escapeHtml(state.session.business)}</strong><span>Akun penjual aktif</span></div></div><nav class="side-nav">${sideButton('overview','grid','Ringkasan',state.sellerTab)}${sideButton('products','package','Produk Saya',state.sellerTab)}${sideButton('orders','bag','Pesanan',state.sellerTab)}${sideButton('profile','store','Profil Toko',state.sellerTab)}</nav></aside>`; }
function __pb_2_enhancements_paintSellerTab() {
  const seller=db.sellers.find(s=>s.id===state.session.id);if(!seller||seller.status!=='approved'){setSession(null);navigate('home');return toast('Akun toko tidak aktif.');}const products=db.products.filter(p=>p.sellerId===seller.id);const orders=db.orders.filter(o=>o.sellerId===seller.id);const tabs={overview:['Ringkasan toko','Lihat perkembangan usaha hari ini.'],products:['Produk saya','Tambah, edit, arsipkan produk, dan perbarui stok.'],orders:['Permintaan pesanan','Konfirmasi stok sebelum menyelesaikan transaksi di WhatsApp.'],profile:['Profil toko','Lengkapi informasi usaha dan lokasi presisi.']};const [title,sub]=tabs[state.sellerTab];
  $('#sellerContent').innerHTML=`<div class="dash-head"><div><h1>${title}</h1><p>${sub}</p></div><div class="dash-actions">${state.sellerTab==='products'?`<button class="btn btn-dark btn-sm" id="addProduct">${icon('plus')} Tambah produk</button>`:''}<button class="btn btn-outline btn-sm" id="sellerLogout">Keluar</button></div></div><div id="sellerTab">${sellerTabContent(seller,products,orders)}</div>`;
  $('#sellerLogout').onclick=()=>{setSession(null);toast('Anda telah keluar dari portal penjual.');navigate('home');};$('#addProduct')?.addEventListener('click',()=>showProductEditor(seller));
  $$('[data-confirm-order]').forEach(b=>b.onclick=()=>updateOrder(b.dataset.confirmOrder,'confirmed'));$$('[data-complete-order]').forEach(b=>b.onclick=()=>updateOrder(b.dataset.completeOrder,'completed'));$$('[data-cancel-order]').forEach(b=>b.onclick=()=>updateOrder(b.dataset.cancelOrder,'cancelled'));$$('[data-order-detail]').forEach(b=>b.onclick=()=>showOrderDetail(b.dataset.orderDetail,'seller'));$$('[data-contact-buyer]').forEach(b=>b.onclick=()=>contactBuyer(b.dataset.contactBuyer));
  $$('[data-edit-product]').forEach(b=>b.onclick=()=>showProductEditor(seller,db.products.find(p=>p.id===b.dataset.editProduct)));$$('[data-toggle-own-product]').forEach(b=>b.onclick=()=>toggleOwnProduct(b.dataset.toggleOwnProduct));$$('[data-delete-product]').forEach(b=>b.onclick=()=>deleteProduct(b.dataset.deleteProduct));
  $('#sellerProfile')?.addEventListener('submit',e=>saveSellerProfile(e,seller));bindLocationButton('#useProfileLocation','[name="map"]','[name="address"]');
}
function __pb_2_enhancements_sellerTabContent(seller,products,orders) {
  const low=products.filter(p=>p.stock<=db.settings.lowStock).length;
  if(state.sellerTab==='overview')return `<div class="stat-grid">${statCard('Produk aktif','package',products.filter(productIsVisible).length,'Di etalase')}${statCard('Perlu konfirmasi','clock',orders.filter(o=>o.status==='wa').length,'Nota baru')}${statCard('Pesanan selesai','check',orders.filter(o=>o.status==='completed').length,'Tercatat')}${statCard('Stok rendah','chart',low,`≤ ${db.settings.lowStock} unit`)}</div><div class="dash-grid"><div class="panel"><div class="panel-head"><h3>Stok produk</h3></div><div class="panel-body">${products.length?products.map(p=>`<div class="progress-row"><div><span>${escapeHtml(p.name)}</span><b>${p.stock} ${escapeHtml(p.unit)}</b></div><div class="progress"><span style="width:${Math.min(100,p.stock*3)}%"></span></div></div>`).join(''):'Belum ada produk.'}</div></div><div class="panel"><div class="panel-head"><h3>Tindakan cepat</h3></div><div class="panel-body"><p class="muted small">Jaga informasi stok, harga, dan lokasi agar tetap akurat.</p><button class="btn btn-ghost btn-block" id="quickProducts">Kelola produk</button></div></div></div>`;
  if(state.sellerTab==='products')return `<div class="panel"><div class="table-wrap"><table><thead><tr><th>Produk</th><th>Harga</th><th>Stok</th><th>Status</th><th>Aksi</th></tr></thead><tbody>${products.length?products.map(p=>{const [label,st]=productStatus(p);return `<tr><td><div class="table-user"><img class="product-thumb" src="${p.image}" alt=""><div><strong>${escapeHtml(p.name)}</strong><small>${escapeHtml(p.category)}</small></div></div></td><td>${rupiah(p.price)} / ${escapeHtml(p.unit)}</td><td>${p.stock}</td><td><span class="status ${st}">${label}</span></td><td><div class="action-row"><button data-edit-product="${p.id}">Edit</button>${p.moderation!=='hidden'?`<button data-toggle-own-product="${p.id}">${p.active===false?'Aktifkan':'Arsipkan'}</button>`:''}<button class="reject" data-delete-product="${p.id}">Hapus</button></div></td></tr>`}).join(''):`<tr><td colspan="5" class="muted">Belum ada produk. Klik “Tambah produk”.</td></tr>`}</tbody></table></div></div>`;
  if(state.sellerTab==='orders')return orderTable(seller.id);
  return `<div class="panel"><div class="panel-head"><h3>Informasi usaha</h3><span class="status approved">Terverifikasi desa</span></div><div class="panel-body"><form id="sellerProfile"><div class="form-grid"><div class="field"><label>Nama pemilik</label><input required name="name" value="${escapeHtml(seller.name)}"></div><div class="field"><label>Nama bisnis</label><input required name="business" value="${escapeHtml(seller.business)}"></div><div class="field"><label>Nomor WhatsApp</label><input value="${phoneDisplay(seller.phone)}" disabled></div><div class="field"><label>Kategori</label><select name="category">${db.settings.categories.map(c=>`<option ${c===seller.category?'selected':''}>${escapeHtml(c)}</option>`).join('')}</select></div><div class="field full"><label>Alamat</label><input required name="address" value="${escapeHtml(seller.address)}"></div><div class="field full"><label>Lokasi Google Maps</label><div class="input-action"><input required name="map" type="url" value="${escapeHtml(seller.map||safeMapUrl('',seller.address))}"><button type="button" class="btn btn-ghost btn-sm" id="useProfileLocation">Lokasi saya</button></div></div><div class="field full"><label>Deskripsi toko</label><textarea name="bio">${escapeHtml(seller.bio||'')}</textarea></div></div><div class="form-actions"><button class="btn btn-dark">Simpan profil</button></div></form></div></div>`;
}
function __pb_2_enhancements_renderSeller() { if(state.session?.role!=='seller'){navigate('home');return setTimeout(showSellerEntry,200);}view.innerHTML=`<section class="dashboard-shell">${sellerNav()}<div class="dashboard-main" id="sellerContent"></div></section>`;$$('[data-tab]',view).forEach(b=>b.onclick=()=>{state.sellerTab=b.dataset.tab;renderSeller();});paintSellerTab();$('#quickProducts')?.addEventListener('click',()=>{state.sellerTab='products';renderSeller();}); }
function __pb_2_enhancements_showProductEditor(seller,p=null) { openModal(`<div class="modal-head"><div><p class="eyebrow">${p?'Edit produk':'Produk baru'}</p><h2>${p?'Perbarui informasi.':'Tambah ke etalase.'}</h2><p>Harga, stok, dan lokasi akan dilihat pembeli.</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><form id="productForm"><div class="form-grid"><div class="field full"><label>Foto produk</label><div class="upload-preview"><img id="imagePreview" src="${p?.image||svgImages.sayur}" alt="Preview"><input name="image" type="file" accept="image/jpeg,image/png,image/webp"></div><small>Gambar otomatis diperkecil agar penyimpanan tetap ringan.</small></div><div class="field"><label>Nama produk</label><input required name="name" value="${escapeHtml(p?.name||'')}"></div><div class="field"><label>Kategori</label><select name="category" required>${db.settings.categories.map(c=>`<option ${p?.category===c?'selected':''}>${escapeHtml(c)}</option>`).join('')}</select></div><div class="field"><label>Harga</label><input required name="price" type="number" min="1000" value="${p?.price||''}"></div><div class="field"><label>Satuan</label><input required name="unit" value="${escapeHtml(p?.unit||'')}" placeholder="buah / bungkus / kg"></div><div class="field"><label>Stok</label><input required name="stock" type="number" min="0" value="${p?.stock??''}"></div><div class="field"><label>Lokasi produk</label><input required name="location" value="${escapeHtml(p?.location||seller.address)}"></div><div class="field full"><label>Tautan Google Maps</label><div class="input-action"><input required name="map" type="url" value="${escapeHtml(p?.map||seller.map||'')}" placeholder="https://maps.google.com/..."><button type="button" class="btn btn-ghost btn-sm" id="useProductLocation">Lokasi saya</button></div></div><div class="field full"><label>Deskripsi</label><textarea required name="description">${escapeHtml(p?.description||'')}</textarea></div></div><div class="form-actions"><button class="btn btn-outline" type="button" data-close>Batal</button><button class="btn btn-dark">${p?'Simpan perubahan':'Publikasikan produk'}</button></div></form></div>`,true);
  bindLocationButton('#useProductLocation','[name="map"]','[name="location"]');const fileInput=$('[name="image"]');fileInput.onchange=()=>{if(fileInput.files[0])$('#imagePreview').src=URL.createObjectURL(fileInput.files[0]);};
  $('#productForm').onsubmit=async e=>{e.preventDefault();const btn=e.submitter;btn.disabled=true;btn.textContent='Menyimpan…';const fd=new FormData(e.target);const file=fd.get('image');let image=p?.image||svgImages.sayur;try{if(file&&file.size)image=await compressImage(file);}catch{btn.disabled=false;return toast('Gambar tidak dapat diproses. Gunakan JPG/PNG di bawah 8 MB.');}const data={sellerId:seller.id,seller:seller.business,phone:seller.phone,name:fd.get('name').trim(),category:fd.get('category'),price:Number(fd.get('price')),unit:fd.get('unit').trim(),stock:Number(fd.get('stock')),location:fd.get('location').trim(),map:safeMapUrl(fd.get('map')),image,description:fd.get('description').trim(),active:p?.active!==false,sellerActive:true,moderation:p?.moderation||'ok'};if(!data.map){btn.disabled=false;return toast('Tautan Google Maps tidak valid.');}if(p)Object.assign(p,data);else db.products.unshift({id:uid('p'),...data,active:db.settings.autoPublish});try{save('products');}catch{btn.disabled=false;return toast('Penyimpanan penuh. Gunakan foto yang lebih kecil.');}addLog(`${seller.business} ${p?'memperbarui':'menambahkan'} ${data.name}`);closeModal();toast(`Produk berhasil ${p?'diperbarui':'dipublikasikan'}.`);setTimeout(renderSeller,220);};
}
function __pb_2_enhancements_compressImage(file) { return new Promise((resolve,reject)=>{if(file.size>8*1024*1024)return reject(new Error('large'));const reader=new FileReader();reader.onerror=reject;reader.onload=()=>{const img=new Image();img.onerror=reject;img.onload=()=>{const max=1000,scale=Math.min(1,max/Math.max(img.width,img.height));const canvas=document.createElement('canvas');canvas.width=Math.round(img.width*scale);canvas.height=Math.round(img.height*scale);canvas.getContext('2d').drawImage(img,0,0,canvas.width,canvas.height);resolve(canvas.toDataURL('image/jpeg',.78));};img.src=reader.result;};reader.readAsDataURL(file);}); }
function __pb_2_enhancements_toggleOwnProduct(id) { const p=db.products.find(x=>x.id===id);if(p.moderation==='hidden')return toast('Produk ditahan admin dan tidak dapat diaktifkan.');p.active=p.active===false;save('products');addLog(`${p.name} ${p.active?'diaktifkan':'diarsipkan'} penjual`);toast('Status produk diperbarui.');renderSeller(); }
function __pb_2_enhancements_deleteProduct(id) { const p=db.products.find(x=>x.id===id);if(db.orders.some(o=>orderItems(o).some(i=>i.productId===id)&&!['completed','cancelled'].includes(o.status)))return toast('Produk memiliki pesanan aktif dan belum dapat dihapus.');showConfirm('Hapus produk?',`${p.name} akan dihapus permanen dari etalase.`,()=>{db.products=db.products.filter(x=>x.id!==id);state.cart=state.cart.filter(x=>x.productId!==id);save('products');saveCart();addLog(`${p.name} dihapus penjual`);toast('Produk dihapus.');renderSeller();}); }
function __pb_2_enhancements_saveSellerProfile(e,seller) { e.preventDefault();const d=Object.fromEntries(new FormData(e.target));const old=seller.business;d.map=safeMapUrl(d.map);if(!d.map)return toast('Tautan Google Maps tidak valid.');Object.assign(seller,d);db.products.filter(p=>p.sellerId===seller.id).forEach(p=>{p.seller=seller.business;p.phone=seller.phone;});save('sellers');save('products');setSession({...state.session,name:seller.name,business:seller.business});addLog(`${old} memperbarui profil toko`);toast('Profil dan nama toko pada produk diperbarui.');renderSeller(); }
function __pb_2_enhancements_updateOrder(id,status) { const o=db.orders.find(x=>x.id===id);if(!o)return;if(status==='confirmed'&&o.status==='wa'){for(const item of orderItems(o)){const p=db.products.find(x=>x.id===item.productId);if(!p||p.stock<item.qty)return toast(`Stok ${item.name} tidak cukup.`);}for(const item of orderItems(o)){const p=db.products.find(x=>x.id===item.productId);p.stock-=item.qty;}o.stockDeducted=true;save('products');}else if(status==='completed'&&o.status!=='confirmed')return toast('Pesanan harus dikonfirmasi lebih dahulu.');else if(status==='cancelled'&&o.stockDeducted){for(const item of orderItems(o)){const p=db.products.find(x=>x.id===item.productId);if(p)p.stock+=item.qty;}o.stockDeducted=false;save('products');}o.status=status;o.updated=today();save('orders');addLog(`${o.id} ${status==='confirmed'?'dikonfirmasi; stok dikurangi':status==='completed'?'ditandai selesai':'dibatalkan'}`);toast(`Pesanan ${statusLabel(status).toLowerCase()}.`);renderSeller(); }
function __pb_2_enhancements_contactBuyer(id) { const o=db.orders.find(x=>x.id===id);const msg=`Halo ${o.buyer}, kami dari ${o.seller} menghubungi terkait pesanan ${o.id}.`;window.open(`https://wa.me/${o.buyerPhone}?text=${encodeURIComponent(msg)}`,'_blank','noopener'); }

// Re-bind and repaint after the enhancement layer is loaded.
applySettings();
updateHeader();
if (state.view === 'products') renderProducts(); else renderHome();
/* ===== END enhancements.js ===== */

/* ===== BEGIN realism.js: ordered execution phase 3 ===== */
window["credentialHash"] = __pb_3_realism_credentialHash;
window["validUsername"] = __pb_3_realism_validUsername;
window["validCoordinates"] = __pb_3_realism_validCoordinates;
window["mapsPoint"] = __pb_3_realism_mapsPoint;
window["mapsRoute"] = __pb_3_realism_mapsRoute;
window["distanceKm"] = __pb_3_realism_distanceKm;
window["phoneDisplay"] = __pb_3_realism_phoneDisplay;
window["buyerOrders"] = __pb_3_realism_buyerOrders;
window["showRoleChooser"] = __pb_3_realism_showRoleChooser;
window["renderHome"] = __pb_3_realism_renderHome;
window["renderHow"] = __pb_3_realism_renderHow;
window["showBuyerAuth"] = __pb_3_realism_showBuyerAuth;
window["bindPasswordToggles"] = __pb_3_realism_bindPasswordToggles;
window["showBuyerAccount"] = __pb_3_realism_showBuyerAccount;
window["showChangePassword"] = __pb_3_realism_showChangePassword;
window["showSellerEntry"] = __pb_3_realism_showSellerEntry;
window["showSellerRegistration"] = __pb_3_realism_showSellerRegistration;
window["bindCoordinateCapture"] = __pb_3_realism_bindCoordinateCapture;
window["bindCoordinatePreview"] = __pb_3_realism_bindCoordinatePreview;
window["updateCoordinatePreview"] = __pb_3_realism_updateCoordinatePreview;
window["approveApplication"] = __pb_3_realism_approveApplication;
window["showTrackingResult"] = __pb_3_realism_showTrackingResult;
window["showProduct"] = __pb_3_realism_showProduct;
window["measureBuyerDistance"] = __pb_3_realism_measureBuyerDistance;
window["whatsAppUrl"] = __pb_3_realism_whatsAppUrl;
window["launchWhatsApp"] = __pb_3_realism_launchWhatsApp;
window["createOrderAndOpenWhatsApp"] = __pb_3_realism_createOrderAndOpenWhatsApp;
window["showWhatsAppFallback"] = __pb_3_realism_showWhatsAppFallback;
window["sellerTabContent"] = __pb_3_realism_sellerTabContent;
window["paintSellerTab"] = __pb_3_realism_paintSellerTab;
window["showProductEditor"] = __pb_3_realism_showProductEditor;
window["saveSellerProfile"] = __pb_3_realism_saveSellerProfile;
window["buyerTable"] = __pb_3_realism_buyerTable;
window["showBuyerDetail"] = __pb_3_realism_showBuyerDetail;
window["orderTable"] = __pb_3_realism_orderTable;
window["showSellerDetail"] = __pb_3_realism_showSellerDetail;
window["showReportForm"] = __pb_3_realism_showReportForm;
window["setupMobileDrawer"] = __pb_3_realism_setupMobileDrawer;

/* Parangbaddo' Store v3 — realistic UI, password accounts, precise coordinates */

const realismPhotos = {
  p1: 'assets/products/gula-aren.jpg',
  p2: 'assets/products/sayur-segar.jpg',
  p3: 'assets/products/sambal.jpg',
  p4: 'assets/products/kopi.jpg',
  p5: 'assets/products/telur.jpg',
  p6: 'assets/products/anyaman.jpg'
};
const sellerCoordinates = {
  s1: [-5.343119, 119.505961], s2: [-5.344210, 119.503180], s3: [-5.340940, 119.507420],
  s4: [-5.346110, 119.500860], s5: [-5.341760, 119.509210]
};
function __pb_3_realism_credentialHash(text) {
  let h1 = 0x811c9dc5, h2 = 0x9e3779b9;
  for (let i = 0; i < String(text).length; i++) {
    const c = String(text).charCodeAt(i);
    h1 = Math.imul(h1 ^ c, 16777619);
    h2 = Math.imul(h2 ^ c, 2246822519);
  }
  return `v3-${(h1 >>> 0).toString(16).padStart(8,'0')}${(h2 >>> 0).toString(16).padStart(8,'0')}`;
}
function __pb_3_realism_validUsername(value) { return /^[a-z0-9._-]{4,24}$/.test(String(value || '').toLowerCase()); }
function __pb_3_realism_validCoordinates(lat, lng) { return Number.isFinite(Number(lat)) && Number.isFinite(Number(lng)) && Number(lat) >= -90 && Number(lat) <= 90 && Number(lng) >= -180 && Number(lng) <= 180; }
function __pb_3_realism_mapsPoint(lat, lng) { return `https://www.google.com/maps/search/?api=1&query=${Number(lat).toFixed(6)},${Number(lng).toFixed(6)}`; }
function __pb_3_realism_mapsRoute(lat, lng) { return `https://www.google.com/maps/dir/?api=1&destination=${Number(lat).toFixed(6)},${Number(lng).toFixed(6)}&travelmode=driving`; }
function __pb_3_realism_distanceKm(lat1, lon1, lat2, lon2) {
  const toRad = x => x * Math.PI / 180, r = 6371;
  const dLat = toRad(lat2-lat1), dLon = toRad(lon2-lon1);
  const a = Math.sin(dLat/2)**2 + Math.cos(toRad(lat1))*Math.cos(toRad(lat2))*Math.sin(dLon/2)**2;
  return r * 2 * Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
}
function __pb_3_realism_phoneDisplay(phone) { const digits=String(phone||'').replace(/\D/g,'');return digits?`+${digits}`:'Tidak dicantumkan'; }
function __pb_3_realism_buyerOrders(buyer) { return db.orders.filter(o => o.buyerId === buyer.id || o.buyerUsername === buyer.username || (buyer.phone && o.buyerPhone === buyer.phone)); }

// Migrate demo data without overwriting user-uploaded photos.
db.sellers.forEach((s,i) => {
  s.username ||= ['arifstore','kebunsari','dapurdaeng','ternaksejahtera','anyamannur'][i] || `toko${i+1}`;
  s.passwordHash ||= credentialHash(i === 0 ? 'jualan123' : 'jualan123');
  const point=sellerCoordinates[s.id]||[-5.343119+(i*.0006),119.505961+(i*.0005)];
  s.lat = Number(s.lat || point[0]); s.lng = Number(s.lng || point[1]); s.map=mapsPoint(s.lat,s.lng);
});
db.buyers.forEach((b,i) => {
  b.username ||= i === 0 ? 'andi' : i === 1 ? 'fitri' : `warga${String(i+1).padStart(2,'0')}`;
  b.passwordHash ||= credentialHash(i === 0 ? 'belanja123' : i === 1 ? 'fitri123' : 'belanja123');
});
db.applications.forEach((a,i) => {
  a.username ||= `calontoko${i+1}`;
  a.passwordHash ||= credentialHash('jualan123');
  a.lat ||= -5.343119+(i*.0007); a.lng ||= 119.505961-(i*.0005); a.maps=mapsPoint(a.lat,a.lng);
});
db.products.forEach(p => {
  if (realismPhotos[p.id] && String(p.image).startsWith('data:image/svg')) p.image=realismPhotos[p.id];
  const seller=db.sellers.find(s=>s.id===p.sellerId);
  p.lat=Number(p.lat||seller?.lat||-5.343119);p.lng=Number(p.lng||seller?.lng||119.505961);p.map=mapsPoint(p.lat,p.lng);
});
save('sellers');save('buyers');save('applications');save('products');

function __pb_3_realism_showRoleChooser() {
  openModal(`<div class="modal-head access-head"><div><p class="eyebrow">Akses akun</p><h2>Pilih layanan</h2><p>Masuk sesuai peran Anda di Parangbaddo’ Store.</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><div class="access-list">
    <button data-access-role="buyer"><span class="access-icon">${icon('user')}</span><span><strong>Akun pembeli</strong><small>Masuk atau buat akun dengan username dan kata sandi</small></span>${icon('arrow')}</button>
    <button data-access-role="seller"><span class="access-icon">${icon('store')}</span><span><strong>Portal penjual</strong><small>Kelola produk, lokasi toko, stok, dan pesanan</small></span>${icon('arrow')}</button>
    <button data-access-role="admin"><span class="access-icon">${icon('shield')}</span><span><strong>Admin desa</strong><small>Verifikasi toko dan kelola marketplace</small></span>${icon('arrow')}</button>
  </div><p class="access-note">Akun pembeli tidak memerlukan OTP atau nomor WhatsApp.</p></div>`);
  $$('[data-access-role]').forEach(b=>b.onclick=()=>{closeModal();setTimeout(()=>handleRole(b.dataset.accessRole),230);});
}

function __pb_3_realism_renderHome() {
  const visible=db.products.filter(productIsVisible);
  const categories=[...new Set(visible.map(p=>p.category))].slice(0,5);
  view.innerHTML=`
    <section class="real-hero">
      <div class="real-hero-media"><img src="assets/village-hero-real.jpg" alt="Pemandangan udara area persawahan dan permukiman desa di Indonesia"><div class="real-location">${icon('map')} Desa Parangbaddo’, Takalar</div></div>
      <div class="real-hero-copy"><span class="official-tag"><i></i> Marketplace warga desa</span><h1>Belanja langsung dari usaha warga Parangbaddo’.</h1><p>Cari kebutuhan sehari-hari, lihat lokasi toko dengan jelas, lalu hubungi penjual melalui WhatsApp tanpa perantara pembayaran.</p><div class="hero-actions"><button class="btn btn-dark" data-go-products>Lihat semua produk ${icon('arrow')}</button><button class="btn btn-outline" data-home-login>Masuk akun</button></div><div class="real-trust"><span>${icon('shield')} Penjual diperiksa admin desa</span><span>${icon('map')} Titik toko dapat dinavigasi</span></div></div>
    </section>
    <section class="market-summary"><div><strong>${db.sellers.filter(s=>s.status==='approved').length}</strong><span>Usaha terdaftar</span></div><div><strong>${visible.length}</strong><span>Produk tersedia</span></div><div><strong>${categories.length}</strong><span>Kategori lokal</span></div><div class="summary-action"><button data-go-products>Jelajahi katalog ${icon('arrow')}</button></div></section>
    <section class="real-section"><div class="container"><div class="real-section-head"><div><span class="section-kicker">Produk pilihan</span><h2>Baru dari warga</h2></div><button class="plain-link" data-go-products>Lihat katalog lengkap ${icon('arrow')}</button></div><div class="product-grid home-products">${visible.slice(0,4).map(productCard).join('')}</div></div></section>
    <section class="home-guide"><div class="container"><div class="guide-copy"><span class="section-kicker">Cara belanja</span><h2>Tiga langkah, langsung terhubung.</h2><p>Website mencatat nota. Pembayaran, pengiriman, atau pengambilan barang disepakati langsung bersama penjual.</p></div><div class="guide-steps"><div><b>01</b><span><strong>Pilih produk</strong><small>Cek harga, stok, dan titik toko.</small></span></div><div><b>02</b><span><strong>Tentukan jumlah</strong><small>Total dihitung otomatis.</small></span></div><div><b>03</b><span><strong>Lanjut ke WhatsApp</strong><small>Nota siap dikirim ke penjual.</small></span></div></div></div></section>
    <section class="seller-banner"><div><span class="section-kicker">Untuk pelaku usaha desa</span><h2>Punya produk untuk dijual?</h2><p>Ajukan toko. Admin desa akan memeriksa data dan titik lokasi usaha Anda.</p></div><button class="btn btn-light" data-role="seller">Daftarkan usaha ${icon('arrow')}</button></section>`;
  bindCommon();$('[data-home-login]')?.addEventListener('click',showRoleChooser);
}

function __pb_3_realism_renderHow() {
  view.innerHTML=`<section class="simple-page-head"><div class="container"><span class="section-kicker">Panduan penggunaan</span><h1>Alur yang jelas untuk semua pengguna.</h1><p>Pembeli, penjual, dan admin mempunyai tugas berbeda. Transaksi tetap disepakati langsung melalui WhatsApp.</p></div></section>
  <section class="real-section"><div class="container"><div class="process-columns"><article><span>PEMBELI</span><h2>Cari dan pesan</h2><ol><li><b>1</b>Buat akun memakai email dan kata sandi; verifikasi email bila diminta.</li><li><b>2</b>Cari produk dan periksa stok serta lokasi toko.</li><li><b>3</b>Tentukan jumlah dan periksa total nota.</li><li><b>4</b>Kirim nota otomatis melalui WhatsApp.</li></ol></article><article><span>PENJUAL</span><h2>Kelola usaha</h2><ol><li><b>1</b>Ajukan data usaha dan titik koordinat.</li><li><b>2</b>Tunggu persetujuan admin desa.</li><li><b>3</b>Unggah produk, harga, foto, dan stok.</li><li><b>4</b>Konfirmasi pesanan sebelum stok berkurang.</li></ol></article><article><span>ADMIN DESA</span><h2>Jaga marketplace</h2><ol><li><b>1</b>Periksa identitas dan lokasi usaha.</li><li><b>2</b>Setujui, minta revisi, atau tolak pengajuan.</li><li><b>3</b>Moderasi produk serta akun pengguna.</li><li><b>4</b>Tindak lanjuti laporan yang masuk.</li></ol></article></div></div></section>
  <section class="transaction-note"><div class="container"><div>${icon('whatsapp')}<span><strong>Pembayaran tidak diproses website</strong><small>Metode bayar dan pengiriman ditentukan pembeli bersama penjual di WhatsApp.</small></span></div><button class="btn btn-dark" data-go-products>Mulai belanja</button></div></section>`;
  bindCommon();
}

function __pb_3_realism_showBuyerAuth(mode='login') {
  if(state.session?.role==='buyer')return showBuyerAccount();
  if(state.session&&state.session.role!=='buyer')return openModal(`<div class="modal-head"><div><p class="eyebrow">Ganti akun</p><h2>Masuk sebagai pembeli</h2><p>Keluar dari sesi ${state.session.role==='admin'?'admin':'penjual'} untuk melanjutkan.</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><button class="btn btn-dark btn-block" id="switchBuyer">Keluar dan lanjut</button></div>`),$('#switchBuyer').onclick=()=>{setSession(null);showBuyerAuth(mode);};
  const login=mode==='login';
  openModal(`<div class="modal-head auth-title"><div><p class="eyebrow">Akun pembeli</p><h2>${login?'Selamat datang kembali':'Buat akun baru'}</h2><p>${login?'Masukkan akun untuk melihat riwayat pesanan.':'Cukup username dan kata sandi. Tanpa OTP.'}</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><div class="auth-tabs"><button class="${login?'active':''}" data-buyer-mode="login">Masuk</button><button class="${!login?'active':''}" data-buyer-mode="register">Daftar</button></div>${login?`
    <form id="buyerLogin" class="auth-form"><div class="field"><label>Username</label><input required autocomplete="username" name="username" placeholder="contoh: andi"></div><div class="field"><label>Kata sandi</label><div class="password-field"><input required autocomplete="current-password" type="password" name="password" placeholder="Kata sandi"><button type="button" data-toggle-password>Lihat</button></div></div><button class="btn btn-dark btn-block">Masuk</button></form><div class="demo-login"><span>Akun demo</span><code>andi / belanja123</code><button id="fillBuyerDemo">Gunakan</button></div>`:`
    <form id="buyerRegister" class="auth-form"><div class="field"><label>Username</label><input required autocomplete="username" name="username" minlength="4" maxlength="24" placeholder="huruf kecil, angka, titik atau garis bawah"><small>Username digunakan sebagai nama akun saat membuat pesanan.</small></div><div class="field"><label>Kata sandi</label><div class="password-field"><input required autocomplete="new-password" type="password" name="password" minlength="6" placeholder="Minimal 6 karakter"><button type="button" data-toggle-password>Lihat</button></div></div><div class="field"><label>Ulangi kata sandi</label><input required autocomplete="new-password" type="password" name="confirm" minlength="6" placeholder="Ulangi kata sandi"></div><button class="btn btn-dark btn-block">Buat akun pembeli</button></form><p class="form-legal">Dengan membuat akun, Anda menyetujui penggunaan data hanya untuk operasional marketplace desa.</p>`}</div>`);
  $$('[data-buyer-mode]').forEach(b=>b.onclick=()=>showBuyerAuth(b.dataset.buyerMode));bindPasswordToggles();
  $('#fillBuyerDemo')?.addEventListener('click',()=>{$('#buyerLogin [name=username]').value='andi';$('#buyerLogin [name=password]').value='belanja123';});
  $('#buyerLogin')?.addEventListener('submit',e=>{e.preventDefault();const d=Object.fromEntries(new FormData(e.target));const buyer=db.buyers.find(b=>b.username?.toLowerCase()===d.username.trim().toLowerCase());if(!buyer||buyer.passwordHash!==credentialHash(d.password))return toast('Username atau kata sandi salah.');if(buyer.status!=='active')return toast('Akun sedang diblokir. Hubungi admin desa.');setSession({role:'buyer',id:buyer.id,username:buyer.username,name:buyer.name||buyer.username,phone:buyer.phone||''});closeModal();toast(`Selamat datang, ${buyer.name||buyer.username}.`);const action=state.pendingAction;state.pendingAction=null;if(action)setTimeout(action,240);});
  $('#buyerRegister')?.addEventListener('submit',e=>{e.preventDefault();const d=Object.fromEntries(new FormData(e.target));const username=d.username.trim().toLowerCase();if(!validUsername(username))return toast('Username harus 4–24 karakter: huruf kecil, angka, titik, garis bawah, atau strip.');if(d.password.length<6)return toast('Kata sandi minimal 6 karakter.');if(d.password!==d.confirm)return toast('Ulangi kata sandi belum sama.');if(db.buyers.some(b=>b.username?.toLowerCase()===username)||db.sellers.some(s=>s.username?.toLowerCase()===username))return toast('Username sudah digunakan. Pilih username lain.');const buyer={id:uid('b'),username,name:username,passwordHash:credentialHash(d.password),phone:'',status:'active',joined:today()};db.buyers.push(buyer);save('buyers');addLog(`Akun pembeli @${username} dibuat`);setSession({role:'buyer',id:buyer.id,username,name:username,phone:''});closeModal();toast('Akun berhasil dibuat. Anda sudah masuk.');const action=state.pendingAction;state.pendingAction=null;if(action)setTimeout(action,240);});
}
function __pb_3_realism_bindPasswordToggles(){$$('[data-toggle-password]').forEach(b=>b.onclick=()=>{const input=b.parentElement.querySelector('input');input.type=input.type==='password'?'text':'password';b.textContent=input.type==='password'?'Lihat':'Sembunyikan';});}

function __pb_3_realism_showBuyerAccount() {
  const buyer=db.buyers.find(b=>b.id===state.session.id)||state.session,orders=buyerOrders(buyer);
  openModal(`<div class="modal-head"><div><p class="eyebrow">Akun pembeli</p><h2>@${escapeHtml(buyer.username)}</h2><p>${orders.length} riwayat pesanan</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><div class="account-summary"><div class="account-avatar">${initials(buyer.name||buyer.username)}</div><div><strong>${escapeHtml(buyer.name||buyer.username)}</strong><span>Akun aktif sejak ${buyer.joined||'-'}</span></div><span class="status active">Aktif</span></div><form id="buyerProfile" class="profile-form"><div class="form-grid"><div class="field"><label>Username</label><input value="${escapeHtml(buyer.username)}" disabled></div><div class="field"><label>Nama tampilan</label><input name="name" value="${escapeHtml(buyer.name||buyer.username)}" required></div><div class="field full"><label>Nomor WhatsApp pribadi <span class="optional">opsional</span></label><input name="phone" value="${buyer.phone?`0${buyer.phone.slice(2)}`:''}" placeholder="Tidak wajib untuk membuat akun"><small>Dipakai hanya bila penjual perlu menghubungi Anda dari dashboard.</small></div></div><div class="form-actions"><button class="btn btn-ghost btn-sm">Simpan profil</button><button type="button" class="text-btn" id="changeBuyerPassword">Ubah kata sandi</button></div></form><div class="panel account-orders"><div class="panel-head"><h3>Riwayat pesanan</h3><button class="plain-link" id="buyerBrowse">Cari produk</button></div><div class="buyer-order-list">${orders.length?orders.map(buyerOrderCard).join(''):`<div class="empty-state"><strong>Belum ada pesanan</strong><p>Pesanan yang dibuat akan tampil di sini.</p></div>`}</div></div><button class="btn btn-outline btn-sm" id="logoutBuyer">Keluar dari akun</button></div>`,true);
  $('#buyerProfile').onsubmit=e=>{e.preventDefault();const d=Object.fromEntries(new FormData(e.target));if(d.phone&&!isValidPhone(d.phone))return toast('Nomor WhatsApp tidak valid.');buyer.name=d.name.trim();buyer.phone=d.phone?normalizePhone(d.phone):'';save('buyers');setSession({...state.session,name:buyer.name,phone:buyer.phone});toast('Profil berhasil diperbarui.');showBuyerAccount();};
  $('#changeBuyerPassword').onclick=()=>showChangePassword('buyer',buyer);$('#buyerBrowse').onclick=()=>{closeModal();setTimeout(()=>navigate('products'),230)};$('#logoutBuyer').onclick=()=>{setSession(null);closeModal();toast('Anda telah keluar.');};
  $$('[data-buyer-order]').forEach(b=>b.onclick=()=>showOrderDetail(b.dataset.buyerOrder,'buyer'));$$('[data-report-order]').forEach(b=>b.onclick=()=>showReportForm(b.dataset.reportOrder));$$('[data-cancel-buyer]').forEach(b=>b.onclick=()=>cancelBuyerOrder(b.dataset.cancelBuyer));
}
function __pb_3_realism_showChangePassword(role,user){openModal(`<div class="modal-head"><div><p class="eyebrow">Keamanan akun</p><h2>Ubah kata sandi</h2><p>Gunakan minimal 6 karakter.</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><form id="passwordForm" class="auth-form"><div class="field"><label>Kata sandi saat ini</label><input required type="password" name="current"></div><div class="field"><label>Kata sandi baru</label><input required type="password" minlength="6" name="next"></div><div class="field"><label>Ulangi kata sandi baru</label><input required type="password" minlength="6" name="confirm"></div><button class="btn btn-dark btn-block">Simpan kata sandi</button></form></div>`);$('#passwordForm').onsubmit=e=>{e.preventDefault();const d=Object.fromEntries(new FormData(e.target));if(user.passwordHash!==credentialHash(d.current))return toast('Kata sandi saat ini salah.');if(d.next!==d.confirm)return toast('Ulangi kata sandi belum sama.');user.passwordHash=credentialHash(d.next);save(role==='buyer'?'buyers':'sellers');closeModal();toast('Kata sandi berhasil diubah.');};}

function __pb_3_realism_showSellerEntry() {
  if(state.session?.role==='seller')return navigate('seller');
  openModal(`<div class="modal-head"><div><p class="eyebrow">Portal penjual</p><h2>Kelola usaha Anda</h2><p>Masuk dengan username dan kata sandi setelah akun disetujui.</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><form id="sellerLogin" class="auth-form"><div class="field"><label>Username penjual</label><input required autocomplete="username" name="username" placeholder="Username toko"></div><div class="field"><label>Kata sandi</label><div class="password-field"><input required autocomplete="current-password" type="password" name="password"><button type="button" data-toggle-password>Lihat</button></div></div><button class="btn btn-dark btn-block">Masuk ke dashboard</button></form><div class="demo-login"><span>Akun demo</span><code>arifstore / jualan123</code><button id="fillSellerDemo">Gunakan</button></div><div class="seller-entry-actions"><button class="btn btn-outline" id="trackSeller">Lacak pengajuan</button><button class="btn btn-outline" id="registerSeller">Daftarkan usaha</button></div></div>`);
  bindPasswordToggles();$('#fillSellerDemo').onclick=()=>{$('[name=username]').value='arifstore';$('[name=password]').value='jualan123';};$('#registerSeller').onclick=()=>showSellerRegistration();$('#trackSeller').onclick=showApplicationTracking;
  $('#sellerLogin').onsubmit=e=>{e.preventDefault();const d=Object.fromEntries(new FormData(e.target));const seller=db.sellers.find(s=>s.username?.toLowerCase()===d.username.trim().toLowerCase());if(!seller||seller.passwordHash!==credentialHash(d.password))return toast('Username atau kata sandi penjual salah.');if(seller.status!=='approved')return toast('Toko sedang ditangguhkan admin.');setSession({role:'seller',id:seller.id,username:seller.username,name:seller.name,business:seller.business,phone:seller.phone});closeModal();toast(`Masuk sebagai ${seller.business}.`);navigate('seller');};
}

function __pb_3_realism_showSellerRegistration(existing=null) {
  const hasAccount=!!existing?.username;
  openModal(`<div class="modal-head"><div><p class="eyebrow">${existing?'Perbaikan pengajuan':'Pendaftaran usaha'}</p><h2>${existing?'Lengkapi data usaha':'Ajukan toko baru'}</h2><p>Data dan titik koordinat akan diperiksa admin desa.</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><form id="sellerRegister"><div class="form-section-title"><span>1</span><div><strong>Akun penjual</strong><small>Dipakai masuk setelah permohonan disetujui.</small></div></div><div class="form-grid"><div class="field"><label>Username</label><input required name="username" value="${escapeHtml(existing?.username||'')}" ${hasAccount?'readonly':''} placeholder="contoh: tokorina"></div><div class="field"><label>${existing?'Kata sandi baru (opsional)':'Kata sandi'}</label><div class="password-field"><input ${existing?'':'required'} type="password" minlength="6" name="password" placeholder="Minimal 6 karakter"><button type="button" data-toggle-password>Lihat</button></div></div></div><div class="form-section-title"><span>2</span><div><strong>Data usaha</strong><small>Pastikan dapat diverifikasi oleh admin.</small></div></div><div class="form-grid"><div class="field"><label>Nama pemilik</label><input required name="name" value="${escapeHtml(existing?.name||'')}"></div><div class="field"><label>Nama usaha</label><input required name="business" value="${escapeHtml(existing?.business||'')}"></div><div class="field"><label>WhatsApp penjual</label><input required name="phone" inputmode="tel" value="${existing?.phone?`0${existing.phone.slice(2)}`:''}" placeholder="08xxxxxxxxxx"></div><div class="field"><label>Kategori</label><select name="category">${db.settings.categories.map(c=>`<option ${existing?.category===c?'selected':''}>${escapeHtml(c)}</option>`).join('')}</select></div><div class="field full"><label>Alamat lengkap</label><input required name="address" value="${escapeHtml(existing?.address||'')}" placeholder="Dusun, RT/RW, patokan lokasi"></div><div class="field full"><label>Deskripsi usaha</label><textarea required name="description">${escapeHtml(existing?.description||'')}</textarea></div></div><div class="form-section-title"><span>3</span><div><strong>Titik koordinat toko</strong><small>Koordinat ini dipakai pembeli untuk membuka rute.</small></div></div><div class="coordinate-box"><div class="form-grid"><div class="field"><label>Latitude</label><input required type="number" step="any" name="lat" value="${existing?.lat||''}" placeholder="-5.343119"></div><div class="field"><label>Longitude</label><input required type="number" step="any" name="lng" value="${existing?.lng||''}" placeholder="119.505961"></div></div><button type="button" class="btn btn-ghost btn-sm" id="captureApplicationCoords">${icon('map')} Gunakan lokasi perangkat saat ini</button><a class="coordinate-preview ${existing?.lat?'':'hidden'}" id="applicationMapPreview" target="_blank">Periksa titik di Google Maps ${icon('arrow')}</a></div><div class="form-actions"><button type="button" class="btn btn-outline" data-close>Batal</button><button class="btn btn-dark">Kirim ke admin desa</button></div></form></div>`,true);
  bindPasswordToggles();bindCoordinateCapture('#captureApplicationCoords','[name=lat]','[name=lng]','#applicationMapPreview');bindCoordinatePreview('[name=lat]','[name=lng]','#applicationMapPreview');
  $('#sellerRegister').onsubmit=e=>{e.preventDefault();const d=Object.fromEntries(new FormData(e.target)),username=d.username.trim().toLowerCase();if(!validUsername(username))return toast('Username harus 4–24 karakter dan tanpa spasi.');if(!existing&&d.password.length<6)return toast('Kata sandi minimal 6 karakter.');if(!isValidPhone(d.phone))return toast('Nomor WhatsApp penjual tidak valid.');if(!validCoordinates(d.lat,d.lng))return toast('Koordinat lokasi tidak valid.');if(!existing&&(db.sellers.some(s=>s.username===username)||db.applications.some(a=>a.username===username&&a.status!=='rejected')))return toast('Username sudah digunakan atau sedang diajukan.');const payload={username,name:d.name.trim(),business:d.business.trim(),phone:normalizePhone(d.phone),category:d.category,address:d.address.trim(),description:d.description.trim(),lat:Number(d.lat),lng:Number(d.lng),maps:mapsPoint(d.lat,d.lng)};if(d.password)payload.passwordHash=credentialHash(d.password);let app;if(existing){Object.assign(existing,payload,{status:'pending',reason:'',submitted:today()});existing.history.push({status:'pending',at:today(),note:'Data koordinat/usaha diperbarui dan dikirim kembali.'});app=existing;}else{app={id:`REG-${Math.floor(1000+Math.random()*9000)}`,...payload,passwordHash:credentialHash(d.password),status:'pending',submitted:today(),history:[{status:'pending',at:today(),note:'Pengajuan diterima sistem.'}]};db.applications.unshift(app);}save('applications');addLog(`Pengajuan ${app.business} masuk`);showApplicationSubmitted(app);};
}
function __pb_3_realism_bindCoordinateCapture(buttonSelector,latSelector,lngSelector,previewSelector){$(buttonSelector)?.addEventListener('click',()=>{if(!navigator.geolocation)return toast('Perangkat tidak mendukung layanan lokasi.');const btn=$(buttonSelector);btn.disabled=true;btn.textContent='Mengambil koordinat…';navigator.geolocation.getCurrentPosition(pos=>{const lat=pos.coords.latitude.toFixed(6),lng=pos.coords.longitude.toFixed(6);$(latSelector).value=lat;$(lngSelector).value=lng;btn.disabled=false;btn.innerHTML=`${icon('check')} Lokasi berhasil diambil`;updateCoordinatePreview(latSelector,lngSelector,previewSelector);toast(`Koordinat ditemukan dengan akurasi ±${Math.round(pos.coords.accuracy||0)} meter.`);},()=>{btn.disabled=false;btn.innerHTML=`${icon('map')} Coba ambil lokasi lagi`;toast('Izin lokasi ditolak. Masukkan latitude dan longitude secara manual.');},{enableHighAccuracy:true,timeout:12000,maximumAge:0});});}
function __pb_3_realism_bindCoordinatePreview(latSelector,lngSelector,previewSelector){[$(latSelector),$(lngSelector)].forEach(el=>el?.addEventListener('input',()=>updateCoordinatePreview(latSelector,lngSelector,previewSelector)));updateCoordinatePreview(latSelector,lngSelector,previewSelector);}
function __pb_3_realism_updateCoordinatePreview(latSelector,lngSelector,previewSelector){const lat=$(latSelector)?.value,lng=$(lngSelector)?.value,preview=$(previewSelector);if(!preview)return;if(validCoordinates(lat,lng)){preview.href=mapsPoint(lat,lng);preview.classList.remove('hidden');}else preview.classList.add('hidden');}

function __pb_3_realism_approveApplication(id) {
  const a=db.applications.find(x=>x.id===id);if(!a||a.status==='approved')return;let seller=db.sellers.find(s=>s.username===a.username||s.phone===a.phone);if(!seller){seller={id:uid('s'),username:a.username,passwordHash:a.passwordHash||credentialHash('jualan123'),name:a.name,business:a.business,phone:a.phone,category:a.category,address:a.address,bio:a.description,lat:Number(a.lat),lng:Number(a.lng),map:mapsPoint(a.lat,a.lng),status:'approved',joined:today()};db.sellers.push(seller);}else Object.assign(seller,{status:'approved',username:a.username||seller.username,passwordHash:a.passwordHash||seller.passwordHash,lat:Number(a.lat||seller.lat),lng:Number(a.lng||seller.lng)});a.status='approved';a.reason='';a.approvedSellerId=seller.id;a.history.push({status:'approved',at:today(),note:'Disetujui Admin Desa; akun penjual diaktifkan.'});save('applications');save('sellers');addLog(`Admin menyetujui ${a.business}`);const message=`Halo ${a.name}, pengajuan ${a.id} untuk ${a.business} telah disetujui. Akun penjual aktif dengan username: ${a.username}. Silakan masuk ke Parangbaddo' Store.`;const wa=whatsAppUrl(a.phone,message);openModal(`<div class="modal-head"><div><p class="eyebrow">Pengajuan disetujui</p><h2>Akun penjual aktif</h2><p>${a.id} · ${escapeHtml(a.business)}</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><div class="approval-summary">${icon('check')}<div><strong>Username: @${escapeHtml(a.username)}</strong><span>Titik toko dan profil sudah dibuat.</span></div></div><a href="${wa}" target="_blank" rel="noopener" class="btn wa-btn btn-block">${icon('whatsapp')} Beri tahu penjual melalui WhatsApp</a><button class="btn btn-outline btn-block" style="margin-top:9px" id="backApplications">Kembali ke daftar</button></div>`);$('#backApplications').onclick=()=>{closeModal();setTimeout(renderAdmin,230)};
}
function __pb_3_realism_showTrackingResult(a){openModal(`<div class="modal-head"><div><p class="eyebrow">${a.id}</p><h2>${escapeHtml(a.business)}</h2><p>Dikirim ${a.submitted}</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><div class="tracking-status"><span class="round-icon">${icon(a.status==='approved'?'check':a.status==='rejected'?'x':'clock')}</span><span class="status ${a.status}">${applicationLabel(a.status)}</span><p>${a.status==='pending'?'Data usaha dan titik koordinat sedang diperiksa admin desa.':a.status==='approved'?`Akun aktif. Masuk menggunakan username @${escapeHtml(a.username)}.`:a.status==='revision'?`Perlu diperbaiki: ${escapeHtml(a.reason||'Data belum lengkap.')}`:`Alasan: ${escapeHtml(a.reason||'Tidak memenuhi ketentuan.')}`}</p></div>${a.status==='approved'?`<button class="btn btn-dark btn-block" id="loginApproved">Masuk ke portal penjual</button>`:''}${a.status==='revision'?`<button class="btn btn-dark btn-block" id="reviseApplication">Perbaiki data</button>`:''}<div class="timeline">${(a.history||[]).slice().reverse().map(h=>`<div><span></span><p><b>${applicationLabel(h.status)}</b><small>${h.at} · ${escapeHtml(h.note||'')}</small></p></div>`).join('')}</div></div>`);$('#loginApproved')?.addEventListener('click',()=>{showSellerEntry();setTimeout(()=>{$('#sellerLogin [name=username]').value=a.username||'';},20)});$('#reviseApplication')?.addEventListener('click',()=>showSellerRegistration(a));}

function __pb_3_realism_showProduct(id) {
  const p=db.products.find(x=>x.id===id);if(!p||!productIsVisible(p))return toast('Produk sedang tidak tersedia.');state.selectedProduct=id;state.qty=1;const lat=Number(p.lat),lng=Number(p.lng),route=mapsRoute(lat,lng),point=mapsPoint(lat,lng);
  modalRoot.innerHTML=`<div class="modal product-modal real-product-modal" role="dialog" aria-modal="true"><button class="icon-btn modal-floating-close" data-close>${icon('x')}</button><div class="product-detail"><div class="product-detail-image"><img src="${p.image}" alt="${escapeHtml(p.name)}"><span class="photo-label">Foto produk penjual</span></div><div class="product-detail-copy"><div class="product-meta"><span>${escapeHtml(p.category)}</span><span>Stok ${p.stock}</span></div><h2>${escapeHtml(p.name)}</h2><div class="large-price">${rupiah(p.price)} <span>/ ${escapeHtml(p.unit)}</span></div><p class="product-description">${escapeHtml(p.description)}</p><div class="store-location-card"><div class="store-location-head"><span class="location-pin">${icon('map')}</span><span><strong>${escapeHtml(p.seller)}</strong><small>${escapeHtml(p.location)}</small></span></div><code>${lat.toFixed(6)}, ${lng.toFixed(6)}</code><div class="location-actions"><a href="${point}" target="_blank" rel="noopener">Lihat titik</a><a class="route-link" href="${route}" target="_blank" rel="noopener">${icon('arrow')} Petunjuk arah</a><button id="measureDistance">Hitung jarak saya</button></div><p id="distanceResult" class="distance-result hidden"></p></div><div class="qty-row"><div><strong>Jumlah</strong><small>Tersedia ${p.stock} ${escapeHtml(p.unit)}</small></div><div class="qty-control"><button id="qtyMinus">−</button><strong id="qtyValue">1</strong><button id="qtyPlus">+</button></div></div><div class="total-box"><span>Total sementara</span><strong id="orderTotal">${rupiah(p.price)}</strong></div><div class="product-actions"><button id="addCart" class="btn btn-outline">${icon('bag')} Keranjang</button><button id="orderWa" class="btn wa-btn">${icon('whatsapp')} Pesan via WA</button></div></div></div></div>`;
  modalRoot.classList.add('open');modalRoot.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';const repaint=()=>{$('#qtyValue').textContent=state.qty;$('#orderTotal').textContent=rupiah(p.price*state.qty);};$('#qtyMinus').onclick=()=>{state.qty=Math.max(1,state.qty-1);repaint();};$('#qtyPlus').onclick=()=>{state.qty=Math.min(p.stock,state.qty+1);repaint();};$('#addCart').onclick=()=>{addToCart(p.id,state.qty);closeModal();toast('Produk masuk ke keranjang.');};$('#orderWa').onclick=()=>ensureBuyer(()=>createOrderAndOpenWhatsApp(p.sellerId,[{productId:p.id,qty:state.qty}]));$('#measureDistance').onclick=()=>measureBuyerDistance(lat,lng);
}
function __pb_3_realism_measureBuyerDistance(lat,lng){if(!navigator.geolocation)return toast('Perangkat tidak mendukung layanan lokasi.');const btn=$('#measureDistance');btn.disabled=true;btn.textContent='Mencari lokasi…';navigator.geolocation.getCurrentPosition(pos=>{const km=distanceKm(pos.coords.latitude,pos.coords.longitude,lat,lng),result=$('#distanceResult');result.textContent=km<1?`Jarak garis lurus sekitar ${Math.round(km*1000)} meter dari posisi Anda.`:`Jarak garis lurus sekitar ${km.toFixed(1)} km dari posisi Anda.`;result.classList.remove('hidden');btn.textContent='Hitung ulang jarak';btn.disabled=false;},()=>{btn.disabled=false;btn.textContent='Hitung jarak saya';toast('Tidak dapat mengakses lokasi perangkat.');},{enableHighAccuracy:true,timeout:10000});}
function __pb_3_realism_whatsAppUrl(phone,message){const number=normalizePhone(phone);return `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(message)}`;}
function __pb_3_realism_launchWhatsApp(url){const link=document.createElement('a');link.href=url;link.target='_blank';link.rel='noopener noreferrer';document.body.append(link);link.click();link.remove();}
function __pb_3_realism_createOrderAndOpenWhatsApp(sellerId,cartItems){const seller=db.sellers.find(s=>s.id===sellerId);if(!seller||seller.status!=='approved')return toast('Toko sedang tidak aktif.');if(!isValidPhone(seller.phone))return toast('Nomor WhatsApp penjual belum valid. Laporkan kepada admin.');const items=[];for(const row of cartItems){const p=db.products.find(x=>x.id===row.productId);if(!p||!productIsVisible(p)||row.qty>p.stock)return toast(`Stok ${p?.name||'produk'} tidak mencukupi.`);items.push({productId:p.id,name:p.name,qty:row.qty,unit:p.unit,price:p.price,subtotal:p.price*row.qty});}if(!items.length)return;const buyer=db.buyers.find(b=>b.id===state.session.id);const orderId=`PB-${new Date().toISOString().slice(2,10).replaceAll('-','')}-${String(db.orders.length+1).padStart(3,'0')}`,total=items.reduce((n,i)=>n+i.subtotal,0),buyerName=buyer?.name||buyer?.username||state.session.username;const order={id:orderId,buyerId:buyer?.id,buyerUsername:buyer?.username,buyer:buyerName,buyerPhone:buyer?.phone||'',sellerId:seller.id,seller:seller.business,items,productId:items[0].productId,product:orderTitle({items}),qty:orderQuantity({items}),total,status:'wa',stockDeducted:false,created:today(),updated:today()};db.orders.unshift(order);save('orders');addLog(`Nota ${orderId} dibuat untuk ${seller.business}`);state.cart=state.cart.filter(row=>!items.some(i=>i.productId===row.productId));saveCart();const lines=items.map((i,n)=>`${n+1}. ${i.name}\n   ${i.qty} ${i.unit} x ${rupiah(i.price)} = ${rupiah(i.subtotal)}`).join('\n'),message=`Halo ${seller.business}, saya ingin memesan melalui Parangbaddo' Store.\n\nNO. NOTA: ${orderId}\nPEMBELI: @${buyer?.username||buyerName}\n\n${lines}\n\nTOTAL: ${rupiah(total)}\n\nMohon konfirmasi ketersediaan, pembayaran, dan pengambilan/pengiriman. Terima kasih.`,url=whatsAppUrl(seller.phone,message);launchWhatsApp(url);closeModal();toast(`Nota ${orderId} tersimpan. WhatsApp sedang dibuka.`);setTimeout(()=>showWhatsAppFallback(order,url),350);}
function __pb_3_realism_showWhatsAppFallback(order,url){openModal(`<div class="modal-head"><div><p class="eyebrow">Nota berhasil dibuat</p><h2>${order.id}</h2><p>Status awal: menunggu konfirmasi penjual.</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><div class="receipt">${orderItems(order).map(i=>`<div><span>${escapeHtml(i.name)} × ${i.qty}</span><b>${rupiah(i.subtotal)}</b></div>`).join('')}<div class="receipt-total"><span>Total</span><b>${rupiah(order.total)}</b></div></div><a class="btn wa-btn btn-block" href="${url}" target="_blank" rel="noopener">${icon('whatsapp')} Buka WhatsApp lagi</a><p class="modal-footnote">Jika WhatsApp tidak terbuka, pastikan aplikasi WhatsApp terpasang atau gunakan WhatsApp Web.</p></div>`);}

function __pb_3_realism_sellerTabContent(seller,products,orders){const low=products.filter(p=>p.stock<=db.settings.lowStock).length;if(state.sellerTab==='overview')return `<div class="stat-grid">${statCard('Produk aktif','package',products.filter(productIsVisible).length,'Tampil di katalog')}${statCard('Perlu konfirmasi','clock',orders.filter(o=>o.status==='wa').length,'Nota baru')}${statCard('Pesanan selesai','check',orders.filter(o=>o.status==='completed').length,'Tercatat')}${statCard('Stok rendah','chart',low,`≤ ${db.settings.lowStock} unit`)}</div><div class="dash-grid"><div class="panel"><div class="panel-head"><h3>Kondisi stok</h3></div><div class="panel-body">${products.length?products.map(p=>`<div class="progress-row"><div><span>${escapeHtml(p.name)}</span><b>${p.stock} ${escapeHtml(p.unit)}</b></div><div class="progress"><span style="width:${Math.min(100,p.stock*3)}%"></span></div></div>`).join(''):'Belum ada produk.'}</div></div><div class="panel"><div class="panel-head"><h3>Lokasi toko</h3></div><div class="panel-body store-quick-location"><code>${Number(seller.lat).toFixed(6)}, ${Number(seller.lng).toFixed(6)}</code><p>${escapeHtml(seller.address)}</p><a href="${mapsPoint(seller.lat,seller.lng)}" target="_blank" class="btn btn-ghost btn-block">Periksa titik toko</a></div></div></div>`;
  if(state.sellerTab==='products')return `<div class="panel"><div class="table-wrap"><table><thead><tr><th>Produk</th><th>Harga</th><th>Stok</th><th>Koordinat</th><th>Status</th><th>Aksi</th></tr></thead><tbody>${products.length?products.map(p=>{const[label,st]=productStatus(p);return `<tr><td><div class="table-user"><img class="product-thumb" src="${p.image}" alt=""><div><strong>${escapeHtml(p.name)}</strong><small>${escapeHtml(p.category)}</small></div></div></td><td>${rupiah(p.price)} / ${escapeHtml(p.unit)}</td><td>${p.stock}</td><td><a class="coordinate-table-link" target="_blank" href="${mapsPoint(p.lat,p.lng)}">${Number(p.lat).toFixed(4)}, ${Number(p.lng).toFixed(4)}</a></td><td><span class="status ${st}">${label}</span></td><td><div class="action-row"><button data-edit-product="${p.id}">Edit</button>${p.moderation!=='hidden'?`<button data-toggle-own-product="${p.id}">${p.active===false?'Aktifkan':'Arsipkan'}</button>`:''}<button class="reject" data-delete-product="${p.id}">Hapus</button></div></td></tr>`}).join(''):`<tr><td colspan="6">Belum ada produk.</td></tr>`}</tbody></table></div></div>`;
  if(state.sellerTab==='orders')return orderTable(seller.id);
  return `<div class="profile-layout"><div class="panel"><div class="panel-head"><h3>Informasi usaha</h3><span class="status approved">Terverifikasi</span></div><div class="panel-body"><form id="sellerProfile"><div class="form-grid"><div class="field"><label>Username</label><input value="@${escapeHtml(seller.username)}" disabled></div><div class="field"><label>Nama pemilik</label><input required name="name" value="${escapeHtml(seller.name)}"></div><div class="field"><label>Nama usaha</label><input required name="business" value="${escapeHtml(seller.business)}"></div><div class="field"><label>WhatsApp penjual</label><input required name="phone" value="0${seller.phone.slice(2)}"></div><div class="field"><label>Kategori</label><select name="category">${db.settings.categories.map(c=>`<option ${c===seller.category?'selected':''}>${escapeHtml(c)}</option>`).join('')}</select></div><div class="field full"><label>Alamat</label><input required name="address" value="${escapeHtml(seller.address)}"></div><div class="field full"><label>Deskripsi toko</label><textarea name="bio">${escapeHtml(seller.bio||'')}</textarea></div></div><div class="form-section-title location-title"><span>${icon('map')}</span><div><strong>Titik koordinat toko</strong><small>Pastikan posisi berada tepat di lokasi usaha/pengambilan.</small></div></div><div class="coordinate-box"><div class="form-grid"><div class="field"><label>Latitude</label><input required type="number" step="any" name="lat" value="${seller.lat}"></div><div class="field"><label>Longitude</label><input required type="number" step="any" name="lng" value="${seller.lng}"></div></div><button type="button" class="btn btn-ghost btn-sm" id="captureProfileCoords">Gunakan lokasi perangkat</button><a id="profileMapPreview" class="coordinate-preview" target="_blank">Periksa di Google Maps</a></div><div class="form-actions spread"><button type="button" class="text-btn" id="changeSellerPassword">Ubah kata sandi</button><button class="btn btn-dark">Simpan profil</button></div></form></div></div><aside class="profile-side"><div class="panel"><div class="panel-head"><h3>Periksa kontak</h3></div><div class="panel-body"><p class="muted small">Uji nomor sebelum produk ditayangkan agar tombol pesan pembeli tidak salah tujuan.</p><a class="btn wa-btn btn-block" target="_blank" href="${whatsAppUrl(seller.phone,`Tes WhatsApp ${seller.business} dari Parangbaddo' Store.`)}">${icon('whatsapp')} Tes WhatsApp toko</a></div></div><div class="panel"><div class="panel-head"><h3>Lokasi publik</h3></div><div class="panel-body"><code>${Number(seller.lat).toFixed(6)}, ${Number(seller.lng).toFixed(6)}</code><a class="btn btn-outline btn-block" style="margin-top:10px" href="${mapsRoute(seller.lat,seller.lng)}" target="_blank">Buka rute pembeli</a></div></div></aside></div>`;
}
function __pb_3_realism_paintSellerTab(){const seller=db.sellers.find(s=>s.id===state.session.id);if(!seller||seller.status!=='approved'){setSession(null);navigate('home');return toast('Akun toko tidak aktif.');}const products=db.products.filter(p=>p.sellerId===seller.id),orders=db.orders.filter(o=>o.sellerId===seller.id),tabs={overview:['Ringkasan toko','Pantau stok, lokasi, dan pesanan terbaru.'],products:['Produk saya','Kelola foto, harga, stok, dan titik pengambilan.'],orders:['Pesanan masuk','Konfirmasi nota sebelum stok dikurangi.'],profile:['Profil dan lokasi','Informasi ini dilihat langsung oleh pembeli.']},[title,sub]=tabs[state.sellerTab];$('#sellerContent').innerHTML=`<div class="dash-head"><div><h1>${title}</h1><p>${sub}</p></div><div class="dash-actions">${state.sellerTab==='products'?`<button class="btn btn-dark btn-sm" id="addProduct">${icon('plus')} Tambah produk</button>`:''}<button class="btn btn-outline btn-sm" id="sellerLogout">Keluar</button></div></div><div id="sellerTab">${sellerTabContent(seller,products,orders)}</div>`;$('#sellerLogout').onclick=()=>{setSession(null);toast('Anda telah keluar.');navigate('home');};$('#addProduct')?.addEventListener('click',()=>showProductEditor(seller));$$('[data-confirm-order]').forEach(b=>b.onclick=()=>updateOrder(b.dataset.confirmOrder,'confirmed'));$$('[data-complete-order]').forEach(b=>b.onclick=()=>updateOrder(b.dataset.completeOrder,'completed'));$$('[data-cancel-order]').forEach(b=>b.onclick=()=>updateOrder(b.dataset.cancelOrder,'cancelled'));$$('[data-order-detail]').forEach(b=>b.onclick=()=>showOrderDetail(b.dataset.orderDetail,'seller'));$$('[data-contact-buyer]').forEach(b=>b.onclick=()=>contactBuyer(b.dataset.contactBuyer));$$('[data-edit-product]').forEach(b=>b.onclick=()=>showProductEditor(seller,db.products.find(p=>p.id===b.dataset.editProduct)));$$('[data-toggle-own-product]').forEach(b=>b.onclick=()=>toggleOwnProduct(b.dataset.toggleOwnProduct));$$('[data-delete-product]').forEach(b=>b.onclick=()=>deleteProduct(b.dataset.deleteProduct));$('#sellerProfile')?.addEventListener('submit',e=>saveSellerProfile(e,seller));$('#changeSellerPassword')?.addEventListener('click',()=>showChangePassword('seller',seller));bindCoordinateCapture('#captureProfileCoords','[name=lat]','[name=lng]','#profileMapPreview');bindCoordinatePreview('[name=lat]','[name=lng]','#profileMapPreview');}

function __pb_3_realism_showProductEditor(seller,p=null){openModal(`<div class="modal-head"><div><p class="eyebrow">${p?'Edit produk':'Produk baru'}</p><h2>${p?'Perbarui produk':'Tambahkan produk'}</h2><p>Gunakan foto asli produk dan lokasi pengambilan yang tepat.</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><form id="productForm"><div class="product-editor-layout"><div class="field product-photo-field"><label>Foto produk asli</label><div class="upload-preview realistic-upload"><img id="imagePreview" src="${p?.image||'assets/products/sayur-segar.jpg'}" alt="Preview"><div><input name="image" type="file" accept="image/jpeg,image/png,image/webp"><small>JPG/PNG/WEBP, maksimal 8 MB. Foto akan dikompresi.</small></div></div></div><div class="form-grid"><div class="field"><label>Nama produk</label><input required name="name" value="${escapeHtml(p?.name||'')}"></div><div class="field"><label>Kategori</label><select name="category">${db.settings.categories.map(c=>`<option ${p?.category===c?'selected':''}>${escapeHtml(c)}</option>`).join('')}</select></div><div class="field"><label>Harga</label><input required type="number" min="1000" name="price" value="${p?.price||''}"></div><div class="field"><label>Satuan</label><input required name="unit" value="${escapeHtml(p?.unit||'')}" placeholder="buah / bungkus / kg"></div><div class="field"><label>Stok</label><input required type="number" min="0" name="stock" value="${p?.stock??''}"></div><div class="field"><label>Lokasi pengambilan</label><input required name="location" value="${escapeHtml(p?.location||seller.address)}"></div><div class="field full"><label>Deskripsi produk</label><textarea required name="description">${escapeHtml(p?.description||'')}</textarea></div></div><div class="coordinate-box product-coordinates"><strong>Koordinat pengambilan</strong><p>Secara default menggunakan titik toko. Ubah bila produk diambil di tempat berbeda.</p><div class="form-grid"><div class="field"><label>Latitude</label><input required type="number" step="any" name="lat" value="${p?.lat||seller.lat}"></div><div class="field"><label>Longitude</label><input required type="number" step="any" name="lng" value="${p?.lng||seller.lng}"></div></div><button type="button" class="btn btn-ghost btn-sm" id="captureProductCoords">Gunakan lokasi perangkat</button><a id="productMapPreview" class="coordinate-preview" target="_blank">Periksa titik</a></div></div><div class="form-actions"><button type="button" class="btn btn-outline" data-close>Batal</button><button class="btn btn-dark">${p?'Simpan perubahan':'Tayangkan produk'}</button></div></form></div>`,true);bindCoordinateCapture('#captureProductCoords','[name=lat]','[name=lng]','#productMapPreview');bindCoordinatePreview('[name=lat]','[name=lng]','#productMapPreview');const input=$('[name=image]');input.onchange=()=>{if(input.files[0])$('#imagePreview').src=URL.createObjectURL(input.files[0]);};$('#productForm').onsubmit=async e=>{e.preventDefault();const btn=e.submitter;btn.disabled=true;btn.textContent='Menyimpan…';const fd=new FormData(e.target),file=fd.get('image');if(!validCoordinates(fd.get('lat'),fd.get('lng'))){btn.disabled=false;return toast('Koordinat produk tidak valid.');}let image=p?.image||'assets/products/sayur-segar.jpg';try{if(file&&file.size)image=await compressImage(file);}catch{btn.disabled=false;return toast('Foto tidak dapat diproses.');}const data={sellerId:seller.id,seller:seller.business,phone:seller.phone,name:fd.get('name').trim(),category:fd.get('category'),price:Number(fd.get('price')),unit:fd.get('unit').trim(),stock:Number(fd.get('stock')),location:fd.get('location').trim(),lat:Number(fd.get('lat')),lng:Number(fd.get('lng')),map:mapsPoint(fd.get('lat'),fd.get('lng')),image,description:fd.get('description').trim(),active:p?.active!==false,sellerActive:true,moderation:p?.moderation||'ok'};if(p)Object.assign(p,data);else db.products.unshift({id:uid('p'),...data,active:db.settings.autoPublish});try{save('products');}catch{btn.disabled=false;return toast('Penyimpanan penuh. Gunakan foto lebih kecil.');}addLog(`${seller.business} ${p?'memperbarui':'menambahkan'} ${data.name}`);closeModal();toast('Produk berhasil disimpan.');setTimeout(renderSeller,230);};}
function __pb_3_realism_saveSellerProfile(e,seller){e.preventDefault();const d=Object.fromEntries(new FormData(e.target));if(!isValidPhone(d.phone))return toast('Nomor WhatsApp penjual tidak valid.');if(!validCoordinates(d.lat,d.lng))return toast('Koordinat toko tidak valid.');const old=seller.business;Object.assign(seller,{name:d.name.trim(),business:d.business.trim(),phone:normalizePhone(d.phone),category:d.category,address:d.address.trim(),bio:d.bio.trim(),lat:Number(d.lat),lng:Number(d.lng),map:mapsPoint(d.lat,d.lng)});db.products.filter(p=>p.sellerId===seller.id).forEach(p=>{p.seller=seller.business;p.phone=seller.phone;});save('sellers');save('products');setSession({...state.session,name:seller.name,business:seller.business,phone:seller.phone});addLog(`${old} memperbarui profil dan koordinat toko`);toast('Profil, WhatsApp, dan koordinat berhasil disimpan.');renderSeller();}

function __pb_3_realism_buyerTable(){return `<div class="panel"><div class="table-wrap"><table><thead><tr><th>Akun</th><th>Nama tampilan</th><th>Bergabung</th><th>Pesanan</th><th>Status</th><th>Aksi</th></tr></thead><tbody>${db.buyers.map(b=>`<tr><td><div class="table-user"><span class="table-avatar">${initials(b.username)}</span><div><strong>@${escapeHtml(b.username)}</strong><small>${b.phone?phoneDisplay(b.phone):'Tanpa nomor WA'}</small></div></div></td><td>${escapeHtml(b.name||b.username)}</td><td>${b.joined}</td><td>${buyerOrders(b).length}</td><td><span class="status ${b.status}">${statusLabel(b.status)}</span></td><td><div class="action-row"><button data-detail-buyer="${b.id}">Detail</button><button class="${b.status==='active'?'reject':''}" data-toggle-buyer="${b.id}">${b.status==='active'?'Blokir':'Aktifkan'}</button></div></td></tr>`).join('')}</tbody></table></div></div>`;}
function __pb_3_realism_showBuyerDetail(id){const b=db.buyers.find(x=>x.id===id),orders=buyerOrders(b),reports=db.reports.filter(r=>r.reporterUser===b.username||(b.phone&&r.reporterPhone===b.phone));openModal(`<div class="modal-head"><div><p class="eyebrow">Profil pembeli</p><h2>@${escapeHtml(b.username)}</h2><p>${escapeHtml(b.name||b.username)}</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><div class="detail-grid"><div><span>Status</span><strong>${statusLabel(b.status)}</strong></div><div><span>Bergabung</span><strong>${b.joined}</strong></div><div><span>Pesanan</span><strong>${orders.length}</strong></div><div><span>Laporan</span><strong>${reports.length}</strong></div></div><div class="detail-description"><span>Kontak opsional</span><p>${b.phone?phoneDisplay(b.phone):'Pembeli tidak mencantumkan nomor WhatsApp.'}</p></div><div class="form-actions"><button class="btn ${b.status==='active'?'btn-danger':'btn-dark'}" id="modalToggleBuyer">${b.status==='active'?'Blokir akun':'Aktifkan akun'}</button></div></div>`);$('#modalToggleBuyer').onclick=()=>{closeModal();setTimeout(()=>toggleBuyer(id),230)};}
function __pb_3_realism_orderTable(sellerId=null){const orders=sellerId?db.orders.filter(o=>o.sellerId===sellerId):db.orders;return `<div class="panel"><div class="table-wrap"><table><thead><tr><th>Nota / Waktu</th><th>Produk</th><th>Pembeli</th><th>Jumlah</th><th>Total</th><th>Status</th><th>Aksi</th></tr></thead><tbody>${orders.length?orders.map(o=>`<tr><td><strong>${o.id}</strong><br><span class="muted small">${o.created}</span></td><td>${escapeHtml(orderTitle(o))}</td><td><strong>@${escapeHtml(o.buyerUsername||o.buyer)}</strong><br><span class="muted small">${o.buyerPhone?phoneDisplay(o.buyerPhone):'Kontak via chat pesanan'}</span></td><td>${orderQuantity(o)}</td><td>${rupiah(o.total)}</td><td><span class="status ${o.status}">${statusLabel(o.status)}</span></td><td><div class="action-row"><button data-order-detail="${o.id}">Detail</button>${sellerId&&o.status==='wa'?`<button data-confirm-order="${o.id}">Konfirmasi</button><button class="reject" data-cancel-order="${o.id}">Batal</button>`:''}${sellerId&&o.status==='confirmed'?`<button data-complete-order="${o.id}">Selesaikan</button><button class="reject" data-cancel-order="${o.id}">Batal</button>`:''}${sellerId&&o.buyerPhone&&!['cancelled','completed'].includes(o.status)?`<button data-contact-buyer="${o.id}">WhatsApp</button>`:''}</div></td></tr>`).join(''):`<tr><td colspan="7" class="muted">Belum ada pesanan.</td></tr>`}</tbody></table></div></div>`;}
function __pb_3_realism_showSellerDetail(id){const s=db.sellers.find(x=>x.id===id),products=db.products.filter(p=>p.sellerId===id),orders=db.orders.filter(o=>o.sellerId===id);openModal(`<div class="modal-head"><div><p class="eyebrow">Profil penjual</p><h2>${escapeHtml(s.business)}</h2><p>@${escapeHtml(s.username)} · ${phoneDisplay(s.phone)}</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><div class="detail-grid"><div><span>Status</span><strong>${statusLabel(s.status)}</strong></div><div><span>Kategori</span><strong>${escapeHtml(s.category)}</strong></div><div><span>Produk</span><strong>${products.length}</strong></div><div><span>Pesanan</span><strong>${orders.length}</strong></div></div><div class="detail-description"><span>Alamat usaha</span><p>${escapeHtml(s.address)}</p></div><div class="coordinate-box"><strong>Koordinat publik</strong><code style="display:block;margin:7px 0">${Number(s.lat).toFixed(6)}, ${Number(s.lng).toFixed(6)}</code><div class="location-actions"><a href="${mapsPoint(s.lat,s.lng)}" target="_blank">Lihat titik</a><a class="route-link" href="${mapsRoute(s.lat,s.lng)}" target="_blank">Uji rute</a></div></div><div class="form-actions"><button class="btn ${s.status==='approved'?'btn-danger':'btn-dark'}" id="modalToggleSeller">${s.status==='approved'?'Tangguhkan toko':'Aktifkan toko'}</button></div></div>`);$('#modalToggleSeller').onclick=()=>{closeModal();setTimeout(()=>toggleSeller(id),230)};}
function __pb_3_realism_showReportForm(orderId=''){const o=db.orders.find(x=>x.id===orderId),buyer=db.buyers.find(b=>b.id===state.session.id);openModal(`<div class="modal-head"><div><p class="eyebrow">Bantuan admin desa</p><h2>Kirim laporan</h2><p>Jelaskan masalah secara singkat dan jelas.</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><form id="reportForm"><div class="form-grid"><div class="field full"><label>Terkait</label><input name="target" value="${o?`Pesanan ${o.id}`:''}" required></div><div class="field full"><label>Jenis masalah</label><select name="type"><option>Informasi produk</option><option>Harga</option><option>Penjual sulit dihubungi</option><option>Lokasi tidak sesuai</option><option>Perilaku tidak baik</option><option>Lainnya</option></select></div><div class="field full"><label>Kronologi</label><textarea name="message" required minlength="10"></textarea></div></div><div class="form-actions"><button type="button" class="btn btn-outline" data-close>Batal</button><button class="btn btn-dark">Kirim laporan</button></div></form></div>`);$('#reportForm').onsubmit=e=>{e.preventDefault();const d=Object.fromEntries(new FormData(e.target)),report={id:`LAP-${new Date().getFullYear()}-${String(db.reports.length+15).padStart(3,'0')}`,reporter:buyer?.name||buyer?.username,reporterUser:buyer?.username,reporterPhone:buyer?.phone||'',...d,status:'new',created:today(),resolution:''};db.reports.unshift(report);saveExtra('reports');addLog(`Laporan ${report.id} diterima`);closeModal();toast(`Laporan ${report.id} dikirim ke admin.`);};}

function __pb_3_realism_setupMobileDrawer(){if($('#mobileDrawer'))return;document.body.insertAdjacentHTML('beforeend',`<div class="mobile-nav-backdrop" id="mobileNavBackdrop"></div><aside class="mobile-drawer" id="mobileDrawer" aria-hidden="true"><div class="mobile-drawer-head"><div class="brand"><span class="brand-mark">${icon('leaf')}</span><span><b>Parangbaddo’</b><small>STORE</small></span></div><button class="icon-btn" id="closeMobileNav">${icon('x')}</button></div><nav><span>Navigasi</span><button data-mobile-view="home">Beranda ${icon('arrow')}</button><button data-mobile-view="products">Katalog produk ${icon('arrow')}</button><button data-mobile-view="how">Cara kerja ${icon('arrow')}</button></nav><div class="mobile-account"><span>Akun</span><button data-mobile-role="buyer">${icon('user')} Pembeli</button><button data-mobile-role="seller">${icon('store')} Penjual</button><button data-mobile-role="admin">${icon('shield')} Admin desa</button></div><div class="mobile-drawer-foot"><small>Marketplace resmi warga</small><strong>Desa Parangbaddo’, Takalar</strong></div></aside>`);const open=()=>{$('#mobileDrawer').classList.add('open');$('#mobileNavBackdrop').classList.add('open');$('#mobileDrawer').setAttribute('aria-hidden','false');document.body.classList.add('drawer-open');},close=()=>{$('#mobileDrawer').classList.remove('open');$('#mobileNavBackdrop').classList.remove('open');$('#mobileDrawer').setAttribute('aria-hidden','true');document.body.classList.remove('drawer-open');};$('#mobileMenu').onclick=open;$('#closeMobileNav').onclick=close;$('#mobileNavBackdrop').onclick=close;$$('[data-mobile-view]').forEach(b=>b.onclick=()=>{close();navigate(b.dataset.mobileView);});$$('[data-mobile-role]').forEach(b=>b.onclick=()=>{const role=b.dataset.mobileRole;close();setTimeout(()=>handleRole(role),220);});}

// Apply v3 behavior and re-render.
setupMobileDrawer();
updateHeader();
if(state.view==='seller'&&state.session?.role==='seller')renderSeller();else if(state.view==='admin'&&state.session?.role==='admin')renderAdmin();else if(state.view==='products')renderProducts();else if(state.view==='how')renderHow();else renderHome();
/* ===== END realism.js ===== */

/* ===== BEGIN locations.js: ordered execution phase 4 ===== */
window["googleMapsButton"] = __pb_4_locations_googleMapsButton;
window["showProduct"] = __pb_4_locations_showProduct;
window["checkoutCartSeller"] = __pb_4_locations_checkoutCartSeller;
window["showFulfillmentModal"] = __pb_4_locations_showFulfillmentModal;
window["createOrderAndOpenWhatsApp"] = __pb_4_locations_createOrderAndOpenWhatsApp;
window["orderFulfillmentCell"] = __pb_4_locations_orderFulfillmentCell;
window["orderTable"] = __pb_4_locations_orderTable;
window["showOrderDetail"] = __pb_4_locations_showOrderDetail;
window["showBuyerAccount"] = __pb_4_locations_showBuyerAccount;

/* v4 — direct Google Maps routing for pickup and delivery */

db.orders.forEach(o=>{
  if(!o.fulfillment){const seller=db.sellers.find(s=>s.id===o.sellerId);o.fulfillment={type:'pickup',label:'Ambil di toko',address:seller?.address||'',lat:Number(seller?.lat||-5.343119),lng:Number(seller?.lng||119.505961)};}
});
save('orders');

function __pb_4_locations_googleMapsButton(lat,lng,label='Buka Google Maps'){return `<a class="maps-primary" href="${mapsRoute(lat,lng)}" target="_blank" rel="noopener">${icon('map')} ${label} ${icon('arrow')}</a>`;}

function __pb_4_locations_showProduct(id){const p=db.products.find(x=>x.id===id);if(!p||!productIsVisible(p))return toast('Produk sedang tidak tersedia.');state.selectedProduct=id;state.qty=1;const lat=Number(p.lat),lng=Number(p.lng);modalRoot.innerHTML=`<div class="modal product-modal real-product-modal" role="dialog" aria-modal="true"><button class="icon-btn modal-floating-close" data-close>${icon('x')}</button><div class="product-detail"><div class="product-detail-image"><img src="${p.image}" alt="${escapeHtml(p.name)}"><span class="photo-label">Foto produk penjual</span></div><div class="product-detail-copy"><div class="product-meta"><span>${escapeHtml(p.category)}</span><span>Stok ${p.stock}</span></div><h2>${escapeHtml(p.name)}</h2><div class="large-price">${rupiah(p.price)} <span>/ ${escapeHtml(p.unit)}</span></div><p class="product-description">${escapeHtml(p.description)}</p><div class="store-location-card direct-map-card"><div class="store-location-head"><span class="location-pin">${icon('map')}</span><span><strong>${escapeHtml(p.seller)}</strong><small>${escapeHtml(p.location)}</small></span></div><code>${lat.toFixed(6)}, ${lng.toFixed(6)}</code>${googleMapsButton(lat,lng,'Buka rute ke toko')}</div><div class="qty-row"><div><strong>Jumlah</strong><small>Tersedia ${p.stock} ${escapeHtml(p.unit)}</small></div><div class="qty-control"><button id="qtyMinus">−</button><strong id="qtyValue">1</strong><button id="qtyPlus">+</button></div></div><div class="total-box"><span>Total sementara</span><strong id="orderTotal">${rupiah(p.price)}</strong></div><div class="product-actions"><button id="addCart" class="btn btn-outline">${icon('bag')} Keranjang</button><button id="orderWa" class="btn wa-btn">${icon('whatsapp')} Pesan produk</button></div><p class="order-hint">Setelah menekan pesan, pilih ambil di toko atau minta diantar.</p></div></div></div>`;modalRoot.classList.add('open');modalRoot.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';const repaint=()=>{$('#qtyValue').textContent=state.qty;$('#orderTotal').textContent=rupiah(p.price*state.qty);};$('#qtyMinus').onclick=()=>{state.qty=Math.max(1,state.qty-1);repaint();};$('#qtyPlus').onclick=()=>{state.qty=Math.min(p.stock,state.qty+1);repaint();};$('#addCart').onclick=()=>{addToCart(p.id,state.qty);closeModal();toast('Produk masuk ke keranjang.');};$('#orderWa').onclick=()=>ensureBuyer(()=>showFulfillmentModal(p.sellerId,[{productId:p.id,qty:state.qty}]));}

function __pb_4_locations_checkoutCartSeller(sellerId){const items=state.cart.filter(i=>db.products.find(p=>p.id===i.productId)?.sellerId===sellerId);showFulfillmentModal(sellerId,items);}

function __pb_4_locations_showFulfillmentModal(sellerId,cartItems){const seller=db.sellers.find(s=>s.id===sellerId),buyer=db.buyers.find(b=>b.id===state.session.id);if(!seller)return toast('Toko tidak ditemukan.');const productRows=cartItems.map(row=>{const p=db.products.find(x=>x.id===row.productId);return {...row,product:p};}).filter(x=>x.product);const total=productRows.reduce((n,x)=>n+x.product.price*x.qty,0);openModal(`<div class="modal-head"><div><p class="eyebrow">Cara menerima pesanan</p><h2>Ambil atau diantar?</h2><p>Pilih tujuan sebelum nota dikirim ke WhatsApp penjual.</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><div class="fulfillment-summary">${productRows.map(x=>`<div><span>${escapeHtml(x.product.name)} × ${x.qty}</span><b>${rupiah(x.product.price*x.qty)}</b></div>`).join('')}<div><strong>Total produk</strong><strong>${rupiah(total)}</strong></div></div><div class="fulfillment-tabs"><button class="active" data-fulfillment="pickup">${icon('store')}<span><strong>Ambil di toko</strong><small>Saya datang ke lokasi penjual</small></span></button><button data-fulfillment="delivery">${icon('map')}<span><strong>Minta diantar</strong><small>Penjual datang ke lokasi saya</small></span></button></div><form id="fulfillmentForm"><input type="hidden" name="type" value="pickup"><section id="pickupPanel" class="fulfillment-panel"><div class="route-destination"><span class="location-pin">${icon('store')}</span><div><small>Tujuan pengambilan</small><strong>${escapeHtml(seller.business)}</strong><p>${escapeHtml(seller.address)}</p><code>${Number(seller.lat).toFixed(6)}, ${Number(seller.lng).toFixed(6)}</code></div></div>${googleMapsButton(seller.lat,seller.lng,'Lihat rute ke toko')}</section><section id="deliveryPanel" class="fulfillment-panel hidden"><div class="helper-box">Titik ini akan diterima penjual melalui nota dan dashboard. Ongkos kirim disepakati melalui WhatsApp.</div><div class="field"><label>Alamat / patokan pengantaran</label><textarea name="buyerAddress" placeholder="Contoh: rumah pagar hijau, sebelah masjid">${escapeHtml(buyer?.deliveryAddress||'')}</textarea></div><div class="coordinate-box delivery-coordinate"><div class="form-grid"><div class="field"><label>Latitude pembeli</label><input type="number" step="any" name="buyerLat" value="${buyer?.lat||''}" placeholder="-5.343119"></div><div class="field"><label>Longitude pembeli</label><input type="number" step="any" name="buyerLng" value="${buyer?.lng||''}" placeholder="119.505961"></div></div><button type="button" class="btn btn-ghost btn-sm" id="captureBuyerDelivery">${icon('map')} Ambil lokasi saya sekarang</button><a id="buyerDeliveryPreview" class="coordinate-preview ${buyer?.lat?'':'hidden'}" target="_blank">Periksa titik pengantaran</a></div><label class="save-location-check"><input type="checkbox" name="saveLocation" checked> Simpan sebagai lokasi pengantaran saya</label></section><div class="fulfillment-actions"><button type="button" class="btn btn-outline" data-close>Batal</button><button class="btn wa-btn">${icon('whatsapp')} Buat nota & buka WhatsApp</button></div></form></div>`,true);
  $$('[data-fulfillment]').forEach(b=>b.onclick=()=>{const type=b.dataset.fulfillment;$$('[data-fulfillment]').forEach(x=>x.classList.toggle('active',x===b));$('[name=type]').value=type;$('#pickupPanel').classList.toggle('hidden',type!=='pickup');$('#deliveryPanel').classList.toggle('hidden',type!=='delivery');});
  bindCoordinateCapture('#captureBuyerDelivery','[name=buyerLat]','[name=buyerLng]','#buyerDeliveryPreview');bindCoordinatePreview('[name=buyerLat]','[name=buyerLng]','#buyerDeliveryPreview');
  $('#fulfillmentForm').onsubmit=e=>{e.preventDefault();const d=Object.fromEntries(new FormData(e.target));let fulfillment;if(d.type==='delivery'){if(!d.buyerAddress.trim())return toast('Isi alamat atau patokan pengantaran.');if(!validCoordinates(d.buyerLat,d.buyerLng))return toast('Ambil atau masukkan titik lokasi pengantaran.');fulfillment={type:'delivery',label:'Minta diantar',address:d.buyerAddress.trim(),lat:Number(d.buyerLat),lng:Number(d.buyerLng)};if(d.saveLocation==='on'&&buyer){buyer.deliveryAddress=fulfillment.address;buyer.lat=fulfillment.lat;buyer.lng=fulfillment.lng;save('buyers');}}else fulfillment={type:'pickup',label:'Ambil di toko',address:seller.address,lat:Number(seller.lat),lng:Number(seller.lng)};createOrderAndOpenWhatsApp(sellerId,cartItems,fulfillment);};}

function __pb_4_locations_createOrderAndOpenWhatsApp(sellerId,cartItems,fulfillment=null){const seller=db.sellers.find(s=>s.id===sellerId);if(!seller||seller.status!=='approved')return toast('Toko sedang tidak aktif.');if(!isValidPhone(seller.phone))return toast('Nomor WhatsApp penjual belum valid.');const items=[];for(const row of cartItems){const p=db.products.find(x=>x.id===row.productId);if(!p||!productIsVisible(p)||row.qty>p.stock)return toast(`Stok ${p?.name||'produk'} tidak mencukupi.`);items.push({productId:p.id,name:p.name,qty:row.qty,unit:p.unit,price:p.price,subtotal:p.price*row.qty});}if(!items.length)return;const buyer=db.buyers.find(b=>b.id===state.session.id),orderId=`PB-${new Date().toISOString().slice(2,10).replaceAll('-','')}-${String(db.orders.length+1).padStart(3,'0')}`,total=items.reduce((n,i)=>n+i.subtotal,0),buyerName=buyer?.name||buyer?.username||state.session.username;fulfillment ||= {type:'pickup',label:'Ambil di toko',address:seller.address,lat:Number(seller.lat),lng:Number(seller.lng)};const order={id:orderId,buyerId:buyer?.id,buyerUsername:buyer?.username,buyer:buyerName,buyerPhone:buyer?.phone||'',sellerId:seller.id,seller:seller.business,items,productId:items[0].productId,product:orderTitle({items}),qty:orderQuantity({items}),total,fulfillment,status:'wa',stockDeducted:false,created:today(),updated:today()};db.orders.unshift(order);save('orders');addLog(`Nota ${orderId} dibuat — ${fulfillment.label}`);state.cart=state.cart.filter(row=>!items.some(i=>i.productId===row.productId));saveCart();const lines=items.map((i,n)=>`${n+1}. ${i.name}\n   ${i.qty} ${i.unit} x ${rupiah(i.price)} = ${rupiah(i.subtotal)}`).join('\n'),locationLabel=fulfillment.type==='delivery'?'LOKASI PEMBELI':'LOKASI TOKO',mapLink=fulfillment.type==='delivery'?mapsRoute(fulfillment.lat,fulfillment.lng):mapsRoute(seller.lat,seller.lng),message=`Halo ${seller.business}, saya ingin memesan melalui Parangbaddo' Store.\n\nNO. NOTA: ${orderId}\nPEMBELI: @${buyer?.username||buyerName}\nMETODE: ${fulfillment.label}\n\n${lines}\n\nTOTAL PRODUK: ${rupiah(total)}\n\n${locationLabel}:\n${fulfillment.address}\nKoordinat: ${Number(fulfillment.lat).toFixed(6)}, ${Number(fulfillment.lng).toFixed(6)}\nGoogle Maps: ${mapLink}\n\nMohon konfirmasi stok, ongkos kirim bila ada, dan pembayaran. Terima kasih.`,url=whatsAppUrl(seller.phone,message);launchWhatsApp(url);closeModal();toast(`Nota ${orderId} tersimpan. Membuka WhatsApp.`);setTimeout(()=>showWhatsAppFallback(order,url),350);}

function __pb_4_locations_orderFulfillmentCell(o){const f=o.fulfillment||{},delivery=f.type==='delivery';return `<span class="fulfillment-badge ${delivery?'delivery':'pickup'}">${delivery?icon('map'):icon('store')} ${delivery?'Diantar':'Ambil sendiri'}</span><a class="table-map-action" href="${mapsRoute(f.lat,f.lng)}" target="_blank" rel="noopener">${delivery?'Rute ke pembeli':'Rute ke toko'}</a>`;}
function __pb_4_locations_orderTable(sellerId=null){const orders=sellerId?db.orders.filter(o=>o.sellerId===sellerId):db.orders;return `<div class="panel"><div class="table-wrap"><table><thead><tr><th>Nota / Waktu</th><th>Produk</th><th>Pembeli</th><th>Pemenuhan</th><th>Total</th><th>Status</th><th>Aksi</th></tr></thead><tbody>${orders.length?orders.map(o=>`<tr><td><strong>${o.id}</strong><br><span class="muted small">${o.created}</span></td><td>${escapeHtml(orderTitle(o))}<br><span class="muted small">${orderQuantity(o)} item</span></td><td><strong>@${escapeHtml(o.buyerUsername||o.buyer)}</strong><br><span class="muted small">${o.buyerPhone?phoneDisplay(o.buyerPhone):'Kontak lewat chat'}</span></td><td>${orderFulfillmentCell(o)}</td><td>${rupiah(o.total)}</td><td><span class="status ${o.status}">${statusLabel(o.status)}</span></td><td><div class="action-row"><button data-order-detail="${o.id}">Detail</button>${sellerId&&o.status==='wa'?`<button data-confirm-order="${o.id}">Konfirmasi</button><button class="reject" data-cancel-order="${o.id}">Batal</button>`:''}${sellerId&&o.status==='confirmed'?`<button data-complete-order="${o.id}">Selesaikan</button><button class="reject" data-cancel-order="${o.id}">Batal</button>`:''}${sellerId&&o.buyerPhone&&!['cancelled','completed'].includes(o.status)?`<button data-contact-buyer="${o.id}">WhatsApp</button>`:''}</div></td></tr>`).join(''):`<tr><td colspan="7" class="muted">Belum ada pesanan.</td></tr>`}</tbody></table></div></div>`;}

function __pb_4_locations_showOrderDetail(id,source='admin'){const o=db.orders.find(x=>x.id===id);if(!o)return;const seller=db.sellers.find(s=>s.id===o.sellerId),f=o.fulfillment||{type:'pickup',address:seller?.address,lat:seller?.lat,lng:seller?.lng},delivery=f.type==='delivery',sellerMessage=`Halo ${seller?.business||o.seller}, saya ingin menanyakan pesanan ${o.id}.`,wa=whatsAppUrl(seller?.phone||'',sellerMessage);openModal(`<div class="modal-head"><div><p class="eyebrow">Detail pesanan</p><h2>${o.id}</h2><p>${o.created}</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><div class="order-parties"><div><span>Pembeli</span><strong>@${escapeHtml(o.buyerUsername||o.buyer)}</strong><small>${o.buyerPhone?phoneDisplay(o.buyerPhone):'Nomor tidak dicantumkan'}</small></div><div><span>Penjual</span><strong>${escapeHtml(o.seller)}</strong><small>Status: ${statusLabel(o.status)}</small></div></div><div class="receipt">${orderItems(o).map(i=>`<div><span>${escapeHtml(i.name)} × ${i.qty} ${escapeHtml(i.unit||'')}</span><b>${rupiah(i.subtotal)}</b></div>`).join('')}<div class="receipt-total"><span>Total produk</span><b>${rupiah(o.total)}</b></div></div><div class="order-location-detail"><div><span class="location-pin">${delivery?icon('map'):icon('store')}</span><span><small>${delivery?'Lokasi pengantaran pembeli':'Lokasi pengambilan di toko'}</small><strong>${escapeHtml(f.address||'-')}</strong><code>${Number(f.lat).toFixed(6)}, ${Number(f.lng).toFixed(6)}</code></span></div>${googleMapsButton(f.lat,f.lng,delivery?'Buka rute ke pembeli':'Buka rute ke toko')}</div>${source==='buyer'?`<a class="btn wa-btn btn-block" href="${wa}" target="_blank">${icon('whatsapp')} Hubungi penjual</a>`:''}</div>`);}

function __pb_4_locations_showBuyerAccount(){const buyer=db.buyers.find(b=>b.id===state.session.id)||state.session,orders=buyerOrders(buyer);openModal(`<div class="modal-head"><div><p class="eyebrow">Akun pembeli</p><h2>@${escapeHtml(buyer.username)}</h2><p>${orders.length} riwayat pesanan</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><div class="account-summary"><div class="account-avatar">${initials(buyer.name||buyer.username)}</div><div><strong>${escapeHtml(buyer.name||buyer.username)}</strong><span>Akun aktif sejak ${buyer.joined||'-'}</span></div><span class="status active">Aktif</span></div><form id="buyerProfile" class="profile-form"><div class="form-grid"><div class="field"><label>Username</label><input value="${escapeHtml(buyer.username)}" disabled></div><div class="field"><label>Nama tampilan</label><input name="name" value="${escapeHtml(buyer.name||buyer.username)}" required></div><div class="field full"><label>Nomor WhatsApp pribadi <span class="optional">opsional</span></label><input name="phone" value="${buyer.phone?`0${buyer.phone.slice(2)}`:''}" placeholder="Tidak wajib"></div></div><div class="form-section-title location-title"><span>${icon('map')}</span><div><strong>Lokasi pengantaran default</strong><small>Penjual menggunakan titik ini bila Anda meminta barang diantar.</small></div></div><div class="coordinate-box"><div class="field"><label>Alamat / patokan</label><textarea name="deliveryAddress" placeholder="Rumah, dusun, dan patokan lokasi">${escapeHtml(buyer.deliveryAddress||'')}</textarea></div><div class="form-grid"><div class="field"><label>Latitude</label><input type="number" step="any" name="lat" value="${buyer.lat||''}"></div><div class="field"><label>Longitude</label><input type="number" step="any" name="lng" value="${buyer.lng||''}"></div></div><button type="button" class="btn btn-ghost btn-sm" id="captureBuyerProfile">${icon('map')} Gunakan lokasi saya</button><a id="buyerProfileMap" class="coordinate-preview ${buyer.lat?'':'hidden'}" target="_blank">Periksa lokasi di Maps</a></div><div class="form-actions spread"><button type="button" class="text-btn" id="changeBuyerPassword">Ubah kata sandi</button><button class="btn btn-ghost btn-sm">Simpan profil & lokasi</button></div></form><div class="panel account-orders"><div class="panel-head"><h3>Riwayat pesanan</h3><button class="plain-link" id="buyerBrowse">Cari produk</button></div><div class="buyer-order-list">${orders.length?orders.map(buyerOrderCard).join(''):`<div class="empty-state"><strong>Belum ada pesanan</strong><p>Pesanan yang dibuat akan tampil di sini.</p></div>`}</div></div><button class="btn btn-outline btn-sm" id="logoutBuyer">Keluar dari akun</button></div>`,true);bindCoordinateCapture('#captureBuyerProfile','[name=lat]','[name=lng]','#buyerProfileMap');bindCoordinatePreview('[name=lat]','[name=lng]','#buyerProfileMap');$('#buyerProfile').onsubmit=e=>{e.preventDefault();const d=Object.fromEntries(new FormData(e.target));if(d.phone&&!isValidPhone(d.phone))return toast('Nomor WhatsApp tidak valid.');if((d.lat||d.lng)&&!validCoordinates(d.lat,d.lng))return toast('Koordinat pengantaran belum lengkap.');buyer.name=d.name.trim();buyer.phone=d.phone?normalizePhone(d.phone):'';buyer.deliveryAddress=d.deliveryAddress.trim();buyer.lat=d.lat?Number(d.lat):'';buyer.lng=d.lng?Number(d.lng):'';save('buyers');setSession({...state.session,name:buyer.name,phone:buyer.phone});toast('Profil dan lokasi pengantaran disimpan.');showBuyerAccount();};$('#changeBuyerPassword').onclick=()=>showChangePassword('buyer',buyer);$('#buyerBrowse').onclick=()=>{closeModal();setTimeout(()=>navigate('products'),230)};$('#logoutBuyer').onclick=()=>{setSession(null);closeModal();toast('Anda telah keluar.');};$$('[data-buyer-order]').forEach(b=>b.onclick=()=>showOrderDetail(b.dataset.buyerOrder,'buyer'));$$('[data-report-order]').forEach(b=>b.onclick=()=>showReportForm(b.dataset.reportOrder));$$('[data-cancel-buyer]').forEach(b=>b.onclick=()=>cancelBuyerOrder(b.dataset.cancelBuyer));}

// Repaint dashboards/pages that depend on the order table.
if(state.view==='seller'&&state.session?.role==='seller')renderSeller();else if(state.view==='admin'&&state.session?.role==='admin')renderAdmin();
/* ===== END locations.js ===== */

/* ===== BEGIN interactions.js: ordered execution phase 5 ===== */
window["openModal"] = __pb_5_interactions_openModal;
window["setupHeroCarousel"] = __pb_5_interactions_setupHeroCarousel;
window["showProduct"] = __pb_5_interactions_showProduct;
window["animateCartIcon"] = __pb_5_interactions_animateCartIcon;
window["cartItem"] = __pb_5_interactions_cartItem;
window["cartGroups"] = __pb_5_interactions_cartGroups;
window["cartBodyMarkup"] = __pb_5_interactions_cartBodyMarkup;
window["showCart"] = __pb_5_interactions_showCart;
window["bindCartControls"] = __pb_5_interactions_bindCartControls;
window["setCartQuantity"] = __pb_5_interactions_setCartQuantity;
window["refreshCartBody"] = __pb_5_interactions_refreshCartBody;
window["changeCartQty"] = __pb_5_interactions_changeCartQty;
window["removeCartItem"] = __pb_5_interactions_removeCartItem;
window["syncDashboardMode"] = __pb_5_interactions_syncDashboardMode;
window["adminNav"] = __pb_5_interactions_adminNav;
window["sellerNav"] = __pb_5_interactions_sellerNav;
window["animateDashboardMain"] = __pb_5_interactions_animateDashboardMain;
window["launchGoogleMaps"] = __pb_5_interactions_launchGoogleMaps;

/* v5 — carousel, galleries, stable modal/cart updates and dashboard UX */

const productGallerySeed={
  p1:'assets/products/gallery/gula-aren-2.jpg',p2:'assets/products/gallery/sayur-2.jpg',p3:'assets/products/gallery/sambal-2.jpg',
  p4:'assets/products/gallery/kopi-2.jpg',p5:'assets/products/gallery/telur-2.jpg',p6:'assets/products/gallery/anyaman-2.jpg'
};
db.products.forEach(p=>{if(!Array.isArray(p.images)||!p.images.length)p.images=[p.image];if(productGallerySeed[p.id]&&!p.images.includes(productGallerySeed[p.id]))p.images.push(productGallerySeed[p.id]);p.image=p.images[0];});
save('products');

// Update content inside an open modal instead of recreating and reanimating the modal shell.
function __pb_5_interactions_openModal(content,wide=false){const staticBackdrop=!!window.pbStaticModalNext||state.session?.role==='admin';window.pbStaticModalNext=false;modalRoot.dataset.staticBackdrop=staticBackdrop?'true':'false';const current=$('.modal',modalRoot);if(modalRoot.classList.contains('open')&&current){current.className=`modal ${wide?'wide':''}`;current.innerHTML=content;current.scrollTop=0;current.classList.add('modal-content-swap');requestAnimationFrame(()=>requestAnimationFrame(()=>current.classList.remove('modal-content-swap')));}else{modalRoot.innerHTML=`<div class="modal ${wide?'wide':''}" role="dialog" aria-modal="true">${content}</div>`;modalRoot.classList.add('open');modalRoot.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';} }

const renderHomeBeforeCarousel=renderHome;
renderHome=function(){renderHomeBeforeCarousel();setupHeroCarousel();};
function __pb_5_interactions_setupHeroCarousel(){clearInterval(window.pbHeroTimer);const media=$('.real-hero-media');if(!media)return;const slides=[
  {src:'assets/village-hero-real.jpg',label:'Persawahan dan permukiman desa'},
  {src:'assets/hero-rice-terrace.jpg',label:'Lahan pertanian produktif'},
  {src:'assets/hero-farmers.jpg',label:'Kehidupan dan ekonomi pedesaan'}
];media.innerHTML=`<div class="hero-carousel" aria-label="Galeri suasana pedesaan"><div class="hero-slides">${slides.map((s,i)=>`<figure class="hero-slide ${i===0?'active':''}" data-hero-slide="${i}"><img src="${s.src}" alt="${s.label}"><figcaption>${s.label}</figcaption></figure>`).join('')}</div><div class="real-location">${icon('map')} Desa Parangbaddo’, Takalar</div><div class="hero-carousel-controls"><button data-hero-prev aria-label="Foto sebelumnya">‹</button><div>${slides.map((_,i)=>`<button class="hero-dot ${i===0?'active':''}" data-hero-dot="${i}" aria-label="Foto ${i+1}"></button>`).join('')}</div><button data-hero-next aria-label="Foto berikutnya">›</button></div></div>`;let index=0;const go=n=>{index=(n+slides.length)%slides.length;$$('[data-hero-slide]',media).forEach((el,i)=>el.classList.toggle('active',i===index));$$('[data-hero-dot]',media).forEach((el,i)=>el.classList.toggle('active',i===index));};$('[data-hero-prev]',media).onclick=()=>{go(index-1);restart();};$('[data-hero-next]',media).onclick=()=>{go(index+1);restart();};$$('[data-hero-dot]',media).forEach(b=>b.onclick=()=>{go(Number(b.dataset.heroDot));restart();});const restart=()=>{clearInterval(window.pbHeroTimer);window.pbHeroTimer=setInterval(()=>go(index+1),5000);};media.onmouseenter=()=>clearInterval(window.pbHeroTimer);media.onmouseleave=restart;restart();}

function __pb_5_interactions_showProduct(id){const p=db.products.find(x=>x.id===id);if(!p||!productIsVisible(p))return toast('Produk sedang tidak tersedia.');state.selectedProduct=id;state.qty=1;const lat=Number(p.lat),lng=Number(p.lng),images=(p.images?.length?p.images:[p.image]);modalRoot.innerHTML=`<div class="modal product-modal real-product-modal" role="dialog" aria-modal="true"><button class="icon-btn modal-floating-close" data-close>${icon('x')}</button><div class="product-detail"><div class="product-gallery"><div class="product-gallery-stage"><img id="productGalleryImage" src="${images[0]}" alt="${escapeHtml(p.name)}"><span class="photo-counter">1 / ${images.length}</span>${images.length>1?`<button class="gallery-arrow prev" id="galleryPrev">‹</button><button class="gallery-arrow next" id="galleryNext">›</button>`:''}</div>${images.length>1?`<div class="product-thumbnails">${images.map((src,i)=>`<button class="${i===0?'active':''}" data-gallery-index="${i}"><img src="${src}" alt="Foto ${i+1}"></button>`).join('')}</div>`:''}</div><div class="product-detail-copy"><div class="product-meta"><span>${escapeHtml(p.category)}</span><span>Stok ${p.stock}</span></div><h2>${escapeHtml(p.name)}</h2><div class="large-price">${rupiah(p.price)} <span>/ ${escapeHtml(p.unit)}</span></div><p class="product-description">${escapeHtml(p.description)}</p><div class="store-location-card direct-map-card"><div class="store-location-head"><span class="location-pin">${icon('map')}</span><span><strong>${escapeHtml(p.seller)}</strong><small>${escapeHtml(p.location)}</small></span></div><code>${lat.toFixed(6)}, ${lng.toFixed(6)}</code>${googleMapsButton(lat,lng,'Buka rute ke toko')}</div><div class="qty-row"><div><strong>Jumlah</strong><small>Maksimal ${p.stock} ${escapeHtml(p.unit)}</small></div><div class="qty-control editable"><button id="qtyMinus">−</button><input id="qtyValue" type="number" inputmode="numeric" min="1" max="${p.stock}" value="1" aria-label="Jumlah pesanan"><button id="qtyPlus">+</button></div></div><div class="total-box"><span>Total sementara</span><strong id="orderTotal">${rupiah(p.price)}</strong></div><div class="product-actions"><button id="addCart" class="btn btn-outline">${icon('bag')} Keranjang</button><button id="orderWa" class="btn wa-btn">${icon('whatsapp')} Pesan produk</button></div><p class="order-hint">Pilih ambil di toko atau minta diantar pada langkah berikutnya.</p></div></div></div>`;modalRoot.classList.add('open');modalRoot.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';let galleryIndex=0;const setGallery=i=>{galleryIndex=(i+images.length)%images.length;const img=$('#productGalleryImage');img.classList.add('changing');setTimeout(()=>{img.src=images[galleryIndex];img.classList.remove('changing');},110);$('.photo-counter').textContent=`${galleryIndex+1} / ${images.length}`;$$('[data-gallery-index]').forEach((b,n)=>b.classList.toggle('active',n===galleryIndex));};$('#galleryPrev')?.addEventListener('click',()=>setGallery(galleryIndex-1));$('#galleryNext')?.addEventListener('click',()=>setGallery(galleryIndex+1));$$('[data-gallery-index]').forEach(b=>b.onclick=()=>setGallery(Number(b.dataset.galleryIndex)));const qty=$('#qtyValue'),clamp=()=>{const raw=Number(qty.value);state.qty=Math.max(1,Math.min(p.stock,Number.isFinite(raw)?Math.round(raw):1));qty.value=state.qty;$('#orderTotal').textContent=rupiah(p.price*state.qty);};qty.oninput=()=>{const raw=Number(qty.value);if(Number.isFinite(raw)&&raw>0){state.qty=Math.min(p.stock,Math.round(raw));$('#orderTotal').textContent=rupiah(p.price*state.qty);}};qty.onchange=clamp;$('#qtyMinus').onclick=()=>{qty.value=Math.max(1,(Number(qty.value)||1)-1);clamp();};$('#qtyPlus').onclick=()=>{qty.value=Math.min(p.stock,(Number(qty.value)||0)+1);clamp();};$('#addCart').onclick=()=>{clamp();addToCart(p.id,state.qty);animateCartIcon();closeModal();toast('Produk masuk ke keranjang.');};$('#orderWa').onclick=()=>{clamp();ensureBuyer(()=>showFulfillmentModal(p.sellerId,[{productId:p.id,qty:state.qty}]));};}
function __pb_5_interactions_animateCartIcon(){const cart=$('#cartButton');if(!cart)return;cart.classList.remove('cart-bump');void cart.offsetWidth;cart.classList.add('cart-bump');setTimeout(()=>cart.classList.remove('cart-bump'),420);}

function __pb_5_interactions_cartItem(item){const p=item.product;return `<div class="cart-item" data-cart-row="${p.id}"><img src="${p.image}" alt=""><div class="cart-item-copy"><strong>${escapeHtml(p.name)}</strong><span>${rupiah(p.price)} / ${escapeHtml(p.unit)}</span><button data-cart-remove="${p.id}">Hapus</button></div><div class="qty-control compact editable"><button data-cart-minus="${p.id}">−</button><input type="number" inputmode="numeric" min="1" max="${p.stock}" value="${item.qty}" data-cart-input="${p.id}" aria-label="Jumlah ${escapeHtml(p.name)}"><button data-cart-plus="${p.id}">+</button></div><b data-cart-subtotal="${p.id}">${rupiah(p.price*item.qty)}</b></div>`;}
function __pb_5_interactions_cartGroups(){const items=state.cart.map(item=>({...item,product:db.products.find(p=>p.id===item.productId)})).filter(x=>x.product);return Object.values(items.reduce((acc,item)=>{(acc[item.product.sellerId]||={sellerId:item.product.sellerId,seller:item.product.seller,items:[]}).items.push(item);return acc;},{}));}
function __pb_5_interactions_cartBodyMarkup(){const grouped=cartGroups();return grouped.length?grouped.map(g=>`<section class="cart-group" data-cart-group="${g.sellerId}"><div class="cart-seller">${icon('store')}<strong>${escapeHtml(g.seller)}</strong><span>${g.items.length} produk</span></div>${g.items.map(cartItem).join('')}<div class="cart-group-total"><span>Total toko</span><strong data-group-total="${g.sellerId}">${rupiah(g.items.reduce((n,i)=>n+i.product.price*i.qty,0))}</strong></div><button class="btn wa-btn btn-block" data-checkout-seller="${g.sellerId}">${icon('whatsapp')} Lanjutkan pesanan toko ini</button></section>`).join(''):`<div class="empty-state"><span class="round-icon">${icon('bag')}</span><strong>Keranjang masih kosong</strong><p>Pilih produk lokal yang ingin dipesan.</p><button class="btn btn-dark btn-sm" id="cartBrowse">Lihat produk</button></div>`;}
function __pb_5_interactions_showCart(){cleanCart();openModal(`<div class="modal-head"><div><p class="eyebrow">Keranjang belanja</p><h2>Pesanan per toko</h2><p>Kuantitas dapat diketik atau diubah dengan tombol.</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body cart-body">${cartBodyMarkup()}</div>`,true);const modal=$('.modal',modalRoot);modal.classList.add('cart-modal');bindCartControls();}
function __pb_5_interactions_bindCartControls(){$$('[data-cart-minus]').forEach(b=>b.onclick=()=>setCartQuantity(b.dataset.cartMinus,(state.cart.find(x=>x.productId===b.dataset.cartMinus)?.qty||1)-1));$$('[data-cart-plus]').forEach(b=>b.onclick=()=>setCartQuantity(b.dataset.cartPlus,(state.cart.find(x=>x.productId===b.dataset.cartPlus)?.qty||0)+1));$$('[data-cart-input]').forEach(input=>{input.oninput=()=>{const n=Number(input.value);if(Number.isFinite(n)&&n>=1)setCartQuantity(input.dataset.cartInput,n,false);};input.onchange=()=>setCartQuantity(input.dataset.cartInput,Number(input.value)||1);});$$('[data-cart-remove]').forEach(b=>b.onclick=()=>{state.cart=state.cart.filter(x=>x.productId!==b.dataset.cartRemove);saveCart();refreshCartBody();});$$('[data-checkout-seller]').forEach(b=>b.onclick=()=>ensureBuyer(()=>checkoutCartSeller(b.dataset.checkoutSeller)));$('#cartBrowse')?.addEventListener('click',()=>{closeModal();setTimeout(()=>navigate('products'),220);});}
function __pb_5_interactions_setCartQuantity(id,value,normalize=true){const item=state.cart.find(x=>x.productId===id),p=db.products.find(x=>x.id===id);if(!item||!p)return;item.qty=Math.max(1,Math.min(p.stock,Math.round(Number(value)||1)));saveCart();const input=$(`[data-cart-input="${id}"]`);if(input&&normalize)input.value=item.qty;const subtotal=$(`[data-cart-subtotal="${id}"]`);if(subtotal)subtotal.textContent=rupiah(p.price*item.qty);const total=$(`[data-group-total="${p.sellerId}"]`);if(total)total.textContent=rupiah(state.cart.filter(x=>db.products.find(q=>q.id===x.productId)?.sellerId===p.sellerId).reduce((n,x)=>{const product=db.products.find(q=>q.id===x.productId);return n+(product?product.price*x.qty:0);},0));}
function __pb_5_interactions_refreshCartBody(){const body=$('.cart-body');if(!body)return;const top=$('.cart-modal')?.scrollTop||0;body.classList.add('cart-body-refresh');body.innerHTML=cartBodyMarkup();bindCartControls();requestAnimationFrame(()=>body.classList.remove('cart-body-refresh'));if($('.cart-modal'))$('.cart-modal').scrollTop=top;}
function __pb_5_interactions_changeCartQty(id,delta){const item=state.cart.find(x=>x.productId===id);if(item)setCartQuantity(id,item.qty+delta);}
function __pb_5_interactions_removeCartItem(id){state.cart=state.cart.filter(x=>x.productId!==id);saveCart();refreshCartBody();}

const productEditorBeforeGallery=showProductEditor;
showProductEditor=function(seller,p=null){productEditorBeforeGallery(seller,p);const form=$('#productForm'),input=form?.querySelector('[name=image]');if(!form||!input)return;input.multiple=true;input.setAttribute('accept','image/jpeg,image/png,image/webp');const existing=p?.images?.length?p.images:[p?.image||'assets/products/sayur-segar.jpg'];const preview=$('.upload-preview',form);preview.classList.add('multi-upload');preview.innerHTML=`<div class="multi-preview" id="multiImagePreview">${existing.map((src,i)=>`<figure><img src="${src}" alt="Foto ${i+1}">${i===0?'<span>Utama</span>':''}</figure>`).join('')}</div><div><input name="image" type="file" multiple accept="image/jpeg,image/png,image/webp"><small>Maksimal 5 foto. Foto pertama menjadi sampul produk.</small></div>`;const newInput=$('[name=image]',form);newInput.onchange=()=>{const files=[...newInput.files].slice(0,5);if(newInput.files.length>5)toast('Maksimal 5 foto; hanya 5 foto pertama yang digunakan.');$('#multiImagePreview').innerHTML=files.map((file,i)=>`<figure><img src="${URL.createObjectURL(file)}" alt="Preview ${i+1}">${i===0?'<span>Utama</span>':''}</figure>`).join('');};form.onsubmit=async e=>{e.preventDefault();const btn=e.submitter,fd=new FormData(form);btn.disabled=true;btn.textContent='Menyimpan…';if(!validCoordinates(fd.get('lat'),fd.get('lng'))){btn.disabled=false;return toast('Koordinat produk tidak valid.');}const files=[...newInput.files].slice(0,5);let images=existing;if(files.length){const results=await Promise.allSettled(files.map(compressImage));images=results.filter(r=>r.status==='fulfilled').map(r=>r.value);const failed=results.length-images.length;if(!images.length){btn.disabled=false;return toast('Semua foto gagal diproses. Gunakan JPG, PNG, atau WEBP di bawah 8 MB.','error');}if(failed)toast(`${failed} foto dilewati karena file rusak atau tidak didukung.`,'warning');}const data={sellerId:seller.id,seller:seller.business,phone:seller.phone,name:fd.get('name').trim(),category:fd.get('category'),price:Number(fd.get('price')),unit:fd.get('unit').trim(),stock:Number(fd.get('stock')),location:fd.get('location').trim(),lat:Number(fd.get('lat')),lng:Number(fd.get('lng')),map:mapsPoint(fd.get('lat'),fd.get('lng')),images,image:images[0],description:fd.get('description').trim(),active:p?.active!==false,sellerActive:true,moderation:p?.moderation||'ok'};if(p)Object.assign(p,data);else db.products.unshift({id:uid('p'),...data,active:db.settings.autoPublish});try{save('products');}catch{btn.disabled=false;return toast('Penyimpanan penuh. Kurangi jumlah atau ukuran foto.');}addLog(`${seller.business} ${p?'memperbarui':'menambahkan'} ${data.name}`);closeModal();toast('Produk dan galeri foto berhasil disimpan.');setTimeout(renderSeller,230);};};

function __pb_5_interactions_syncDashboardMode(name){document.body.classList.toggle('dashboard-mode',name==='admin'||name==='seller');}
navigate=function(name){if(name!=='home')clearInterval(window.pbHeroTimer);state.view=name;syncDashboardMode(name);$$('#mainNav button').forEach(b=>b.classList.toggle('active',b.dataset.view===name));const render=()=>{if(name==='home')renderHome();else if(name==='products')renderProducts();else if(name==='how')renderHow();else if(name==='admin')renderAdmin();else if(name==='seller')renderSeller();view.focus({preventScroll:true});window.scrollTo({top:0,behavior:'smooth'});$('#mainNav').classList.remove('open');};if(document.startViewTransition)document.startViewTransition(render);else{render();view.classList.remove('view-enter');void view.offsetWidth;view.classList.add('view-enter');setTimeout(()=>view.classList.remove('view-enter'),340);}};
function __pb_5_interactions_adminNav(){return `<aside class="dashboard-side"><button class="side-brand" data-back-market><span class="brand-mark">${icon('leaf')}</span><span><strong>Parangbaddo’</strong><small>ADMIN DESA</small></span></button><div class="side-profile"><span class="avatar">AD</span><div><strong>Admin Desa</strong><span>Pengelola marketplace</span></div></div><nav class="side-nav">${sideButton('overview','grid','Ringkasan',state.adminTab)}${sideButton('applications','clock','Permohonan',state.adminTab)}${sideButton('sellers','store','Penjual',state.adminTab)}${sideButton('products','package','Produk',state.adminTab)}${sideButton('buyers','users','Pembeli',state.adminTab)}${sideButton('orders','bag','Pesanan',state.adminTab)}${sideButton('reports','shield','Laporan',state.adminTab)}${sideButton('logs','log','Log Aktivitas',state.adminTab)}${sideButton('settings','settings','Pengaturan',state.adminTab)}</nav><button class="side-back" data-back-market>${icon('arrow')} Kembali ke marketplace</button></aside>`;}
function __pb_5_interactions_sellerNav(){return `<aside class="dashboard-side"><button class="side-brand" data-back-market><span class="brand-mark">${icon('leaf')}</span><span><strong>Parangbaddo’</strong><small>PORTAL PENJUAL</small></span></button><div class="side-profile"><span class="avatar">${initials(state.session.business)}</span><div><strong>${escapeHtml(state.session.business)}</strong><span>@${escapeHtml(state.session.username||'penjual')}</span></div></div><nav class="side-nav">${sideButton('overview','grid','Ringkasan',state.sellerTab)}${sideButton('products','package','Produk Saya',state.sellerTab)}${sideButton('orders','bag','Pesanan',state.sellerTab)}${sideButton('profile','store','Profil & Lokasi',state.sellerTab)}</nav><button class="side-back" data-back-market>${icon('arrow')} Kembali ke marketplace</button></aside>`;}
function __pb_5_interactions_animateDashboardMain(){const main=$('.dashboard-main');if(!main)return;main.classList.remove('dash-enter');void main.offsetWidth;main.classList.add('dash-enter');setTimeout(()=>main.classList.remove('dash-enter'),300);}
renderAdmin=function(){syncDashboardMode('admin');if(state.session?.role!=='admin'){navigate('home');return setTimeout(showAdminLogin,200);}const existing=$('.dashboard-shell',view);if(!existing){view.innerHTML=`<section class="dashboard-shell">${adminNav()}<div class="dashboard-main" id="adminContent"></div></section>`;}else{$$('.side-nav button',view).forEach(b=>b.classList.toggle('active',b.dataset.tab===state.adminTab));}$$('[data-tab]',view).forEach(b=>b.onclick=()=>{state.adminTab=b.dataset.tab;$$('.side-nav button',view).forEach(x=>x.classList.toggle('active',x===b));paintAdminTab();animateDashboardMain();});$$('[data-back-market]',view).forEach(b=>b.onclick=()=>navigate('home'));paintAdminTab();animateDashboardMain();};
renderSeller=function(){syncDashboardMode('seller');if(state.session?.role!=='seller'){navigate('home');return setTimeout(showSellerEntry,200);}const existing=$('.dashboard-shell',view);if(!existing){view.innerHTML=`<section class="dashboard-shell">${sellerNav()}<div class="dashboard-main" id="sellerContent"></div></section>`;}else{$$('.side-nav button',view).forEach(b=>b.classList.toggle('active',b.dataset.tab===state.sellerTab));}$$('[data-tab]',view).forEach(b=>b.onclick=()=>{state.sellerTab=b.dataset.tab;$$('.side-nav button',view).forEach(x=>x.classList.toggle('active',x===b));paintSellerTab();animateDashboardMain();});$$('[data-back-market]',view).forEach(b=>b.onclick=()=>navigate('home'));paintSellerTab();animateDashboardMain();};

function __pb_5_interactions_launchGoogleMaps(url){let opened=null;try{opened=window.open(url,'_blank');if(opened)opened.opener=null;}catch{}if(!opened){try{window.location.assign(url);}catch{toast('Browser memblokir Google Maps. Salin tautan lalu buka secara manual.');}}}
document.addEventListener('click',e=>{const link=e.target.closest('a[href*="google.com/maps"]');if(!link)return;e.preventDefault();launchGoogleMaps(link.href);},true);

// Repaint current screen under v5.
syncDashboardMode(state.view);if(state.view==='home')renderHome();else if(state.view==='seller'&&state.session?.role==='seller')renderSeller();else if(state.view==='admin'&&state.session?.role==='admin')renderAdmin();
/* ===== END interactions.js ===== */

/* ===== BEGIN fixes.js: ordered execution phase 6 ===== */
window["toast"] = __pb_6_fixes_toast;
window["extractMapCoordinates"] = __pb_6_fixes_extractMapCoordinates;
window["setCoordinateFields"] = __pb_6_fixes_setCoordinateFields;
window["coordinateStatus"] = __pb_6_fixes_coordinateStatus;
window["addMapLinkAssistant"] = __pb_6_fixes_addMapLinkAssistant;
window["bindCoordinateCapture"] = __pb_6_fixes_bindCoordinateCapture;
window["auditProductImageData"] = __pb_6_fixes_auditProductImageData;

/* v6 — resilient coordinates and image validation */

function __pb_6_fixes_toast(message,type=''){const lower=String(message).toLowerCase();if(!type){type=/(gagal|salah|ditolak|tidak valid|tidak dapat|diblokir|penuh)/.test(lower)?'error':/(peringatan|dilewati|menunggu)/.test(lower)?'warning':'success';}const el=document.createElement('div');el.className=`toast ${type}`;el.innerHTML=`${icon(type==='error'?'x':type==='warning'?'clock':'check')}<div>${escapeHtml(message)}</div>`;$('#toastRoot').append(el);setTimeout(()=>el.remove(),type==='error'?5200:3600);}

function __pb_6_fixes_extractMapCoordinates(value){let text='';try{text=decodeURIComponent(String(value||'').trim());}catch{text=String(value||'').trim();}const patterns=[/@(-?\d{1,2}(?:\.\d+)?),(-?\d{1,3}(?:\.\d+)?)/,/!3d(-?\d{1,2}(?:\.\d+)?).*?!4d(-?\d{1,3}(?:\.\d+)?)/,/(?:query|q|destination|center|ll)=(-?\d{1,2}(?:\.\d+)?)(?:%2C|,)(-?\d{1,3}(?:\.\d+)?)/i,/^\s*(-?\d{1,2}(?:\.\d+)?)\s*,\s*(-?\d{1,3}(?:\.\d+)?)\s*$/];for(const pattern of patterns){const match=text.match(pattern);if(match&&validCoordinates(match[1],match[2]))return {lat:Number(match[1]),lng:Number(match[2])};}return null;}
function __pb_6_fixes_setCoordinateFields(latSelector,lngSelector,previewSelector,lat,lng){const latInput=$(latSelector),lngInput=$(lngSelector);if(!latInput||!lngInput)return;latInput.value=Number(lat).toFixed(6);lngInput.value=Number(lng).toFixed(6);latInput.dispatchEvent(new Event('input',{bubbles:true}));lngInput.dispatchEvent(new Event('input',{bubbles:true}));updateCoordinatePreview(latSelector,lngSelector,previewSelector);}
function __pb_6_fixes_coordinateStatus(box,message,type='info'){const status=$('.coordinate-assist-status',box);if(!status)return;status.className=`coordinate-assist-status ${type}`;status.textContent=message;}
function __pb_6_fixes_addMapLinkAssistant(button,latSelector,lngSelector,previewSelector){const box=button.closest('.coordinate-box');if(!box||$('.maps-link-assistant',box))return;const helper=document.createElement('div');helper.className='maps-link-assistant';helper.innerHTML=`<div class="maps-assist-head"><span>${icon('map')}</span><span><strong>Alternatif jika GPS tidak tersedia</strong><small>Buka Google Maps, pilih titik, tekan Bagikan, lalu tempel tautannya.</small></span></div><div class="maps-assist-actions"><a href="https://www.google.com/maps/search/?api=1&query=Desa+Parang+Baddo+Takalar" target="_blank" rel="noopener">Buka Google Maps</a><div><input type="url" class="maps-link-input" placeholder="Tempel link Google Maps atau maps.app.goo.gl"><button type="button" class="maps-link-apply">Gunakan link</button></div></div><p class="coordinate-assist-status">Anda juga tetap dapat mengetik latitude dan longitude secara manual.</p>`;box.append(helper);$('.maps-link-apply',helper).onclick=async()=>{const input=$('.maps-link-input',helper),value=input.value.trim(),apply=$('.maps-link-apply',helper);if(!value)return coordinateStatus(box,'Tempel tautan Google Maps terlebih dahulu.','error');apply.disabled=true;apply.textContent='Membaca…';coordinateStatus(box,'Mencari koordinat dari tautan…','loading');try{let point=extractMapCoordinates(value);if(!point){const response=await fetch(`/api/resolve-map?url=${encodeURIComponent(value)}`,{headers:{Accept:'application/json'}});const data=await response.json();if(!response.ok||!data.ok)throw new Error(data.error||'Koordinat tidak ditemukan.');point={lat:data.lat,lng:data.lng};}setCoordinateFields(latSelector,lngSelector,previewSelector,point.lat,point.lng);coordinateStatus(box,`Koordinat berhasil diambil: ${Number(point.lat).toFixed(6)}, ${Number(point.lng).toFixed(6)}`,'success');button.innerHTML=`${icon('check')} Lokasi sudah diatur`;}catch(error){coordinateStatus(box,error.message||'Tautan tidak dapat dibaca. Gunakan tautan lengkap atau isi koordinat manual.','error');}finally{apply.disabled=false;apply.textContent='Gunakan link';}};}

function __pb_6_fixes_bindCoordinateCapture(buttonSelector,latSelector,lngSelector,previewSelector){const button=$(buttonSelector);if(!button||button.dataset.coordinateBound==='1')return;button.dataset.coordinateBound='1';button.innerHTML=`${icon('map')} Ambil GPS perangkat`;addMapLinkAssistant(button,latSelector,lngSelector,previewSelector);const box=button.closest('.coordinate-box');button.addEventListener('click',async()=>{if(!navigator.geolocation){coordinateStatus(box,'GPS tidak didukung browser ini. Gunakan tautan Google Maps atau isi manual.','error');return;}button.disabled=true;button.innerHTML=`${icon('clock')} Meminta izin lokasi…`;coordinateStatus(box,'Pastikan izin lokasi browser diaktifkan.','loading');navigator.geolocation.getCurrentPosition(pos=>{setCoordinateFields(latSelector,lngSelector,previewSelector,pos.coords.latitude,pos.coords.longitude);button.disabled=false;button.innerHTML=`${icon('check')} Lokasi sudah diatur`;coordinateStatus(box,`GPS berhasil. Akurasi sekitar ±${Math.round(pos.coords.accuracy||0)} meter.`,'success');},error=>{button.disabled=false;button.innerHTML=`${icon('map')} Ambil GPS perangkat`;const reasons={1:'Izin lokasi diblokir browser.',2:'Posisi perangkat tidak ditemukan.',3:'Permintaan GPS terlalu lama.'};coordinateStatus(box,`${reasons[error.code]||'GPS tidak tersedia'} Tempel tautan Google Maps atau isi koordinat manual di atas.`,'error');$('.maps-link-input',box)?.focus();},{enableHighAccuracy:true,timeout:15000,maximumAge:0});});}

// If an image is missing/corrupt, show a deliberate local placeholder instead of a broken icon.
document.addEventListener('error',event=>{const img=event.target;if(!(img instanceof HTMLImageElement)||img.dataset.fallbackApplied==='1')return;img.dataset.fallbackApplied='1';img.src='assets/image-placeholder.svg';img.classList.add('image-load-failed');const figure=img.closest('figure');if(figure&&!figure.querySelector('.image-error-label'))figure.insertAdjacentHTML('beforeend','<small class="image-error-label">Foto gagal dimuat</small>');},true);

// Remove unusable gallery entries after a failed thumbnail while retaining the product cover fallback.
function __pb_6_fixes_auditProductImageData(){let changed=false;db.products.forEach(p=>{const clean=(Array.isArray(p.images)?p.images:[p.image]).filter(src=>typeof src==='string'&&src.trim());if(!clean.length)clean.push('assets/image-placeholder.svg');if(clean.length!==p.images?.length)changed=true;p.images=[...new Set(clean)].slice(0,5);p.image=p.images[0];});if(changed)save('products');}
auditProductImageData();
/* ===== END fixes.js ===== */

/* ===== BEGIN final-ui.js: ordered execution phase 7 ===== */


/* Final UI — Mockup flow, professional, colorful, logic preserved */
(function(){
  const $ = (s,r=document)=>r.querySelector(s);
  const $$ = (s,r=document)=>[...r.querySelectorAll(s)];

  // Header search
  const headerSearch = $('#headerSearch');
  if(headerSearch){
    headerSearch.addEventListener('input', (e)=>{
      state.search = e.target.value;
      if(state.view==='products') {
        if(typeof paintProducts==='function') paintProducts();
      } else {
        // if on home, go to products
        if(e.target.value.trim()) navigate('products');
      }
    });
    headerSearch.addEventListener('keydown', (e)=>{
      if(e.key==='Enter'){ navigate('products'); }
    });
  }

  // Product Card — MERIAH ELEGAN, colorful per category
  function catClass(cat){
    const c = String(cat||'').toLowerCase();
    if(c.includes('kuliner')) return 'cat-Kuliner';
    if(c.includes('tani')) return 'cat-Hasil Tani';
    if(c.includes('minum')) return 'cat-Minuman';
    if(c.includes('ternak')||c.includes('peternak')) return 'cat-Peternakan';
    if(c.includes('kerajinan')||c.includes('anyam')) return 'cat-Kerajinan';
    return '';
  }
  function newProductCard(p){
    const rating = (4.5 + (p.id.charCodeAt(1)%5)*0.1).toFixed(1);
    const cc = catClass(p.category);
    return `<article class="product-card" data-product="${p.id}" data-category="${escapeHtml(p.category)}" tabindex="0">
      <div class="product-image">
        <img src="${p.image}" alt="${escapeHtml(p.name)}" loading="lazy">
        <span class="product-badge ${cc}">${escapeHtml(p.category)}</span>
        <span class="stock" style="position:absolute; right:10px; bottom:10px">${p.stock} ${escapeHtml(p.unit)}</span>
      </div>
      <div class="product-body">
        <div class="seller-line"><span>${escapeHtml(p.seller)}</span><span>${icon('map')} Takalar</span></div>
        <h3>${escapeHtml(p.name)}</h3>
        <div class="product-rating">${icon('star')} ${rating} <span>• Terjual 50+</span></div>
        <div class="product-bottom">
          <span class="price">${rupiah(p.price)} <small>/ ${escapeHtml(p.unit)}</small></span>
          <button class="cart-icon-btn" data-add-cart="${p.id}" aria-label="Tambah ke keranjang">${icon('bag')}</button>
        </div>
      </div>
    </article>`;
  }

  // Override global productCard if exists
  if(typeof window!=='undefined') window.productCard = newProductCard;
  try{ productCard = newProductCard; }catch(e){}

  function bindProductCards(root){
    $$( '[data-product]', root).forEach(card=>{
      card.onclick = (e)=>{
        if(e.target.closest('[data-add-cart]')) return;
        showProduct(card.dataset.product);
      };
      card.onkeydown = (e)=>{ if(e.key==='Enter' || e.key===' ') showProduct(card.dataset.product); };
    });
    $$('[data-add-cart]', root).forEach(btn=>{
      btn.onclick = (e)=>{
        e.stopPropagation();
        const p = db.products.find(x=>x.id===btn.dataset.addCart);
        if(!p) return;
        addToCart(p.id, 1);
        if(typeof animateCartIcon==='function') animateCartIcon();
        toast(`${p.name} ditambahkan ke keranjang`);
      };
    });
  }

  // Render Home — Buyer homepage like mockup #8 + hero stats
  const originalRenderHome = typeof renderHome==='function' ? renderHome : null;
  renderHome = function(){
    const visible = db.products.filter(p=> typeof productIsVisible==='function' ? productIsVisible(p) : p.active);
    const categories = ['Semua', ...new Set(visible.map(p=>p.category))];
    const featured = visible.slice(0,6);

    view.innerHTML = `
      <div class="buyer-home">
        <div class="container">
          <div class="buyer-layout">
            <aside class="category-sidebar">
              <div class="cat-head"><strong>Kategori</strong><span class="muted small">${visible.length} produk</span></div>
              <div class="cat-list">
                ${categories.map(c=>`<button class="${state.category===c?'active':''}" data-cat="${c}">${icon(c==='Semua'?'grid': c==='Kuliner'?'package' : c==='Hasil Tani'?'leaf' : c==='Minuman'?'bag' : 'store')} ${c}</button>`).join('')}
              </div>
              <div style="padding:12px 16px; border-top:1px solid var(--line)">
                <div class="helper-box" style="margin:0">Belanja dekat, tumbuh bersama. Semua penjual diverifikasi desa.</div>
              </div>
            </aside>
            <section class="buyer-main">
              <div class="promo-banner">
                <div class="promo-content">
                  <div class="promo-kicker">Marketplace Resmi Desa</div>
                  <h2>Produk Lokal<br>Desa Parangbaddo'</h2>
                  <p>Langsung dari petani dan pengrajin lokal. Harga jujur, lokasi jelas, pesan via WhatsApp.</p>
                  <button class="btn" data-go-products>Belanja Sekarang ${icon('arrow')}</button>
                </div>
                <div></div>
              </div>

              <div class="market-summary" style="margin-top:0; border-radius:12px; border-top:1px solid var(--line)">
                <div><strong>${db.sellers.filter(s=>s.status==='approved').length}</strong><span>Usaha aktif</span></div>
                <div><strong>${visible.length}</strong><span>Produk tersedia</span></div>
                <div><strong>${categories.length-1}</strong><span>Kategori</span></div>
                <div class="summary-action"><button data-go-products>Lihat semua ${icon('arrow')}</button></div>
              </div>

              <div class="section-head-mockup">
                <h3>Produk Terpopuler</h3>
                <a href="#" data-go-products>Lihat Semua ${icon('arrow')}</a>
              </div>
              <div class="product-grid">${featured.map(p=>newProductCard(p)).join('')}</div>

              <div class="home-guide" style="margin-top:12px; border-radius:12px; border:1px solid var(--line)">
                <div class="container" style="width:100%; padding:20px 24px">
                  <div class="guide-copy"><span class="section-kicker" style="color:var(--forest)">Cara Kerja</span><h2 style="font-size:20px; margin-top:8px">Alur Kerja Singkat</h2></div>
                  <div class="guide-steps" style="display:grid; grid-template-columns:repeat(4,1fr); gap:16px; border:0; margin-top:16px">
                    <div style="border:1px solid var(--line); border-radius:10px; padding:14px; background:#fff; text-align:center"><div style="width:36px; height:36px; background:var(--forest-light); border-radius:50%; display:grid; place-items:center; margin:0 auto 8px; color:var(--forest)">${icon('user')}</div><strong>1. Daftar</strong><small>Pembeli / Penjual</small></div>
                    <div style="border:1px solid var(--line); border-radius:10px; padding:14px; background:#fff; text-align:center"><div style="width:36px; height:36px; background:var(--forest-light); border-radius:50%; display:grid; place-items:center; margin:0 auto 8px; color:var(--forest)">${icon('shield')}</div><strong>2. Verifikasi</strong><small>OTP / Admin</small></div>
                    <div style="border:1px solid var(--line); border-radius:10px; padding:14px; background:#fff; text-align:center"><div style="width:36px; height:36px; background:var(--forest-light); border-radius:50%; display:grid; place-items:center; margin:0 auto 8px; color:var(--forest)">${icon('package')}</div><strong>3. Kelola Produk</strong><small>& Pesanan</small></div>
                    <div style="border:1px solid var(--line); border-radius:10px; padding:14px; background:#fff; text-align:center"><div style="width:36px; height:36px; background:var(--forest-light); border-radius:50%; display:grid; place-items:center; margin:0 auto 8px; color:var(--forest)">${icon('whatsapp')}</div><strong>4. Transaksi</strong><small>via WhatsApp</small></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <section class="seller-banner">
        <div><span style="background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.18); padding:4px 10px; border-radius:999px; font-size:10px; font-weight:700; letter-spacing:.08em">UNTUK PELAKU USAHA DESA</span><h2 style="margin-top:10px">Punya produk untuk dijual?</h2><p>Ajukan toko, admin desa akan verifikasi lokasi dan data usaha Anda. Gratis.</p></div>
        <button class="btn btn-light" data-role="seller">Daftarkan usaha ${icon('arrow')}</button>
      </section>
    `;

    // binds
    $$('[data-cat]').forEach(b=>b.onclick=()=>{ state.category=b.dataset.cat; navigate('products'); });
    $$('[data-go-products]', view).forEach(b=>b.onclick=()=>navigate('products'));
    $$('[data-role]', view).forEach(b=>b.onclick=()=>handleRole(b.dataset.role));
    bindProductCards(view);
    if(typeof setupHeroCarousel==='function'){
      // keep carousel if needed, but we have promo banner now
    }
  };

  // Render Products — with sidebar + search
  renderProducts = function(){
    const visible = db.products.filter(p=> typeof productIsVisible==='function' ? productIsVisible(p) : p.active);
    const categories = ['Semua', ...new Set(visible.map(p=>p.category))];
    view.innerHTML = `
      <div class="buyer-home">
        <div class="container">
          <div class="search-panel">
            <div class="search-box">${icon('search')}<input id="productSearch" value="${state.search||''}" placeholder="Cari gula aren, sayur, kopi, kerajinan..." aria-label="Cari produk"></div>
            <select id="sortProduct"><option value="new">Terbaru</option><option value="low">Harga terendah</option><option value="high">Harga tertinggi</option><option value="stock">Stok terbanyak</option></select>
            <button class="btn btn-dark" id="searchBtn">Cari</button>
          </div>
          <div class="buyer-layout" style="margin-top:20px">
            <aside class="category-sidebar">
              <div class="cat-head"><strong>Filter Kategori</strong></div>
              <div class="cat-list">
                ${categories.map(c=>`<button class="${state.category===c?'active':''}" data-category="${c}">${icon('grid')} ${c}</button>`).join('')}
              </div>
            </aside>
            <section class="buyer-main">
              <div class="section-head-mockup"><h3>Etalase Produk Lokal</h3><span id="productResultCount" class="muted small">${visible.length} produk</span></div>
              <div id="productGrid" class="product-grid"></div>
            </section>
          </div>
        </div>
      </div>
    `;
    $('#productSearch').addEventListener('input', e=>{ state.search=e.target.value; if(typeof paintProducts==='function') paintProducts(); });
    $('#sortProduct').onchange = ()=>{ if(typeof paintProducts==='function') paintProducts(); };
    $('#searchBtn').onclick = ()=>{ if(typeof paintProducts==='function') paintProducts(); };
    $$('[data-category]').forEach(b=>b.onclick=()=>{ state.category=b.dataset.category; $$('[data-category]').forEach(x=>x.classList.toggle('active', x===b)); if(typeof paintProducts==='function') paintProducts(); });
    if(typeof paintProducts==='function') paintProducts();
    else {
      // fallback paint
      let items = db.products.filter(p=> (typeof productIsVisible==='function'?productIsVisible(p):p.active) && (state.category==='Semua'||p.category===state.category) && `${p.name} ${p.seller} ${p.category}`.toLowerCase().includes((state.search||'').toLowerCase()));
      $('#productGrid').innerHTML = items.map(p=>newProductCard(p)).join('');
      bindProductCards($('#productGrid'));
    }
  };

  // Override paintProducts to use new card and binding
  const originalPaint = typeof paintProducts==='function' ? paintProducts : null;
  paintProducts = function(){
    let items = db.products.filter(p=> (typeof productIsVisible==='function'?productIsVisible(p):p.active) && (state.category==='Semua'||p.category===state.category) && `${p.name} ${p.seller} ${p.category}`.toLowerCase().includes((state.search||'').toLowerCase()));
    const sort = $('#sortProduct')?.value;
    if(sort==='low') items.sort((a,b)=>a.price-b.price);
    if(sort==='high') items.sort((a,b)=>b.price-a.price);
    if(sort==='stock') items.sort((a,b)=>b.stock-a.stock);
    if($('#productResultCount')) $('#productResultCount').textContent = `${items.length} produk ditemukan`;
    const grid = $('#productGrid');
    if(!grid) return;
    grid.innerHTML = items.length ? items.map(p=>newProductCard(p)).join('') : `<div class="empty-state" style="grid-column:1/-1; background:#fff; border:1px dashed var(--line); border-radius:12px; padding:40px; text-align:center"><strong>Produk tidak ditemukan</strong><p class="muted small">Coba kata kunci lain</p></div>`;
    bindProductCards(grid);
  };

  // Show Product — detail like mockup #5
  showProduct = function(id){
    const p = db.products.find(x=>x.id===id);
    if(!p || (typeof productIsVisible==='function' && !productIsVisible(p))) return toast('Produk tidak tersedia');
    state.selectedProduct = id; state.qty = 1;
    const lat = Number(p.lat), lng = Number(p.lng);
    const images = (p.images && p.images.length ? p.images : [p.image]);
    const seller = db.sellers.find(s=>s.id===p.sellerId);

    modalRoot.innerHTML = `<div class="modal product-modal" role="dialog" aria-modal="true">
      <button class="icon-btn" data-close style="position:absolute; right:16px; top:16px; z-index:5">${icon('x')}</button>
      <div class="detail-layout">
        <div class="detail-gallery">
          <div class="detail-main-img"><img id="detailMainImg" src="${images[0]}" alt="${escapeHtml(p.name)}"></div>
          ${images.length>1 ? `<div class="detail-thumbs">${images.map((src,i)=>`<button class="${i===0?'active':''}" data-thumb="${i}"><img src="${src}" alt=""></button>`).join('')}</div>` : ''}
          <!-- Peta ringkas dihilangkan: koordinat dan tombol rute tersedia di kartu lokasi sebelah kanan. -->
        </div>
        <div class="detail-info">
          <div class="detail-meta"><span>${escapeHtml(p.category)}</span><span>Stok ${p.stock}</span><span class="status active">Aktif</span></div>
          <h1>${escapeHtml(p.name)}</h1>
          <div class="detail-price">${rupiah(p.price)} <small>/ ${escapeHtml(p.unit)}</small></div>
          <div class="detail-rating">${icon('star')} 4.8 (124 ulasan) <span>•</span> <span class="detail-stock">${p.stock} tersedia</span></div>
          <div class="detail-desc">${escapeHtml(p.description)}</div>

          <div class="seller-box">
            <div class="seller-avatar">${typeof initials==='function'?initials(p.seller):p.seller[0]}</div>
            <div><strong>${escapeHtml(p.seller)}</strong><br><small>${escapeHtml(p.location)} • ${seller? (seller.joined||'') : ''}</small></div>
            <span class="status active" style="margin-left:auto">Terverifikasi</span>
          </div>

          <div class="store-location-card" style="margin:0; background:var(--bg); border:1px solid var(--line); border-radius:10px; padding:12px">
            <div style="display:flex; gap:8px; align-items:center"><span class="location-pin" style="width:32px; height:32px; border-radius:8px">${icon('map')}</span><div><strong style="font-size:12px">${escapeHtml(p.seller)}</strong><br><small style="font-size:10px; color:var(--muted)">${escapeHtml(p.location)}</small></div></div>
            <code style="display:block; margin:10px 0; background:#fff; border:1px solid var(--line); padding:6px 8px; border-radius:6px; font-size:11px">${lat.toFixed(6)}, ${lng.toFixed(6)}</code>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px">
              <a class="btn btn-outline btn-sm" href="${typeof mapsPoint==='function'?mapsPoint(lat,lng):'#'}" target="_blank">Lihat titik</a>
              <a class="btn btn-dark btn-sm" href="${typeof mapsRoute==='function'?mapsRoute(lat,lng):'#'}" target="_blank">${icon('arrow')} Petunjuk arah</a>
            </div>
          </div>

          <div class="qty-row" style="display:flex; align-items:center; justify-content:space-between; margin-top:18px; padding:14px; background:var(--bg); border:1px solid var(--line); border-radius:10px">
            <div><strong style="font-size:13px">Jumlah</strong><br><small style="color:var(--muted)">Maks ${p.stock} ${escapeHtml(p.unit)}</small></div>
            <div class="qty-control editable"><button id="qtyMinus">−</button><input id="qtyValue" type="number" min="1" max="${p.stock}" value="1"><button id="qtyPlus">+</button></div>
          </div>
          <div class="total-box" style="display:flex; justify-content:space-between; align-items:center; padding:14px 0; border-top:1px dashed var(--line); border-bottom:1px dashed var(--line); margin:14px 0"><span>Total sementara</span><strong id="orderTotal">${rupiah(p.price)}</strong></div>
          <div class="detail-actions">
            <button id="addCart" class="btn btn-outline">${icon('bag')} Tambah ke Keranjang</button>
            <button id="orderWa" class="btn btn-dark" style="background:var(--forest)">${icon('whatsapp')} Pesan Sekarang</button>
            <p style="font-size:11px; color:var(--muted); text-align:center; margin:0">Pembayaran & pengiriman disepakati via WhatsApp</p>
          </div>
        </div>
      </div>
    </div>`;
    modalRoot.classList.add('open'); modalRoot.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden';

    // gallery
    let gIndex=0;
    const setGallery = (i)=>{
      gIndex=(i+images.length)%images.length;
      $('#detailMainImg').src = images[gIndex];
      $$('[data-thumb]').forEach((b,n)=>b.classList.toggle('active', n===gIndex));
    };
    $$('[data-thumb]').forEach(b=>b.onclick=()=>setGallery(Number(b.dataset.thumb)));

    const qtyInput = $('#qtyValue');
    const clamp = ()=>{
      const raw = Number(qtyInput.value);
      state.qty = Math.max(1, Math.min(p.stock, Number.isFinite(raw)?Math.round(raw):1));
      qtyInput.value = state.qty;
      $('#orderTotal').textContent = rupiah(p.price*state.qty);
    };
    qtyInput.oninput = ()=>{
      const raw = Number(qtyInput.value);
      if(Number.isFinite(raw) && raw>0){ state.qty = Math.min(p.stock, Math.round(raw)); $('#orderTotal').textContent = rupiah(p.price*state.qty); }
    };
    qtyInput.onchange = clamp;
    $('#qtyMinus').onclick = ()=>{ qtyInput.value = Math.max(1, (Number(qtyInput.value)||1)-1); clamp(); };
    $('#qtyPlus').onclick = ()=>{ qtyInput.value = Math.min(p.stock, (Number(qtyInput.value)||0)+1); clamp(); };

    $('#addCart').onclick = ()=>{ clamp(); addToCart(p.id, state.qty); if(typeof animateCartIcon==='function') animateCartIcon(); closeModal(); toast('Masuk keranjang'); };
    $('#orderWa').onclick = ()=>{ clamp(); ensureBuyer(()=>showFulfillmentModal(p.sellerId, [{productId:p.id, qty:state.qty}])); };
  };

  // Cart — mockup #6
  function newCartItem(item){
    const p = item.product;
    return `<div class="cart-item" data-cart-row="${p.id}">
      <img src="${p.image}" alt="">
      <div class="cart-item-info">
        <h4>${escapeHtml(p.name)}</h4>
        <p>${rupiah(p.price)} / ${escapeHtml(p.unit)}</p>
        <div class="cart-qty"><button data-cart-minus="${p.id}">−</button><strong>${item.qty}</strong><button data-cart-plus="${p.id}">+</button></div>
      </div>
      <div class="cart-price"><div>${rupiah(p.price*item.qty)}</div><button class="text-btn" style="font-size:11px; color:var(--red)" data-cart-remove="${p.id}">Hapus</button></div>
    </div>`;
  }

  function cartGroups(){
    const items = state.cart.map(it=>({...it, product: db.products.find(p=>p.id===it.productId)})).filter(x=>x.product);
    return Object.values(items.reduce((acc,it)=>{ (acc[it.product.sellerId]||={sellerId:it.product.sellerId, seller:it.product.seller, items:[]}).items.push(it); return acc; }, {}));
  }

  showCart = function(){
    if(typeof cleanCart==='function') cleanCart();
    const groups = cartGroups();
    const totalItems = state.cart.reduce((n,i)=>n+i.qty,0);
    const totalPrice = state.cart.reduce((n,i)=>{ const p=db.products.find(p=>p.id===i.productId); return n+(p?p.price*i.qty:0); },0);

    openModal(`<div class="modal-head"><div><p class="eyebrow">Keranjang Belanja</p><h2>${totalItems} produk di keranjang</h2><p>Pesanan per toko akan dibuat terpisah</p></div><button class="icon-btn" data-close>${icon('x')}</button></div>
      <div class="modal-body">
        <div class="cart-layout">
          <div class="cart-list">
            ${groups.length ? groups.map(g=>`
              <div style="margin-bottom:18px">
                <div style="display:flex; align-items:center; gap:8px; padding-bottom:10px; border-bottom:1px solid var(--line); margin-bottom:10px"><span style="width:28px; height:28px; background:var(--forest-light); border-radius:50%; display:grid; place-items:center; color:var(--forest)">${icon('store')}</span><strong style="font-size:13px">${escapeHtml(g.seller)}</strong><span style="margin-left:auto; font-size:11px; color:var(--muted)">${g.items.length} produk</span></div>
                ${g.items.map(newCartItem).join('')}
                <button class="btn wa-btn btn-block" style="margin-top:12px; border-radius:10px" data-checkout-seller="${g.sellerId}">${icon('whatsapp')} Lanjutkan pesanan toko ini</button>
              </div>
            `).join('') : `<div class="empty-state" style="text-align:center; padding:40px"><span class="round-icon" style="margin:0 auto 12px; width:48px; height:48px; background:var(--bg); border-radius:50%; display:grid; place-items:center">${icon('bag')}</span><strong>Keranjang kosong</strong><p class="muted small">Belum ada produk</p><button class="btn btn-dark btn-sm" id="cartBrowse">Lihat produk</button></div>`}
          </div>
          <div class="cart-summary">
            <h3>Ringkasan Pesanan</h3>
            <div class="summary-row"><span>Total Item</span><b>${totalItems}</b></div>
            <div class="summary-row"><span>Total Harga</span><b>${rupiah(totalPrice)}</b></div>
            <textarea placeholder="Catatan (opsional) — contoh: minta yang fresh, dll"></textarea>
            <div class="helper-box" style="margin-top:12px">Pembayaran & ongkir disepakati langsung dengan penjual via WhatsApp.</div>
            <button class="btn" id="checkoutAll" style="background:var(--forest); color:#fff; border-radius:10px">Pesan via WhatsApp ${icon('arrow')}</button>
          </div>
        </div>
      </div>`, true);

    const bind = ()=>{
      $$('[data-cart-minus]').forEach(b=>b.onclick=()=>{ const it=state.cart.find(x=>x.productId===b.dataset.cartMinus); if(it) { it.qty=Math.max(1,it.qty-1); saveCart(); showCart(); } });
      $$('[data-cart-plus]').forEach(b=>b.onclick=()=>{ const it=state.cart.find(x=>x.productId===b.dataset.cartPlus); const p=db.products.find(p=>p.id===b.dataset.cartPlus); if(it&&p){ it.qty=Math.min(p.stock,it.qty+1); saveCart(); showCart(); } });
      $$('[data-cart-remove]').forEach(b=>b.onclick=()=>{ state.cart=state.cart.filter(x=>x.productId!==b.dataset.cartRemove); saveCart(); showCart(); });
      $$('[data-checkout-seller]').forEach(b=>b.onclick=()=>ensureBuyer(()=>{ if(typeof checkoutCartSeller==='function') checkoutCartSeller(b.dataset.checkoutSeller); else if(typeof showFulfillmentModal==='function'){ const items=state.cart.filter(i=>db.products.find(p=>p.id===i.productId)?.sellerId===b.dataset.checkoutSeller); showFulfillmentModal(b.dataset.checkoutSeller, items); } }));
      $('#cartBrowse')?.addEventListener('click',()=>{ closeModal(); setTimeout(()=>navigate('products'),200); });
      $('#checkoutAll')?.addEventListener('click',()=>{
        if(!groups.length) return;
        // checkout first seller as demo, or all sellers one by one
        const first = groups[0];
        ensureBuyer(()=>{ if(typeof checkoutCartSeller==='function') checkoutCartSeller(first.sellerId); });
      });
    };
    bind();
  };

  // Buyer orders — Riwayat Pesanan like mockup #9
  buyerOrderCard = function(o){
    const st = (o.status||'wa');
    const statusClass = st==='wa' ? 'process' : st==='confirmed' ? 'shipped' : st==='completed' ? 'done' : 'process';
    const statusLabel = typeof statusLabel==='function' ? statusLabel(st) : st;
    const img = (db.products.find(p=>p.id===o.productId)?.image) || 'assets/image-placeholder.svg';
    return `<div class="order-card">
      <img src="${img}" alt="">
      <div><h4>${escapeHtml(typeof orderTitle==='function'?orderTitle(o):o.product)}</h4><p>${o.id} • ${o.created} • ${rupiah(o.total)}</p><span class="order-status ${statusClass}">${statusLabel}</span></div>
      <div style="display:grid; gap:6px"><button class="btn-sm" data-buyer-order="${o.id}">Lihat Detail</button>${st==='wa'?`<button class="btn-sm" style="color:var(--red)" data-cancel-buyer="${o.id}">Batal</button>`:''}</div>
    </div>`;
  };

  const originalShowBuyerAccount = typeof showBuyerAccount==='function' ? showBuyerAccount : null;
  showBuyerAccount = function(){
    const buyer = db.buyers.find(b=>b.id===state.session.id) || state.session;
    const orders = (typeof buyerOrders==='function'?buyerOrders(buyer): db.orders.filter(o=>o.buyerId===buyer.id || o.buyerPhone===buyer.phone)).slice().reverse();
    const tabs = ['Semua','Diproses','Dikirim','Selesai'];
    openModal(`<div class="modal-head"><div><p class="eyebrow">Pesanan Saya</p><h2>@${escapeHtml(buyer.username||buyer.name||'user')}</h2><p>${orders.length} riwayat pesanan</p></div><button class="icon-btn" data-close>${icon('x')}</button></div>
      <div class="modal-body">
        <div class="orders-tabs">${tabs.map(t=>`<button class="${t==='Semua'?'active':''}" data-order-tab="${t}">${t}</button>`).join('')}</div>
        <div class="buyer-order-list">${orders.length?orders.map(o=>buyerOrderCard(o)).join(''):`<div class="empty-state" style="text-align:center; padding:32px; background:#fff; border:1px solid var(--line); border-radius:12px"><strong>Belum ada pesanan</strong><p class="muted small">Pesanan akan tampil di sini</p></div>`}</div>
        <div style="margin-top:16px; display:flex; gap:8px">
          <button class="btn btn-outline btn-sm" id="buyerBrowse">Cari produk</button>
          <button class="btn btn-outline btn-sm" id="logoutBuyer">Keluar</button>
        </div>
      </div>`, true);

    $('#buyerBrowse').onclick=()=>{ closeModal(); setTimeout(()=>navigate('products'),200); };
    $('#logoutBuyer').onclick=()=>{ setSession(null); closeModal(); toast('Keluar'); };
    $$('[data-buyer-order]').forEach(b=>b.onclick=()=>showOrderDetail(b.dataset.buyerOrder,'buyer'));
    $$('[data-cancel-buyer]').forEach(b=>b.onclick=()=>{ if(typeof cancelBuyerOrder==='function') cancelBuyerOrder(b.dataset.cancelBuyer); });
    $$('[data-order-tab]').forEach(b=>b.onclick=()=>{
      $$('[data-order-tab]').forEach(x=>x.classList.remove('active'));
      b.classList.add('active');
      const tab=b.dataset.orderTab;
      let filtered = orders;
      if(tab==='Diproses') filtered = orders.filter(o=>o.status==='wa');
      else if(tab==='Dikirim') filtered = orders.filter(o=>o.status==='confirmed');
      else if(tab==='Selesai') filtered = orders.filter(o=>o.status==='completed');
      $('.buyer-order-list').innerHTML = filtered.length?filtered.map(o=>buyerOrderCard(o)).join(''):`<div class="empty-state" style="text-align:center; padding:24px">Tidak ada pesanan ${tab}</div>`;
      $$('[data-buyer-order]', $('.buyer-order-list')).forEach(x=>x.onclick=()=>showOrderDetail(x.dataset.buyerOrder,'buyer'));
    });
  };

  // Dashboard nav — dark, like mockup #4 and #10
  adminNav = function(){
    return `<aside class="dashboard-side">
      <button class="side-brand" data-back-market><span class="brand-mark" style="background:#22c55e; color:#0f1f16">${icon('leaf')}</span><span><strong style="color:#fff">Parangbaddo'</strong><small style="color:rgba(255,255,255,.5)">ADMIN DESA</small></span></button>
      <div class="side-profile"><span class="avatar">AD</span><div><strong>Admin Desa</strong><span>Pengelola marketplace</span></div></div>
      <nav class="side-nav">
        ${sideButton('overview','grid','Dashboard', state.adminTab)}
        ${sideButton('applications','clock','Permintaan Penjual', state.adminTab)}
        ${sideButton('sellers','store','Data Penjual', state.adminTab)}
        ${sideButton('products','package','Data Produk', state.adminTab)}
        ${sideButton('orders','bag','Pesanan', state.adminTab)}
        ${sideButton('buyers','users','Data Pembeli', state.adminTab)}
        ${sideButton('reports','shield','Laporan', state.adminTab)}
        ${sideButton('logs','log','Log Aktivitas', state.adminTab)}
        ${sideButton('settings','settings','Pengaturan', state.adminTab)}
      </nav>
      <button class="side-back" data-back-market>${icon('arrow')} Kembali ke marketplace</button>
    </aside>`;
  };

  sellerNav = function(){
    const business = state.session?.business || 'Toko';
    const username = state.session?.username || 'penjual';
    return `<aside class="dashboard-side">
      <button class="side-brand" data-back-market><span class="brand-mark" style="background:#22c55e; color:#0f1f16">${icon('store')}</span><span><strong style="color:#fff">${escapeHtml(business)}</strong><small style="color:rgba(255,255,255,.5)">PORTAL PENJUAL</small></span></button>
      <div class="side-profile"><span class="avatar">${typeof initials==='function'?initials(business):business[0]}</span><div><strong>${escapeHtml(business)}</strong><span>@${escapeHtml(username)}</span></div></div>
      <nav class="side-nav">
        ${sideButton('overview','grid','Dashboard', state.sellerTab)}
        ${sideButton('products','package','Produk Saya', state.sellerTab)}
        ${sideButton('orders','bag','Pesanan Masuk', state.sellerTab)}
        ${sideButton('profile','store','Lokasi Toko', state.sellerTab)}
      </nav>
      <button class="side-back" data-back-market>${icon('arrow')} Kembali ke marketplace</button>
    </aside>`;
  };

  // Ensure navigate keeps dashboard mode
  if(typeof navigate==='function'){
    const originalNavigate = navigate;
    navigate = function(name){
      if(name!=='home' && window.pbHeroTimer) clearInterval(window.pbHeroTimer);
      state.view = name;
      if(typeof syncDashboardMode==='function') syncDashboardMode(name);
      $$('#mainNav button').forEach(b=>b.classList.toggle('active', b.dataset.view===name));
      const doRender = ()=>{
        if(name==='home') renderHome();
        else if(name==='products') renderProducts();
        else if(name==='how') renderHow();
        else if(name==='admin') renderAdmin();
        else if(name==='seller') renderSeller();
        view.focus({preventScroll:true});
        window.scrollTo({top:0, behavior:'smooth'});
        $('#mainNav').classList.remove('open');
      };
      if(document.startViewTransition) document.startViewTransition(doRender);
      else { doRender(); view.classList.remove('view-enter'); void view.offsetWidth; view.classList.add('view-enter'); setTimeout(()=>view.classList.remove('view-enter'),320); }
    };
  }

  // Initial repaint
  if(state.view==='home') renderHome();
  else if(state.view==='products') renderProducts();

  console.log('Final UI loaded — mockup flow applied, logic preserved');
})();
/* ===== Supabase browser integration — Auth, catalog, seller applications ===== */
(function installSupabaseCore() {
  const sb = window.pbSupabaseClient;
  if (!sb) {
    console.error('Supabase SDK is unavailable; disabling local demo authentication and transactions.');
    db.products.splice(0); db.applications.splice(0); db.sellers.splice(0); db.buyers.splice(0); db.orders.splice(0);
    state.session = null; state.cart = [];
    try { localStorage.removeItem('pb_cart'); sessionStorage.removeItem('pb_session'); } catch {}
    const unavailable = () => toast('Layanan akun/transaksi belum tersedia. Periksa koneksi Supabase lalu muat ulang halaman.');
    window.setSession = session => { if (session == null) state.session = null; else unavailable(); updateHeader(); };
    window.showBuyerAuth = unavailable; window.showSellerEntry = unavailable; window.showAdminLogin = unavailable;
    window.showSellerRegistration = unavailable; window.showApplicationTracking = unavailable; window.showOtp = unavailable;
    window.ensureBuyer = () => { unavailable(); return false; };
    window.createOrderAndOpenWhatsApp = unavailable; window.showFulfillmentModal = unavailable;
    window.approveApplication = unavailable; window.reviewApplication = unavailable; window.updateOrder = unavailable;
    window.renderAdmin = unavailable; window.renderSeller = unavailable;
    if (state.view === 'products') renderProducts(); else renderHome();
    return;
  }

  const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[ch]));
  const dateText = value => value ? new Date(value).toLocaleString('id-ID', { dateStyle:'medium', timeStyle:'short' }) : '—';
  const rawPhone = value => String(value || '').replace(/\D/g, '');
  const goodPhone = value => /^62\d{8,13}$/.test(normalizePhone(value));
  const statusCopy = value => ({ pending:'Menunggu', pending_whatsapp:'Menunggu konfirmasi', revision:'Perlu perbaikan', approved:'Disetujui', rejected:'Ditolak', suspended:'Ditangguhkan', wa:'Menunggu konfirmasi', confirmed:'Dikonfirmasi', completed:'Selesai', cancelled:'Dibatalkan' }[value] || value || '—');
  const appRef = id => `PB-${String(id || '').slice(0, 8).toUpperCase()}`;
  let authVersion = 0;
  let authEventVersion = 0;
  let authSyncTask = null;
  let authSyncKey = null;
  let currentProfile = null;
  let currentAuthUser = null;
  let categoryPromise = null;

  function toastError(prefix, error) {
    console.error(prefix, error);
    toast(`${prefix}${error?.message ? ` (${error.message})` : ''}`);
  }
  function coordsValid(lat, lng) {
    return Number.isFinite(Number(lat)) && Number.isFinite(Number(lng)) && Number(lat) >= -90 && Number(lat) <= 90 && Number(lng) >= -180 && Number(lng) <= 180;
  }
  function dateShort(value) {
    return value ? new Date(value).toLocaleDateString('id-ID', { dateStyle:'medium' }) : '—';
  }
  function sellerFromRow(row) {
    if (!row) return null;
    return {
      id: row.id, ownerId: row.owner_id, name: currentProfile?.display_name || '',
      business: row.business_name, phone: row.phone, category: row.categories?.name || '',
      categoryId: row.category_id, address: row.address, bio: row.description || '',
      lat: row.latitude == null ? null : Number(row.latitude),
      lng: row.longitude == null ? null : Number(row.longitude),
      status: row.status, joined: dateShort(row.approved_at || row.created_at),
      sellerActive: row.status === 'approved'
    };
  }
  function imageUrl(path) {
    if (!path) return '/assets/products/sayur-segar.jpg';
    if (/^https?:\/\//i.test(path) || path.startsWith('data:') || path.startsWith('/')) return path;
    return sb.storage.from('product-images').getPublicUrl(path).data.publicUrl;
  }
  function productFromRow(row) {
    const seller = sellerFromRow(row.sellers);
    const paths = Array.isArray(row.image_paths) ? row.image_paths : [];
    const images = paths.map(imageUrl);
    const category = row.categories?.name || '';
    return {
      id: row.id, sellerId: row.seller_id, seller: seller?.business || 'Toko lokal',
      phone: seller?.phone || '', sellerRecord: seller, name: row.name,
      category, categoryId: row.category_id, price: Number(row.price), unit: row.unit,
      stock: Number(row.stock), location: seller?.address || '',
      lat: seller?.lat ?? null, lng: seller?.lng ?? null,
      map: seller?.lat != null && seller?.lng != null ? mapsPoint(seller.lat, seller.lng) : '',
      image: images[0] || '/assets/products/sayur-segar.jpg', images,
      imagePaths: paths, description: row.description || '', active: !!row.is_active,
      sellerActive: seller?.status === 'approved', moderation: row.admin_hidden ? 'hidden' : 'ok',
      createdAt: row.created_at
    };
  }
  function mapOrder(row) {
    const items = (row.order_items || []).map(item => ({
      productId: item.product_id, name: item.product_name, qty: Number(item.quantity),
      unit: item.unit, price: Number(item.unit_price), subtotal: Number(item.line_total)
    }));
    const fulfillment = {
      type: row.fulfillment, label: row.fulfillment === 'delivery' ? 'Minta diantar' : 'Ambil di toko',
      address: row.fulfillment_address,
      lat: row.fulfillment_latitude == null ? null : Number(row.fulfillment_latitude),
      lng: row.fulfillment_longitude == null ? null : Number(row.fulfillment_longitude)
    };
    const status = row.status === 'pending_whatsapp' ? 'wa' : row.status;
    return {
      id: row.order_ref, ref: row.order_ref, dbId: row.id, buyerId: row.buyer_id,
      buyerUsername: row.buyer_name, buyer: row.buyer_name, buyerPhone: row.buyer_phone,
      sellerId: row.seller_id, seller: row.sellers?.business_name || 'Toko',
      sellerPhone: row.sellers?.phone || '', items, productId: items[0]?.productId,
      product: items.map(i => i.name).join(', '), qty: items.reduce((n,i)=>n+i.qty,0),
      total: Number(row.subtotal), status, fulfillment,
      stockDeducted: ['confirmed','completed'].includes(status),
      created: dateText(row.created_at), updated: dateText(row.updated_at)
    };
  }

  async function loadCategories(force = false) {
    if (categoryPromise && !force) return categoryPromise;
    categoryPromise = (async () => {
      const { data, error } = await sb.from('categories')
        .select('id,name,slug,sort_order').eq('is_active', true).order('sort_order');
      if (error) throw error;
      window.pbCategories = data || [];
      if (db.settings) db.settings.categories = window.pbCategories.map(c => c.name);
      return window.pbCategories;
    })();
    try { return await categoryPromise; } catch (error) { categoryPromise = null; throw error; }
  }
  async function loadCatalog(options = {}) {
    const quiet = !!options.quiet;
    try { await loadCategories(); }
    catch (error) { if (!quiet) toastError('Kategori belum dapat dimuat.', error); }
    const { data, error } = await sb.from('products')
      .select('id,seller_id,category_id,name,description,price,unit,stock,is_active,admin_hidden,image_paths,created_at,sellers(id,owner_id,business_name,phone,category_id,address,description,latitude,longitude,status,approved_at,created_at,categories(name)),categories(name,slug)')
      .order('created_at', { ascending:false });
    if (error) {
      console.error('Supabase catalog read failed:', error);
      if (!quiet) toastError('Katalog belum dapat dimuat.', error);
      return false;
    }
    const products = (data || []).map(productFromRow);
    db.products.splice(0, db.products.length, ...products);
    const sellers = new Map();
    products.forEach(p => { if (p.sellerRecord) sellers.set(p.sellerId, p.sellerRecord); });
    if (currentProfile?.role === 'seller' && db.sellers[0]) sellers.set(db.sellers[0].id, db.sellers[0]);
    db.sellers.splice(0, db.sellers.length, ...sellers.values());
    state.cart = (state.cart || []).filter(row => products.some(p => p.id === row.productId));
    try { localStorage.setItem('pb_cart', JSON.stringify(state.cart)); } catch {}
    if (state.view === 'home') renderHome();
    else if (state.view === 'products') renderProducts();
    else if (state.view === 'seller' && currentProfile?.role === 'seller') renderSeller();
    return true;
  }
  async function refreshOrders(kind = 'buyer', ownerId = currentAuthUser?.id) {
    if (!ownerId && kind !== 'admin') return [];
    let query = sb.from('orders').select('id,order_ref,buyer_id,seller_id,buyer_name,buyer_phone,fulfillment,fulfillment_address,fulfillment_latitude,fulfillment_longitude,status,subtotal,created_at,updated_at,sellers(business_name,phone),order_items(product_id,product_name,unit,quantity,unit_price,line_total)').order('created_at', { ascending:false });
    if (kind === 'buyer') query = query.eq('buyer_id', ownerId);
    if (kind === 'seller') query = query.eq('seller_id', ownerId);
    const { data, error } = await query;
    if (error) { console.error('Order read failed:', error); return []; }
    const orders = (data || []).map(mapOrder);
    db.orders.splice(0, db.orders.length, ...orders);
    return orders;
  }

  function appSession(user, profile, sellerRow = null) {
    const seller = sellerFromRow(sellerRow);
    const role = profile.role;
    return {
      id: role === 'seller' && seller ? seller.id : user.id,
      userId: user.id, authUserId: user.id, email: user.email || '',
      username: user.email || profile.display_name || 'akun',
      name: profile.display_name || (user.email || '').split('@')[0] || 'Pengguna',
      phone: profile.contact_phone || '', role,
      business: seller?.business || '', sellerId: seller?.id || null,
      status: profile.status
    };
  }
  function updateRemoteHeader() {
    const target = $('#sessionPill');
    if (!target) return;
    if (state.session) {
      const label = state.session.role === 'admin' ? 'Admin Desa' : state.session.role === 'seller' ? state.session.business : state.session.name;
      target.innerHTML = `<button class="session-pill" id="sessionAction"><span class="session-avatar">${escapeHtml(initials(label))}</span><span>${esc(label)}</span></button>`;
      $('#sessionAction').onclick = () => state.session.role === 'admin' ? navigate('admin') : state.session.role === 'seller' ? navigate('seller') : showBuyerAccount();
      if ($('#roleButton')) $('#roleButton').textContent = 'Keluar';
    } else {
      target.innerHTML = '';
      if ($('#roleButton')) $('#roleButton').textContent = 'Masuk';
    }
  }
  function syncAuthSession(authSession, options = {}) {
    const userId = authSession?.user?.id || null;
    const key = userId || '__signed_out__';
    if (authSyncTask && authSyncKey === key) return authSyncTask;
    authSyncKey = key;
    const task = syncAuthSessionInternal(authSession, options);
    const sharedTask = task.finally(() => {
      if (authSyncTask === sharedTask) { authSyncTask = null; authSyncKey = null; }
    });
    authSyncTask = sharedTask;
    return sharedTask;
  }
  async function syncAuthSessionInternal(authSession, options = {}) {
    const version = ++authVersion;
    const user = authSession?.user || null;
    if (!user) {
      currentAuthUser = null; currentProfile = null;
      window.pbCurrentUser = null; window.pbCurrentProfile = null;
      db.buyers.splice(0); db.orders.splice(0);
      if (db.sellers.length) db.sellers.splice(0);
      state.session = null; updateRemoteHeader();
      return null;
    }
    currentAuthUser = user;
    const { data: profile, error } = await sb.from('profiles')
      .select('id,display_name,contact_phone,role,status,created_at').eq('id', user.id).maybeSingle();
    if (version !== authVersion) return null;
    if (error || !profile) {
      console.error('Profile lookup failed:', error);
      state.session = null; updateRemoteHeader();
      if (options.showError) toast('Profil akun belum siap. Pastikan migrasi Supabase berhasil dijalankan.');
      return null;
    }
    if (profile.status !== 'active') {
      state.session = null; updateRemoteHeader();
      if (options.showError) toast('Akun ditangguhkan. Hubungi admin desa.');
      await sb.auth.signOut();
      return null;
    }
    currentProfile = profile;
    window.pbCurrentUser = user;
    window.pbCurrentProfile = profile;
    let sellerRow = null;
    if (profile.role === 'seller') {
      const sellerResult = await sb.from('sellers')
        .select('id,owner_id,business_name,phone,category_id,address,description,latitude,longitude,status,approved_at,created_at,categories(name)')
        .eq('owner_id', user.id).maybeSingle();
      if (version !== authVersion) return null;
      if (sellerResult.error) console.error('Seller lookup failed:', sellerResult.error);
      sellerRow = sellerResult.data;
    }
    const session = appSession(user, profile, sellerRow);
    state.session = session;
    const buyerProfile = { id:user.id, email:user.email || '', username:user.email || '', name:session.name, phone:session.phone, status:'active', joined:dateShort(profile.created_at) };
    db.buyers.splice(0, db.buyers.length, buyerProfile);
    const mappedSeller = sellerFromRow(sellerRow);
    if (mappedSeller) db.sellers.splice(0, db.sellers.length, mappedSeller);
    updateRemoteHeader();
    if (profile.role === 'seller' && sellerRow) {
      await loadCatalog({ quiet:true });
      await refreshOrders('seller', sellerRow.id);
    } else if (profile.role === 'buyer') {
      await refreshOrders('buyer', user.id);
    }
    if (localStorage.getItem('pb_continue_seller_application') === '1' && profile.role === 'buyer') {
      localStorage.removeItem('pb_continue_seller_application');
      setTimeout(() => showSellerRegistration(), 150);
    }
    return session;
  }
  window.setSession = function(session) {
    if (session == null) {
      state.session = null; updateRemoteHeader();
      sb.auth.signOut().catch(error => console.error('Sign out failed:', error));
      return;
    }
    // Compatibility for legacy profile editors; the Supabase Auth session remains authoritative.
    state.session = { ...(state.session || {}), ...session };
    updateRemoteHeader();
  };
  window.updateHeader = updateRemoteHeader;
  window.pbLoadCatalog = loadCatalog;
  window.pbLoadCategories = loadCategories;
  window.pbRefreshOrders = refreshOrders;
  window.pbMapOrder = mapOrder;

  function showPasswordRecovery() {
    openModal(`<div class="modal-head"><div><p class="eyebrow">Keamanan akun</p><h2>Buat kata sandi baru.</h2><p>Gunakan minimal 8 karakter.</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><form id="remotePasswordRecovery" class="auth-form"><div class="field"><label>Kata sandi baru</label><input required type="password" minlength="8" name="password" autocomplete="new-password"></div><div class="field"><label>Ulangi kata sandi</label><input required type="password" minlength="8" name="confirm" autocomplete="new-password"></div><button class="btn btn-dark btn-block">Simpan kata sandi</button></form></div>`);
    $('#remotePasswordRecovery').onsubmit = async event => {
      event.preventDefault(); const data=Object.fromEntries(new FormData(event.currentTarget));
      if(data.password.length<8)return toast('Kata sandi minimal 8 karakter.');
      if(data.password!==data.confirm)return toast('Ulangi kata sandi belum sama.');
      const button=event.submitter;button.disabled=true;button.textContent='Menyimpan…';
      const {error}=await sb.auth.updateUser({password:data.password});
      button.disabled=false;button.textContent='Simpan kata sandi';
      if(error)return toastError('Kata sandi gagal diperbarui.',error);
      closeModal();toast('Kata sandi berhasil diperbarui.');
    };
  }
  sb.auth.onAuthStateChange((event, authSession) => {
    authEventVersion++;
    setTimeout(() => {
      syncAuthSession(authSession).catch(error => console.error('Auth refresh failed:', error));
      if(event==='PASSWORD_RECOVERY') setTimeout(showPasswordRecovery,100);
    }, 0);
  });
  const initialAuthEventVersion = authEventVersion;
  window.pbAuthReady = sb.auth.getSession().then(({ data, error }) => {
    if (error) console.error('Supabase Auth session could not be restored:', error);
    // A newer auth event (for example, a just-completed login) supersedes this startup snapshot.
    if (initialAuthEventVersion !== authEventVersion) return state.session || null;
    return syncAuthSession(data?.session || null);
  }).catch(error => { console.error('Supabase Auth initialization failed:', error); return null; });

  function authModal(mode = 'login', context = 'buyer') {
    if (state.session && mode === 'login') {
      if (context === 'admin' && state.session.role === 'admin') return navigate('admin');
      if (context === 'seller' && state.session.role === 'seller') return navigate('seller');
      if (context === 'buyer') return showBuyerAccount();
    }
    const registering = mode === 'register';
    const heading = context === 'admin' ? 'Masuk admin desa' : context === 'seller' ? 'Portal penjual' : 'Akun pembeli';
    const tabs = context === 'admin' ? '' : `<div class="auth-tabs"><button class="${!registering?'active':''}" data-auth-mode="login">Masuk</button><button class="${registering?'active':''}" data-auth-mode="register">Daftar</button></div>`;
    if (mode === 'login') window.pbStaticModalNext = true;
    openModal(`<div class="modal-head auth-title"><div><p class="eyebrow">${esc(heading)}</p><h2>${registering?'Buat akun dengan email':'Masuk dengan email'}</h2><p>${registering?'Email dan kata sandi dipakai untuk login. WhatsApp hanya untuk kontak transaksi.':'Gunakan email dan kata sandi akun Supabase Anda.'}</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body">${tabs}${registering ? `<form id="remoteSignup" class="auth-form"><div class="field"><label>Nama lengkap</label><input required name="name" autocomplete="name" maxlength="120" value="${esc(currentProfile?.display_name || '')}"></div><div class="field"><label>Email</label><input required type="email" name="email" autocomplete="email" maxlength="254"></div><div class="field"><label>Kata sandi</label><input required type="password" name="password" autocomplete="new-password" minlength="8"></div><div class="field"><label>Ulangi kata sandi</label><input required type="password" name="confirm" autocomplete="new-password" minlength="8"></div><button class="btn btn-dark btn-block">Buat akun</button></form><p class="form-legal">Jika konfirmasi email aktif, buka tautan verifikasi yang dikirim ke email sebelum masuk.</p>` : `<form id="remoteLogin" class="auth-form"><div class="field"><label>Email</label><input required type="email" name="email" autocomplete="email" maxlength="254"></div><div class="field"><label>Kata sandi</label><input required type="password" name="password" autocomplete="current-password"></div><button class="btn btn-dark btn-block">Masuk</button><button type="button" class="text-btn" id="forgotPassword">Lupa kata sandi?</button></form>`}</div>`, true);
    $$('[data-auth-mode]').forEach(button => button.onclick = () => authModal(button.dataset.authMode, context));
    $('#remoteLogin')?.addEventListener('submit', async event => {
      event.preventDefault(); const button = event.submitter; button.disabled = true; button.textContent = 'Memeriksa…';
      const data = Object.fromEntries(new FormData(event.currentTarget));
      const { data: result, error } = await sb.auth.signInWithPassword({ email:data.email.trim().toLowerCase(), password:data.password });
      button.disabled = false; button.textContent = 'Masuk';
      if (error) return toast('Email atau kata sandi salah, atau email belum dikonfirmasi.');
      let session = await syncAuthSession(result.session, { showError:true });
      if (!session) {
        // If a stale startup/auth event raced this login, retry with Supabase's current session.
        const { data: latest, error: latestError } = await sb.auth.getSession();
        if (latestError) console.error('Could not confirm the current login session:', latestError);
        if (latest?.session?.user?.id === result.session?.user?.id) {
          session = await syncAuthSession(latest.session, { showError:true });
        }
      }
      if (!session) return;
      if (context === 'admin' && session.role !== 'admin') {
        await sb.auth.signOut();
        return toast('Akun ini belum memiliki akses admin. Minta admin utama mengaktifkannya.');
      }
      closeModal();
      if (context === 'seller' && session.role === 'seller') { toast(`Selamat datang, ${session.business}.`); navigate('seller'); return; }
      if (context === 'seller' && session.role === 'buyer') { toast('Login berhasil. Ajukan toko dan tunggu persetujuan admin.'); showSellerEntry(); return; }
      if (context === 'admin') { toast('Login admin berhasil.'); navigate('admin'); return; }
      toast(`Selamat datang, ${session.name}.`);
      if (session.role === 'seller') navigate('seller');
      else if (session.role === 'admin') navigate('admin');
      const action = state.pendingAction; state.pendingAction = null;
      if (action) setTimeout(action, 180);
    });
    $('#remoteSignup')?.addEventListener('submit', async event => {
      event.preventDefault(); const button = event.submitter;
      const data = Object.fromEntries(new FormData(event.currentTarget));
      const email = data.email.trim().toLowerCase();
      if (data.password.length < 8) return toast('Kata sandi minimal 8 karakter.');
      if (data.password !== data.confirm) return toast('Ulangi kata sandi belum sama.');
      button.disabled = true; button.textContent = 'Membuat akun…';
      if (context === 'seller') localStorage.setItem('pb_continue_seller_application', '1');
      const { data: result, error } = await sb.auth.signUp({
        email, password:data.password, options:{ data:{ full_name:data.name.trim() }, emailRedirectTo:`${location.origin}${location.pathname}` }
      });
      button.disabled = false; button.textContent = 'Buat akun';
      if (error) {
        localStorage.removeItem('pb_continue_seller_application');
        return toast(error.message || 'Pendaftaran gagal. Periksa email dan pengaturan Supabase Auth.');
      }
      if (result.session) {
        await syncAuthSession(result.session, { showError:true }); closeModal();
        toast('Akun berhasil dibuat.');
      } else {
        openModal(`<div class="modal-head"><div><p class="eyebrow">Verifikasi email</p><h2>Periksa kotak masuk Anda.</h2><p>Kami mengirim tautan verifikasi ke ${esc(email)}.</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><p class="helper-box">Buka tautan verifikasi dari Supabase, lalu masuk kembali memakai email dan kata sandi. Nomor WhatsApp bukan username login.</p><button class="btn btn-dark btn-block" id="verifyDone">Mengerti</button></div>`);
        $('#verifyDone').onclick = closeModal;
      }
    });
    $('#forgotPassword')?.addEventListener('click', async () => {
      const email = $('#remoteLogin [name="email"]')?.value.trim().toLowerCase();
      if (!email) return toast('Isi email terlebih dahulu, lalu pilih lupa kata sandi.');
      const { error } = await sb.auth.resetPasswordForEmail(email, { redirectTo:`${location.origin}${location.pathname}` });
      if (error) return toast(error.message || 'Email reset tidak dapat dikirim.');
      toast('Jika email terdaftar, tautan reset kata sandi akan dikirim.');
    });
  }

  window.showBuyerAuth = function(mode = 'login') {
    if (state.session && state.session.role === 'buyer') return showBuyerAccount();
    if (state.session && mode === 'login') {
      return openModal(`<div class="modal-head"><div><p class="eyebrow">Akun aktif</p><h2>Anda sudah masuk.</h2><p>${esc(state.session.email || state.session.name)}</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><button class="btn btn-outline btn-block" id="switchRemoteAccount">Keluar dari akun ini</button></div>`), $('#switchRemoteAccount').onclick = () => { setSession(null); closeModal(); };
    }
    authModal(mode, 'buyer');
  };
  window.showAdminLogin = function() { authModal('login', 'admin'); };
  window.ensureBuyer = function(action) {
    if (window.pbCurrentUser && currentProfile?.status === 'active') { if (typeof action === 'function') action(); return true; }
    state.pendingAction = action || null; authModal('login', 'buyer'); return false;
  };
  window.showBuyerAccount = async function() {
    if (!window.pbCurrentUser || !currentProfile) return authModal('login', 'buyer');
    const user = window.pbCurrentUser; const profile = currentProfile;
    const orders = await refreshOrders('buyer', user.id);
    openModal(`<div class="modal-head"><div><p class="eyebrow">Akun pembeli</p><h2>${esc(profile.display_name || 'Akun')}</h2><p>${esc(user.email || '')}</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><form id="remoteBuyerProfile" class="profile-form"><div class="form-grid"><div class="field"><label>Email login</label><input value="${esc(user.email || '')}" disabled></div><div class="field"><label>Nama lengkap</label><input required name="display_name" maxlength="120" value="${esc(profile.display_name || '')}"></div><div class="field full"><label>WhatsApp untuk transaksi</label><input name="contact_phone" inputmode="tel" value="${esc(profile.contact_phone || '')}" placeholder="Contoh: 081234567890"><small>Dipakai sebagai kontak transaksi, bukan identitas login.</small></div></div><div class="form-actions"><button class="btn btn-dark btn-sm">Simpan profil</button><button type="button" class="btn btn-outline btn-sm" id="remoteLogout">Keluar</button></div></form><div class="panel account-orders"><div class="panel-head"><h3>Riwayat pesanan</h3><button class="plain-link" id="buyerBrowse">Cari produk</button></div><div class="panel-body">${orders.length ? orders.map(o=>`<button class="remote-order-card" data-order-detail="${esc(o.id)}"><span><strong>${esc(o.id)}</strong><small>${esc(o.seller)} · ${esc(o.created)}</small></span><span class="status ${esc(o.status)}">${esc(statusCopy(o.status))}</span><b>${rupiah(o.total)}</b></button>`).join('') : '<div class="empty-state"><strong>Belum ada pesanan</strong><p>Nota yang tersimpan akan tampil di sini.</p></div>'}</div></div><button type="button" class="btn btn-ghost btn-sm" id="trackOwnApplication">Lacak pengajuan toko</button></div>`, true);
    $('#remoteBuyerProfile').onsubmit = async event => {
      event.preventDefault(); const data = Object.fromEntries(new FormData(event.currentTarget));
      if (data.contact_phone && !goodPhone(data.contact_phone)) return toast('Nomor WhatsApp tidak valid.');
      const { error } = await sb.from('profiles').update({ display_name:data.display_name.trim(), contact_phone:data.contact_phone ? normalizePhone(data.contact_phone) : null }).eq('id', user.id);
      if (error) return toastError('Profil gagal disimpan.', error);
      await syncAuthSession({ user }); toast('Profil berhasil diperbarui.'); showBuyerAccount();
    };
    $('#remoteLogout').onclick = () => { closeModal(); setSession(null); toast('Anda telah keluar.'); };
    $('#buyerBrowse').onclick = () => { closeModal(); navigate('products'); };
    $('#trackOwnApplication').onclick = () => showApplicationTracking();
    $$('[data-order-detail]').forEach(button => button.onclick = () => showOrderDetail(button.dataset.orderDetail, 'buyer'));
  };

  window.showSellerEntry = function() {
    if (state.session?.role === 'seller') return navigate('seller');
    if (state.session?.role === 'admin') return navigate('admin');
    if (!window.pbCurrentUser) return authModal('login', 'seller');
    openModal(`<div class="modal-head"><div><p class="eyebrow">Akun toko</p><h2>Mulai berjualan.</h2><p>Gunakan email akun Anda; setiap toko baru diperiksa admin secara manual.</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><div class="account-summary"><div class="account-avatar">${esc(initials(state.session?.name))}</div><div><strong>${esc(state.session?.name || '')}</strong><span>${esc(state.session?.email || '')}</span></div></div><button class="btn btn-dark btn-block" id="sellerApplyNow">Ajukan toko</button><button class="btn btn-outline btn-block" style="margin-top:9px" id="sellerTrackNow">Lacak pengajuan saya</button><button class="text-btn" style="margin-top:12px" id="sellerLogoutNow">Keluar</button></div>`);
    $('#sellerApplyNow').onclick = () => showSellerRegistration();
    $('#sellerTrackNow').onclick = () => showApplicationTracking();
    $('#sellerLogoutNow').onclick = () => { closeModal(); setSession(null); };
  };

  function mapApplication(row) {
    const history = (row.seller_application_events || []).map(event => ({ status:event.status, at:dateText(event.created_at), note:event.note || '' }));
    if (!history.length) history.push({ status:row.status, at:dateText(row.created_at), note:row.decision_note || 'Permohonan diterima.' });
    return {
      id:row.id, ref:appRef(row.id), applicantId:row.applicant_id,
      name:row.owner_name, business:row.business_name, phone:row.phone,
      category:row.categories?.name || '', categoryId:row.category_id,
      address:row.address, description:row.description || '',
      lat:Number(row.latitude), lng:Number(row.longitude),
      maps:mapsPoint(row.latitude,row.longitude), status:row.status,
      reason:row.decision_note || '', submitted:dateText(row.created_at),
      history, createdAt:row.created_at
    };
  }
  async function fetchApplications(ownerId = null) {
    const fields = 'id,applicant_id,owner_name,business_name,phone,category_id,address,description,latitude,longitude,status,decision_note,created_at,updated_at,categories(name),seller_application_events(status,note,created_at)';
    let query = sb.from('seller_applications').select(fields).order('created_at', { ascending:false });
    if (ownerId) query = query.eq('applicant_id', ownerId);
    let result = await query;
    if (result.error) {
      // Keep a simpler fallback if a project has not exposed a nested relationship in PostgREST yet.
      let fallback = sb.from('seller_applications').select('id,applicant_id,owner_name,business_name,phone,category_id,address,description,latitude,longitude,status,decision_note,created_at,updated_at,categories(name)').order('created_at', { ascending:false });
      if (ownerId) fallback = fallback.eq('applicant_id', ownerId);
      result = await fallback;
    }
    if (result.error) throw result.error;
    return (result.data || []).map(mapApplication);
  }
  window.pbFetchApplications = fetchApplications;
  window.showSellerRegistration = async function(existing = null) {
    if (!window.pbCurrentUser) { localStorage.setItem('pb_continue_seller_application','1'); return authModal('login','seller'); }
    if (currentProfile?.role === 'seller') return navigate('seller');
    if (currentProfile?.role === 'admin') return toast('Akun admin tidak dapat mengajukan toko.');
    if (!existing) {
      try {
        const prior = await fetchApplications(window.pbCurrentUser.id);
        if (prior.some(item=>['pending','revision'].includes(item.status))) return showApplicationTracking();
      } catch (error) { console.warn('Could not check for a prior application:',error); }
    }
    let categories;
    try { categories = await loadCategories(); } catch (error) { return toastError('Kategori belum tersedia.', error); }
    if (!categories.length) return toast('Belum ada kategori aktif. Hubungi admin.');
    const app = existing || null;
    const options = categories.map(c=>`<option value="${esc(c.id)}" ${app?.categoryId===c.id?'selected':''}>${esc(c.name)}</option>`).join('');
    openModal(`<div class="modal-head"><div><p class="eyebrow">Pengajuan toko</p><h2>${app?'Perbaiki data usaha':'Ceritakan usaha Anda.'}</h2><p>Admin desa akan meninjau data dan lokasi sebelum toko aktif.</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><form id="sellerApplicationForm"><div class="form-grid"><div class="field"><label>Nama pemilik</label><input required maxlength="120" name="owner_name" value="${esc(app?.name || currentProfile?.display_name || '')}"></div><div class="field"><label>Nama usaha</label><input required maxlength="160" name="business_name" value="${esc(app?.business || '')}"></div><div class="field"><label>WhatsApp usaha</label><input required inputmode="tel" maxlength="40" name="phone" value="${esc(app?.phone || currentProfile?.contact_phone || '')}" placeholder="0812…"></div><div class="field"><label>Kategori</label><select required name="category_id">${options}</select></div><div class="field full"><label>Alamat lengkap</label><input required maxlength="500" name="address" value="${esc(app?.address || '')}"></div><div class="field full"><label>Deskripsi usaha</label><textarea maxlength="3000" name="description">${esc(app?.description || '')}</textarea></div></div><div class="coordinate-box"><strong>Koordinat lokasi toko</strong><p>Tentukan titik lokasi sebenarnya. Koordinat ini akan dilihat pembeli.</p><div class="form-grid"><div class="field"><label>Latitude</label><input required type="number" step="any" name="latitude" value="${app?.lat ?? ''}" placeholder="-5.123456"></div><div class="field"><label>Longitude</label><input required type="number" step="any" name="longitude" value="${app?.lng ?? ''}" placeholder="119.123456"></div></div><button type="button" class="btn btn-ghost btn-sm" id="sellerGps">${icon('map')} Ambil GPS perangkat</button><p class="coordinate-assist-status" id="sellerGpsStatus">Periksa titik agar akurat sebelum mengirim.</p></div><div class="form-actions"><button type="button" class="btn btn-outline" data-close>Batal</button><button class="btn btn-dark">${app?'Kirim perbaikan':'Kirim pengajuan'}</button></div></form></div>`, true);
    $('#sellerGps').onclick = () => {
      if (!navigator.geolocation) return toast('GPS tidak didukung perangkat ini.');
      const button = $('#sellerGps'); button.disabled = true; button.textContent = 'Meminta izin lokasi…';
      navigator.geolocation.getCurrentPosition(position => {
        $('[name="latitude"]').value = position.coords.latitude.toFixed(6);
        $('[name="longitude"]').value = position.coords.longitude.toFixed(6);
        $('#sellerGpsStatus').textContent = `Koordinat didapat (akurasi ±${Math.round(position.coords.accuracy || 0)} m). Pastikan sesuai lokasi usaha.`;
        button.disabled = false; button.innerHTML = `${icon('check')} Lokasi didapat`;
      }, error => { button.disabled = false; button.innerHTML = `${icon('map')} Ambil GPS perangkat`; toast(error.code === 1 ? 'Izin lokasi ditolak.' : 'Lokasi tidak dapat diambil. Isi koordinat manual.'); }, { enableHighAccuracy:true, timeout:15000, maximumAge:0 });
    };
    $('#sellerApplicationForm').onsubmit = async event => {
      event.preventDefault(); const button = event.submitter;
      const d = Object.fromEntries(new FormData(event.currentTarget));
      if (!goodPhone(d.phone)) return toast('Nomor WhatsApp usaha tidak valid.');
      if (!coordsValid(d.latitude,d.longitude)) return toast('Koordinat lokasi tidak valid.');
      const payload = { owner_name:d.owner_name.trim(), business_name:d.business_name.trim(), phone:normalizePhone(d.phone), category_id:d.category_id, address:d.address.trim(), description:(d.description || '').trim(), latitude:Number(d.latitude), longitude:Number(d.longitude) };
      button.disabled = true; button.textContent = 'Mengirim…';
      let result;
      if (app) result = await sb.from('seller_applications').update(payload).eq('id',app.id).select('id').single();
      else result = await sb.from('seller_applications').insert(payload).select('id').single();
      button.disabled = false; button.textContent = app ? 'Kirim perbaikan' : 'Kirim pengajuan';
      if (result.error) return toastError('Pengajuan gagal disimpan.', result.error);
      closeModal(); toast('Pengajuan tersimpan dan menunggu pemeriksaan admin.');
      setTimeout(() => showApplicationTracking(), 180);
    };
  };
  window.showApplicationTracking = async function() {
    if (!window.pbCurrentUser) return authModal('login','seller');
    let applications;
    try { applications = await fetchApplications(window.pbCurrentUser.id); }
    catch (error) { return toastError('Pengajuan belum dapat dimuat.', error); }
    db.applications.splice(0, db.applications.length, ...applications);
    openModal(`<div class="modal-head"><div><p class="eyebrow">Status pengajuan</p><h2>Toko Anda</h2><p>Keputusan admin tercatat di sini.</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body">${applications.length ? applications.map(a=>`<article class="panel" style="padding:16px;margin:0 0 12px"><div class="panel-head"><div><h3>${esc(a.business)}</h3><small>${esc(a.ref)} · ${esc(a.submitted)}</small></div><span class="status ${esc(a.status)}">${esc(statusCopy(a.status))}</span></div><p>${esc(a.category)} · ${esc(a.address)}</p>${a.reason?`<div class="helper-box">Catatan admin: ${esc(a.reason)}</div>`:''}<div class="timeline">${a.history.slice().reverse().map(h=>`<div><span></span><p><b>${esc(statusCopy(h.status))}</b><small>${esc(h.at)} · ${esc(h.note)}</small></p></div>`).join('')}</div>${a.status==='revision'?`<button class="btn btn-dark btn-block" data-revise-app="${esc(a.id)}">Perbaiki data</button>`:''}${a.status==='approved'?`<button class="btn btn-dark btn-block" data-refresh-approved="${esc(a.id)}">Perbarui akses penjual</button>`:''}</article>`).join('') : '<div class="empty-state"><strong>Belum ada pengajuan</strong><p>Ajukan toko untuk mulai berjualan.</p><button class="btn btn-dark btn-sm" id="startSellerApplication">Ajukan toko</button></div>'}<button class="btn btn-outline btn-block" id="newSellerApplication">Ajukan toko lain</button></div>`, true);
    $('#startSellerApplication')?.addEventListener('click', () => showSellerRegistration());
    $('#newSellerApplication')?.addEventListener('click', () => showSellerRegistration());
    $$('[data-revise-app]').forEach(button => button.onclick = () => showSellerRegistration(applications.find(a=>a.id===button.dataset.reviseApp)));
    $$('[data-refresh-approved]').forEach(button => button.onclick = async () => {
      const { data } = await sb.auth.getSession(); const session = await syncAuthSession(data?.session);
      if (session?.role === 'seller') { closeModal(); navigate('seller'); } else toast('Persetujuan tersimpan. Keluar lalu masuk kembali untuk memuat akses baru.');
    });
  };

  function applicationRows(rows) {
    return rows.length ? rows.map(a=>`<tr><td><strong>${esc(a.ref)}</strong><br><span class="muted small">${esc(a.submitted)}</span></td><td><strong>${esc(a.business)}</strong><br><span class="muted small">${esc(a.name)} · ${esc(a.phone)}</span></td><td>${esc(a.category)}</td><td>${esc(a.address)}<br><a target="_blank" rel="noopener" href="${mapsPoint(a.lat,a.lng)}">Periksa lokasi</a></td><td><span class="status ${esc(a.status)}">${esc(statusCopy(a.status))}</span></td><td><div class="action-row"><button data-app-detail="${esc(a.id)}">Detail</button>${['pending','revision'].includes(a.status)?`<button data-app-approve="${esc(a.id)}">Setujui</button><button data-app-revision="${esc(a.id)}">Revisi</button><button class="reject" data-app-reject="${esc(a.id)}">Tolak</button>`:''}</div></td></tr>`).join('') : '<tr><td colspan="6" class="muted">Tidak ada pengajuan pada filter ini.</td></tr>';
  }
  async function refreshAdminApplications() {
    try { const rows = await fetchApplications(); db.applications.splice(0,db.applications.length,...rows); return rows; }
    catch (error) { toastError('Daftar pengajuan gagal dimuat.', error); return []; }
  }
  async function submitApplicationDecision(id, decision, note = '') {
    const { error } = await sb.rpc('review_seller_application', { p_application_id:id, p_decision:decision, p_note:note || null });
    if (error) return toastError('Keputusan tidak tersimpan.', error);
    toast(decision === 'approved' ? 'Toko disetujui dan akun penjual diaktifkan.' : decision === 'revision' ? 'Catatan perbaikan dikirim.' : 'Pengajuan ditolak.');
    await renderAdmin();
  }
  window.approveApplication = function(id) {
    const app = db.applications.find(item=>item.id===id);
    if (!app) return;
    openModal(`<div class="modal-head"><div><p class="eyebrow">Persetujuan manual</p><h2>Setujui ${esc(app.business)}?</h2><p>Role akun pemilik akan menjadi penjual dan profil toko dibuat.</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><div class="form-actions"><button class="btn btn-outline" data-close>Batal</button><button class="btn btn-dark" id="confirmRemoteApprove">Setujui toko</button></div></div>`);
    $('#confirmRemoteApprove').onclick = async () => { const button=$('#confirmRemoteApprove'); button.disabled=true; button.textContent='Menyimpan…'; await submitApplicationDecision(id,'approved'); closeModal(); };
  };
  window.reviewApplication = function(id, decision) {
    const app = db.applications.find(item=>item.id===id); if (!app) return;
    openModal(`<div class="modal-head"><div><p class="eyebrow">${decision==='revision'?'Minta perbaikan':'Tolak pengajuan'}</p><h2>${esc(app.business)}</h2><p>Catatan ini terlihat oleh pemohon.</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><form id="remoteReviewForm"><div class="field"><label>Alasan / catatan</label><textarea required minlength="5" name="note" placeholder="Tuliskan informasi yang perlu diperbaiki…"></textarea></div><div class="form-actions"><button type="button" class="btn btn-outline" data-close>Batal</button><button class="btn ${decision==='rejected'?'btn-danger':'btn-dark'}">Simpan keputusan</button></div></form></div>`);
    $('#remoteReviewForm').onsubmit = async event => { event.preventDefault(); const note=new FormData(event.currentTarget).get('note').trim(); const button=event.submitter; button.disabled=true; button.textContent='Menyimpan…'; await submitApplicationDecision(id,decision,note); closeModal(); };
  };
  window.rejectApplication = id => window.reviewApplication(id,'rejected');
  window.showApplication = function(id) {
    const a=db.applications.find(item=>item.id===id); if(!a)return;
    openModal(`<div class="modal-head"><div><p class="eyebrow">${esc(a.ref)}</p><h2>${esc(a.business)}</h2><p>${esc(a.submitted)} · <span class="status ${esc(a.status)}">${esc(statusCopy(a.status))}</span></p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><div class="detail-grid"><div><span>Pemilik</span><strong>${esc(a.name)}</strong></div><div><span>WhatsApp</span><strong>${esc(a.phone)}</strong></div><div><span>Kategori</span><strong>${esc(a.category)}</strong></div><div><span>Koordinat</span><strong>${Number(a.lat).toFixed(6)}, ${Number(a.lng).toFixed(6)}</strong></div></div><div class="detail-description"><span>Alamat</span><p>${esc(a.address)}</p></div><div class="detail-description"><span>Deskripsi</span><p>${esc(a.description || '—')}</p></div><a class="btn btn-outline btn-block" target="_blank" rel="noopener" href="${mapsPoint(a.lat,a.lng)}">Buka lokasi di Google Maps</a><div class="timeline">${a.history.slice().reverse().map(h=>`<div><span></span><p><b>${esc(statusCopy(h.status))}</b><small>${esc(h.at)} · ${esc(h.note)}</small></p></div>`).join('')}</div>${['pending','revision'].includes(a.status)?`<div class="form-actions"><button class="btn btn-danger" id="detailReject">Tolak</button><button class="btn btn-outline" id="detailRevision">Minta perbaikan</button><button class="btn btn-dark" id="detailApprove">Setujui</button></div>`:''}</div>`, true);
    $('#detailApprove')?.addEventListener('click',()=>{closeModal();setTimeout(()=>approveApplication(id),200);});
    $('#detailRevision')?.addEventListener('click',()=>reviewApplication(id,'revision'));
    $('#detailReject')?.addEventListener('click',()=>reviewApplication(id,'rejected'));
  };
  window.renderAdmin = async function() {
    if (currentProfile?.role !== 'admin' || !window.pbCurrentUser) { navigate('home'); return showAdminLogin(); }
    await refreshAdminApplications();
    const filter = state.applicationFilter || 'pending';
    const filters=['pending','revision','approved','rejected','all'];
    const rows=db.applications.filter(a=>filter==='all'||a.status===filter);
    view.innerHTML = `<section class="dashboard-shell"><aside class="dashboard-side"><div class="side-profile"><span class="avatar">AD</span><div><strong>Admin Desa</strong><span>${esc(state.session.email || '')}</span></div></div><nav class="side-nav"><button class="side-item active" data-admin-applications>Permintaan Penjual</button></nav><button class="side-back" id="adminBackMarket">Kembali ke marketplace</button></aside><div class="dashboard-main"><div class="dash-head"><div><p class="eyebrow">Persetujuan manual</p><h1>Pengajuan toko</h1><p>Periksa identitas, WhatsApp, kategori, alamat, dan titik lokasi sebelum menyetujui.</p></div><button class="btn btn-outline btn-sm" id="adminLogout">Keluar</button></div><div class="stat-grid"><article class="stat-card"><span>Menunggu</span><strong>${db.applications.filter(a=>a.status==='pending').length}</strong></article><article class="stat-card"><span>Perlu perbaikan</span><strong>${db.applications.filter(a=>a.status==='revision').length}</strong></article><article class="stat-card"><span>Disetujui</span><strong>${db.applications.filter(a=>a.status==='approved').length}</strong></article></div><div class="filter-tabs">${filters.map(f=>`<button class="${filter===f?'active':''}" data-admin-filter="${f}">${f==='all'?'Semua':esc(statusCopy(f))}<span>${f==='all'?db.applications.length:db.applications.filter(a=>a.status===f).length}</span></button>`).join('')}</div><div class="panel"><div class="table-wrap"><table><thead><tr><th>Nomor / waktu</th><th>Usaha / pemilik</th><th>Kategori</th><th>Alamat / lokasi</th><th>Status</th><th>Aksi</th></tr></thead><tbody>${applicationRows(rows)}</tbody></table></div></div></div></section>`;
    $('#adminBackMarket').onclick=()=>navigate('home'); $('#adminLogout').onclick=()=>{setSession(null);navigate('home');};
    $$('[data-admin-filter]').forEach(button=>button.onclick=()=>{state.applicationFilter=button.dataset.adminFilter;renderAdmin();});
    $$('[data-app-detail]').forEach(button=>button.onclick=()=>showApplication(button.dataset.appDetail));
    $$('[data-app-approve]').forEach(button=>button.onclick=()=>approveApplication(button.dataset.appApprove));
    $$('[data-app-revision]').forEach(button=>button.onclick=()=>reviewApplication(button.dataset.appRevision,'revision'));
    $$('[data-app-reject]').forEach(button=>button.onclick=()=>reviewApplication(button.dataset.appReject,'rejected'));
  };
  window.adminNav = () => '';
  window.applicationTable = () => '';
  window.pbSyncAuthSession = syncAuthSession;
  window.pbBackendCore = { sb, esc, dateText, dateShort, goodPhone, coordsValid, imageUrl, sellerFromRow, productFromRow, mapOrder, loadCatalog, loadCategories, refreshOrders, syncAuthSession, fetchApplications, currentProfile:()=>currentProfile, currentUser:()=>currentAuthUser };

  // Use only Supabase records in the public catalog; do not mix seeded/local demo products into it.
  window.renderProducts = function() {
    const categories=['Semua', ...(window.pbCategories || []).map(c=>c.name)];
    if (!categories.includes(state.category)) state.category='Semua';
    view.innerHTML=`<section class="products-hero"><div class="container"><div class="page-title"><p class="eyebrow">Etalase produk lokal</p><h1>Yang baik, tumbuh di sekitar kita.</h1><p>Cari produk warga, cek stok dan lokasinya, lalu pesan langsung melalui WhatsApp.</p></div></div></section><section class="section-sm"><div class="container"><div class="search-panel"><div class="search-box">${icon('search')}<input id="productSearch" value="${esc(state.search)}" placeholder="Cari produk lokal…" aria-label="Cari produk"></div><select id="sortProduct"><option value="new">Terbaru</option><option value="low">Harga terendah</option><option value="high">Harga tertinggi</option></select><button class="btn btn-dark" id="searchBtn">Cari produk</button></div><div class="category-row" style="margin:32px 0 24px">${categories.map(c=>`<button class="chip ${state.category===c?'active':''}" data-category="${esc(c)}">${esc(c)}</button>`).join('')}</div><div id="productGrid" class="product-grid"></div></div></section>`;
    $('#productSearch').oninput=event=>{state.search=event.target.value;paintProducts();}; $('#sortProduct').onchange=paintProducts; $('#searchBtn').onclick=paintProducts;
    $$('[data-category]').forEach(button=>button.onclick=()=>{state.category=button.dataset.category;$$('[data-category]').forEach(x=>x.classList.toggle('active',x===button));paintProducts();});
    paintProducts();
  };
  window.paintProducts = function() {
    const root=$('#productGrid'); if(!root)return;
    let items=db.products.filter(p=>p.active&&p.sellerActive!==false&&p.moderation!=='hidden'&&p.stock>0&&(state.category==='Semua'||p.category===state.category)&&`${p.name} ${p.seller} ${p.category}`.toLowerCase().includes(String(state.search||'').toLowerCase()));
    const sort=$('#sortProduct')?.value; if(sort==='low')items.sort((a,b)=>a.price-b.price); if(sort==='high')items.sort((a,b)=>b.price-a.price);
    root.innerHTML=items.length?items.map(productCard).join(''):`<div class="empty-state"><span class="round-icon">${icon('search')}</span><strong>${db.products.length?'Produk tidak ditemukan':'Belum ada produk aktif'}</strong><p>${db.products.length?'Coba kata kunci atau kategori lain.':'Produk akan tampil setelah penjual disetujui dan menerbitkan produk.'}</p></div>`;
    $$('[data-product]',root).forEach(card=>card.onclick=()=>showProduct(card.dataset.product));
    $$('[data-add-cart]',root).forEach(button=>button.onclick=event=>{event.stopPropagation();const product=db.products.find(item=>item.id===button.dataset.addCart);if(!product)return toast('Produk tidak tersedia.');addToCart(product.id,1);if(typeof animateCartIcon==='function')animateCartIcon();toast('Produk masuk ke keranjang.');});
  };

  window.pbLoadCatalog().catch(error=>console.error(error));
})();
/* ===== Supabase browser integration — seller workspace and orders ===== */
(function installSupabaseWorkflows() {
  const core = window.pbBackendCore;
  if (!core) return;
  const sb = core.sb;
  const esc = core.esc;
  const { dateText, loadCatalog, loadCategories, refreshOrders, syncAuthSession, sellerFromRow, productFromRow, mapOrder, goodPhone, coordsValid } = core;
  const orderStatuses = { wa:'pending_whatsapp', confirmed:'confirmed', completed:'completed', cancelled:'cancelled' };
  const orderStatusText = status => ({ wa:'Menunggu konfirmasi', confirmed:'Dikonfirmasi', completed:'Selesai', cancelled:'Dibatalkan' }[status] || status);
  const canMap = (lat,lng) => coordsValid(lat,lng);

  async function loadSellerWorkspace() {
    const user = window.pbCurrentUser;
    if (!user) return null;
    const { data: row, error } = await sb.from('sellers')
      .select('id,owner_id,business_name,phone,category_id,address,description,latitude,longitude,status,approved_at,created_at,categories(name)')
      .eq('owner_id',user.id).maybeSingle();
    if (error) { console.error('Seller profile read failed:',error); toast('Data toko belum dapat dimuat.'); return null; }
    if (!row) return null;
    const seller = sellerFromRow(row);
    db.sellers.splice(0,db.sellers.length,seller);
    state.session.id = seller.id; state.session.sellerId = seller.id; state.session.business = seller.business;
    const { data: productRows, error: productError } = await sb.from('products')
      .select('id,seller_id,category_id,name,description,price,unit,stock,is_active,admin_hidden,image_paths,created_at,sellers(id,owner_id,business_name,phone,category_id,address,description,latitude,longitude,status,approved_at,created_at,categories(name)),categories(name,slug)')
      .eq('seller_id',seller.id).order('created_at',{ascending:false});
    if (productError) console.error('Seller product read failed:',productError);
    const owned = (productRows || []).map(productFromRow);
    const combined = new Map(db.products.map(product=>[product.id,product]));
    owned.forEach(product=>combined.set(product.id,product));
    db.products.splice(0,db.products.length,...combined.values());
    const orders = await refreshOrders('seller',seller.id);
    return { seller, products:owned, orders };
  }

  function remoteOrderTable(orders, sellerView = false) {
    if (!orders.length) return '<div class="empty-state"><strong>Belum ada pesanan</strong><p>Pesanan yang dibuat melalui website akan muncul di sini.</p></div>';
    return `<div class="panel"><div class="table-wrap"><table><thead><tr><th>Nota / waktu</th><th>Produk</th><th>${sellerView?'Pembeli':'Toko'}</th><th>Pemenuhan</th><th>Total</th><th>Status</th><th>Aksi</th></tr></thead><tbody>${orders.map(order=>`<tr><td><strong>${esc(order.id)}</strong><br><span class="muted small">${esc(order.created)}</span></td><td>${esc(order.product || 'Pesanan')}<br><span class="muted small">${order.qty} item</span></td><td><strong>${esc(sellerView?order.buyer:order.seller)}</strong><br><span class="muted small">${esc(sellerView?order.buyerPhone:order.sellerPhone)}</span></td><td><span class="fulfillment-badge ${order.fulfillment?.type==='delivery'?'delivery':'pickup'}">${order.fulfillment?.type==='delivery'?'Diantar':'Ambil di toko'}</span><br>${order.fulfillment?.lat!=null?`<a class="table-map-action" target="_blank" rel="noopener" href="${mapsRoute(order.fulfillment.lat,order.fulfillment.lng)}">Lihat rute</a>`:''}</td><td>${rupiah(order.total)}</td><td><span class="status ${esc(order.status)}">${esc(orderStatusText(order.status))}</span></td><td><div class="action-row"><button data-order-detail="${esc(order.id)}">Detail</button>${sellerView&&order.status==='wa'?`<button data-confirm-order="${esc(order.id)}">Konfirmasi</button><button class="reject" data-cancel-order="${esc(order.id)}">Batal</button>`:''}${sellerView&&order.status==='confirmed'?`<button data-complete-order="${esc(order.id)}">Selesaikan</button><button class="reject" data-cancel-order="${esc(order.id)}">Batal</button>`:''}${sellerView&&order.buyerPhone&&!['cancelled','completed'].includes(order.status)?`<button data-contact-buyer="${esc(order.id)}">WhatsApp</button>`:''}</div></td></tr>`).join('')}</tbody></table></div></div>`;
  }

  function sellerProductsTable(products) {
    if (!products.length) return '<div class="empty-state"><strong>Belum ada produk</strong><p>Tambahkan foto, harga, satuan, dan stok untuk mulai berjualan.</p></div>';
    return `<div class="panel"><div class="table-wrap"><table><thead><tr><th>Produk</th><th>Harga / satuan</th><th>Stok</th><th>Status</th><th>Aksi</th></tr></thead><tbody>${products.map(p=>`<tr><td><div class="table-user"><img class="product-thumb" src="${esc(p.image)}" alt=""><div><strong>${esc(p.name)}</strong><small>${esc(p.category)}</small></div></div></td><td>${rupiah(p.price)} / ${esc(p.unit)}</td><td>${p.stock}</td><td><span class="status ${p.active?'approved':'suspended'}">${p.moderation==='hidden'?'Ditahan admin':p.active?'Aktif':'Diarsipkan'}</span></td><td><div class="action-row"><button data-edit-product="${esc(p.id)}">Edit</button>${p.moderation!=='hidden'?`<button data-toggle-own-product="${esc(p.id)}">${p.active?'Arsipkan':'Aktifkan'}</button>`:''}<button class="reject" data-delete-product="${esc(p.id)}">Arsipkan</button></div></td></tr>`).join('')}</tbody></table></div></div>`;
  }

  function sellerProfileForm(seller) {
    const categories=window.pbCategories||[];
    return `<div class="profile-layout"><div class="panel"><div class="panel-head"><h3>Informasi usaha</h3><span class="status approved">Disetujui</span></div><div class="panel-body"><form id="remoteSellerProfile"><div class="form-grid"><div class="field"><label>Nama pemilik</label><input required maxlength="120" name="owner_name" value="${esc(window.pbCurrentProfile?.display_name||'')}"></div><div class="field"><label>Email login</label><input value="${esc(window.pbCurrentUser?.email||'')}" disabled></div><div class="field"><label>Nama toko</label><input required maxlength="160" name="business_name" value="${esc(seller.business)}"></div><div class="field"><label>WhatsApp toko</label><input required inputmode="tel" name="phone" value="${esc(seller.phone)}"></div><div class="field"><label>Kategori</label><select required name="category_id">${categories.map(c=>`<option value="${esc(c.id)}" ${seller.categoryId===c.id?'selected':''}>${esc(c.name)}</option>`).join('')}</select></div><div class="field full"><label>Alamat usaha</label><input required maxlength="500" name="address" value="${esc(seller.address)}"></div><div class="field full"><label>Deskripsi toko</label><textarea maxlength="3000" name="description">${esc(seller.bio||'')}</textarea></div><div class="field"><label>Latitude toko</label><input type="number" step="any" name="latitude" value="${seller.lat??''}" required></div><div class="field"><label>Longitude toko</label><input type="number" step="any" name="longitude" value="${seller.lng??''}" required></div></div><div class="form-actions"><button class="btn btn-dark">Simpan profil</button></div></form></div></div><aside class="profile-side"><div class="panel"><div class="panel-head"><h3>Lokasi publik</h3></div><div class="panel-body">${canMap(seller.lat,seller.lng)?`<code>${Number(seller.lat).toFixed(6)}, ${Number(seller.lng).toFixed(6)}</code><a class="btn btn-outline btn-block" style="margin-top:10px" target="_blank" rel="noopener" href="${mapsRoute(seller.lat,seller.lng)}">Periksa di Google Maps</a>`:'Koordinat belum diatur.'}</div></div><div class="panel"><div class="panel-body"><p class="muted small">Email digunakan untuk login. WhatsApp hanya menjadi kontak toko dan transaksi.</p></div></div></aside></div>`;
  }

  function paintSellerWorkspace(data) {
    const { seller, products, orders } = data;
    const tabs={overview:['Ringkasan toko','Pantau produk dan pesanan terbaru.'],products:['Produk saya','Kelola daftar produk, harga, dan stok.'],orders:['Pesanan masuk','Stok dikurangi saat Anda mengonfirmasi pesanan.'],profile:['Profil toko','Informasi ini tampil kepada pembeli.']};
    const [title,sub]=tabs[state.sellerTab]||tabs.overview;
    let body='';
    if(state.sellerTab==='products') body=sellerProductsTable(products);
    else if(state.sellerTab==='orders') body=remoteOrderTable(orders,true);
    else if(state.sellerTab==='profile') body=sellerProfileForm(seller);
    else {
      const pending=orders.filter(order=>order.status==='wa').length;
      const low=products.filter(product=>product.stock<=10).length;
      body=`<div class="stat-grid"><article class="stat-card"><span>Produk</span><strong>${products.length}</strong><small>Produk milik toko</small></article><article class="stat-card"><span>Perlu konfirmasi</span><strong>${pending}</strong><small>Nota WhatsApp baru</small></article><article class="stat-card"><span>Pesanan selesai</span><strong>${orders.filter(o=>o.status==='completed').length}</strong><small>Tersimpan di database</small></article><article class="stat-card"><span>Stok rendah</span><strong>${low}</strong><small>10 unit atau kurang</small></article></div><div class="dash-grid"><div class="panel"><div class="panel-head"><h3>Produk terbaru</h3><button class="plain-link" id="sellerGoProducts">Kelola produk</button></div><div class="panel-body">${products.slice(0,5).map(p=>`<div class="progress-row"><div><span>${esc(p.name)}</span><b>${p.stock} ${esc(p.unit)}</b></div><div class="progress"><span style="width:${Math.min(100,p.stock*3)}%"></span></div></div>`).join('')||'<p class="muted">Belum ada produk.</p>'}</div></div><div class="panel"><div class="panel-head"><h3>Lokasi toko</h3></div><div class="panel-body store-quick-location"><p>${esc(seller.address)}</p>${canMap(seller.lat,seller.lng)?`<code>${Number(seller.lat).toFixed(6)}, ${Number(seller.lng).toFixed(6)}</code><a class="btn btn-outline btn-block" style="margin-top:10px" target="_blank" rel="noopener" href="${mapsRoute(seller.lat,seller.lng)}">Buka peta</a>`:''}</div></div></div>`;
    }
    view.innerHTML=`<section class="dashboard-shell"><aside class="dashboard-side"><div class="side-brand"><span class="brand-mark">${icon('store')}</span><span><strong>${esc(seller.business)}</strong><small>PORTAL PENJUAL</small></span></div><div class="side-profile"><span class="avatar">${esc(initials(seller.business))}</span><div><strong>${esc(seller.business)}</strong><span>${esc(window.pbCurrentUser?.email||'')}</span></div></div><nav class="side-nav">${[['overview','Ringkasan'],['products','Produk Saya'],['orders','Pesanan Masuk'],['profile','Profil Toko']].map(([id,label])=>`<button class="side-item ${state.sellerTab===id?'active':''}" data-seller-tab="${id}">${label}</button>`).join('')}</nav><button class="side-back" id="sellerBackMarket">Kembali ke marketplace</button></aside><div class="dashboard-main"><div class="dash-head"><div><p class="eyebrow">Portal penjual</p><h1>${esc(title)}</h1><p>${esc(sub)}</p></div><div class="dash-actions">${state.sellerTab==='products'?`<button class="btn btn-dark btn-sm" id="remoteAddProduct">${icon('plus')} Tambah produk</button>`:''}<button class="btn btn-outline btn-sm" id="sellerLogoutRemote">Keluar</button></div></div><div id="sellerTab">${body}</div></div></section>`;
    $$('[data-seller-tab]').forEach(button=>button.onclick=()=>{state.sellerTab=button.dataset.sellerTab;renderSeller();});
    $('#sellerBackMarket').onclick=()=>navigate('home'); $('#sellerLogoutRemote').onclick=()=>{setSession(null);navigate('home');toast('Anda telah keluar.');};
    $('#remoteAddProduct')?.addEventListener('click',()=>showProductEditor(seller)); $('#sellerGoProducts')?.addEventListener('click',()=>{state.sellerTab='products';renderSeller();});
    $('#remoteSellerProfile')?.addEventListener('submit',event=>saveSellerProfile(event,seller));
    $$('[data-edit-product]').forEach(button=>button.onclick=()=>showProductEditor(seller,products.find(p=>p.id===button.dataset.editProduct)));
    $$('[data-toggle-own-product]').forEach(button=>button.onclick=()=>toggleOwnProduct(button.dataset.toggleOwnProduct));
    $$('[data-delete-product]').forEach(button=>button.onclick=()=>deleteProduct(button.dataset.deleteProduct));
    $$('[data-confirm-order]').forEach(button=>button.onclick=()=>updateOrder(button.dataset.confirmOrder,'confirmed'));
    $$('[data-complete-order]').forEach(button=>button.onclick=()=>updateOrder(button.dataset.completeOrder,'completed'));
    $$('[data-cancel-order]').forEach(button=>button.onclick=()=>updateOrder(button.dataset.cancelOrder,'cancelled'));
    $$('[data-order-detail]').forEach(button=>button.onclick=()=>showOrderDetail(button.dataset.orderDetail,'seller'));
    $$('[data-contact-buyer]').forEach(button=>button.onclick=()=>contactBuyer(button.dataset.contactBuyer));
  }
  window.renderSeller = async function() {
    if(state.session?.role!=='seller') return showSellerEntry();
    const data=await loadSellerWorkspace();
    if(!data) { toast('Profil toko tidak ditemukan. Hubungi admin.'); return navigate('home'); }
    if(data.seller.status!=='approved') { toast('Toko sedang tidak aktif.'); return; }
    paintSellerWorkspace(data);
  };
  window.paintSellerTab = window.renderSeller;
  window.sellerNav = () => '';
  window.sellerTabContent = () => '';

  window.showProductEditor = async function(seller, product = null) {
    try { await loadCategories(); } catch (error) { return toast('Kategori belum dapat dimuat.'); }
    const categories=window.pbCategories||[];
    const opts=categories.map(c=>`<option value="${esc(c.id)}" ${product?.categoryId===c.id?'selected':''}>${esc(c.name)}</option>`).join('');
    openModal(`<div class="modal-head"><div><p class="eyebrow">${product?'Edit produk':'Produk baru'}</p><h2>${product?'Perbarui informasi produk.':'Tambahkan ke etalase.'}</h2><p>Harga dan stok akan dibaca ulang dari database saat pesanan dibuat.</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><form id="remoteProductForm"><div class="field product-photo-field"><label>Foto produk</label><div class="upload-preview"><img id="remoteProductPreview" src="${esc(product?.image||'/assets/products/sayur-segar.jpg')}" alt="Preview"><input type="file" name="image" accept="image/jpeg,image/png,image/webp"><small>JPG/PNG/WEBP, maksimal 8 MB.</small></div></div><div class="form-grid"><div class="field"><label>Nama produk</label><input required maxlength="180" name="name" value="${esc(product?.name||'')}"></div><div class="field"><label>Kategori</label><select required name="category_id">${opts}</select></div><div class="field"><label>Harga (Rp)</label><input required type="number" min="1" step="1" name="price" value="${product?.price??''}"></div><div class="field"><label>Satuan</label><input required maxlength="40" name="unit" value="${esc(product?.unit||'')}" placeholder="bungkus / kg / buah"></div><div class="field"><label>Stok</label><input required type="number" min="0" step="1" name="stock" value="${product?.stock??0}"></div><div class="field full"><label>Deskripsi produk</label><textarea maxlength="5000" name="description">${esc(product?.description||'')}</textarea></div></div><div class="form-actions"><button type="button" class="btn btn-outline" data-close>Batal</button><button class="btn btn-dark">${product?'Simpan perubahan':'Terbitkan produk'}</button></div></form></div>`,true);
    const imageInput=$('#remoteProductForm [name="image"]');
    imageInput.onchange=()=>{if(imageInput.files?.[0])$('#remoteProductPreview').src=URL.createObjectURL(imageInput.files[0]);};
    $('#remoteProductForm').onsubmit=async event=>{
      event.preventDefault(); const button=event.submitter; const d=Object.fromEntries(new FormData(event.currentTarget));
      const file=imageInput.files?.[0];
      if(!Number.isFinite(Number(d.price))||Number(d.price)<=0||!Number.isInteger(Number(d.stock))||Number(d.stock)<0)return toast('Harga atau stok tidak valid.');
      if(file&&(!/^image\/(jpeg|png|webp)$/.test(file.type)||file.size>8*1024*1024))return toast('Foto harus JPG, PNG, atau WEBP dengan ukuran maksimal 8 MB.');
      button.disabled=true;button.textContent='Menyimpan…';
      const payload={category_id:d.category_id,name:d.name.trim(),description:(d.description||'').trim(),price:Number(d.price),unit:d.unit.trim(),stock:Number(d.stock),is_active:product?product.active:true};
      let saved;
      if(product){saved=await sb.from('products').update(payload).eq('id',product.id).select('id').single();}
      else {saved=await sb.from('products').insert({...payload,seller_id:seller.id}).select('id').single();}
      if(saved.error){button.disabled=false;button.textContent=product?'Simpan perubahan':'Terbitkan produk';return toastError('Produk gagal disimpan.',saved.error);}
      let uploadWarning='';
      if(file){
        try {
          const dataUrl=await compressImage(file); const blob=await (await fetch(dataUrl)).blob();
          const path=`${window.pbCurrentUser.id}/${saved.data.id}/${Date.now()}.jpg`;
          const uploaded=await sb.storage.from('product-images').upload(path,blob,{contentType:'image/jpeg',upsert:true});
          if(uploaded.error)throw uploaded.error;
          const oldPaths=product?.imagePaths||[];
          const updated=await sb.from('products').update({image_paths:[path]}).eq('id',saved.data.id);
          if(updated.error)throw updated.error;
          if(oldPaths.length) await sb.storage.from('product-images').remove(oldPaths.filter(old=>old.startsWith(`${window.pbCurrentUser.id}/`)));
        } catch(error) { console.error('Product photo upload failed:',error); uploadWarning=' Produk tersimpan, tetapi foto belum berhasil diunggah.'; }
      }
      closeModal(); await loadCatalog({quiet:true}); toast(`Produk berhasil ${product?'diperbarui':'diterbitkan'}.${uploadWarning}`); state.sellerTab='products'; renderSeller();
    };
  };
  window.toggleOwnProduct = async function(id) {
    const product=db.products.find(item=>item.id===id); if(!product)return;
    if(product.moderation==='hidden')return toast('Produk ditahan admin dan tidak dapat diaktifkan.');
    const {error}=await sb.from('products').update({is_active:!product.active}).eq('id',id);
    if(error)return toastError('Status produk gagal diperbarui.',error);
    await loadCatalog({quiet:true}); toast(product.active?'Produk diarsipkan.':'Produk diaktifkan.'); renderSeller();
  };
  window.deleteProduct = function(id) {
    const product=db.products.find(item=>item.id===id); if(!product)return;
    openModal(`<div class="modal-head"><div><p class="eyebrow">Arsip produk</p><h2>Arsipkan ${esc(product.name)}?</h2><p>Produk disembunyikan dari katalog; riwayat pesanan tetap aman.</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><div class="form-actions"><button class="btn btn-outline" data-close>Batal</button><button class="btn btn-dark" id="confirmArchiveProduct">Arsipkan</button></div></div>`);
    $('#confirmArchiveProduct').onclick=async()=>{const {error}=await sb.from('products').update({is_active:false}).eq('id',id);if(error)return toastError('Produk gagal diarsipkan.',error);closeModal();await loadCatalog({quiet:true});toast('Produk diarsipkan.');renderSeller();};
  };
  window.saveSellerProfile = async function(event,seller) {
    event.preventDefault(); const data=Object.fromEntries(new FormData(event.currentTarget));
    if(!goodPhone(data.phone))return toast('Nomor WhatsApp toko tidak valid.');
    if(!coordsValid(data.latitude,data.longitude))return toast('Koordinat toko tidak valid.');
    const profileUpdate=await sb.from('profiles').update({display_name:data.owner_name.trim(),contact_phone:normalizePhone(data.phone)}).eq('id',window.pbCurrentUser.id);
    if(profileUpdate.error)return toastError('Nama pemilik gagal disimpan.',profileUpdate.error);
    const {error}=await sb.from('sellers').update({business_name:data.business_name.trim(),phone:normalizePhone(data.phone),category_id:data.category_id,address:data.address.trim(),description:(data.description||'').trim(),latitude:Number(data.latitude),longitude:Number(data.longitude)}).eq('id',seller.id);
    if(error)return toastError('Profil toko gagal disimpan.',error);
    const {data:authData}=await sb.auth.getSession(); await syncAuthSession(authData?.session); await loadCatalog({quiet:true});
    toast('Profil toko berhasil diperbarui.'); renderSeller();
  };

  window.showFulfillmentModal = async function(sellerId, cartItems) {
    const seller=db.sellers.find(item=>item.id===sellerId); const buyer=db.buyers.find(item=>item.id===window.pbCurrentUser?.id);
    if(!seller)return toast('Toko tidak ditemukan.');
    const rows=cartItems.map(row=>({row,product:db.products.find(item=>item.id===row.productId)})).filter(x=>x.product);
    if(!rows.length)return toast('Produk dalam keranjang sudah tidak tersedia.');
    const pickupMap=canMap(seller.lat,seller.lng)?`<a class="maps-primary" href="${mapsRoute(seller.lat,seller.lng)}" target="_blank" rel="noopener">${icon('map')} Lihat rute ke toko ${icon('arrow')}</a>`:'';
    openModal(`<div class="modal-head"><div><p class="eyebrow">Cara menerima pesanan</p><h2>Ambil atau diantar?</h2><p>Pesanan akan disimpan dahulu, kemudian WhatsApp dibuka.</p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><div class="fulfillment-summary">${rows.map(x=>`<div><span>${esc(x.product.name)} × ${x.row.qty}</span><b>${rupiah(x.product.price*x.row.qty)}</b></div>`).join('')}<div><strong>Total sementara</strong><strong>${rupiah(rows.reduce((n,x)=>n+x.product.price*x.row.qty,0))}</strong></div></div><div class="form-grid"><div class="field"><label>Nama untuk pesanan</label><input form="remoteFulfillmentForm" required maxlength="120" name="buyerName" value="${esc(buyer?.name||window.pbCurrentProfile?.display_name||'')}"></div><div class="field"><label>WhatsApp untuk transaksi</label><input form="remoteFulfillmentForm" required inputmode="tel" maxlength="40" name="buyerPhone" value="${esc(buyer?.phone||window.pbCurrentProfile?.contact_phone||'')}" placeholder="081234567890"></div></div><p class="muted small">Email tetap menjadi identitas login; WhatsApp hanya untuk komunikasi pesanan.</p><div class="fulfillment-tabs"><button class="active" type="button" data-fulfillment="pickup">${icon('store')}<span><strong>Ambil di toko</strong><small>Saya datang ke lokasi penjual</small></span></button><button type="button" data-fulfillment="delivery">${icon('map')}<span><strong>Minta diantar</strong><small>Penjual mengantar ke saya</small></span></button></div><form id="remoteFulfillmentForm"><input type="hidden" name="type" value="pickup"><section id="remotePickup" class="fulfillment-panel"><div class="route-destination"><span class="location-pin">${icon('store')}</span><div><small>Tujuan pengambilan</small><strong>${esc(seller.business)}</strong><p>${esc(seller.address)}</p>${canMap(seller.lat,seller.lng)?`<code>${Number(seller.lat).toFixed(6)}, ${Number(seller.lng).toFixed(6)}</code>`:''}</div></div>${pickupMap}</section><section id="remoteDelivery" class="fulfillment-panel hidden"><div class="helper-box">Ongkos kirim dan pembayaran disepakati langsung melalui WhatsApp.</div><div class="field"><label>Alamat / patokan pengantaran</label><textarea name="buyerAddress" maxlength="500" placeholder="Contoh: rumah pagar hijau, dekat masjid"></textarea></div><div class="form-grid"><div class="field"><label>Latitude pembeli</label><input type="number" step="any" name="buyerLat" placeholder="-5.123456"></div><div class="field"><label>Longitude pembeli</label><input type="number" step="any" name="buyerLng" placeholder="119.123456"></div></div><button type="button" class="btn btn-ghost btn-sm" id="remoteBuyerGps">${icon('map')} Ambil lokasi saya</button><a id="remoteBuyerMap" class="coordinate-preview hidden" target="_blank" rel="noopener">Periksa titik pengantaran</a></section><div class="fulfillment-actions"><button type="button" class="btn btn-outline" data-close>Batal</button><button class="btn wa-btn">${icon('whatsapp')} Simpan nota & buka WhatsApp</button></div></form></div>`,true);
    $$('[data-fulfillment]').forEach(button=>button.onclick=()=>{const type=button.dataset.fulfillment;$$('[data-fulfillment]').forEach(item=>item.classList.toggle('active',item===button));$('#remoteFulfillmentForm [name="type"]').value=type;$('#remotePickup').classList.toggle('hidden',type!=='pickup');$('#remoteDelivery').classList.toggle('hidden',type!=='delivery');});
    const preview=()=>{const lat=$('#remoteFulfillmentForm [name="buyerLat"]')?.value,lng=$('#remoteFulfillmentForm [name="buyerLng"]')?.value,link=$('#remoteBuyerMap');if(coordsValid(lat,lng)){link.href=mapsRoute(lat,lng);link.classList.remove('hidden');}else link.classList.add('hidden');};
    $('#remoteFulfillmentForm [name="buyerLat"]').oninput=preview;$('#remoteFulfillmentForm [name="buyerLng"]').oninput=preview;
    $('#remoteBuyerGps').onclick=()=>{if(!navigator.geolocation)return toast('GPS tidak didukung perangkat ini.');const button=$('#remoteBuyerGps');button.disabled=true;button.textContent='Meminta lokasi…';navigator.geolocation.getCurrentPosition(position=>{$('#remoteFulfillmentForm [name="buyerLat"]').value=position.coords.latitude.toFixed(6);$('#remoteFulfillmentForm [name="buyerLng"]').value=position.coords.longitude.toFixed(6);preview();button.disabled=false;button.innerHTML=`${icon('check')} Lokasi didapat`;},()=>{button.disabled=false;button.innerHTML=`${icon('map')} Ambil lokasi saya`;toast('Lokasi tidak dapat diambil. Isi koordinat secara manual.');},{enableHighAccuracy:true,timeout:15000,maximumAge:0});};
    $('#remoteFulfillmentForm').onsubmit=async event=>{
      event.preventDefault();const data=Object.fromEntries(new FormData(event.currentTarget));
      if(!goodPhone(data.buyerPhone))return toast('Masukkan nomor WhatsApp yang aktif.');
      let fulfillment;
      if(data.type==='delivery'){
        if(!data.buyerAddress.trim())return toast('Isi alamat pengantaran.');
        if(!coordsValid(data.buyerLat,data.buyerLng))return toast('Masukkan koordinat atau gunakan GPS.');
        fulfillment={type:'delivery',label:'Minta diantar',address:data.buyerAddress.trim(),lat:Number(data.buyerLat),lng:Number(data.buyerLng)};
      }else fulfillment={type:'pickup',label:'Ambil di toko',address:seller.address,lat:seller.lat,lng:seller.lng};
      const submit=event.submitter;submit.disabled=true;submit.textContent='Menyimpan nota…';
      try {
        const {error}=await sb.from('profiles').update({display_name:data.buyerName.trim(),contact_phone:normalizePhone(data.buyerPhone)}).eq('id',window.pbCurrentUser.id);
        if(error)console.warn('Profile contact update warning (the order will still store its contact):',error);
        const {data:authData}=await sb.auth.getSession();await syncAuthSession(authData?.session);
        await createRemoteOrder(sellerId,cartItems,fulfillment,{name:data.buyerName.trim(),phone:normalizePhone(data.buyerPhone)});
      } catch(error) { toastError('Terjadi kendala saat membuat pesanan.',error); }
      finally { if(submit.isConnected){submit.disabled=false;submit.innerHTML=`${icon('whatsapp')} Simpan nota & buka WhatsApp`;} }
    };
  };

  async function createRemoteOrder(sellerId, cartItems, fulfillment, contact) {
    const user=window.pbCurrentUser;const seller=db.sellers.find(item=>item.id===sellerId);
    if(!user||!seller)return toast('Masuk kembali dan pilih toko yang aktif.');
    const items=cartItems.map(row=>({product_id:row.productId,quantity:Number(row.qty)}));
    if(!items.length)return toast('Keranjang kosong.');
    // Reserve a tab directly in the click gesture; it is only navigated after the database confirms the order.
    let popup=null;try{popup=window.open('about:blank','_blank');if(popup)popup.opener=null;}catch{}
    const params={p_seller_id:sellerId,p_buyer_name:contact.name,p_buyer_phone:contact.phone,p_fulfillment:fulfillment.type,p_fulfillment_address:fulfillment.address,p_fulfillment_latitude:fulfillment.lat,p_fulfillment_longitude:fulfillment.lng,p_items:items};
    const {data:createdId,error}=await sb.rpc('create_market_order',params);
    if(error||!createdId){popup?.close();return toastError('Pesanan belum tersimpan. WhatsApp tidak dibuka.',error||new Error('Database tidak mengembalikan ID pesanan.'));}
    let order=null;
    const {data:row,error:readError}=await sb.from('orders').select('id,order_ref,buyer_id,seller_id,buyer_name,buyer_phone,fulfillment,fulfillment_address,fulfillment_latitude,fulfillment_longitude,status,subtotal,created_at,updated_at,sellers(business_name,phone),order_items(product_id,product_name,unit,quantity,unit_price,line_total)').eq('id',createdId).single();
    if(!readError&&row)order=mapOrder(row);
    if(!order){
      console.warn('Order was created, but its receipt could not be reloaded:',readError);
      const localItems=cartItems.map(row=>{const p=db.products.find(item=>item.id===row.productId);return p?{productId:p.id,name:p.name,qty:Number(row.qty),unit:p.unit,price:Number(p.price),subtotal:Number(p.price)*Number(row.qty)}:null;}).filter(Boolean);
      order={id:String(createdId),ref:String(createdId),dbId:String(createdId),buyer:contact.name,buyerPhone:contact.phone,sellerId,seller:seller.business,sellerPhone:seller.phone,items:localItems,product:localItems.map(i=>i.name).join(', '),qty:localItems.reduce((n,i)=>n+i.qty,0),total:localItems.reduce((n,i)=>n+i.subtotal,0),status:'wa',fulfillment,created:dateText(new Date().toISOString())};
    }
    db.orders.unshift(order);
    state.cart=state.cart.filter(row=>!cartItems.some(item=>item.productId===row.productId));
    try{localStorage.setItem('pb_cart',JSON.stringify(state.cart));}catch{}
    const lines=order.items.map((item,index)=>`${index+1}. ${item.name}\n   ${item.qty} ${item.unit} × ${rupiah(item.price)} = ${rupiah(item.subtotal)}`).join('\n');
    const mapLink=fulfillment.lat!=null&&fulfillment.lng!=null?mapsRoute(fulfillment.lat,fulfillment.lng):'';
    const message=`Halo ${seller.business}, saya ingin memesan melalui Parangbaddo’ Store.\n\nNO. NOTA: ${order.id}\nPEMBELI: ${contact.name}\nWHATSAPP: +${contact.phone}\nMETODE: ${fulfillment.label}\n\n${lines}\n\nTOTAL: ${rupiah(order.total)}\n\nALAMAT / TUJUAN:\n${fulfillment.address}${mapLink?`\nGoogle Maps: ${mapLink}`:''}\n\nMohon konfirmasi stok, ongkos kirim bila ada, dan pembayaran. Terima kasih.`;
    const url=whatsAppUrl(seller.phone,message);
    closeModal();toast(`Nota ${order.id} tersimpan. Membuka WhatsApp.`);
    if(popup&&!popup.closed){try{popup.location.replace(url);}catch{popup.close();launchWhatsApp(url);}}else launchWhatsApp(url);
    setTimeout(()=>showWhatsAppFallback(order,url),350);
    await loadCatalog({quiet:true});await refreshOrders('buyer',user.id);
  }
  window.createOrderAndOpenWhatsApp=createRemoteOrder;
  window.checkoutCartSeller=async sellerId=>{
    const items=state.cart.filter(row=>db.products.find(product=>product.id===row.productId)?.sellerId===sellerId);
    if(!items.length)return toast('Tidak ada produk toko ini di keranjang.');
    if(!window.pbCurrentUser)return ensureBuyer(()=>showFulfillmentModal(sellerId,items));
    return showFulfillmentModal(sellerId,items);
  };
  window.updateOrder=async function(id,status) {
    const order=db.orders.find(item=>item.id===id||item.dbId===id);if(!order)return toast('Nota tidak ditemukan.');
    const next=orderStatuses[status];if(!next)return toast('Status pesanan tidak valid.');
    const {error}=await sb.rpc('transition_market_order',{p_order_id:order.dbId,p_next_status:next});
    if(error)return toastError('Status pesanan gagal diperbarui.',error);
    toast(`Pesanan ${orderStatusText(status).toLowerCase()}.`);
    await loadCatalog({quiet:true});
    if(state.session?.role==='seller')renderSeller();else await refreshOrders('buyer',window.pbCurrentUser?.id);
  };
  window.cancelBuyerOrder=()=>toast('Pembatalan melalui akun pembeli belum tersedia. Hubungi penjual melalui WhatsApp.');
  window.contactBuyer=function(id){const order=db.orders.find(item=>item.id===id||item.dbId===id);if(!order?.buyerPhone)return toast('Nomor WhatsApp pembeli tidak tersedia.');const message=`Halo ${order.buyer}, kami dari ${order.seller} menghubungi terkait pesanan ${order.id}.`;launchWhatsApp(whatsAppUrl(order.buyerPhone,message));};
  window.showOrderDetail=function(id) {
    const order=db.orders.find(item=>item.id===id||item.dbId===id);if(!order)return toast('Nota tidak ditemukan.');
    const fulfillment=order.fulfillment||{};
    openModal(`<div class="modal-head"><div><p class="eyebrow">Nota pesanan</p><h2>${esc(order.id)}</h2><p>${esc(order.created)} · <span class="status ${esc(order.status)}">${esc(orderStatusText(order.status))}</span></p></div><button class="icon-btn" data-close>${icon('x')}</button></div><div class="modal-body"><div class="receipt">${(order.items||[]).map(item=>`<div><span>${esc(item.name)} × ${item.qty} ${esc(item.unit)}</span><b>${rupiah(item.subtotal)}</b></div>`).join('')}<div class="receipt-total"><span>Total</span><b>${rupiah(order.total)}</b></div></div><div class="detail-grid"><div><span>Pembeli</span><strong>${esc(order.buyer)}</strong></div><div><span>WhatsApp</span><strong>${esc(order.buyerPhone)}</strong></div><div><span>Toko</span><strong>${esc(order.seller)}</strong></div><div><span>Metode</span><strong>${esc(fulfillment.label||'—')}</strong></div></div><div class="detail-description"><span>Alamat / tujuan</span><p>${esc(fulfillment.address||'—')}</p></div>${fulfillment.lat!=null?`<a class="btn btn-outline btn-block" target="_blank" rel="noopener" href="${mapsRoute(fulfillment.lat,fulfillment.lng)}">Lihat titik di Google Maps</a>`:''}</div>`,true);
  };
})();
/* ===== END final-ui.js ===== */
