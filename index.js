//Import Modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');

const app = express();

//Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(session({
//    secret: process.env.SESSION_SECRET,
//    saveUninitialized: false,
//    resave: false
//}));
app.use(passport.initialize());
app.use(passport.session());

//Configurations
require('dotenv').config();
require('./config/dbconnection');
require('./config/jwt');

//Global variable
app.use((req, res, next)=>{
    res.locals.user = req.user || null;
    next();
});


//Routes
app.use('/', require('./routes/api/v1/index'));
app.use('/users', require('./routes/api/v1/users'));
app.use('/profile', require('./routes/api/v1/profile'));


//start server
const PORT = process.env.PORT;
app.listen(PORT, (err)=>{
    if(err){
        console.log('Error in running Server.')
        return;
    }
    else{
        console.log(`Server Started on Port ${PORT}.`);
    }
})