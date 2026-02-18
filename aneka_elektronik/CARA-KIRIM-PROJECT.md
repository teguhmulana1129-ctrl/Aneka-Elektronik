# ⚠️ PENTING: File yang TIDAK Perlu Dikirim

Jangan kirim folder/file berikut (sudah terlalu besar dan tidak perlu):

## ❌ JANGAN KIRIM:
- `node_modules/` - Folder dependencies (bisa di-install ulang dengan `npm install`)
- `dist/` - Folder build result (akan di-generate ulang)
- `.DS_Store` - File system macOS
- `Thumbs.db` - File system Windows

## ✅ YANG PERLU DIKIRIM:
- `src/` - Source code
- `public/` - Static assets
- `package.json` - List dependencies
- `package-lock.json` - Lock file dependencies
- `vite.config.js` - Vite configuration
- `index.html` - Entry HTML
- `.gitignore` - Git ignore rules
- `README-UNTUK-BACKEND.md` - Dokumentasi

## 📦 Cara Compress yang Benar:

### Windows (Manual):
1. Buka folder `aneka_elektronik`
2. **HAPUS folder `node_modules` dan `dist` dulu** (jika ada)
3. Select semua file/folder yang tersisa
4. Klik kanan → "Send to" → "Compressed (zipped) folder"
5. Rename menjadi `aneka-elektronik-frontend.zip`

### Atau pakai Command (PowerShell):
```powershell
# Pindah ke folder project
cd C:\Users\LENOVO\Desktop\aneka-elektronik

# Compress tanpa node_modules
Compress-Archive -Path aneka_elektronik\* -DestinationPath aneka-elektronik-frontend.zip -Force -CompressionLevel Optimal
```

## 📤 Cara Kirim ke Teman:

### Option 1: Google Drive (RECOMMENDED)
1. Upload `aneka-elektronik-frontend.zip` ke Google Drive
2. Klik kanan → "Get link" → "Anyone with the link"
3. Copy link dan kirim ke teman

### Option 2: WeTransfer (Gratis, Mudah)
1. Buka https://wetransfer.com
2. Upload file ZIP
3. Masukkan email teman
4. Klik "Transfer"

### Option 3: Dropbox
1. Upload ke Dropbox
2. Share link

### Option 4: OneDrive (Jika punya Microsoft Account)
1. Upload ke OneDrive
2. Share link

## 📏 Ukuran File:
- **Dengan node_modules**: ~300-500 MB ❌ (TERLALU BESAR!)
- **Tanpa node_modules**: ~5-10 MB ✅ (PERFECT!)

## 🔄 Cara Teman Menggunakan:

1. Download & Extract ZIP
2. Buka terminal/command prompt
3. Masuk ke folder project:
   ```bash
   cd aneka-elektronik-frontend
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Jalankan development server:
   ```bash
   npm run dev
   ```

## 💡 Tips:
- Pastikan teman sudah install **Node.js** (versi 16 atau lebih baru)
- Jika ada error, suruh teman hapus `node_modules` dan `package-lock.json`, lalu `npm install` lagi
