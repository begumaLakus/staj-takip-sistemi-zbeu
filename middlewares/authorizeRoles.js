const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
      const userRole = req.user.role;
  
      if (!allowedRoles.includes(userRole)) {
        return res.status(403).json({ msg: 'Bu işlemi yapma yetkiniz yok.' });
      }
  
      next();
    };
  };
  
  module.exports = authorizeRoles;
  