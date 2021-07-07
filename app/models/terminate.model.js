const mongoose = require('mongoose');

const terminateSchema = mongoose.Schema({
    instanceId: String
}, {
    timestamps: true,
    collection: 'terminate'
});

module.exports = mongoose.model('Terminate', terminateSchema);