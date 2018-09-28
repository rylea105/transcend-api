exports.command = (req, res) => {
    // var region = "ap-southeast-1";
    // var keypair = req.body.keypair;
    // var instanceType = req.body.instanceType;
    // var image = req.boyy.image;
    // var group = req.body.group;
    // var subnetId = req.body.subnetId;
    // var code = req.body.code;
    // var monitor = req.body.monitor;
    // var access = req.body.access;
    // var secret = req.body.secret;
    //var cicd = req.body.cicd;


    var spawn = require('child_process').spawn,
    process    = spawn('sh',  ['/root/transcend-api/ansible/run_script.sh']);

    process.stdout.on('data', function (data) {
      console.log('stdout: ' + data.toString());
    });

    // process.stderr.on('data', function (data) {
    //   console.log('stderr: ' + data.toString());
    // });

    process.on('exit', function (code) {
      console.log('child process exited with code ' + code.toString());
    });

};

exports.test = (req,res) => {
  var name1 = req.body.name1;
  var name2 = req.body.name2;
  var name3 = req.body.name3;

  var spawn = require('child_process').spawn,
  process    = spawn('sh',  ['/root/test.sh', name1, name2,name3]);

  process.stdout.on('data', function (data) {
    console.log('stdout: ' + data.toString());
  });

  process.stderr.on('data', function (data) {
    console.log('stderr: ' + data.toString());
  });

  process.on('exit', function (code) {
    res.json({"message": "Done"});
  });

}
