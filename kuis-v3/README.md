# 📐 Kuis Jangka Sorong v3 — Firebase Edition

**Dibuat oleh:** Teguh Dermawan | **NIM:** 2284240017

---

## ✨ Update Versi Ini
- ✅ **Field Angkatan** ditambahkan (wajib diisi)
- ✅ **Export Excel rapi** — berurutan, ada header judul, statistik nilai & per soal
- ✅ **Gambar soal SVG realistis** — jangka sorong detail dengan gradien metalik
- ✅ Admin tabel tampilkan kolom Angkatan

---

## 🚀 Setup Firebase (6 Langkah)

### 1. Buat Project
→ [console.firebase.google.com](https://console.firebase.google.com) → Add project → Create

### 2. Realtime Database
→ Build → Realtime Database → Create → **asia-southeast1** → **Test mode**

### 3. Ambil Config
→ Project Settings ⚙️ → Your apps → `</>` → Register → copy `firebaseConfig`

### 4. Edit `index.html`
Cari blok `firebaseConfig` → ganti `GANTI_API_KEY` dst. dengan config asli

### 5. Rules
Firebase → Realtime Database → Rules → paste:
```json
{
  "rules": {
    "responden": { ".read": true, ".write": true }
  }
}
```
Klik **Publish**

### 6. GitHub Pages
Upload 3 file → Settings → Pages → main/root → Save

---

## 🔐 Admin
| | |
|--|--|
| Username | `admin` |
| Password | `teguh2024` |

---

## 📊 Format Excel Export
- Judul & info pembuat di baris atas
- Kolom: No, Nama, **Angkatan**, Kelas, Institusi, Email, Benar, Salah, Nilai, Tanggal, Jam
- Kolom jawaban per soal (huruf + teks jawaban)
- Kolom status per soal (BENAR / SALAH)
- Statistik nilai (rata-rata, tertinggi, terendah, % lulus)
- Statistik per soal (% benar tiap soal)

*© Teguh Dermawan — NIM 2284240017*
