const Log = require('../models/log.model.js');

exports.findAll = (req, res) => {
    var find = require("./fullstack.controller.js");
    var fullstacks = find.findall(res);
};

exports.find = function(res){
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
        if (err) return res.status(500).send(err);
    });
    console.log(addObj.id);
    return addObj;
};

exports.edit = function(req, res) {
    Log.findOneAndUpdate( req.body.id, req.body, {new: true}, (err, editObj) => {
            if (err) return res.status(500).send(err);
            res.send(editObj);
        }
    )
};