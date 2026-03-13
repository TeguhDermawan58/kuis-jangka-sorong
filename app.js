// ============================================================
// SOAL — Dasar Jangka Sorong (teori, tanpa hitung/gambar)
// ============================================================
const SOAL = [
  {
    id:1,
    teks:"Jangka sorong adalah alat ukur yang digunakan untuk mengukur....",
    p:["Massa dan berat benda","Diameter luar, diameter dalam, dan kedalaman benda","Suhu dan tekanan benda","Volume dan luas permukaan benda"],
    jwb:1
  },
  {
    id:2,
    teks:"Bagian jangka sorong yang berfungsi sebagai skala tambahan untuk meningkatkan ketelitian pengukuran disebut....",
    p:["Skala utama","Rahang tetap","Skala nonius (vernier)","Sekrup pengunci"],
    jwb:2
  },
  {
    id:3,
    teks:"Fungsi rahang bawah (rahang luar) pada jangka sorong adalah untuk mengukur....",
    p:["Diameter dalam atau lebar lubang suatu benda","Kedalaman lubang atau celah suatu benda","Diameter luar atau lebar luar suatu benda","Panjang dan tinggi benda secara vertikal"],
    jwb:2
  },
  {
    id:4,
    teks:"Fungsi rahang atas (rahang dalam) pada jangka sorong adalah untuk mengukur....",
    p:["Diameter luar atau tebal suatu benda","Diameter dalam atau lebar lubang suatu benda","Massa suatu benda","Kedalaman celah atau lubang suatu benda"],
    jwb:1
  },
  {
    id:5,
    teks:"Bagian jangka sorong yang digunakan untuk mengukur kedalaman suatu lubang atau celah adalah....",
    p:["Rahang atas","Rahang bawah","Sekrup pengunci","Batang pengukur kedalaman (depth probe)"],
    jwb:3
  },
  {
    id:6,
    teks:"Sekrup pengunci pada jangka sorong berfungsi untuk....",
    p:["Menggerakkan rahang geser maju dan mundur","Mengunci posisi rahang geser agar tidak berubah saat dibaca","Mengatur ketelitian skala nonius","Menghubungkan skala utama dengan skala nonius"],
    jwb:1
  },
  {
    id:7,
    teks:"Ketelitian standar jangka sorong yang paling umum digunakan di sekolah adalah....",
    p:["0,01 mm","0,001 mm","0,1 mm","1 mm"],
    jwb:2
  },
  {
    id:8,
    teks:"Jangka sorong pertama kali ditemukan dan dikembangkan oleh ilmuwan bernama....",
    p:["Pierre Vernier","Isaac Newton","Galileo Galilei","Robert Hooke"],
    jwb:0
  },
  {
    id:9,
    teks:"Nama lain dari skala nonius pada jangka sorong dalam bahasa Inggris adalah....",
    p:["Main scale","Depth gauge","Vernier scale","Micrometer scale"],
    jwb:2
  },
  {
    id:10,
    teks:"Jangka sorong lebih baik digunakan dibandingkan mistar biasa karena....",
    p:["Jangka sorong lebih ringan dan mudah dibawa","Jangka sorong memiliki tingkat ketelitian yang lebih tinggi","Jangka sorong dapat mengukur massa benda","Jangka sorong tidak memerlukan satuan ukuran"],
    jwb:1
  },
  {
    id:11,
    teks:"Satuan yang umumnya digunakan pada skala jangka sorong adalah....",
    p:["Meter dan kilogram","Centimeter dan milimeter","Inci dan yard","Mikrometer dan nanometer"],
    jwb:1
  },
  {
    id:12,
    teks:"Saat menggunakan jangka sorong, posisi mata yang benar saat membaca skala adalah....",
    p:["Mata melihat dari samping kiri alat","Mata melihat dari atas alat dengan sudut 45°","Mata tepat di depan skala, tegak lurus untuk menghindari paralaks","Mata melihat dari bawah alat agar skala terlihat jelas"],
    jwb:2
  }
];

// ============================================================
// CONFIG
// ============================================================
const ADMIN_USER = "admin";
const ADMIN_PASS = "teguh2024";
const FB_PATH    = "responden";

// ============================================================
// STATE
// ============================================================
const S = {
  q: 0, ans: new Array(SOAL.length).fill(null),
  user: {}, timer: null, secs: 30*60,
  resp: [], filtered: [],
  fbReady: false,
};

// ============================================================
// FIREBASE HELPERS
// ============================================================
const fb = () => window._FB;

function isConfigured() {
  if (!window._fbReady || !window._FB) return false;
  try { return window._FB.db?.app?.options?.apiKey !== 'GANTI_API_KEY'; }
  catch { return false; }
}

// ============================================================
// BOOT
// ============================================================
window.addEventListener('firebaseReady', () => {
  S.fbReady = true;
  if (!isConfigured()) {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('setup-guide').style.display = 'flex';
    return;
  }
  startListen();
  document.getElementById('loading-screen').style.display = 'none';
  show('page-cover');
});

setTimeout(() => {
  if (!S.fbReady) {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('setup-guide').style.display = 'flex';
  }
}, 6000);

function startListen() {
  const { db, ref, onValue } = fb();
  onValue(ref(db, FB_PATH), snap => {
    const d = snap.val();
    S.resp = d ? Object.entries(d).map(([k,v]) => ({ _key:k, ...v })) : [];
    S.filtered = [...S.resp];
    updateCoverCount();
    if (document.getElementById('tab-dash').classList.contains('active')) buildDash();
    if (document.getElementById('tab-resp').style.display !== 'none') renderTable(S.filtered);
    if (document.getElementById('tab-stat').style.display !== 'none') renderStat();
  });
}

