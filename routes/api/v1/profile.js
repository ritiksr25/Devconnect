const express = require('express');
const router = express.Router();

require('dotenv').config();

//controller
const profileController = require('../../../controllers/profileController');

//current user profile
router.get('/', profileController.index);
//all users profile
router.get('/all', profileController.all);
//profile by handle
router.get('/handle/:handle', profileController.handle);
//add or update profile
router.post('/', profileController.update);
//manage Projects
router.post('/projects', profileController.updateProjects);
router.post('/projects/delete', profileController.deleteProjects);
//manage skills
router.post('/skills', profileController.updateSkills);
router.post('/skills/delete', profileController.deleteSkills);
//manage academics
router.post('/academics', profileController.updateAcademics);
router.post('/academics/delete', profileController.deleteAcademics);
//manage work experience
router.post('/workexp', profileController.updateWorkexp);
router.post('/workexp/delete', profileController.deleteWorkexp);

//export router
module.exports = router;