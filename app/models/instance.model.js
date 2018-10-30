const mongoose = require('mongoose');

const InstanceSchema = mongoose.Schema({
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
    collection: 'Instances'
});

module.exports = mongoose.model('Instances', InstanceSchema);