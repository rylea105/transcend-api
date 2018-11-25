const Log = require('../models/log.model.js');

exports.findAll = function(req, res){
    Log.find()
    .then(logs => {
        res.send(logs);
    }).catch(err => {
        return "Some error occurred while retrieving log."
    });
};

exports.post = async function(req,res) {
    const addObj = new Log(req.body);
    await addObj.save();
    return addObj;
};

exports.updateLog = async function(req,res){
    Log.findOne({_id: req.body._id})
    .then(async data => {
        data.instanceId = req.body.instanceId;
        data.finished = req.body.finished;
        console.log(data);
        await data.save();
        return data;
        
    })
}

exports.deleteLog = async function(req,res){
    await Log.deleteOne({instanceId: req.body.isntanceId})
    .then(data => {
        console.log("delete: "+data)
    })
}

