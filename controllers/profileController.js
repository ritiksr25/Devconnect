//import model
const Profile = require('../models/Profile');

module.exports.index = (req, res) =>{
    Profile.findOne({ user: req.user.id }).then(profile =>{
        if(!profile){
            res.status(404).json({ msg: "There is no profile for this user!!" });
        }
        res.status(200).json(profile);
    }).catch(err => res.status(500).json({ msg: "Something went wrong!!" }));
}

module.exports.all = (req, res) =>{
    Profile.find().then(profiles =>{
        if(!profile){
            res.status(404).json({ msg: "No profiles found!!" });
        }
        res.status(200).json(profiles);
    }).catch(err => res.status(500).json({ msg: "Something went wrong!!"}));
}

module.exports.handle = (req, res) =>{
    Profile.findOne({ handle: req.params.handle }).then(profile =>{
        if(!profile){
            res.status(404).json({ msg: "No profile found for this user!!" });
        }
        res.status(200).json(profile);
    }).catch(err => res.status(500).json({ msg: "Something went wrong!!"}));
}

module.exports.update = (req, res) =>{
    //skipping validation for later
    const profileFields = {};
    profileFields.user = req.user.id;
    if(req.body.headline) profileFields.headline = req.body.headline;
    if(req.body.summary) profileFields.summary = req.body.summary;
    if(req.body.address) profileFields.address = req.body.address;
    //links
    if(req.body.github) profileFields.links.github = req.body.github;
    if(req.body.linkedin) profileFields.links.github = req.body.linkedin;
    if(req.body.twitter) profileFields.links.github = req.body.twitter;
    if(req.body.facebook) profileFields.links.github = req.body.facebook;
    if(req.body.gmail) profileFields.links.github = req.body.gmail;
    if(req.body.instagram) profileFields.links.github = req.body.instagram;
    if(req.body.website) profileFields.links.github = req.body.website;

    //Save profile in db
    Profile.findOne({ user: req.user.id }).then(profile =>{
        if(profile){
            profile.findOneAndUpdate({ user: req.user.id }, { $set: profileFields }).then(profile =>{
                res.status(200).json({msg: "Profile Updated Successfully!", profile });
            })
        } else{
            //unique handle check
            Profile.findOne({ handle: profileFields.handle }).then(handle =>{
                if(handle){
                    res.status(409).json({ msg: "Handle Already exists!!"});
                }
                else{
                    new Profile(profileFields).save.then(profile =>{
                        res.status(200).json({ msg: "Profile Added Successfully!!", profile});
                    })
                }
            })
        }
    })
}

module.exports.updateProjects = (req, res) =>{
    //skipping validations for later
    const { title, details, start, end, present, source, url } = req.body;
    Profile.findOne({ user: req.user.id }).then(profile =>{
        const project = { title, details, start, end, present, source, link, url };
        profile.projects.unshift(project);
        profile.save().then(profile =>{
            res.status(200).json({msg: "Project Added!!", profile });
        })
    })
}

module.exports.deleteProjects = (req, res) =>{
    res.status(500).json({ msg: "Module under development"});

}

module.exports.updateSkills = (req, res) =>{
    //skipping validations for later
    const { skill, level } = req.body;
    Profile.findOne({ user: req.user.id }).then(profile =>{
        const newskill = { skill, level };
        profile.skills.unshift(newskill);
        profile.save().then(profile =>{
            res.status(200).json({msg: "Skill Added!!", profile });
        })
    })
}

module.exports.deleteSkills = (req, res) =>{
    res.status(500).json({ msg: "Module under development"});

}

module.exports.updateAcademics = (req, res) =>{
    //skipping validations for later
    const { course, description, start, end, present, stream, institute } = req.body;
    Profile.findOne({ user: req.user.id }).then(profile =>{
        const academic = { course, description, start, end, present, stream, institute };
        profile.academics.unshift(academic);
        profile.save().then(profile =>{
            res.status(200).json({msg: "Academics Added!!", profile });
        })
    })
}

module.exports.deleteAcademics = (req, res) =>{
    res.status(500).json({ msg: "Module under development"});

}

module.exports.updateWorkexp = (req, res) =>{
    //skipping validations for later
    const { desgn, description, start, end, present, org } = req.body;
    Profile.findOne({ user: req.user.id }).then(profile =>{
        const workexp = { desgn, description, start, end, present, org };
        profile.workexps.unshift(workexp);
        profile.save().then(profile =>{
            res.status(200).json({msg: "Experience Added!!", profile });
        })
    })
}

module.exports.deleteWorkexp = (req, res) =>{
    res.status(500).json({ msg: "Module under development"});

}
