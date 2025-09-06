const express = require('express');
const router = express.Router();
const landhubProjectCtrls = require('../controllers/landhubProjectCtrls');

// Route for home page
router.get('/', landhubProjectCtrls.getLandhubProjectPage);

module.exports = router;