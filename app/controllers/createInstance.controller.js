const createInstance = require('../models/createInstance.model.js');

exports.command = (req, res) => {
    if(req !== null){
      createInstance.createInstance()
    }
};
