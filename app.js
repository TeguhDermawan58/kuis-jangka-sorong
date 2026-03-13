// ============================================================
// DATA SOAL
// ============================================================
const SOAL = [
  {
    id:1,
    teks:"Alat ukur yang digunakan untuk mengukur diameter luar, diameter dalam, dan kedalaman suatu benda dengan ketelitian hingga 0,1 mm adalah....",
    pilihan:["Mikrometer sekrup","Jangka sorong","Mistar/penggaris","Termometer"],
    jwb:1, gambar:null
  },
  {
    id:2,
    teks:"Pada jangka sorong, bagian yang berfungsi sebagai skala nonius (vernier) adalah....",
    pilihan:[
      "Batang utama berskala sentimeter",
      "Rahang tetap bagian bawah",
      "Skala geser pada bagian yang bergerak",
      "Sekrup pengunci"
    ],
    jwb:2,
    gambar:{
      svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 580 200" style="max-width:100%;background:#1e293b;border-radius:8px;padding:12px">
        <text x="290" y="20" font-family="sans-serif" font-size="13" fill="#e8f0ff" text-anchor="middle" font-weight="bold">Bagian-Bagian Jangka Sorong</text>
        <rect x="20" y="60" width="500" height="34" fill="#b8860b" stroke="#888" stroke-width="1.5" rx="4"/>
        <rect x="20" y="94" width="50" height="70" fill="#b8860b" stroke="#888" stroke-width="1.5" rx="2"/>
        <rect x="70" y="54" width="90" height="44" fill="#1565c0" stroke="#888" stroke-width="1.5" rx="3"/>
        <rect x="70" y="94" width="50" height="56" fill="#1565c0" stroke="#888" stroke-width="1.5" rx="2"/>
        <rect x="514" y="60" width="9" height="88" fill="#888" rx="3"/>
        <line x1="70" y1="60" x2="70" y2="50" stroke="#ccc" stroke-width="1.5"/>
        <line x1="120" y1="60" x2="120" y2="50" stroke="#ccc" stroke-width="1.5"/>
        <line x1="170" y1="60" x2="170" y2="50" stroke="#ccc" stroke-width="1.5"/>
        <line x1="220" y1="60" x2="220" y2="50" stroke="#ccc" stroke-width="1.5"/>
        <line x1="270" y1="60" x2="270" y2="50" stroke="#ccc" stroke-width="1.5"/>
        <line x1="320" y1="60" x2="320" y2="50" stroke="#ccc" stroke-width="1.5"/>
        <line x1="95" y1="60" x2="95" y2="55" stroke="#ccc" stroke-width="1"/>
        <line x1="145" y1="60" x2="145" y2="55" stroke="#ccc" stroke-width="1"/>
        <line x1="195" y1="60" x2="195" y2="55" stroke="#ccc" stroke-width="1"/>
        <line x1="245" y1="60" x2="245" y2="55" stroke="#ccc" stroke-width="1"/>
        <line x1="295" y1="60" x2="295" y2="55" stroke="#ccc" stroke-width="1"/>
        <text x="18" y="48" font-family="monospace" font-size="10" fill="#ccc">0   1   2   3   4   5   6</text>
        <rect x="70" y="100" width="54" height="20" fill="#0d47a1" rx="2"/>
        <text x="70" y="112" font-family="sans-serif" font-size="9" fill="#fff">0  5  10</text>
        <text x="15" y="135" font-family="sans-serif" font-size="11" fill="#f5c842" font-weight="bold">A</text>
        <text x="65" y="165" font-family="sans-serif" font-size="11" fill="#4fc3f7" font-weight="bold">B</text>
        <text x="240" y="48" font-family="sans-serif" font-size="11" fill="#4ade80" font-weight="bold">C (Skala Utama)</text>
        <text x="78" y="45" font-family="sans-serif" font-size="11" fill="#c084fc" font-weight="bold">D (Skala Nonius)</text>
        <text x="510" y="158" font-family="sans-serif" font-size="10" fill="#fb923c" font-weight="bold">E</text>
        <text x="15" y="188" font-family="sans-serif" font-size="10" fill="#64748b">A=Rahang Tetap  B=Rahang Geser  C=Skala Utama  D=Skala Nonius  E=Pengukur Kedalaman</text>
      </svg>`,
      caption:"Gambar 1. Bagian-bagian jangka sorong"
    }
  },
  {
    id:3,
    teks:"Bagian jangka sorong yang digunakan untuk mengukur diameter dalam (lubang) suatu benda adalah....",
    pilihan:["Rahang atas (rahang dalam)","Rahang bawah (rahang luar)","Pengukur kedalaman","Sekrup pengunci"],
    jwb:0, gambar:null
  },
  {
    id:4,
    teks:"Jika skala nonius jangka sorong memiliki 10 bagian yang panjang totalnya = 9 mm pada skala utama, maka ketelitian jangka sorong tersebut adalah....",
    pilihan:["1 mm","0,5 mm","0,1 mm","0,01 mm"],
    jwb:2, gambar:null
  },
  {
    id:5,
    teks:"Jumlah bagian skala nonius pada jangka sorong dengan ketelitian 0,02 mm adalah....",
    pilihan:["10 bagian","20 bagian","50 bagian","100 bagian"],
    jwb:2, gambar:null
  },
  {
    id:6,
    teks:"Perhatikan gambar pembacaan jangka sorong berikut! Skala utama menunjukkan 2,3 cm dan garis ke-7 pada skala nonius berimpit dengan skala utama. Hasil pengukurannya adalah....",
    pilihan:["2,30 cm","2,07 cm","2,37 cm","3,27 cm"],
    jwb:2,
    gambar:{
      svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 175" style="max-width:100%;background:#1e293b;border-radius:8px;padding:12px">
        <text x="270" y="18" font-family="sans-serif" font-size="12" fill="#e8f0ff" text-anchor="middle" font-weight="bold">Pembacaan Jangka Sorong</text>
        <rect x="30" y="35" width="470" height="28" fill="#b8860b" stroke="#888" stroke-width="1.5" rx="3"/>
        <text x="175" y="28" font-family="monospace" font-size="11" fill="#ddd" font-weight="bold">2</text>
        <text x="225" y="28" font-family="monospace" font-size="11" fill="#ddd" font-weight="bold">3</text>
        <text x="275" y="28" font-family="monospace" font-size="11" fill="#ddd" font-weight="bold">4</text>
        <line x1="180" y1="35" x2="180" y2="25" stroke="#ddd" stroke-width="1.5"/>
        <line x1="230" y1="35" x2="230" y2="25" stroke="#ddd" stroke-width="1.5"/>
        <line x1="280" y1="35" x2="280" y2="25" stroke="#ddd" stroke-width="1.5"/>
        <line x1="190" y1="35" x2="190" y2="30" stroke="#ddd" stroke-width="1"/>
        <line x1="200" y1="35" x2="200" y2="30" stroke="#ddd" stroke-width="1"/>
        <line x1="210" y1="35" x2="210" y2="30" stroke="#ddd" stroke-width="1"/>
        <line x1="220" y1="35" x2="220" y2="30" stroke="#ddd" stroke-width="1"/>
        <line x1="240" y1="35" x2="240" y2="30" stroke="#ddd" stroke-width="1"/>
        <line x1="250" y1="35" x2="250" y2="30" stroke="#ddd" stroke-width="1"/>
        <line x1="260" y1="35" x2="260" y2="30" stroke="#ddd" stroke-width="1"/>
        <line x1="270" y1="35" x2="270" y2="30" stroke="#ddd" stroke-width="1"/>
        <line x1="230" y1="35" x2="230" y2="18" stroke="#e44" stroke-width="2"/>
        <polygon points="225,18 235,18 230,12" fill="#e44"/>
        <text x="218" y="11" font-family="sans-serif" font-size="9" fill="#e44">2,3</text>
        <rect x="218" y="63" width="60" height="22" fill="#1565c0" stroke="#888" stroke-width="1.5" rx="2"/>
        <line x1="218" y1="63" x2="218" y2="73" stroke="#ddd" stroke-width="1.5"/>
        <line x1="224" y1="63" x2="224" y2="69" stroke="#ddd" stroke-width="1"/>
        <line x1="230" y1="63" x2="230" y2="69" stroke="#ddd" stroke-width="1"/>
        <line x1="236" y1="63" x2="236" y2="69" stroke="#ddd" stroke-width="1"/>
        <line x1="242" y1="63" x2="242" y2="69" stroke="#ddd" stroke-width="1"/>
        <line x1="248" y1="63" x2="248" y2="69" stroke="#ddd" stroke-width="1"/>
        <line x1="254" y1="63" x2="254" y2="69" stroke="#ddd" stroke-width="1"/>
        <line x1="260" y1="63" x2="260" y2="73" stroke="#e44" stroke-width="2.5"/>
        <line x1="266" y1="63" x2="266" y2="69" stroke="#ddd" stroke-width="1"/>
        <line x1="272" y1="63" x2="272" y2="69" stroke="#ddd" stroke-width="1"/>
        <line x1="278" y1="63" x2="278" y2="73" stroke="#ddd" stroke-width="1.5"/>
        <text x="215" y="98" font-family="sans-serif" font-size="10" fill="#64748b">0</text>
        <text x="257" y="98" font-family="sans-serif" font-size="10" fill="#e44" font-weight="bold">7</text>
        <text x="274" y="98" font-family="sans-serif" font-size="10" fill="#64748b">10</text>
        <rect x="30" y="112" width="480" height="50" fill="rgba(245,200,66,0.07)" stroke="rgba(245,200,66,0.2)" stroke-width="1" rx="6"/>
        <text x="42" y="130" font-family="sans-serif" font-size="11" fill="#ccc">Skala utama = 2,3 cm; Garis nonius ke-7 berimpit</text>
        <text x="42" y="150" font-family="sans-serif" font-size="13" fill="#f5c842" font-weight="bold">Hasil = 2,3 + (7 × 0,01) = 2,37 cm</text>
      </svg>`,
      caption:"Gambar 2. Contoh pembacaan jangka sorong"
    }
  },
  {
    id:7,
    teks:"Pada pembacaan jangka sorong, skala utama menunjukkan angka 4,5 cm dan garis ke-6 pada skala nonius berimpit dengan skala utama. Hasil pengukurannya adalah....",
    pilihan:["4,50 cm","4,56 cm","4,65 cm","45,6 mm"],
    jwb:1, gambar:null
  },
  {
    id:8,
    teks:"Perhatikan gambar di bawah! Tentukan hasil pengukuran jangka sorong tersebut!",
    pilihan:["3,06 cm","3,60 cm","4,06 cm","3,46 cm"],
    jwb:3,
    gambar:{
      svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 155" style="max-width:100%;background:#1e293b;border-radius:8px;padding:12px">
        <text x="250" y="17" font-family="sans-serif" font-size="12" fill="#e8f0ff" text-anchor="middle" font-weight="bold">Tentukan hasil pengukuran!</text>
        <rect x="30" y="32" width="430" height="28" fill="#b8860b" stroke="#888" stroke-width="1.5" rx="3"/>
        <text x="175" y="24" font-family="monospace" font-size="11" fill="#ddd" font-weight="bold">3</text>
        <text x="225" y="24" font-family="monospace" font-size="11" fill="#ddd" font-weight="bold">4</text>
        <text x="275" y="24" font-family="monospace" font-size="11" fill="#ddd" font-weight="bold">5</text>
        <line x1="180" y1="32" x2="180" y2="22" stroke="#ddd" stroke-width="1.5"/>
        <line x1="230" y1="32" x2="230" y2="22" stroke="#ddd" stroke-width="1.5"/>
        <line x1="280" y1="32" x2="280" y2="22" stroke="#ddd" stroke-width="1.5"/>
        <line x1="190" y1="32" x2="190" y2="27" stroke="#ddd" stroke-width="1"/>
        <line x1="200" y1="32" x2="200" y2="27" stroke="#ddd" stroke-width="1"/>
        <line x1="210" y1="32" x2="210" y2="27" stroke="#ddd" stroke-width="1"/>
        <line x1="220" y1="32" x2="220" y2="27" stroke="#ddd" stroke-width="1"/>
        <line x1="240" y1="32" x2="240" y2="27" stroke="#ddd" stroke-width="1"/>
        <line x1="250" y1="32" x2="250" y2="27" stroke="#ddd" stroke-width="1"/>
        <line x1="260" y1="32" x2="260" y2="27" stroke="#ddd" stroke-width="1"/>
        <line x1="270" y1="32" x2="270" y2="27" stroke="#ddd" stroke-width="1"/>
        <rect x="226" y="60" width="52" height="22" fill="#1565c0" stroke="#888" stroke-width="1.5" rx="2"/>
        <line x1="226" y1="60" x2="226" y2="70" stroke="#ddd" stroke-width="1.5"/>
        <line x1="231" y1="60" x2="231" y2="66" stroke="#ddd" stroke-width="1"/>
        <line x1="236" y1="60" x2="236" y2="66" stroke="#ddd" stroke-width="1"/>
        <line x1="241" y1="60" x2="241" y2="66" stroke="#ddd" stroke-width="1"/>
        <line x1="246" y1="60" x2="246" y2="66" stroke="#ddd" stroke-width="1"/>
        <line x1="251" y1="60" x2="251" y2="66" stroke="#ddd" stroke-width="1"/>
        <line x1="256" y1="60" x2="256" y2="70" stroke="#e44" stroke-width="2.5"/>
        <line x1="261" y1="60" x2="261" y2="66" stroke="#ddd" stroke-width="1"/>
        <line x1="266" y1="60" x2="266" y2="66" stroke="#ddd" stroke-width="1"/>
        <line x1="271" y1="60" x2="271" y2="66" stroke="#ddd" stroke-width="1"/>
        <line x1="276" y1="60" x2="276" y2="70" stroke="#ddd" stroke-width="1.5"/>
        <text x="222" y="96" font-family="sans-serif" font-size="10" fill="#64748b">0</text>
        <text x="253" y="96" font-family="sans-serif" font-size="10" fill="#e44" font-weight="bold">6</text>
        <text x="272" y="96" font-family="sans-serif" font-size="10" fill="#64748b">10</text>
        <text x="30" y="120" font-family="sans-serif" font-size="11" fill="#ccc">Skala utama = 3,4 cm; Nonius berimpit di garis ke-6</text>
        <text x="30" y="140" font-family="sans-serif" font-size="12" fill="#f5c842" font-weight="bold">Kunci: 3,4 + (6 × 0,01) = 3,46 cm</text>
      </svg>`,
      caption:"Gambar 3. Soal latihan pembacaan"
    }
  },
  {
    id:9,
    teks:"Skala utama jangka sorong menunjukkan 1,2 cm dan skala nonius menunjukkan garis ke-4 yang berimpit. Jika ketelitian jangka sorong adalah 0,02 mm, maka hasil pengukurannya adalah....",
    pilihan:["12,08 mm","12,40 mm","1,24 cm","12,80 mm"],
    jwb:0, gambar:null
  },
  {
    id:10,
    teks:"Sebuah jangka sorong memiliki 50 bagian pada skala nonius yang panjang totalnya sama dengan 49 mm pada skala utama. Ketelitian jangka sorong tersebut adalah....",
    pilihan:["0,001 mm","0,02 mm","0,1 mm","0,5 mm"],
    jwb:1, gambar:null
  },
  {
    id:11,
    teks:"Seorang siswa ingin mengukur diameter luar sebuah pipa menggunakan jangka sorong. Rahang manakah yang tepat digunakan?",
    pilihan:["Rahang atas (rahang dalam)","Pengukur kedalaman","Rahang bawah (rahang luar)","Sekrup pengunci"],
    jwb:2, gambar:null
  },
  {
    id:12,
    teks:"Perbedaan utama antara jangka sorong dan mistar dalam hal ketelitian pengukuran adalah....",
    pilihan:[
      "Jangka sorong memiliki ketelitian hingga 0,1 mm, sedangkan mistar hanya 1 mm",
      "Mistar lebih akurat untuk mengukur benda berbentuk silinder",
      "Keduanya memiliki ketelitian yang sama yaitu 1 mm",
      "Jangka sorong hanya bisa mengukur panjang, mistar bisa mengukur diameter"
    ],
    jwb:0, gambar:null
  }
];

// ============================================================
// CONFIG
// ============================================================
const ADMIN_USER = "admin";
const ADMIN_PASS = "teguh2024";
const FIREBASE_PATH = "responden";

// ============================================================
// STATE
// ============================================================
let state = {
  currentQ: 0,
  answers: new Array(SOAL.length).fill(null),
  userData: {},
  timer: null,
  timeLeft: 30 * 60,
  allResp: [],        // live from Firebase
  filteredResp: [],
  firebaseReady: false,
  savedToFirebase: false,
};

// ============================================================
// FIREBASE WRAPPERS
// ============================================================
function fb() {
  return {
    db: window._firebaseDB,
    ref: window._firebaseRef,
    push: window._firebasePush,
    onValue: window._firebaseOnValue,
    remove: window._firebaseRemove,
    get: window._firebaseGet,
  };
}

function isFirebaseConfigured() {
  // Check if user replaced placeholder config
  if (!window._firebaseReady) return false;
  try {
    const db = window._firebaseDB;
    // Try accessing db app options
    return !!db;
  } catch { return false; }
}

// ============================================================
// INIT
// ============================================================
window.addEventListener('firebaseReady', () => {
  state.firebaseReady = true;

  // Check if config is still placeholder
  const app = window._firebaseDB?.app;
  const cfg = app?.options;
  if (!cfg || cfg.apiKey === 'GANTI_API_KEY') {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('setup-guide').style.display = 'flex';
    return;
  }

  // Start live listener for responden count on cover
  listenResponden();

  document.getElementById('loading-screen').style.display = 'none';
  showPageDirect('page-cover');
});

// Fallback if Firebase module fails to load
window.addEventListener('load', () => {
  setTimeout(() => {
    if (!state.firebaseReady) {
      document.getElementById('loading-screen').style.display = 'none';
      document.getElementById('setup-guide').style.display = 'flex';
    }
  }, 5000);
});

function listenResponden() {
  const { db, ref, onValue } = fb();
  const respRef = ref(db, FIREBASE_PATH);
  onValue(respRef, (snap) => {
    const data = snap.val();
    state.allResp = data ? Object.entries(data).map(([key, val]) => ({ _key: key, ...val })) : [];
    state.filteredResp = [...state.allResp];
    updateCoverCount();
    if (document.getElementById('tab-dash').classList.contains('active')) refreshDashboard();
    if (document.getElementById('tab-resp').style.display !== 'none') renderFullTable(state.filteredResp);
    if (document.getElementById('tab-stat').style.display !== 'none') renderStatSoal();
  });
}

function updateCoverCount() {
  const el = document.getElementById('cover-responden-count');
  if (el) el.innerHTML = `<strong>${state.allResp.length}</strong> orang`;
}

// ============================================================
// PAGE NAVIGATION
// ============================================================
function showPageDirect(id) {
  document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
  const pg = document.getElementById(id);
  if (pg) pg.style.display = pg.id === 'page-quiz' ? 'flex' : pg.id === 'page-review' ? 'flex' : 'flex';
}

const App = {
  showPage(id) { showPageDirect(id); },

  // ---- QUIZ FLOW ----
  startQuiz() { showPageDirect('page-identity'); },

  startQuestions() {
    const nama = document.getElementById('inp-nama').value.trim();
    const errEl = document.getElementById('identity-error');
    if (!nama) {
      errEl.style.display = 'block';
      document.getElementById('inp-nama').focus();
      setTimeout(() => errEl.style.display = 'none', 3000);
      return;
    }
    state.userData = {
      nama,
      kelas: document.getElementById('inp-kelas').value.trim() || '-',
      institusi: document.getElementById('inp-institusi').value.trim() || '-',
      email: document.getElementById('inp-email').value.trim() || '-',
      waktu: new Date().toLocaleString('id-ID', { dateStyle: 'short', timeStyle: 'short' }),
      timestamp: Date.now(),
    };
    state.answers = new Array(SOAL.length).fill(null);
    state.currentQ = 0;
    state.timeLeft = 30 * 60;
    state.savedToFirebase = false;

    showPageDirect('page-quiz');
    renderQ();
    startTimer();
  },

  prevQ() {
    if (state.currentQ > 0) { state.currentQ--; renderQ(); }
  },

  nextQ() {
    if (state.currentQ < SOAL.length - 1) { state.currentQ++; renderQ(); }
    else finishQuiz();
  },

  goHome() {
    showPageDirect('page-cover');
  },

  reviewAnswers() {
    buildReview();
    showPageDirect('page-review');
  },

  // ---- ADMIN ----
  showAdminLogin() {
    document.getElementById('adm-user').value = '';
    document.getElementById('adm-pass').value = '';
    document.getElementById('adm-error').style.display = 'none';
    showPageDirect('page-admin-login');
  },

  adminLogin() {
    const u = document.getElementById('adm-user').value.trim();
    const p = document.getElementById('adm-pass').value;
    if (u === ADMIN_USER && p === ADMIN_PASS) {
      showPageDirect('page-admin');
      refreshDashboard();
    } else {
      document.getElementById('adm-error').style.display = 'block';
    }
  },

  adminLogout() { showPageDirect('page-cover'); },

  switchTab(tab, btn) {
    document.querySelectorAll('.adm-tab').forEach(t => { t.classList.remove('active'); t.style.display = 'none'; });
    document.querySelectorAll('.adm-nav-btn').forEach(b => b.classList.remove('active'));
    const el = document.getElementById('tab-' + tab);
    if (el) { el.style.display = 'block'; el.classList.add('active'); }
    if (btn) btn.classList.add('active');
    if (tab === 'resp') renderFullTable(state.filteredResp);
    if (tab === 'stat') renderStatSoal();
    if (tab === 'dash') refreshDashboard();
  },

  filterResp() {
    const q = document.getElementById('search-inp').value.toLowerCase();
    state.filteredResp = q
      ? state.allResp.filter(r =>
          (r.nama || '').toLowerCase().includes(q) ||
          (r.institusi || '').toLowerCase().includes(q) ||
          (r.kelas || '').toLowerCase().includes(q)
        )
      : [...state.allResp];
    renderFullTable(state.filteredResp);
  },

  exportExcel() {
    if (!state.allResp.length) { alert('Belum ada data responden!'); return; }
    doExport();
  },

  confirmClear() {
    document.getElementById('modal-title').textContent = '⚠️ Hapus Semua Data';
    document.getElementById('modal-msg').textContent =
      `Yakin ingin menghapus ${state.allResp.length} data responden dari Firebase? Tindakan ini TIDAK DAPAT dibatalkan!`;
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('modal-ok').onclick = () => {
      clearAllData();
      App.closeModal();
    };
  },

  closeModal() {
    document.getElementById('modal').style.display = 'none';
  },
};

// ============================================================
// RENDER QUESTION
// ============================================================
function renderQ() {
  const soal = SOAL[state.currentQ];
  const total = SOAL.length;
  const idx = state.currentQ;
  const pct = Math.round(((idx + 1) / total) * 100);

  document.getElementById('prog-label').textContent = `Soal ${idx + 1} dari ${total}`;
  document.getElementById('prog-pct').textContent = `${pct}%`;
  document.getElementById('prog-fill').style.width = pct + '%';
  document.getElementById('q-num-bg').textContent = String(idx + 1).padStart(2, '0');
  document.getElementById('q-text').textContent = soal.teks;

  // Image
  const imgBox = document.getElementById('q-img-box');
  if (soal.gambar) {
    const blob = new Blob([soal.gambar.svg], { type: 'image/svg+xml' });
    document.getElementById('q-img').src = URL.createObjectURL(blob);
    document.getElementById('q-img-caption').textContent = soal.gambar.caption || '';
    imgBox.style.display = 'block';
  } else {
    imgBox.style.display = 'none';
  }

  // Options
  const letters = ['A','B','C','D'];
  const container = document.getElementById('options-list');
  container.innerHTML = '';
  soal.pilihan.forEach((p, i) => {
    const btn = document.createElement('button');
    btn.className = 'opt-btn' + (state.answers[idx] === i ? ' sel' : '');
    btn.innerHTML = `<span class="opt-letter">${letters[i]}</span><span>${p}</span>`;
    btn.onclick = () => { state.answers[idx] = i; renderQ(); };
    container.appendChild(btn);
  });

  // Nav
  document.getElementById('btn-prev').disabled = idx === 0;
  document.getElementById('btn-next').textContent = idx === total - 1 ? 'Selesai ✓' : 'Selanjutnya →';

  // Dots
  const dotRow = document.getElementById('dot-row');
  dotRow.innerHTML = '';
  for (let i = 0; i < total; i++) {
    const d = document.createElement('div');
    d.className = 'dot' + (i === idx ? ' cur' : state.answers[i] !== null ? ' ans' : '');
    d.title = `Soal ${i + 1}`;
    d.onclick = () => { state.currentQ = i; renderQ(); };
    dotRow.appendChild(d);
  }
}

// ============================================================
// TIMER
// ============================================================
function startTimer() {
  clearInterval(state.timer);
  state.timer = setInterval(() => {
    state.timeLeft--;
    const m = String(Math.floor(state.timeLeft / 60)).padStart(2, '0');
    const s = String(state.timeLeft % 60).padStart(2, '0');
    document.getElementById('timer-val').textContent = `${m}:${s}`;
    const timerEl = document.getElementById('quiz-timer');
    if (state.timeLeft <= 300) timerEl.style.color = 'var(--red)';
    if (state.timeLeft <= 0) { clearInterval(state.timer); finishQuiz(); }
  }, 1000);
}

// ============================================================
// FINISH & SAVE TO FIREBASE
// ============================================================
function finishQuiz() {
  clearInterval(state.timer);
  const benar = state.answers.filter((a, i) => a === SOAL[i].jwb).length;
  const salah = SOAL.length - benar;
  const nilai = Math.round((benar / SOAL.length) * 100);

  // Result UI
  let emoji = '😔', heading = 'Perlu Belajar Lagi', msg = 'Terus berlatih, kamu pasti bisa!';
  if (nilai >= 90)      { emoji = '🏆'; heading = 'Luar Biasa!';   msg = 'Penguasaan materi jangka sorong sangat baik!'; }
  else if (nilai >= 75) { emoji = '🎉'; heading = 'Hebat!';         msg = 'Nilai bagus! Pertahankan terus ya.'; }
  else if (nilai >= 60) { emoji = '👍'; heading = 'Cukup Baik!';    msg = 'Masih ada ruang untuk meningkat!'; }
  else if (nilai >= 40) { emoji = '📚'; heading = 'Perlu Latihan';  msg = 'Pelajari kembali materi jangka sorong.'; }

  document.getElementById('res-emoji').textContent = emoji;
  document.getElementById('res-heading').textContent = heading;
  document.getElementById('res-msg').textContent = msg;
  document.getElementById('donut-score').textContent = benar;
  document.getElementById('pill-benar').textContent = benar;
  document.getElementById('pill-salah').textContent = salah;
  document.getElementById('pill-nilai').textContent = nilai;

  // Donut animation
  const circle = document.getElementById('donut-circle');
  const offset = 314 * (1 - benar / SOAL.length);
  setTimeout(() => {
    circle.style.strokeDashoffset = offset;
    circle.style.stroke = nilai >= 75 ? 'var(--green)' : nilai >= 50 ? 'var(--orange)' : 'var(--red)';
  }, 300);

  showPageDirect('page-result');

  // Save to Firebase
  const saveEl = document.getElementById('save-status');
  saveEl.style.display = 'flex';
  saveEl.innerHTML = `<div class="save-spinner"></div> Menyimpan data ke Firebase...`;

  const record = {
    ...state.userData,
    benar,
    salah,
    nilai,
    jawaban: state.answers,
  };

  const { db, ref, push } = fb();
  push(ref(db, FIREBASE_PATH), record)
    .then(() => {
      state.savedToFirebase = true;
      saveEl.innerHTML = `✅ Data berhasil tersimpan ke Firebase!`;
      saveEl.style.color = 'var(--green)';
    })
    .catch((err) => {
      saveEl.innerHTML = `⚠️ Gagal menyimpan: ${err.message}`;
      saveEl.style.color = 'var(--red)';
    });
}

// ============================================================
// REVIEW
// ============================================================
function buildReview() {
  const letters = ['A','B','C','D'];
  const body = document.getElementById('review-body');
  body.innerHTML = '';
  SOAL.forEach((soal, i) => {
    const ua = state.answers[i];
    const correct = soal.jwb;
    const ok = ua === correct;
    const div = document.createElement('div');
    div.className = `review-item ${ok ? 'ok' : 'ng'}`;
    let ansHtml = '';
    if (!ok && ua !== null) {
      ansHtml += `<span class="ri-ans wrong-user">Jawabanmu: ${letters[ua]}. ${soal.pilihan[ua]}</span>`;
    }
    ansHtml += `<span class="ri-ans right">✅ ${letters[correct]}. ${soal.pilihan[correct]}</span>`;
    div.innerHTML = `
      <div class="ri-num">Soal ${i + 1} ${ok ? '✅' : '❌'}</div>
      <div class="ri-q">${soal.teks}</div>
      ${ansHtml}
    `;
    body.appendChild(div);
  });
}

// ============================================================
// ADMIN DASHBOARD
// ============================================================
function refreshDashboard() {
  const data = state.allResp;
  const total = data.length;
  const today = new Date().toLocaleDateString('id-ID');
  const todayN = data.filter(r => (r.waktu || '').startsWith(today)).length;
  const vals = data.map(r => r.nilai || 0);
  const avg = total ? Math.round(vals.reduce((a,b)=>a+b,0)/total) : 0;
  const max = total ? Math.max(...vals) : 0;

  document.getElementById('kpi-total').textContent = total;
  document.getElementById('kpi-avg').textContent = avg;
  document.getElementById('kpi-max').textContent = max;
  document.getElementById('kpi-today').textContent = todayN;

  const tbody = document.getElementById('tbody-recent');
  tbody.innerHTML = '';
  if (!total) {
    tbody.innerHTML = '<tr class="empty-row"><td colspan="5">Belum ada responden mengisi kuis</td></tr>';
    return;
  }
  [...data].reverse().slice(0, 10).forEach((r, i) => {
    const nc = r.nilai >= 75 ? 'hi' : r.nilai >= 50 ? 'mi' : 'lo';
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${i+1}</td>
      <td><strong>${r.nama}</strong></td>
      <td>${r.institusi || '-'}</td>
      <td><span class="badge ${nc}">${r.nilai}</span></td>
      <td>${r.waktu || '-'}</td>`;
    tbody.appendChild(tr);
  });
}

