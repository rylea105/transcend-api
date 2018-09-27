exports.command = (req, res) => {
  const createInstance = require('../models/createInstance.model.js');
};

exports.test = (req,res) => {
  var spawn = require('child_process').spawn,
  process    = spawn('sh',  ['/root/test.sh', 'dew', 'dodo']);

  process.stdout.on('data', function (data) {
  console.log('stdout: ' + data.toString());
  });

  process.stderr.on('data', function (data) {
  console.log('stderr: ' + data.toString());
  });

  process.on('exit', function (code) {
  console.log('child process exited with code ' + code.toString());
  });

}
