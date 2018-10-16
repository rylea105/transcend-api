const Fullstack = require('../models/fullstack.model.js');

exports.findAll = (req, res) => {
    var find = require("./fullstack.controller.js");
    var fullstacks = find.findall(res);
};

exports.postfullstack = function(req, res) {
    const addObj = new Fullstack(req.body);
    addObj.save(err =>{
        if (err) return res.status(500).send(err);
        return res.status(200).send(addObj);
    })
};

exports.findall = function(res){
    Fullstack.find()
    .then(fullstacks => {
        const listOfArray = fullstacks.map(d => d.name)
        console.log(fullstacks);
        return res.send(fullstacks);
    }).catch(err => {
        return "Some error occurred while retrieving fullstack."
    });
};

exports.edit = (req, res) => {
    Fullstack.findOneAndUpdate( req.body.id, req.body, {new: true}, (err, editObj) => {
            if (err) return res.status(500).send(err);
            return res.send(editObj);
        }
    )
};