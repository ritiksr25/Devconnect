

module.exports.index = (req, res) =>{
    res.json({message: '200 Ok'});
}

module.exports.updateprocess = (req, res)=>{
    Profile.findOne({ user: req.user.id }).then(profile=>{
        if(!profile){
            res.json({message : 'Something went wrong.'});
        }
        else{
            Profile.create({
                user: req.user.id
            }).then(()=>{
                res.json({message: done});
            })
        }
    })
    .catch((err) => console.log(err));
}
