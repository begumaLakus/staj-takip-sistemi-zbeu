const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://gregorsamsaa67:Parlayanyildizler67@cluster0.d7jf4xs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log('✅ MongoDB bağlantısı başarılı');
  } catch (err) {
    console.error('❌ MongoDB bağlantı hatası:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
