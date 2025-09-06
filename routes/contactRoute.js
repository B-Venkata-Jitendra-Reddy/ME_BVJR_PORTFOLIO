const express = require('express');
const router = express.Router();
const contactCtrl = require('../controllers/contactCtrl');

// Show page
router.get('/', contactCtrl.getContactPage);

// Handle form
router.post('/', contactCtrl.submitContactForm);

module.exports = router;
