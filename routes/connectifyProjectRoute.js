const express = require('express');
const router = express.Router();
const connectifyProjectCtrls = require('../controllers/connectifyProjectCtrls');

// Route for home page
router.get('/', connectifyProjectCtrls.getConnectifyProjectPage);

module.exports = router;
