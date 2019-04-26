const mongoose = require('mongoose');
const ProfileSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Admin', 
        required: true
    },
    mobile: { type: Number, default: ' ' },
    github: { type: String, default: ' ' },
    linkedin: { type: String, default: ' ' },
    facebook: { type: String, default: ' ' },
    twitter: { type: String, default: ' ' },
    gmail: { type: String, default: ' ' },
    website: { type: String, default: ' ' },
    resume: { type: String, default: ' ' },
    address: { type : String, default: ' ' },
    headline: { type: String, default: ' ' },
    summary: { type: String, default: ' ' },
    academics: [{
        course: { type: String, default: ' ' },
        start: { type: Date, default: ' ' },
        end: { type: Date, default: ' ' },
        stream: { type: String, default: ' ' },
        description: { type: String, default: ' ' },
        institute: { type: String, default: ' ' }
    }],
    skills: [{
        skill: { type: String, default: ' ' },
        level: { type: String, default: ' ' }
    }],
    projects: [{
        title: { type: String, default: ' ' },
        details: { type: String, default: ' ' },
        start: { type: Date, default: ' ' },
        end: { type: Date, default: ' ' },
        source: { type: String, default: ' ' },
        url: { type: String, default: ' ' }
    }],
    achievements: [{
        title: { type: String, default: ' ' }      
    }],
    workexp: [{
        desgn: { type: String, default: ' ' },
        org: { type: String, default: ' ' },
        start: { type: Date, default: ' ' },
        end: { type: Date, default: ' ' },
        desc: { type: String, default: ' ' }
    }]

})

module.exports = Profile = mongoose.model('Profile', ProfileSchema);