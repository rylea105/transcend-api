// const region = "ap-southeast-1";
// const keypair = req.body.keypair;
// const instanceType = req.body.instanceType;
// const image = req.boyy.image;
// const group = req.body.group;
// const subnetId = req.body.subnetId;
// const cicd = req.body.cicd;
// const code = req.body.code;
// const monitor = req.body.monitor;

var spawn = require('child_process').spawn,
process    = spawn('sh',  ['/root/transcend-api/ansible/run_script.sh','']);

process.stdout.on('data', function (data) {
  console.log('stdout: ' + data.toString());
});

process.stderr.on('data', function (data) {
  console.log('stderr: ' + data.toString());
});

process.on('exit', function (code) {
  console.log('child process exited with code ' + code.toString());
});