function updateCoverCount() {
  const el = document.getElementById('cv-count');
  if (el) el.innerHTML = `<strong>${S.resp.length}</strong> orang`;
}

// ============================================================
// PAGE
// ============================================================
function show(id) {
  document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
  const pg = document.getElementById(id);
  if (pg) pg.style.display = 'flex';
}

// ============================================================
// App object
// ============================================================
const App = {
  showPage: show,
  startQuiz() { show('page-identity'); },
  startQuestions() {
    const nama = document.getElementById('inp-nama').value.trim();
    const ang  = document.getElementById('inp-angkatan').value.trim();
    const err  = document.getElementById('id-err');
    if (!nama || !ang) { err.style.display='block'; setTimeout(()=>err.style.display='none',3000); return; }
    S.user = {
      nama, angkatan: ang,
      kelas:     document.getElementById('inp-kelas').value.trim() || '-',
      institusi: document.getElementById('inp-institusi').value.trim() || '-',
      email:     document.getElementById('inp-email').value.trim() || '-',
      waktu: new Date().toLocaleString('id-ID', { day:'2-digit', month:'2-digit', year:'numeric', hour:'2-digit', minute:'2-digit' }),
      tanggal: new Date().toLocaleDateString('id-ID', { day:'2-digit', month:'2-digit', year:'numeric' }),
      jam: new Date().toLocaleTimeString('id-ID', { hour:'2-digit', minute:'2-digit' }),
      timestamp: Date.now(),
    };
    S.ans  = new Array(SOAL.length).fill(null);
    S.q    = 0;
    S.secs = 30*60;
    show('page-quiz');
    renderQ();
    startTimer();
  },
  prevQ() { if (S.q > 0) { S.q--; renderQ(); } },
  nextQ()  { S.q < SOAL.length-1 ? (S.q++, renderQ()) : finish(); },
  goHome() { show('page-cover'); },
  reviewAnswers() { buildReview(); show('page-review'); },
  showAdminLogin() {
    document.getElementById('adm-u').value='';
    document.getElementById('adm-p').value='';
    document.getElementById('adm-err').style.display='none';
    show('page-admin-login');
  },
  adminLogin() {
    const u=document.getElementById('adm-u').value.trim();
    const p=document.getElementById('adm-p').value;
    if (u===ADMIN_USER && p===ADMIN_PASS) { show('page-admin'); buildDash(); }
    else document.getElementById('adm-err').style.display='block';
  },
  adminLogout() { show('page-cover'); },
  tab(name, btn) {
    document.querySelectorAll('.atab').forEach(t=>{t.classList.remove('active');t.style.display='none'});
    document.querySelectorAll('.anb').forEach(b=>b.classList.remove('active'));
    const el = document.getElementById('tab-'+name);
    if (el) { el.style.display='block'; el.classList.add('active'); }
    if (btn) btn.classList.add('active');
    if (name==='resp') renderTable(S.filtered);
    if (name==='stat') renderStat();
    if (name==='dash') buildDash();
  },
  filter() {
    const q = document.getElementById('srch').value.toLowerCase();
    S.filtered = q
      ? S.resp.filter(r=>(r.nama||'').toLowerCase().includes(q)||(r.institusi||'').toLowerCase().includes(q)||(r.angkatan||'').toLowerCase().includes(q)||(r.kelas||'').toLowerCase().includes(q))
      : [...S.resp];
    renderTable(S.filtered);
  },
  exportExcel() { S.resp.length ? doExportExcel() : alert('Belum ada data!'); },
  exportPDF()   { S.resp.length ? doExportPDF()   : alert('Belum ada data!'); },
  exportWord()  { S.resp.length ? doExportWord()  : alert('Belum ada data!'); },
  confirmClear() {
    document.getElementById('modal-t').textContent='⚠️ Hapus Semua Data';
    document.getElementById('modal-m').textContent=`Yakin hapus ${S.resp.length} data dari Firebase? Tidak bisa dibatalkan!`;
    document.getElementById('modal').style.display='flex';
    document.getElementById('modal-ok').onclick=()=>{ clearData(); App.closeModal(); };
  },
  closeModal() { document.getElementById('modal').style.display='none'; },
};

// ============================================================
// RENDER QUESTION
// ============================================================
function renderQ() {
  const s=SOAL[S.q], n=S.q, tot=SOAL.length;
  const pct=Math.round(((n+1)/tot)*100);
  document.getElementById('q-prog-lbl').textContent=`Soal ${n+1} dari ${tot}`;
  document.getElementById('q-prog-pct').textContent=`${pct}%`;
  document.getElementById('prog-fill').style.width=pct+'%';
  document.getElementById('q-nbg').textContent=String(n+1).padStart(2,'0');
  document.getElementById('q-txt').textContent=s.teks;
  document.getElementById('q-img-wrap').style.display='none';

  const L=['A','B','C','D'];
  const opts=document.getElementById('opts');
  opts.innerHTML='';
  s.p.forEach((p,i)=>{
    const b=document.createElement('button');
    b.className='opt'+(S.ans[n]===i?' sel':'');
    b.innerHTML=`<span class="opt-l">${L[i]}</span><span>${p}</span>`;
    b.onclick=()=>{S.ans[n]=i; renderQ();};
    opts.appendChild(b);
  });

  document.getElementById('btn-prev').disabled=n===0;
  document.getElementById('btn-next').textContent=n===tot-1?'Selesai ✓':'Selanjutnya →';

  const dr=document.getElementById('dots');
  dr.innerHTML='';
  for(let i=0;i<tot;i++){
    const d=document.createElement('div');
    d.className='dot'+(i===n?' cur':S.ans[i]!==null?' ans':'');
    d.title=`Soal ${i+1}`;
    d.onclick=()=>{S.q=i;renderQ();};
    dr.appendChild(d);
  }
}

