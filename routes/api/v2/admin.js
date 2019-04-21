const express = require('express');
const router = express.Router();

require('dotenv').config();

//controller
const adminController = require('../../../controllers/adminController');

//admin dashboard route
router.get('/', adminController.index);
//add route
//router.post('/add', adminController.addpost);
//Update route
//router.post('/update/:id', adminController.updatepost);

module.exports = router;