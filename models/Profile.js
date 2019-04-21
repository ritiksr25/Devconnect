const mongoose = require('mongoose');
const ProfileSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Admin', 
        required: true
    }
})

module.exports = Profile = mongoose.model('Profile', ProfileSchema);