// ============================================================
// TIMER
// ============================================================
function startTimer() {
  clearInterval(S.timer);
  S.timer=setInterval(()=>{
    S.secs--;
    const m=String(Math.floor(S.secs/60)).padStart(2,'0');
    const s=String(S.secs%60).padStart(2,'0');
    document.getElementById('tval').textContent=`${m}:${s}`;
    if(S.secs<=300) document.getElementById('qtimer').style.color='var(--red)';
    if(S.secs<=0){clearInterval(S.timer);finish();}
  },1000);
}

// ============================================================
// FINISH & SAVE
// ============================================================
function finish() {
  clearInterval(S.timer);
  const benar=S.ans.filter((a,i)=>a===SOAL[i].jwb).length;
  const salah=SOAL.length-benar;
  const nilai=Math.round((benar/SOAL.length)*100);

  let emo='😔',head='Perlu Belajar Lagi',msg='Terus berlatih dan pelajari kembali materinya!';
  if(nilai>=90){emo='🏆';head='Luar Biasa!';msg='Penguasaan materi jangka sorong sangat baik!';}
  else if(nilai>=75){emo='🎉';head='Hebat!';msg='Nilai bagus! Pertahankan semangat belajarmu.';}
  else if(nilai>=60){emo='👍';head='Cukup Baik!';msg='Masih ada ruang untuk meningkat, terus berlatih!';}
  else if(nilai>=40){emo='📚';head='Perlu Latihan';msg='Pelajari kembali materi jangka sorong ya!';}

  document.getElementById('res-emo').textContent=emo;
  document.getElementById('res-head').textContent=head;
  document.getElementById('res-msg').textContent=msg;
  document.getElementById('donut-n').textContent=benar;
  document.getElementById('p-benar').textContent=benar;
  document.getElementById('p-salah').textContent=salah;
  document.getElementById('p-nilai').textContent=nilai;

  const c=document.getElementById('donut-c');
  setTimeout(()=>{
    c.style.strokeDashoffset=314*(1-benar/SOAL.length);
    c.style.stroke=nilai>=75?'var(--grn)':nilai>=50?'var(--org)':'var(--red)';
  },300);

  show('page-result');

  const sv=document.getElementById('save-row');
  sv.style.display='flex'; sv.style.color='var(--mut)';
  sv.innerHTML='<div class="save-spin"></div> Menyimpan ke Firebase...';

  const record={...S.user, benar, salah, nilai, jawaban:[...S.ans]};
  const {db,ref,push}=fb();
  push(ref(db,FB_PATH),record)
    .then(()=>{ sv.innerHTML='✅ Data berhasil tersimpan!'; sv.style.color='var(--grn)'; })
    .catch(e=>{ sv.innerHTML=`⚠️ Gagal: ${e.message}`; sv.style.color='var(--red)'; });
}

// ============================================================
// REVIEW
// ============================================================
function buildReview() {
  const L=['A','B','C','D'];
  const body=document.getElementById('rev-body');
  body.innerHTML='';
  SOAL.forEach((s,i)=>{
    const ua=S.ans[i],ok=ua===s.jwb;
    const div=document.createElement('div');
    div.className=`rev-item ${ok?'ok':'ng'}`;
    let ah='';
    if(!ok&&ua!==null) ah+=`<span class="ri-a wu">Jawabanmu: ${L[ua]}. ${s.p[ua]}</span>`;
    ah+=`<span class="ri-a ok">✅ ${L[s.jwb]}. ${s.p[s.jwb]}</span>`;
    div.innerHTML=`<div class="ri-n">Soal ${i+1} ${ok?'✅':'❌'}</div><div class="ri-q">${s.teks}</div>${ah}`;
    body.appendChild(div);
  });
}

// ============================================================
// ADMIN DASHBOARD
// ============================================================
function buildDash() {
  const data=S.resp, tot=data.length;
  const vals=data.map(r=>r.nilai||0);
  const avg=tot?Math.round(vals.reduce((a,b)=>a+b,0)/tot):0;
  const max=tot?Math.max(...vals):0;
  document.getElementById('k-total').textContent=tot;
  document.getElementById('k-avg').textContent=avg;
  document.getElementById('k-max').textContent=max;
  document.getElementById('k-today').textContent=data.filter(r=>new Date(r.timestamp||0).toDateString()===new Date().toDateString()).length;

  const tb=document.getElementById('tb-recent');
  tb.innerHTML='';
  if(!tot){tb.innerHTML='<tr class="empty-r"><td colspan="6">Belum ada responden</td></tr>';return;}
  [...data].reverse().slice(0,10).forEach((r,i)=>{
    const nc=r.nilai>=75?'hi':r.nilai>=50?'mi':'lo';
    const tr=document.createElement('tr');
    tr.innerHTML=`<td>${i+1}</td><td><strong>${r.nama}</strong></td><td>${r.angkatan||'-'}</td><td>${r.institusi||'-'}</td><td><span class="bdg ${nc}">${r.nilai}</span></td><td>${r.waktu||'-'}</td>`;
    tb.appendChild(tr);
  });
}

function renderTable(data) {
  const tb=document.getElementById('tb-full');
  tb.innerHTML='';
  if(!data.length){tb.innerHTML='<tr class="empty-r"><td colspan="9">Tidak ada data</td></tr>';return;}
  data.forEach((r,i)=>{
    const nc=r.nilai>=75?'hi':r.nilai>=50?'mi':'lo';
    const tr=document.createElement('tr');
    tr.innerHTML=`<td>${i+1}</td><td><strong>${r.nama}</strong></td><td>${r.angkatan||'-'}</td><td>${r.kelas||'-'}</td><td>${r.institusi||'-'}</td><td>${r.email||'-'}</td><td>${r.benar||0}/12</td><td><span class="bdg ${nc}">${r.nilai}</span></td><td>${r.waktu||'-'}</td>`;
    tb.appendChild(tr);
  });
}

