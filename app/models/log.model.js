const mongoose = require('mongoose');

const LogSchema = mongoose.Schema({
    software: String,
    instanceId: String,
    created: {type: Date, default: Date.now},
    userId: String
}, {
    timestamps: false,
    collection: 'Logs'
});

module.exports = mongoose.model('Logs', LogSchema);