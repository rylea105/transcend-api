exports.command = (req, res) => {
    var region = "ap-southeast-1";
    var keypair = req.body.keypair;
    var instanceType = req.body.instanceType;
    var image = req.body.image;
    var group = req.body.group;
    var subnetId = req.body.subnetId;
    var access = req.body.access;
    var secret = req.body.secret;
    var cicd = req.body.cicd;
    var code = req.body.code;
    var monitor = req.body.monitor;

    console.log(cicd);
    console.log(code);
    console.log(monitor);

    var spawn = require('child_process').spawn,
    process    = spawn('sh',  ['/root/transcend-api/ansible/run_script.sh',access,secret,cicd,code,monitor,region,keypair,instanceType,image,group,subnetId]);

    process.stdout.on('data', function (data) {
      console.log(data.toString());
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

exports.checkreq = (req,res) => {
  var cicd = req.body.cicd;
  console.log(cicd);
  res.json({"message": cicd});
}
