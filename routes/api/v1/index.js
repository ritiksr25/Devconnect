const express = require('express');
const router = express.Router();

require('dotenv').config();

//Controller
const indexController = require('../../../controllers/indexController');

//index route
router.get('/', indexController.index);

//export router
module.exports = router;