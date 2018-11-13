const InstanceInfo = require('../models/instanceInfo.model.js');
const app = express();
var http = require('http').Server(app);
const io = require('socket.io')(http);

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
