var express = require('express');
var router = express.Router();

const adminController = require('../controllers/adminController')

router.get('/dashboard', adminController.viewDashboard);
router.get('/aik', adminController.viewAik);

module.exports = router;
