const Log = require('../models/log.model.js');

exports.findAll = function(req, res){
    Log.find()
    .then(logs => {
        res.send(logs);
    }).catch(err => {
        return "Some error occurred while retrieving log."
    });
};

exports.post = function(req,res) {
    const addObj = new Log(req.body);
    addObj.save(err =>{
        if (err) res.status(500).send(err);
    });
    return console.log(addObj);
};

exports.updateInstance = function(req,res){
    Log.findOne({_id: req.body._id})
    .then(data => {
        data.instanceId = req.body.instanceId;
        data.finished = req.body.finished;
        console.log(data);
        data.save(err => {
            res.send(data);
        });
        
    })
}

exports.deleteLog = async function(req,res){
    await Log.deleteOne({instanceId: req.body.isntanceId})
    .then(data => {
        console.log("delete: "+data)
    })
}

