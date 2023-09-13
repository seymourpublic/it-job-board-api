const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  description: String,
  logoUrl: String, // Add a field for the company logo URL
  closingDate: Date, // Add a field for the closing date
  emailAddress: String, // Add a field for the email address
});

module.exports = mongoose.model('Job', jobSchema);