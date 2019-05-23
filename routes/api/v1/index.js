const express = require('express');
const router = express.Router();

require('dotenv').config();

//Controller
const indexController = require('../../../controllers/indexController');

//index route
router.get('/', indexController.index);
//contact form
router.post('/contact', indexController.contact);

//export router
module.exports = router;