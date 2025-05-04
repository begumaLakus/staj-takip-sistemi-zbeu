require('dotenv').config(); //Bu satır .env dosyasını okuyup process.env içine yerleştirir.
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const internshipRoutes = require('./routes/internships');
const cors = require('cors');
const path = require('path');

const app = express(); // ← app burada tanımlanmalı (önemli)

// MongoDB bağlantısı
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Statik dosyalar (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Geliştirme sırasında gelen isteği logla
app.use((req, res, next) => {
  console.log(`İstek geldi: ${req.method} ${req.url}`);
  next();
});

// API Rotaları
app.use('/api', authRoutes);
app.use('/api', internshipRoutes);

// Ana sayfa olarak login-register.html'i göster
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login-register.html'));
});

// Sunucuyu başlat
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Sunucu ${PORT} portunda çalışıyor...`));
