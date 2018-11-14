const InstanceInfo = require('../models/instanceInfo.model.js');


exports.findAll = (req, res) => {
  InstanceInfo.find()
      .then(instanceInfos => {
        console.log(instanceInfos);
          res.send(instanceInfos);
      }).catch(err => {
          res.status(500).send({
              message: err.message || "Some error occurred while retrieving instanceInfos."
          });
      });
};