function renderStat() {
  const g=document.getElementById('stat-grid');
  g.innerHTML='';
  const tot=S.resp.length;
  if(!tot){g.innerHTML='<div style="color:var(--mut);padding:40px;grid-column:1/-1;text-align:center">Belum ada data</div>';return;}
  SOAL.forEach((s,i)=>{
    const bn=S.resp.filter(r=>r.jawaban&&r.jawaban[i]===s.jwb).length;
    const pct=Math.round((bn/tot)*100);
    const d=document.createElement('div');d.className='sc';
    d.innerHTML=`<div class="sc-n">Soal ${i+1}</div><div class="sc-p">${pct}%</div><div class="sc-b"><div class="sc-f" style="width:${pct}%"></div></div><div class="sc-d">${bn}/${tot} menjawab benar</div>`;
    g.appendChild(d);
  });
}

// ============================================================
// CLEAR DATA
// ============================================================
function clearData() {
  const {db,ref,remove}=fb();
  remove(ref(db,FB_PATH)).then(()=>{S.resp=[];S.filtered=[];buildDash();renderTable([]);updateCoverCount();}).catch(e=>alert(e.message));
}

// ============================================================
// EXPORT EXCEL (.xlsx) — SheetJS lokal
// ============================================================
function doExportExcel() {
  if (typeof XLSX === 'undefined') { alert('Library Excel belum siap.'); return; }
  buildExcel();
}

