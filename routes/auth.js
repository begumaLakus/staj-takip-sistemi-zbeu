// routes/auth.js
require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// ✅ DEBUG: JWT_SECRET çıktısını kontrol et
console.log('JWT_SECRET:', process.env.JWT_SECRET);

// Kullanıcı Kayıt
router.post('/register', async (req, res) => {
  const { email, password, student_number, role, first_name, last_name } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'Bu email zaten kayıtlı.' });
    }

    user = new User({
      email,
      password,
      student_number,
      role,
      first_name,
      last_name
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    res.status(201).json({
      msg: 'Kullanıcı başarıyla kaydedildi.',
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
        first_name: user.first_name,
        last_name: user.last_name
      }
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Kullanıcı Giriş
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Geçersiz email veya şifre.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Geçersiz email veya şifre.' });
    }

    const payload = {
      user: {
        id: user._id,
        role: user.role
      }
    };

    // ✅ DEBUG: Token üretimi öncesi kontrol
    console.log("Token oluşturuluyor, payload:", payload);

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({
      msg: 'Giriş başarılı.',
      token,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
        first_name: user.first_name,
        last_name: user.last_name
      }
    });
  } catch (err) {
    console.error("Token oluşturma hatası:", err.message);
    res.status(500).send('Server Error');
  }
});

// Amir Kullanıcıyı Silme
router.delete('/employer/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ msg: 'Kullanıcı bulunamadı.' });
    }

    if (user.role !== 'employer') {
      return res.status(400).json({ msg: 'Bu kullanıcı bir amir değil, silinemez.' });
    }

    await user.deleteOne();
    res.status(200).json({ msg: 'Amir kullanıcı başarıyla silindi.' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;