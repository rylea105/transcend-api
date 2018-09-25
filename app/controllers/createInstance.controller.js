exports.command = (req, res) => {
  const createInstance = require('../models/createInstance.model.js');
};

exports.test = (req,res) => {
  console.log(req.body.cicd);
  console.log(req.body.code);
  console.log(req.body.monitor);
}
