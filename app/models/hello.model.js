const mongoose = require('mongoose');

const HelloSchema = mongoose.Schema({
    id: Number,
    name: String
}, {
    timestamps: true,
    collection: 'helloworld'
});

module.exports = mongoose.model('Hello', HelloSchema);
