const Fullstack = require('../models/fullstack.model.js');

exports.findAll = (req, res) => {
  Fullstack.find()
      .then(fullstacks => {
        console.log(fullstacks);
          res.send(fullstacks);
      }).catch(err => {
          res.status(500).send({
              message: err.message || "Some error occurred while retrieving fullstack."
          });
      });
};

exports.postfullstack = (req, res) => {
    const addObj = new Fullstack(req.body);
    addObj.save(err =>{
        if (err) return res.status(500).send(err);
        return res.status(200).send(addObj);
    })
};