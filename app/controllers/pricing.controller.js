const Pricing = require('../models/pricing.model.js');

exports.findAll = (req, res) => {
    Pricing.find()
    .then(pricing => {
        console.log(pricing)
        res.send(pricing);
    }).catch(err => {
        return "Some error occurred while retrieving log."
    });
};

exports.findOneItem = (req,res) => {
    Pricing.findOne({type: req.body.type})
    .then(data => {
        console.log(data);
        res.send(data)
    })
}


