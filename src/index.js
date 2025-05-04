const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Staj Takip Sistemi Başladı 🚀');
});

app.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor`);
});
