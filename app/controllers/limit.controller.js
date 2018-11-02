const Limit = require('../models/limit.model.js');
const createInstance = require('./createInstance.controller.js');

exports.checkLimit = async (data) => {
    var type = data.instanceType
    var limit = await Limit.findOne({userId: data.userId});
    await limit.instanceLimit.map(async d => {  
    switch (d.instanceType){
        case type:
        
        }
    });
}

exports.updateCurrent = async function(req,res){
    var index = -1;
    var limit = await Limit.findOne({userId: req.body.userId});
    await limit.instanceLimit.map(async d => {
    if (d.instanceType === req.body.instanceType){
        ++index;
        limit.instanceLimit[index].current = limit.instanceLimit[index].current + 1;
    }else{
        ++index
    }
    });
    limit.save();
}

exports.increase = (req,res) => {
    var index = -1;
    var limit = await Limit.findOne({userId: req.body.userId});
    await limit.instanceLimit.map(async d => {
    if (d.instanceType === req.body.instanceType){
        ++index;
        limit.instanceLimit[index].current = limit.instanceLimit[index].current - 1;
    }else{
        ++index
    }
    });
    limit.save();
}
