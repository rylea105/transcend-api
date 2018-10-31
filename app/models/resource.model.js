const mongoose = require('mongoose');

const ResourceSchema = mongoose.Schema({
    id: Number,
    resource_name: String,
    access_key: String,
    secret_key: String,
    dateCreate: Date,
    security_group: String,
    key_pair_name: String,
    vpc_subnet: String,
    userId: String
}, {
    timestamps: true,
    collection: 'Resource'
});

module.exports = mongoose.model('Resource', ResourceSchema);
