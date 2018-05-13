const Hello = require('../models/hello.model.js');

exports.findAll = (req, res) => {
  Hello.find()
      .then(hellos => {
        console.log(hellos);
          res.send(hellos);
      }).catch(err => {
          res.status(500).send({
              message: err.message || "Some error occurred while retrieving hellos."
          });
      });
};
