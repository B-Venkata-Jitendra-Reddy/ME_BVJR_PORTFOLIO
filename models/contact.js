// const mongoose = require('mongoose');

// const contactSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'Name is required'],
//     trim: true,
//   },
//   email: {
//     type: String,
//     required: [true, 'Email is required'],
//     match: [
//     /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//     'Please enter a valid email address',
//     ],
//   },
//   number: {
//   type: String,
//   required: [true, 'Phone number is required'],
//   match: [/^\d{10}$/, 'Phone number must be exactly 10 digits'],
//   },
//   subject: {
//     type: String,
//     required: [true, 'Subject is required'],
//   },
//   message: {
//     type: String,
//     required: [true, 'Message is required'],
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// module.exports = mongoose.model('Contact', contactSchema);

const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  number: String,
  subject: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('contact', contactSchema);

