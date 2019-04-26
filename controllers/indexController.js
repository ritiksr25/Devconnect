//Models
const Profile = require('../models/Profile');

module.exports.index = (req, res)=>{
    Profile.find().then(result=>{
        res.json(result);
    });
}
