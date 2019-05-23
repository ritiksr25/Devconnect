//Models
const Profile = require('../models/Profile');

module.exports.index = (req, res) =>{
    res.status(200).json({
        msg: "Welcome to DevConnect API!!",
        status: "DevConnect is working Properly!!",
        author: "Ritik Srivastava"
    });
}

module.exports.contact = (req, res) =>{
    res.status(500).json({msg: "module under development!!" });
}