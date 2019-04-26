const mongoose = require('mongoose');
const AdminSchema = mongoose.Schema({
    googleID: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    img: {type: String },
    role: { type: String, default: 'forbidden' }
})

module.exports = Admin = mongoose.model('Admin', AdminSchema);
