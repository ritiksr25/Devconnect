const mongoose = require('mongoose');

require('dotenv').config();

//map global promise
mongoose.Promise = global.Promise;
//connection string
const dburl = "mongodb+srv://ritiksr25:adminritiksr25@cluster0-ubx33.mongodb.net/KSDDSCKIET?retryWrites=true";
//mongoose connect
mongoose.connect(dburl, {useNewUrlParser: true})
.then(()=>{
    console.log('MongoDB Connected');
})
.catch((err)=>{
    console.log(err);
})