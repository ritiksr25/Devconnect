const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    googleID: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    img: { type: String },
    role: { type: String, default: 'forbidden' }
})

module.exports = User = mongoose.model('User', UserSchema);
