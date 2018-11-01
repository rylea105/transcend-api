const Limit = require('../models/limit.model.js');
const createInstance = require('./createInstance.controller.js');

exports.checkLimit = async (req,res) => {
    var type = req.body.instanceType;
    var data = await Limit.findOne({userId: req.body.userId})
    data.instanceLimit.map(async d => {
        if(d.instanceType === type){
            console.log("check type")
            if(d.limit > d.current){
                console.log("check limit")
                await createInstance.child_process(req,res);
            }
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
