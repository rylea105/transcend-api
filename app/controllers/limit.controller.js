const Limit = require('../models/limit.model.js');
const createInstance = require('./createInstance.controller.js');

exports.checkLimit = async (data) => {
    var type = data.instanceType
    var limit = await Limit.findOne({userId: data.userId});
    await limit.instanceLimit.map(async d => {  
    switch (d.instanceType){
        case type:
        return d
        }
    });
}

exports.updateCurrentInstance = async function(req,res){
    await Limit.findOne({_id: req.body._id})
    .then(data => {
        data.save(err => {
            res.status(200).send(data);
        });
        
    })
}
