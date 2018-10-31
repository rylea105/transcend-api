const Log = require('../models/log.model.js');

exports.findAll = function(req, res){
    Log.find({userId: req.body.userId})
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