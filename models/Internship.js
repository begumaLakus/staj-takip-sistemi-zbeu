const mongoose = require('mongoose');

const InternshipSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  company_name: {
    type: String,
    required: true
  },
  start_date: {
    type: Date,
    required: true
  },
  end_date: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['active', 'completed'],
    default: 'active'
  },
  employer_approval: {
    type: Boolean,
    default: false
  },
  advisor_approval: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model('Internship', InternshipSchema);
