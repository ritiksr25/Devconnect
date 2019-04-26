const express = require('express');
const router = express.Router();

require('dotenv').config();

//controller
const adminController = require('../../../controllers/adminController');

//admin login route
//router.get('/login', passport.authenticate('google', {scope: ['profile', 'email']}));
//router.get('/login/callback', passport.authenticate('google', { failureRedirect: '/' }),(req, res) => {
//    res.redirect('/admin');
//  });
//router.get('/logout', (req, res)=>{
//    req.logout();
//    resizeBy.redirect('/');
//});


//Update profile
router.get('/update/:id', adminController.update);
router.post('/update/profile/:id', adminController.updateProfile);
router.post('/update/projects/:id', adminController.updateProjects);
router.post('/update/skills/:id', adminController.updateSkills);
router.post('/update/academics/:id', adminController.updateAcademics);
router.post('/update/workexp/:id', adminController.updateWorkexp);
router.post('/update/acievements/:id', adminController.updateAchievements);

//export router
module.exports = router;