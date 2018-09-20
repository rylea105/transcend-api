const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    number: Number,
    name: String
}, {
    timestamps: true,
    collection: 'test_post'
});

module.exports = mongoose.model('Post', PostSchema);