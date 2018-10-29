const mongoose = require('mongoose');

const FullstackSchema = mongoose.Schema({
    id: Number,
    software: String,
    instanceType: String,
    region: String,
    image: String,
    group: String,
    ip: String,
    created: {type: Date, default: Date.now},
    status: String
}, {
    timestamps: false,
    collection: 'FullStacks'
});

module.exports = mongoose.model('FullStacks', FullstackSchema);