function renderFullTable(data) {
  const tbody = document.getElementById('tbody-full');
  tbody.innerHTML = '';
  if (!data.length) {
    tbody.innerHTML = '<tr class="empty-row"><td colspan="8">Tidak ada data ditemukan</td></tr>';
    return;
  }
  data.forEach((r, i) => {
    const nc = r.nilai >= 75 ? 'hi' : r.nilai >= 50 ? 'mi' : 'lo';
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${i+1}</td>
      <td><strong>${r.nama}</strong></td>
      <td>${r.kelas || '-'}</td>
      <td>${r.institusi || '-'}</td>
      <td>${r.email || '-'}</td>
      <td>${r.benar || 0}/12</td>
      <td><span class="badge ${nc}">${r.nilai}</span></td>
      <td>${r.waktu || '-'}</td>`;
    tbody.appendChild(tr);
  });
}

function renderStatSoal() {
  const grid = document.getElementById('stat-grid');
  grid.innerHTML = '';
  const total = state.allResp.length;
  if (!total) {
    grid.innerHTML = '<div style="color:var(--muted);padding:40px;grid-column:1/-1;text-align:center">Belum ada data statistik</div>';
    return;
  }
  SOAL.forEach((soal, i) => {
    const benarN = state.allResp.filter(r => r.jawaban && r.jawaban[i] === soal.jwb).length;
    const pct = Math.round((benarN / total) * 100);
    const d = document.createElement('div');
    d.className = 'stat-card';
    d.innerHTML = `
      <div class="sc-num">Soal ${i+1}</div>
      <div class="sc-pct">${pct}%</div>
      <div class="sc-bar"><div class="sc-fill" style="width:${pct}%"></div></div>
      <div class="sc-desc">${benarN}/${total} responden menjawab benar</div>`;
    grid.appendChild(d);
  });
}

// ============================================================
// CLEAR ALL DATA
// ============================================================
function clearAllData() {
  const { db, ref, remove } = fb();
  remove(ref(db, FIREBASE_PATH))
    .then(() => {
      state.allResp = [];
      state.filteredResp = [];
      refreshDashboard();
      renderFullTable([]);
      updateCoverCount();
    })
    .catch(err => alert('Gagal menghapus: ' + err.message));
}

// ============================================================
// EXPORT TO EXCEL (CSV)
// ============================================================
function doExport() {
  const BOM = '\uFEFF';
  const cols = ['No','Nama','Kelas/Semester','Institusi','Email','Benar','Salah','Nilai','Tanggal & Waktu'];
  SOAL.forEach((_, i) => cols.push(`Soal ${i+1} (Jwb/Benar)`));

  const letters = ['A','B','C','D'];
  const rows = [...state.allResp]
    .sort((a,b) => (a.timestamp||0) - (b.timestamp||0))
    .map((r, idx) => {
      const detail = SOAL.map((s, i) => {
        const a = r.jawaban ? r.jawaban[i] : null;
        const ok = a === s.jwb;
        return `${a !== null ? letters[a] : '-'}/${ok ? '✓' : '✗'}`;
      });
      return [
        idx + 1,
        r.nama || '',
        r.kelas || '-',
        r.institusi || '-',
        r.email || '-',
        r.benar ?? 0,
        r.salah ?? 0,
        r.nilai ?? 0,
        r.waktu || '-',
        ...detail
      ];
    });

  let csv = BOM + cols.join(';') + '\n';
  rows.forEach(row => {
    csv += row.map(c => `"${String(c).replace(/"/g,'""')}"`).join(';') + '\n';
  });

  // Summary
  const total = state.allResp.length;
  const avg = total ? (state.allResp.reduce((s,r) => s+(r.nilai||0), 0)/total).toFixed(1) : 0;
  csv += `\n"=== RINGKASAN ==="\n`;
  csv += `"Total Responden";"${total}"\n`;
  csv += `"Rata-rata Nilai";"${avg}"\n`;
  csv += `"Nilai Tertinggi";"${total ? Math.max(...state.allResp.map(r=>r.nilai||0)) : 0}"\n`;
  csv += `"Nilai Terendah";"${total ? Math.min(...state.allResp.map(r=>r.nilai||0)) : 0}"\n`;
  csv += `"Dibuat oleh";"Teguh Dermawan";"NIM: 2284240017"\n`;
  csv += `"Diekspor pada";"${new Date().toLocaleString('id-ID')}"\n`;

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `Responden_JangkaSorong_${new Date().toLocaleDateString('id-ID').replace(/\//g,'-')}.csv`;
  a.click();
}
