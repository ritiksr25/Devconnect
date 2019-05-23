const mongoose = require('mongoose');
const ProfileSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true
    },
    handle: { type: String, required: true },
    headline: { type: String },
    summary: { type: String },
    mobile: { type: Number },
    address: { type : String },
    links: {
        github: { type: String },
        linkedin: { type: String },
        facebook: { type: String },
        twitter: { type: String },
        gmail: { type: String },
        instagram: { type: String },
        website: { type: String },
    },
    academics: [{
        course: { type: String, required: true },
        start: { type: Date, required: true },
        end: { type: Date },
        present: { type: Boolean },
        stream: { type: String, required: true },
        description: { type: String },
        institute: { type: String, required: true }
    }],
    skills: [{
        skill: { type: String, required: true },
        level: { type: Number, required: true }
    }],
    projects: [{
        title: { type: String, required: true },
        details: { type: String, required: true },
        start: { type: Date, required: true },
        end: { type: Date },
        present: { type: Boolean },
        source: { type: String },
        url: { type: String }
    }],
    workexps: [{
        desgn: { type: String, required: true },
        org: { type: String, required: true },
        start: { type: Date, required: true },
        end: { type: Date },
        present: { type: Boolean},
        description: { type: String }
    }]

})

module.exports = Profile = mongoose.model('Profile', ProfileSchema);