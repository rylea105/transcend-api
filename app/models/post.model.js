const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    id: Number,
    name: String
}, {
    timestamps: true,
    collection: 'post'
});

module.exports = mongoose.model('Post', PostSchema);