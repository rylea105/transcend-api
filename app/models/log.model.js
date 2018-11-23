const mongoose = require('mongoose');
const moment = require('moment');
const SLASH_DMYHMS = 'DD/MM/YYYY HH:mm:ss';


const LogSchema = mongoose.Schema({
    software: String,
    instanceId: String,
    finished: {type: Date},
    started: {type: Date, default: Date.now},
    userId: String
}, {
    timestamps: false,
    collection: 'Logs'
});

module.exports = mongoose.model('Logs', LogSchema);