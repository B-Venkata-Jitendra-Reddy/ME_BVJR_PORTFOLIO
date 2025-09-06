const express = require('express');
const router = express.Router();
const aboutCtrls = require('../controllers/aboutCtrls');

// Route for home page
router.get('/', aboutCtrls.getAboutPage);

module.exports = router;
