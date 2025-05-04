const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ msg: 'Yetkilendirme reddedildi, token yok.' });
  }

  const token = authHeader.split(' ')[1]; // "Bearer TOKEN" → TOKEN kısmını alıyoruz

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user; // { id: ..., role: ... }
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ msg: 'Geçersiz token.' });
  }
};

module.exports = authMiddleware;
