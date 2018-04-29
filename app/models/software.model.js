const mongoose = require('mongoose');

const SoftwareSchema = mongoose.Schema({
    id: Number,
    software_name: String,
    software_type: String,
}, {
    timestamps: true,
    collection: 'Software'
});

module.exports = mongoose.model('Software', SoftwareSchema);
