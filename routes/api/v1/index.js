const express = require('express');
const router = express.Router();

require('dotenv').config();

//Controller
const indexController = require('../../../controllers/indexController');

//index route
router.get('/', indexController.index);
//contact form
router.get('/contact', indexController.contact);
router.post('/contact', indexController.contactProcess);

//export router
module.exports = router;