function buildExcel() {
  const L=['A','B','C','D'];
  const now=new Date();
  const tgl=now.toLocaleDateString('id-ID',{weekday:'long',day:'2-digit',month:'long',year:'numeric'});
  const jam=now.toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'});
  const sorted=[...S.resp].sort((a,b)=>(a.timestamp||0)-(b.timestamp||0));
  const vals=sorted.map(r=>r.nilai||0);
  const tot=sorted.length;
  const avg=tot?Math.round(vals.reduce((a,b)=>a+b,0)/tot):0;
  const mx=tot?Math.max(...vals):0; const mn=tot?Math.min(...vals):0;
  const lulus=sorted.filter(r=>(r.nilai||0)>=75).length;
  const topics=['Definisi Jangka Sorong','Bagian Skala Nonius','Fungsi Rahang Bawah','Fungsi Rahang Atas','Batang Pengukur Kedalaman','Fungsi Sekrup Pengunci','Ketelitian Standar','Penemu Jangka Sorong','Nama Lain Skala Nonius','Keunggulan vs Mistar','Satuan Jangka Sorong','Cara Baca Skala'];
  const wb=XLSX.utils.book_new();

  // Sheet 1: Data Responden
  const wd=[['REKAP HASIL KUIS JANGKA SORONG'],['Dibuat oleh','Teguh Dermawan','NIM','2284240017'],['Diekspor pada',`${tgl}, Pukul ${jam} WIB`],['Total Responden',tot],[]];
  const ch=['No','Nama Lengkap','Angkatan','Kelas / Semester','Institusi / Sekolah','Email','Jumlah Benar','Jumlah Salah','NILAI (0-100)','Tanggal','Jam'];
  SOAL.forEach((_,i)=>ch.push(`S${i+1} Jawaban`)); SOAL.forEach((_,i)=>ch.push(`S${i+1} Status`));
  wd.push(ch);
  sorted.forEach((r,idx)=>{
    const row=[idx+1,r.nama||'',r.angkatan||'-',r.kelas||'-',r.institusi||'-',r.email||'-',r.benar??0,r.salah??0,r.nilai??0,r.tanggal||(r.waktu?r.waktu.split(',')[0]:'-'),r.jam||(r.waktu?r.waktu.split(',')[1]?.trim():'-')];
    SOAL.forEach((s,i)=>{const a=r.jawaban?r.jawaban[i]:null;row.push(a!==null?`${L[a]}. ${s.p[a]}`:'-');});
    SOAL.forEach((s,i)=>{const a=r.jawaban?r.jawaban[i]:null;row.push(a===null?'Tdk Dijawab':a===s.jwb?'BENAR':'SALAH');});
    wd.push(row);
  });
  const ws1=XLSX.utils.aoa_to_sheet(wd);
  ws1['!cols']=[{wch:4},{wch:22},{wch:10},{wch:14},{wch:22},{wch:24},{wch:11},{wch:11},{wch:12},{wch:12},{wch:8},...SOAL.map(()=>({wch:18})),...SOAL.map(()=>({wch:12}))];
  XLSX.utils.book_append_sheet(wb,ws1,'Data Responden');

  // Sheet 2: Statistik
  const ws2d=[['STATISTIK HASIL KUIS JANGKA SORONG'],['Dibuat oleh','Teguh Dermawan','NIM','2284240017'],[],['RINGKASAN NILAI'],['Total Responden',tot],['Rata-rata Nilai',avg],['Nilai Tertinggi',mx],['Nilai Terendah',mn],['Lulus (≥75)',lulus],['Tidak Lulus (<75)',tot-lulus],['% Kelulusan',tot?`${Math.round((lulus/tot)*100)}%`:'0%'],[],['DISTRIBUSI NILAI'],['Rentang','Jumlah','Persentase']];
  [['90–100 (A)',v=>v>=90],['75–89 (B)',v=>v>=75&&v<90],['60–74 (C)',v=>v>=60&&v<75],['40–59 (D)',v=>v>=40&&v<60],['0–39 (E)',v=>v<40]].forEach(([l,fn])=>{const c=vals.filter(fn).length;ws2d.push([l,c,tot?`${Math.round((c/tot)*100)}%`:'0%']);});
  ws2d.push([],['STATISTIK PER SOAL'],['No','Topik','Kunci Jwb','Benar','Salah','% Benar']);
  SOAL.forEach((s,i)=>{const bn=sorted.filter(r=>r.jawaban&&r.jawaban[i]===s.jwb).length;ws2d.push([i+1,topics[i],`${L[s.jwb]}. ${s.p[s.jwb]}`,bn,tot-bn,tot?`${Math.round((bn/tot)*100)}%`:'0%']);});
  const ws2=XLSX.utils.aoa_to_sheet(ws2d); ws2['!cols']=[{wch:4},{wch:28},{wch:32},{wch:8},{wch:8},{wch:10}];
  XLSX.utils.book_append_sheet(wb,ws2,'Statistik');

  // Sheet 3: Grid Jawaban
  const wg=[['DETAIL JAWABAN PER RESPONDEN'],[],['No','Nama','Angkatan','Nilai',...SOAL.map((_,i)=>`S${i+1}`)]];
  sorted.forEach((r,idx)=>{const row=[idx+1,r.nama||'',r.angkatan||'-',r.nilai??0];SOAL.forEach((s,i)=>{const a=r.jawaban?r.jawaban[i]:null;row.push(a!==null?(a===s.jwb?`✓${L[a]}`:`✗${L[a]}`):'-');});wg.push(row);});
  wg.push([],['','','KUNCI','',...SOAL.map(s=>L[s.jwb])]);
  const ws3=XLSX.utils.aoa_to_sheet(wg); ws3['!cols']=[{wch:4},{wch:20},{wch:10},{wch:8},...SOAL.map(()=>({wch:5}))];
  XLSX.utils.book_append_sheet(wb,ws3,'Detail Jawaban');

  const ds=now.toLocaleDateString('id-ID',{day:'2-digit',month:'2-digit',year:'numeric'}).replace(/\//g,'-');
  XLSX.writeFile(wb,`Rekap_Kuis_JangkaSorong_${ds}.xlsx`);
}

// ============================================================
// EXPORT PDF — halaman print dengan desain menarik
// ============================================================
function doExportPDF() {
  const now=new Date();
  const tgl=now.toLocaleDateString('id-ID',{weekday:'long',day:'2-digit',month:'long',year:'numeric'});
  const jam=now.toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'});
  const sorted=[...S.resp].sort((a,b)=>(a.timestamp||0)-(b.timestamp||0));
  const tot=sorted.length;
  const vals=sorted.map(r=>r.nilai||0);
  const avg=tot?Math.round(vals.reduce((a,b)=>a+b,0)/tot):0;
  const mx=tot?Math.max(...vals):0; const mn=tot?Math.min(...vals):0;
  const lulus=sorted.filter(r=>(r.nilai||0)>=75).length;
  const L=['A','B','C','D'];

  const rows=sorted.map((r,i)=>{
    const nc=r.nilai>=75?'#16a34a':r.nilai>=50?'#d97706':'#dc2626';
    return `<tr><td style="text-align:center">${i+1}</td><td><strong>${r.nama||''}</strong></td><td style="text-align:center">${r.angkatan||'-'}</td><td style="text-align:center">${r.kelas||'-'}</td><td>${r.institusi||'-'}</td><td style="text-align:center">${r.benar??0}/12</td><td style="text-align:center;font-weight:700;color:${nc}">${r.nilai??0}</td><td style="text-align:center;font-size:10px">${r.tanggal||'-'}</td></tr>`;
  }).join('');

  const statRows=SOAL.map((s,i)=>{
    const bn=sorted.filter(r=>r.jawaban&&r.jawaban[i]===s.jwb).length;
    const pct=tot?Math.round((bn/tot)*100):0;
    const bc=pct>=75?'#16a34a':pct>=50?'#d97706':'#dc2626';
    return `<tr><td style="text-align:center;font-weight:600">${i+1}</td><td style="font-size:10.5px">${s.teks.substring(0,65)}...</td><td style="text-align:center">${bn}/${tot}</td><td><div style="background:#e5e7eb;border-radius:4px;height:13px;width:100%;position:relative"><div style="background:${bc};border-radius:4px;height:13px;width:${pct}%;position:absolute"></div></div></td><td style="text-align:center;font-weight:700;color:${bc}">${pct}%</td></tr>`;
  }).join('');

  const pctLulus=tot?Math.round((lulus/tot)*100):0;
  const html=`<!DOCTYPE html><html lang="id"><head><meta charset="UTF-8"/><title>Rekap Kuis Jangka Sorong</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Playfair+Display:wght@700;900&display=swap');
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:'DM Sans',sans-serif;color:#1e293b;background:#fff;font-size:11.5px}
  .cover{background:linear-gradient(135deg,#0f172a 0%,#1e3a5f 60%,#0f172a 100%);color:#fff;padding:50px 52px;page-break-after:always;min-height:99vh;display:flex;flex-direction:column;justify-content:space-between}
  .cv-chip{display:inline-block;background:rgba(245,200,66,.12);border:1px solid rgba(245,200,66,.35);color:#f5c842;padding:5px 16px;border-radius:100px;font-size:11px;font-weight:600;letter-spacing:.5px;margin-bottom:36px}
  .cv-label{font-size:10px;color:rgba(245,200,66,.65);letter-spacing:3px;text-transform:uppercase;margin-bottom:12px}
  .cv-title{font-family:'Playfair Display',serif;font-size:62px;font-weight:900;line-height:.9;letter-spacing:-2px}
  .cv-title span{color:#f5c842;display:block}
  .cv-sub{font-size:15px;color:rgba(255,255,255,.45);margin-top:16px;line-height:1.5}
  .cv-line{height:2px;background:linear-gradient(90deg,#f5c842,transparent);width:100px;margin:28px 0}
  .cv-kpi{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:32px}
  .cv-k{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:10px;padding:16px;text-align:center}
  .cv-k-v{font-family:'Playfair Display',serif;font-size:30px;font-weight:900;color:#f5c842;line-height:1}
  .cv-k-l{font-size:9.5px;color:rgba(255,255,255,.4);margin-top:4px;text-transform:uppercase;letter-spacing:.6px}
  .cv-foot{display:flex;justify-content:space-between;border-top:1px solid rgba(255,255,255,.08);padding-top:14px;font-size:10px;color:rgba(255,255,255,.35)}
  .pg{padding:34px 44px;page-break-after:always}.pg:last-child{page-break-after:auto}
  .sh{font-family:'Playfair Display',serif;font-size:18px;font-weight:700;color:#0f172a;margin-bottom:14px;padding-bottom:7px;border-bottom:2px solid #f5c842;display:flex;align-items:center;gap:8px}
  table{width:100%;border-collapse:collapse;font-size:11px;margin-bottom:18px}
  thead tr{background:linear-gradient(90deg,#0f172a,#1e3a5f);color:#fff}
  thead th{padding:8px 9px;text-align:left;font-weight:600;font-size:10px;letter-spacing:.3px}
  tbody tr:nth-child(even){background:#f8fafc}
  tbody td{padding:7px 9px;border-bottom:1px solid #e2e8f0;vertical-align:middle}
  .kg{display:grid;grid-template-columns:repeat(4,1fr);gap:11px;margin-bottom:20px}
  .kk{background:linear-gradient(135deg,#0f172a,#1e293b);color:#fff;border-radius:10px;padding:14px;text-align:center}
  .kk-v{font-family:'Playfair Display',serif;font-size:26px;font-weight:900;color:#f5c842;line-height:1}
  .kk-l{font-size:9px;color:rgba(255,255,255,.45);margin-top:3px;text-transform:uppercase;letter-spacing:.5px}
  .dbar{background:#e2e8f0;border-radius:6px;height:18px;margin:10px 0;overflow:hidden;position:relative}
  .dfill{background:linear-gradient(90deg,#16a34a,#4ade80);height:100%;border-radius:6px;display:flex;align-items:center;padding-left:9px;font-size:10px;font-weight:700;color:#fff;white-space:nowrap;min-width:30px}
  .dist{display:flex;gap:8px;margin-bottom:14px}
  .di{background:#f8fafc;border:1px solid #e2e8f0;border-radius:7px;padding:9px 12px;flex:1;text-align:center}
  .di-v{font-size:20px;font-weight:700;font-family:'Playfair Display',serif}
  .di-l{font-size:9px;color:#64748b;margin-top:2px}
  .foot{text-align:center;color:#94a3b8;font-size:9.5px;padding:12px;border-top:1px solid #e2e8f0;margin-top:16px}
</style>
</head><body>

<div class="cover">
  <div>
    <div class="cv-chip">📐 Fisika · Alat Ukur · Jangka Sorong</div>
    <div class="cv-label">Laporan Hasil Kuis Fisika</div>
    <div class="cv-title">JANGKA<span>SORONG</span></div>
    <div class="cv-sub">Rekap Lengkap Data Responden &amp; Statistik Hasil Kuis</div>
    <div class="cv-line"></div>
  </div>
  <div>
    <div class="cv-kpi">
      <div class="cv-k"><div class="cv-k-v">${tot}</div><div class="cv-k-l">Total Responden</div></div>
      <div class="cv-k"><div class="cv-k-v">${avg}</div><div class="cv-k-l">Rata-rata Nilai</div></div>
      <div class="cv-k"><div class="cv-k-v">${pctLulus}%</div><div class="cv-k-l">Kelulusan</div></div>
      <div class="cv-k"><div class="cv-k-v">${mx}</div><div class="cv-k-l">Nilai Tertinggi</div></div>
    </div>
    <div class="cv-foot">
      <span>👤 Teguh Dermawan · NIM 2284240017</span>
      <span>🗓 Diekspor: ${tgl}, ${jam} WIB</span>
    </div>
  </div>
</div>

<div class="pg">
  <div class="sh"><span>👥</span> Data Responden</div>
  <table>
    <thead><tr><th>#</th><th>Nama Lengkap</th><th>Angkatan</th><th>Kelas</th><th>Institusi</th><th>Benar</th><th>Nilai</th><th>Tanggal</th></tr></thead>
    <tbody>${rows||'<tr><td colspan="8" style="text-align:center;padding:20px;color:#94a3b8">Belum ada data</td></tr>'}</tbody>
  </table>
</div>

<div class="pg">
  <div class="sh"><span>📊</span> Statistik Hasil</div>
  <div class="kg">
    <div class="kk"><div class="kk-v">${tot}</div><div class="kk-l">Responden</div></div>
    <div class="kk"><div class="kk-v">${avg}</div><div class="kk-l">Rata-rata</div></div>
    <div class="kk"><div class="kk-v">${mx}</div><div class="kk-l">Tertinggi</div></div>
    <div class="kk"><div class="kk-v">${mn}</div><div class="kk-l">Terendah</div></div>
  </div>
  <div class="sh" style="font-size:14px;margin-top:4px"><span>🎯</span> Kelulusan (Nilai ≥ 75)</div>
  <div class="dbar"><div class="dfill" style="width:${pctLulus}%">${lulus} Lulus (${pctLulus}%)</div></div>
  <div class="dist">
    ${[['90–100','A','#16a34a',vals.filter(v=>v>=90).length],['75–89','B','#2563eb',vals.filter(v=>v>=75&&v<90).length],['60–74','C','#d97706',vals.filter(v=>v>=60&&v<75).length],['40–59','D','#ea580c',vals.filter(v=>v>=40&&v<60).length],['0–39','E','#dc2626',vals.filter(v=>v<40).length]].map(([r,g,c,n])=>`<div class="di"><div class="di-v" style="color:${c}">${n}</div><div class="di-l">${r} (${g})</div></div>`).join('')}
  </div>
  <div class="sh" style="font-size:14px"><span>📈</span> Statistik Per Soal</div>
  <table>
    <thead><tr><th>#</th><th>Pertanyaan</th><th>Benar</th><th style="width:160px">Progress</th><th>%</th></tr></thead>
    <tbody>${statRows}</tbody>
  </table>
  <div class="foot">© Teguh Dermawan · NIM 2284240017 · Kuis Jangka Sorong · Dicetak ${tgl}</div>
</div>

</body></html>`;

  const w=window.open('','_blank','width=900,height=700');
  w.document.write(html); w.document.close();
  w.onload=()=>{ setTimeout(()=>{w.focus();w.print();},800); };
}

// ============================================================
// EXPORT WORD (.doc)
// ============================================================
function doExportWord() {
  const now=new Date();
  const tgl=now.toLocaleDateString('id-ID',{weekday:'long',day:'2-digit',month:'long',year:'numeric'});
  const jam=now.toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'});
  const sorted=[...S.resp].sort((a,b)=>(a.timestamp||0)-(b.timestamp||0));
  const tot=sorted.length;
  const vals=sorted.map(r=>r.nilai||0);
  const avg=tot?Math.round(vals.reduce((a,b)=>a+b,0)/tot):0;
  const mx=tot?Math.max(...vals):0; const mn=tot?Math.min(...vals):0;
  const lulus=sorted.filter(r=>(r.nilai||0)>=75).length;
  const L=['A','B','C','D'];
  const topics=['Definisi Jangka Sorong','Bagian Skala Nonius','Fungsi Rahang Bawah','Fungsi Rahang Atas','Batang Pengukur Kedalaman','Fungsi Sekrup Pengunci','Ketelitian Standar','Penemu Jangka Sorong','Nama Lain Skala Nonius','Keunggulan vs Mistar','Satuan Jangka Sorong','Cara Baca Skala'];

  const rr=sorted.map((r,i)=>{
    const nc=r.nilai>=75?'#16a34a':r.nilai>=50?'#d97706':'#dc2626';
    return `<tr><td align="center">${i+1}</td><td><b>${r.nama||''}</b></td><td align="center">${r.angkatan||'-'}</td><td align="center">${r.kelas||'-'}</td><td>${r.institusi||'-'}</td><td>${r.email||'-'}</td><td align="center">${r.benar??0}</td><td align="center">${r.salah??0}</td><td align="center"><b><font color="${nc}">${r.nilai??0}</font></b></td><td align="center">${r.tanggal||'-'}</td></tr>`;
  }).join('');

  const sr=SOAL.map((s,i)=>{
    const bn=sorted.filter(r=>r.jawaban&&r.jawaban[i]===s.jwb).length;
    const pct=tot?Math.round((bn/tot)*100):0;
    const nc=pct>=75?'#16a34a':pct>=50?'#d97706':'#dc2626';
    return `<tr><td align="center">${i+1}</td><td>${topics[i]}</td><td style="font-size:10pt">${s.teks}</td><td>${L[s.jwb]}. ${s.p[s.jwb]}</td><td align="center">${bn}</td><td align="center">${tot-bn}</td><td align="center"><b><font color="${nc}">${pct}%</font></b></td></tr>`;
  }).join('');

  const jr=sorted.map((r,i)=>{
    const cells=SOAL.map((s,j)=>{const a=r.jawaban?r.jawaban[j]:null;const ok=a===s.jwb;return `<td align="center"><font color="${ok?'#16a34a':'#dc2626'}"><b>${a!==null?(ok?'✓':'✗')+L[a]:'-'}</b></font></td>`;}).join('');
    return `<tr><td align="center">${i+1}</td><td><b>${r.nama||''}</b></td><td align="center">${r.angkatan||'-'}</td><td align="center"><b><font color="${r.nilai>=75?'#16a34a':'#dc2626'}">${r.nilai??0}</font></b></td>${cells}</tr>`;
  }).join('');

  const doc=`<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
<head><meta charset="UTF-8"/>
<meta name=ProgId content=Word.Document>
<!--[if gte mso 9]><xml><w:WordDocument><w:View>Print</w:View></w:WordDocument></xml><![endif]-->
<style>
  @page{margin:2cm 2.5cm;size:A4}
  body{font-family:'Calibri',sans-serif;font-size:11pt;color:#1e293b;line-height:1.5}
  h1{font-family:'Georgia',serif;font-size:24pt;color:#0f172a;text-align:center;margin:0 0 4pt}
  h2{font-family:'Georgia',serif;font-size:14pt;color:#0f172a;margin:16pt 0 7pt;border-bottom:2pt solid #f5c842;padding-bottom:4pt}
  .cover{background:#0f172a;color:#fff;padding:22pt 28pt;margin-bottom:16pt;text-align:center}
  .ct{font-size:26pt;font-weight:bold;color:#f5c842;font-family:'Georgia',serif;line-height:1.1}
  .cs{font-size:11pt;color:rgba(255,255,255,.6);margin-top:6pt}
  .info td{padding:3pt 10pt;border-bottom:1pt solid #f1f5f9;font-size:10.5pt}
  .info td:first-child{color:#64748b;white-space:nowrap;width:130pt}
  table{width:100%;border-collapse:collapse;font-size:10.5pt;margin-bottom:12pt}
  th{background:#0f172a;color:#fff;padding:7pt 8pt;text-align:left;font-weight:600;font-size:10pt}
  tr:nth-child(even) td{background:#f8fafc}
  td{padding:6pt 8pt;border-bottom:1pt solid #e2e8f0}
  .pb{page-break-before:always}
  .foot{text-align:center;color:#94a3b8;font-size:9pt;margin-top:18pt;border-top:1pt solid #e2e8f0;padding-top:7pt}
</style></head><body>

<div class="cover">
  <div style="font-size:9pt;color:rgba(255,255,255,.4);letter-spacing:2pt;text-transform:uppercase;margin-bottom:8pt">REKAP HASIL KUIS FISIKA</div>
  <div class="ct">📐 JANGKA SORONG</div>
  <div class="cs">Laporan Lengkap Data Responden &amp; Statistik Hasil Kuis</div>
</div>

<table class="info" style="width:auto;margin-bottom:16pt">
  <tr><td>Dibuat oleh</td><td><b>Teguh Dermawan</b></td></tr>
  <tr><td>NIM</td><td>2284240017</td></tr>
  <tr><td>Diekspor pada</td><td>${tgl}, Pukul ${jam} WIB</td></tr>
  <tr><td>Total Responden</td><td><b>${tot} orang</b></td></tr>
</table>

<h2>📊 Ringkasan Statistik</h2>
<table><thead><tr><th>Indikator</th><th>Nilai</th><th>Keterangan</th></tr></thead><tbody>
  <tr><td>Total Responden</td><td><b>${tot}</b></td><td>orang mengerjakan kuis</td></tr>
  <tr><td>Rata-rata Nilai</td><td><b>${avg}</b></td><td>dari nilai maksimal 100</td></tr>
  <tr><td>Nilai Tertinggi</td><td><b><font color="#16a34a">${mx}</font></b></td><td>—</td></tr>
  <tr><td>Nilai Terendah</td><td><b><font color="#dc2626">${mn}</font></b></td><td>—</td></tr>
  <tr><td>Lulus (≥ 75)</td><td><b>${lulus} orang</b></td><td>${tot?Math.round((lulus/tot)*100):0}% dari total</td></tr>
  <tr><td>Tidak Lulus (&lt; 75)</td><td><b>${tot-lulus} orang</b></td><td>—</td></tr>
</tbody></table>

<h2>📋 Distribusi Nilai</h2>
<table><thead><tr><th>Rentang Nilai</th><th>Grade</th><th>Jumlah Siswa</th><th>Persentase</th></tr></thead><tbody>
  ${[['90–100','A',vals.filter(v=>v>=90).length],['75–89','B',vals.filter(v=>v>=75&&v<90).length],['60–74','C',vals.filter(v=>v>=60&&v<75).length],['40–59','D',vals.filter(v=>v>=40&&v<60).length],['0–39','E',vals.filter(v=>v<40).length]].map(([r,g,n])=>`<tr><td>${r}</td><td><b>${g}</b></td><td>${n} orang</td><td>${tot?Math.round((n/tot)*100):0}%</td></tr>`).join('')}
</tbody></table>

<div class="pb"></div>
<h2>👥 Data Responden</h2>
<table><thead><tr><th>#</th><th>Nama Lengkap</th><th>Angkatan</th><th>Kelas</th><th>Institusi</th><th>Email</th><th>Benar</th><th>Salah</th><th>Nilai</th><th>Tanggal</th></tr></thead>
<tbody>${rr||'<tr><td colspan="10" align="center">Belum ada data</td></tr>'}</tbody></table>

<div class="pb"></div>
<h2>📈 Statistik Per Soal</h2>
<table><thead><tr><th>#</th><th>Topik</th><th>Pertanyaan</th><th>Kunci Jawaban</th><th>Benar</th><th>Salah</th><th>% Benar</th></tr></thead>
<tbody>${sr}</tbody></table>

<div class="pb"></div>
<h2>🔲 Detail Jawaban (Grid)</h2>
<p style="font-size:9.5pt;color:#64748b;margin-bottom:8pt">✓ = Benar &nbsp; ✗ = Salah &nbsp; Huruf = pilihan jawaban (A/B/C/D)</p>
<table><thead><tr><th>#</th><th>Nama</th><th>Angkatan</th><th>Nilai</th>${SOAL.map((_,i)=>`<th>S${i+1}</th>`).join('')}</tr></thead>
<tbody>
  ${jr}
  <tr style="background:#0f172a"><td colspan="4" align="right"><b><font color="#fff">KUNCI →</font></b></td>${SOAL.map(s=>`<td align="center"><b><font color="#f5c842">${L[s.jwb]}</font></b></td>`).join('')}</tr>
</tbody></table>

<div class="foot">© Teguh Dermawan · NIM 2284240017 · Kuis Jangka Sorong · Dicetak ${tgl}</div>
</body></html>`;

  const blob=new Blob(['\ufeff'+doc],{type:'application/msword;charset=utf-8'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  const ds=now.toLocaleDateString('id-ID',{day:'2-digit',month:'2-digit',year:'numeric'}).replace(/\//g,'-');
  a.download=`Rekap_Kuis_JangkaSorong_${ds}.doc`;
  a.click();
}
