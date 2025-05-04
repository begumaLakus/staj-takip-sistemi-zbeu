const express = require('express');
const router = express.Router();
const Internship = require('../models/Internship');
const authorizeRoles = require('../middlewares/authorizeRoles');
const authMiddleware = require('../middlewares/authMiddleware');


// Staj Başlat (Create Internship)
router.post('/internships', async (req, res) => {
  const { user_id, company_name, start_date, end_date } = req.body;

  try {
    const internship = new Internship({
      user_id,
      company_name,
      start_date,
      end_date
    });

    await internship.save();

    res.status(201).json({ msg: 'Staj başarıyla başlatıldı.', internship });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Staj Detayını Getir (View Internship)
router.get('/internships/:id', async (req, res) => {
    try {
      const internship = await Internship.findById(req.params.id);
  
      if (!internship) {
        return res.status(404).json({ msg: 'Staj kaydı bulunamadı.' });
      }
  
      res.status(200).json(internship);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });
  // Amir Stajı Onaylar (Employer Approval)
  router.patch(
    '/internships/:id/employer-approval',
    authMiddleware,                // → Token kontrolü
    authorizeRoles('employer'),   // → Sadece amir (employer) erişebilir
    async (req, res) => {
      try {
        const internship = await Internship.findById(req.params.id);
  
        if (!internship) {
          return res.status(404).json({ msg: 'Staj kaydı bulunamadı.' });
        }
  
        internship.employer_approval = true; // Onay veriyoruz
        await internship.save();
  
        res.status(200).json({ msg: 'Amir stajı onayladı.', internship });
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );
  
  
module.exports = router;
