const Resource = require('../models/resource.model.js');

exports.findAll = (req, res) => {
  Resource.find()
      .then(resources => {
        console.log(resources);
          res.send(resources);
      }).catch(err => {
          res.status(500).send({
              message: err.message || "Some error occurred while retrieving resources."
          });
      });
};

exports.post = async (req,res) => {
    const addObj = new Resource(req.body);
    await addObj.save();
    return addObj;
}
