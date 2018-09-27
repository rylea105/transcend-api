exports.command = (req, res) => {
    const region = "ap-southeast-1";
    const keypair = req.body.keypair;
    const instanceType = req.body.instanceType;
    const image = req.boyy.image;
    const group = req.body.group;
    const subnetId = req.body.subnetId;
    const cicd = req.body.cicd;
    const code = req.body.code;
    const monitor = req.body.monitor;
    const access = req.body.access;
    const secret = req.body.secret;

    var spawn = require('child_process').spawn,
    process    = spawn('sh',  ['/root/transcend-api/ansible/run_script.sh', access, secret, cicd]);

    process.stdout.on('data', function (data) {
      console.log('stdout: ' + data.toString());
      res.json({"message": data.toString()});
    });

    process.stderr.on('data', function (data) {
      console.log('stderr: ' + data.toString());
    });

    process.on('exit', function (code) {
      console.log('child process exited with code ' + code.toString());
    });

};

exports.test = (req,res) => {
  var name1 = req.body.name1;

  var spawn = require('child_process').spawn,
  process    = spawn('sh',  ['/root/test.sh', name1, 'dodo']);

  process.stdout.on('data', function (data) {
    res.json({"message": data.toString()});
  });

  process.stderr.on('data', function (data) {
    console.log('stderr: ' + data.toString());
  });

  process.on('exit', function (code) {
    res.json({"message": "Done"});
  });

}
