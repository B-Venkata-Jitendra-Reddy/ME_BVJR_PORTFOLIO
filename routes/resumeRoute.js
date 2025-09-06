const express = require('express');
const router = express.Router();
const resumeCtrls = require('../controllers/resumeCtrls');

// Route for home page
router.get('/', resumeCtrls.getResumePage);

module.exports = router;
