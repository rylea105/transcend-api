const fullstack = require("./fullstack.controller.js");
const log = require("./log.controller.js");

exports.command = async (req, res) => {
    var region = "ap-southeast-1";
    var keypair = req.body.keypair;
    var instanceType = req.body.instanceType;
    var image = req.body.image;
    var group = req.body.group;
    var subnetId = req.body.subnetId;
    var access = req.body.access;
    var secret = req.body.secret;
    // var cicd = req.body.cicd;
    // var code = req.body.code;
    // var monitor = req.body.monitor;
    var software = req.body.software;
    
    req.body.name = req.body.name
    req.body.status = "pending"
    
    await fullstack.post(req,res);
    await log.post(req,res);

    var spawn = require('child_process').spawn,
    process = spawn('sh',  ['/root/transcend-api/ansible/run_script.sh',access,secret,region,keypair,instanceType,image,group,subnetId,software]);

    await process.stdout.on('data', function (data) {
      console.log(data.toString());
    });

    await process.on('exit', function (code) {
      console.log('child process exited with code ' + code.toString());

    process.kill();

    });

    req.body.status = "created"
   
    await fullstack.updateStatus(req,res);

};


exports.test = async (req,res) => {
    await fullstack.post(req,res);

    req.body.status = "created";
    // req.body.id = post.id

    await fullstack.updateStatus(req,res);
}


