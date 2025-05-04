const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  student_number: {
    type: String
    // Sadece öğrenciler için kullanılacak, employer ve advisor için boş kalacak
  },
  role: {
    type: String,
    enum: ['student', 'advisor', 'employer'], 
    required: true
  },
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  company_name: {
    type: String
    // Employer (amir) için şirket adı olacak
  },
  assigned_student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
    // Amir hangi öğrenciden sorumluysa onun ID'sini burada tutacağız
  }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
