const express = require('express');
const router = express.Router();
const wonderlustProjectCtrls = require('../controllers/wonderlustProjectCtrls');

// Route for home page
router.get('/', wonderlustProjectCtrls.getWonderlustProjectPage);

module.exports = router;
