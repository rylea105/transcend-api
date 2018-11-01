const mongoose = require('mongoose');

const LimitSchema = mongoose.Schema({
    userId: String,
    instanceLimit: [  {  instanceType:String,  limit:Number,  current:Number  }  ]
}, {
    timestamps: false,
    collection: 'Limits'
});

module.exports = mongoose.model('Limits', LimitSchema);