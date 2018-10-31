const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    password: String,
    email: String,
    role: String,
    created: {type: Date, default: Date.now},
    salt: String
}, {
    timestamps: false,
    collection: 'Users'
});

module.exports = mongoose.model('Users', UserSchema);