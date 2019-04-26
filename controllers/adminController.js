//import models
const Profile = require('../models/Profile');

module.exports.updateProfile = (req, res)=>{
    Profile.findOne({ user: req.user.id }).then(profile =>{
        if(!profile){
            res.json({message : 'Something went wrong.'});
        }
        else{
            Profile.updateOne({ user: req.user.id }, req.body )
            .then(()=>{
                res.json({message: done});
            })
        }
    })
    .catch((err) => console.log(err));
}



