const Fullstack = require('../models/fullstack.model.js');

exports.findAll = (req, res) => {
    var find = require("./fullstack.controller.js");
    var fullstacks = find.findall(res);
};

exports.postfullstack = function(req, res) {
    var postfullstack = require("./fullstack.controller.js");
    var fullstacks = postfullstack.post(req,res);
    res.status(200).send(fullstacks);
};

exports.findall = function(res){
    Fullstack.find()
    .then(fullstacks => {
        res.send(fullstacks);
    }).catch(err => {
        return "Some error occurred while retrieving fullstack."
    });
};

exports.post = function(req,res) {
    const addObj = new Fullstack(req.body);
    addObj.save(err =>{
        if (err) return res.status(500).send(err);
    });
    console.log(addObj.id);
    return addObj;
}

exports.edit = function(req, res) {
    Fullstack.findOneAndUpdate( req.body.id, req.body, {new: true}, (err, editObj) => {
            if (err) return res.status(500).send(err);
            res.send(editObj);
        }
    )
};
