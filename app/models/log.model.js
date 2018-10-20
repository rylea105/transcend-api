const mongoose = require('mongoose');

const LogSchema = mongoose.Schema({
    id: Number,
    name: String,
    created: {type: Date, default: Date.now},
}, {
    timestamps: false,
    collection: 'Logs'
});

module.exports = mongoose.model('Logs', LogSchema);