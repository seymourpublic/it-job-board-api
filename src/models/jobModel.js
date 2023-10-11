const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  description: String,
  logoUrl: String, 
  closingDate: Date, 
  emailAddress: String, 
});

module.exports = mongoose.model('Job', jobSchema);