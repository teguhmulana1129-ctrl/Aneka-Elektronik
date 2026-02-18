# Aneka Elektronik - Website Project

## 📋 Informasi Project

Website service elektronik dengan fitur:
- Landing page modern dengan dark theme (Deep Marine Blue)
- Service listing dengan detail pages
- Contact form terintegrasi WhatsApp
- Responsive design
- Scroll animations

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 + Vite
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Styling**: Vanilla CSS dengan CSS Variables
- **Build Tool**: Vite

## 📦 Cara Setup Project

### 1. Install Dependencies
```bash
npm install
```

### 2. Jalankan Development Server
```bash
npm run dev
```

Website akan berjalan di: `http://localhost:5173`

### 3. Build untuk Production
```bash
npm run build
```

File production akan ada di folder `dist/`

## 📁 Struktur Folder

```
aneka_elektronik/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, logo
│   ├── components/     # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Footer.jsx
│   │   └── ...
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   └── ServiceDetail.jsx
│   ├── data/           # Data files
│   │   └── services.js
│   ├── hooks/          # Custom hooks
│   │   └── useScrollReveal.js
│   ├── App.jsx         # Main app component
│   ├── App.css         # Main styles
│   └── index.css       # Global styles
├── package.json
└── vite.config.js
```

## 🎨 Color Palette

- **Primary (Deep Marine)**: `#0B2545`
- **Secondary (Tech Cyan)**: `#2D9CDB`
- **Accent (Electric Amber)**: `#F2C94C`
- **Background**: `#0B2545`
- **Text Main**: `#FFFFFF`

## 🔗 Integrasi Backend (Untuk Chatbot)

### Rencana Integrasi:

1. **API Endpoint** yang dibutuhkan:
   - `POST /api/chat` - Untuk chatbot messages
   - `GET /api/chat/history` - Untuk chat history (optional)

2. **Lokasi untuk Chatbot Component**:
   - Buat folder baru: `src/components/Chatbot/`
   - Component utama: `ChatWidget.jsx`
   - Styling: `Chatbot.css`

3. **State Management**:
   - Bisa pakai React Context atau Redux (jika kompleks)
   - Untuk simple chatbot, useState + useEffect sudah cukup

4. **Contoh Struktur Chatbot**:
```jsx
// src/components/Chatbot/ChatWidget.jsx
import React, { useState } from 'react';

const ChatWidget = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    // Kirim ke backend API
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input })
    });
    const data = await response.json();
    // Update messages
  };

  return (
    // Chatbot UI
  );
};
```

## 📞 Contact Form Integration

Saat ini contact form menggunakan WhatsApp redirect.
File: `src/components/Contact.jsx`

Jika ingin integrasi dengan backend:
- Ubah `handleWhatsAppSubmit` function
- Tambahkan API call ke backend
- Simpan data ke database

## 🚀 Deployment

### Option 1: Vercel (Recommended untuk React)
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify
```bash
npm run build
# Upload folder dist/ ke Netlify
```

### Option 3: Traditional Hosting
```bash
npm run build
# Upload folder dist/ ke hosting via FTP
```

## 📝 Notes untuk Backend Developer

1. **CORS**: Pastikan backend mengizinkan request dari domain frontend
2. **Environment Variables**: 
   - Buat file `.env` untuk API URL
   - Contoh: `VITE_API_URL=http://localhost:3000`
3. **API Response Format**: 
   - Gunakan format JSON yang konsisten
   - Include error handling

## 🔧 Troubleshooting

### Port sudah digunakan
```bash
# Ubah port di vite.config.js
export default {
  server: {
    port: 3000
  }
}
```

### Dependencies error
```bash
# Hapus node_modules dan install ulang
rm -rf node_modules package-lock.json
npm install
```

## 📧 Contact

Untuk pertanyaan lebih lanjut, hubungi developer frontend.

---
**Last Updated**: 19 Januari 2026
