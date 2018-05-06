const createInstance = require('../models/hello.model.js');

exports.command = (req, res) => {
    if(req !== null){
      createInstance.createInstance(req.params.access_key);
    }
};
