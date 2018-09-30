const mongoose = require('mongoose');

const FullstackSchema = mongoose.Schema({
    id: Number,
    name: String,
    date: {type: Date, default: Date.now},
    status: String
}, {
    timestamps: true,
    collection: 'FullStacks'
});

module.exports = mongoose.model('FullStacks', FullstackSchema);