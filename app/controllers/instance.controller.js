const Instance = require('../models/instance.model.js');
var mongoose = require( 'mongoose' ); 

exports.findAll = (req, res) => {
    Instance.find()
    .then(Instances => {
        res.status(200).send(Instances)
    }).catch(err => {
        return "Some error occurred while retrieving Instance."
    });
};

exports.postInstance = function(req, res) {
    const addObj = new Instance(req.body);
    addObj.save().then(data => {
        console.log(addObj)
        res.send(addObj)
    }) 
};

exports.post = async (req,res) => {
    const addObj = new Instance(req.body);
    await addObj.save().then(data => {
        console.log(addObj)
        return addObj
    })  
}

exports.edit = (req, res) =>{
    res.send(this.findandupdate(req,res));
};

exports.findandupdate = function(req,res){
    Instance.findOneAndUpdate({id: req.body.id}, req.body , (err,editObj) => {
        if(err){
            console.log(err);
        }else {
            console.log(editObj);
            return editObj;
        }
    });
}



exports.updateInstance = function(req,res){
    Instance.findOne({id: req.body.id})
    .then(data => {
        data.status = req.body.status;
        data.ip = req.body.ip;
        console.log(data);
        data.save(err => {
            res.status(200).send(data);
        });
        
    })
}


