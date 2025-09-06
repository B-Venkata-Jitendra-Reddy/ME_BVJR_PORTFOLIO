const express = require('express');
const router = express.Router();
const adityaProjectCtrls = require('../controllers/adityaProjectCtrls');

// Route for home page
router.get('/', adityaProjectCtrls.getAdityaProjectPage);

module.exports = router;
