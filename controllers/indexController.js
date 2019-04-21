//Models
const Profile = require('../models/Profile')
const Admin = require('../models/Admin');

module.exports.index = (req, res)=>{
    Profile.find().then(result=>{
        res.json(result);
    });
}
