const express = require('express');
const router = express.Router();

require('dotenv').config();

//controller
const userController = require('../../../controllers/userController');

//register user
//router.post('/register', userController.register);
//login user
//router.post('/login', userController.login);

module.exports = router;