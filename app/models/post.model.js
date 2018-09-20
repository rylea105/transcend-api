const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    number: Number,
    name: String
}, {
    timestamps: true,
    collection: 'post'
});

module.exports = mongoose.model('Post', PostSchema);