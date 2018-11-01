const Instance = require('../models/instance.model.js');

exports.findAll = (req, res) => {
    Instance.find()
    .then(Instances => {
        res.status(200).send(Instances)
    }).catch(err => {
        return "Some error occurred while retrieving Instance."
    });
};

exports.findOneItem = (req,res) => {
    Instance.findOne({_id: req.body._id})
    .then(data => {
        console.log(data);
        res.send(data)
    });
}

exports.postInstance = function(req, res) {
    const addObj = new Instance(req.body);
    addObj.save().then(data => {
        console.log(addObj)
        res.send(addObj)
    }) 
};

exports.post = async (req,res) => {
    const addObj = new Instance(req.body);
    await addObj.save()
    return addObj;
}

exports.updateInstance = function(req,res){
    Instance.findOne({_id: req.body._id})
    .then(data => {
        data.status = req.body.status;
        data.ip = req.body.ip;
        data.instanceId = req.body.instanceId;
        console.log(data);
        data.save(err => {
            res.status(200).send(data);
        });
        
    })
}


