const express = require('express');
const router = express.Router();
const dashboardCtrls = require('../controllers/dashboardCtrls');

// Route for home page
router.get('/', dashboardCtrls.getDashboardPage);

module.exports = router;
