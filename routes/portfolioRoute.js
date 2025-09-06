const express = require('express');
const router = express.Router();
const portfolioCtrls = require('../controllers/portfolioCtrls');

// Route for home page
router.get('/', portfolioCtrls.getPortfolioPage);

module.exports = router;
