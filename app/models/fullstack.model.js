const mongoose = require('mongoose');

const FullstackSchema = mongoose.Schema({
    id: Number,
    name: String,
    created: {type: Date, default: Date.now},
    status: String
}, {
    timestamps: false,
    collection: 'FullStacks'
});

module.exports = mongoose.model('FullStacks', FullstackSchema);