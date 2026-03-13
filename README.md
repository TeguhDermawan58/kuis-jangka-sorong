# 📐 Kuis Jangka Sorong — Firebase Edition

**Website kuis interaktif dengan database Firebase real-time**  
Data dari semua device/responden terkumpul di satu tempat!

> **Dibuat oleh:** Teguh Dermawan | **NIM:** 2284240017

---

## ✅ Keunggulan Versi Firebase

| Fitur | localStorage (lama) | Firebase (baru) |
|-------|---------------------|-----------------|
| Data dari banyak device | ❌ Tidak bisa | ✅ Bisa |
| Data terkumpul di satu tempat | ❌ | ✅ |
| Real-time update | ❌ | ✅ |
| Admin bisa lihat semua | ❌ | ✅ |
| Gratis | ✅ | ✅ |

---

## 🚀 Cara Setup (Ikuti Urutan!)

### LANGKAH 1 — Buat Project Firebase

1. Buka **[console.firebase.google.com](https://console.firebase.google.com)**
2. Login dengan akun Google
3. Klik **"Add project"** (Tambahkan project)
4. Nama project: `kuis-jangka-sorong` (bebas)
5. Google Analytics → boleh dimatikan → klik **"Create project"**
6. Tunggu sebentar → klik **"Continue"**

---

### LANGKAH 2 — Aktifkan Realtime Database

1. Di sidebar kiri → klik **"Build"** → **"Realtime Database"**
2. Klik **"Create Database"**
3. Pilih lokasi: **`asia-southeast1 (Singapore)`** ← penting untuk koneksi cepat!
4. Security rules → pilih **"Start in test mode"**
5. Klik **"Enable"**

---

### LANGKAH 3 — Daftarkan Web App & Ambil Config

1. Pergi ke **Project Settings** (klik ikon ⚙️ di sidebar kiri)
2. Scroll ke bawah → bagian **"Your apps"**
3. Klik ikon **`</>`** (Web)
4. Nickname app: `kuis-web` → klik **"Register app"**
5. Akan muncul kode seperti ini — **COPY semua isinya:**

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "kuis-jangka-sorong.firebaseapp.com",
  databaseURL: "https://kuis-jangka-sorong-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kuis-jangka-sorong",
  storageBucket: "kuis-jangka-sorong.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

---

### LANGKAH 4 — Edit file `index.html`

Buka file `index.html` dengan teks editor (Notepad, VS Code, dll.)

Cari bagian ini (sekitar baris 16–26):

```javascript
const firebaseConfig = {
  apiKey: "GANTI_API_KEY",
  authDomain: "GANTI_AUTH_DOMAIN",
  databaseURL: "GANTI_DATABASE_URL",
  projectId: "GANTI_PROJECT_ID",
  storageBucket: "GANTI_STORAGE_BUCKET",
  messagingSenderId: "GANTI_MESSAGING_SENDER_ID",
  appId: "GANTI_APP_ID"
};
```

**Ganti seluruh blok itu** dengan config yang kamu copy dari Firebase. Simpan file.

---

### LANGKAH 5 — Atur Rules Database

1. Di Firebase Console → **Realtime Database** → tab **"Rules"**
2. Hapus semua isi rules yang ada
3. Paste rules berikut:

```json
{
  "rules": {
    "responden": {
      ".read": true,
      ".write": true
    }
  }
}
```

4. Klik **"Publish"**

> ⚠️ Rules ini membolehkan siapa saja read/write ke path `responden`.  
> Untuk keamanan lebih, kamu bisa batasi setelah kuis selesai.

---

### LANGKAH 6 — Upload ke GitHub & Aktifkan Pages

#### A. Buat Repository GitHub
1. Login ke [github.com](https://github.com)
2. Klik **"New repository"**
3. Nama: `kuis-jangka-sorong`
4. Visibility: **Public**
5. Klik **"Create repository"**

#### B. Upload File
1. Klik **"uploading an existing file"**
2. Upload ketiga file:
   - `index.html` ← yang sudah diedit config Firebase-nya!
   - `style.css`
   - `app.js`
3. Commit message: `"Kuis Jangka Sorong - Firebase Edition"`
4. Klik **"Commit changes"**

#### C. Aktifkan GitHub Pages
1. Klik tab **"Settings"**
2. Sidebar kiri → **"Pages"**
3. Source: **"Deploy from a branch"**
4. Branch: **`main`** → folder: **`/ (root)`**
5. Klik **"Save"**
6. Tunggu 1–3 menit
7. Link website muncul: `https://[username].github.io/kuis-jangka-sorong/`

---

## 🔐 Akses Admin

| | |
|--|--|
| **Username** | `admin` |
| **Password** | `teguh2024` |

Klik tombol **🔐 Admin** di halaman utama.

**Untuk ganti password**, edit baris ini di `app.js`:
```javascript
const ADMIN_PASS = "teguh2024"; // Ganti sesuai keinginan
```

---

## 📊 Fitur Lengkap

### Untuk Responden
- Form identitas (nama, kelas, institusi, email)
- 12 soal pilihan ganda + diagram SVG
- Timer 30 menit
- Hasil langsung + animasi donut chart
- Review jawaban

### Untuk Admin
- **Dashboard** — KPI: total, rata-rata, tertinggi, hari ini
- **Data Responden** — tabel live + search/filter
- **Statistik Soal** — % benar tiap soal
- **Export Excel** — file CSV dengan detail jawaban semua soal
- **Hapus Data** — clear semua dari Firebase

---

## 📁 Struktur File

```
kuis-jangka-sorong/
├── index.html   ← HTML + Firebase SDK config
├── style.css    ← Semua styling
├── app.js       ← Logic kuis, admin, export
└── README.md    ← Panduan ini
```

---

## ❓ Troubleshooting

**Website muncul "Setup Firebase Diperlukan"**  
→ Berarti config Firebase di `index.html` belum diisi. Ulangi Langkah 3-4.

**Data tidak masuk ke Firebase**  
→ Cek Rules database (Langkah 5). Pastikan mode "test mode" atau rules sudah benar.

**Admin tidak bisa melihat data orang lain**  
→ Pastikan semua orang mengakses URL yang sama (GitHub Pages). Bukan file lokal!

**Export Excel tidak bisa dibuka di Excel**  
→ Saat buka di Excel, pilih delimiter **Titik Koma (;)** bukan koma.

---

*© 2024 Teguh Dermawan — NIM 2284240017*  
*Dibuat dengan Firebase Realtime Database + GitHub Pages*
