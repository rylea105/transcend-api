const fullstack = require("./fullstack.controller.js");
const log = require("./log.controller.js");
const instance = require("./createInstance.controller.js");

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
    
    req.body.name = req.body.name
    req.body.status = "pending"
    
    const fullstacks = fullstack.post(req,res);

    var spawn = require('child_process').spawn,
    process = spawn('sh',  ['/root/transcend-api/ansible/run_script.sh',access,secret,cicd,code,monitor,region,keypair,instanceType,image,group,subnetId]);

    process.stdout.on('data', function (data) {
      console.log(data.toString());
    });

    process.on('exit', function (code) {
      console.log('child process exited with code ' + code.toString());

    process.kill();

    req.body.status = "created"
    req.body.id = test.id;

    const log = log.post(req,res);
    const edit = fullstack.edit(req,res);
    });

};


exports.test = (req,res) => {
    const log = require("./log.controller.js");
    const test = log.post(req,res);
    req.body.id = test.id;
    req.body.status = "created";
    //instance.test2(req,res);
}

exports.test2 = (req,res) => {
    const log = require("./log.controller.js");
    const edit = log.edit(req,res);
}
