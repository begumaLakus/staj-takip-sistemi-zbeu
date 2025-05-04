const mongoose = require('mongoose');

const DailyReportSchema = new mongoose.Schema({
  internship_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Internship',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('DailyReport', DailyReportSchema);
