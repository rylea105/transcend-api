const mongoose = require('mongoose');

const PricingSchema = mongoose.Schema({
    id: Number,
    type: String,
    vCPU: String,
    memory: String,
    pricePerHour: Number,
    dailyCost: Number,
    monthlyCost: Number

}, {
    timestamps: false,
    collection: 'Pricing'
});

module.exports = mongoose.model('Pricings', PricingSchema);