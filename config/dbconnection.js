const mongoose = require('mongoose');

require('dotenv').config();

//map global promise
mongoose.Promise = global.Promise;
//connection string
const dburl = process.env.MONGO_URI;
//mongoose connect
mongoose.connect(dburl, {useNewUrlParser: true})
.then(()=>{
    console.log('MongoDB Connected');
})
.catch((err)=>{
    console.log(err);
})