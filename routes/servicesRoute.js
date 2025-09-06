const express = require('express');
const router = express.Router();
const ServicesCtrls = require('../controllers/servicesCtrls');

// Route for home page
router.get('/', ServicesCtrls.getServicesPage);

module.exports = router;
