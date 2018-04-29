const Software = require('../models/software.model.js');

exports.findAll = (req, res) => {
  Software.find()
      .then(softwares => {
        console.log(softwares);
          res.send(softwares);
      }).catch(err => {
          res.status(500).send({
              message: err.message || "Some error occurred while retrieving softwares."
          });
      });
};
