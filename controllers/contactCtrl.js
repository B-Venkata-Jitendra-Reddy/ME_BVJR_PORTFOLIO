const contact = require('../models/contact');

// Show Contact Page
exports.getContactPage = (req, res) => {
  res.render('contact', {
    page: 'Contact',
    success_msg: req.flash('success_msg'),
    error_msg: req.flash('error_msg'),
  });
};

// exports.submitContactForm = async (req, res) => {
//   try {
//     const { name, email, number, subject, message } = req.body;

//     Server-side validation
//     if (!name || !email || !number || !subject || !message) {
//       req.flash('error_msg', 'All fields are required.');
//       return res.status(400).json({ error: 'All fields are required.' });
//     }

//     const newContact = new contact({
//       name,
//       email,
//       number,
//       subject,
//       message,
//     });

//     await newContact.save();

//     res.status(200).json({ success: true, message: 'Message sent successfully!' });
//      res.redirect('/contact'); ✅ redirect after saving
//   } catch (error) {
//     console.error('Contact form error:', error);
//     res.status(500).json({ error: 'Server error. Please try again later.' });
//   }
// };


// Handle Form Submission
exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, number, subject, message } = req.body;

    // Validation
    if (!name || !email || !number || !subject || !message) {
      req.flash('error_msg', 'All fields are required.');
      return res.redirect('/contact');
    }

    const newContact = new contact({
      name,
      email,
      number,
      subject,
      message,
    });

    await newContact.save();

    req.flash('success_msg', 'Message sent successfully!');
    res.redirect('/contact');
  } catch (error) {
    console.error('Contact form error:', error);
    req.flash('error_msg', 'Server error. Please try again later.');
    res.redirect('/contact');
  }
};