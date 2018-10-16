const mongoose = require('mongoose');

const InstanceInfoSchema = mongoose.Schema({
    id: Number,
    instance_type: [String],
    region: String,
    image: String
}, {
    timestamps: true,
    collection: 'InstanceInfo'
});

module.exports = mongoose.model('InstanceInfo', InstanceInfoSchema);
