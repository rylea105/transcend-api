const fullstack = require("./fullstack.controller.js");
const log = require("./log.controller.js");
var shell = require('shelljs');

exports.command = async (req, res) => {  
    req.body.ip = "-"
    req.body.status = "pending"
    
    console.log("begin")
    
    await this.preCreate(req,res);
    
    console.log("mid");
    await this.child_process(req,res);
    
    req.body.status = "created"
    req.body.ip = await shell.cat('/root/ip.txt');
    console.log("end")
    await this.postCreate(req,res);
};

exports.preCreate = async (req,res) => {
  await fullstack.post(req,res);
  await log.post(req,res);
}

exports.child_process = (req,res) => {
  var region = "ap-southeast-1";
  var keypair = req.body.keypair;
  var instanceType = req.body.instanceType;
  var image = req.body.image;
  var group = req.body.group;
  var subnetId = req.body.subnetId;
  var access = req.body.access;
  var secret = req.body.secret;
  var software = req.body.software;

  var spawn = require('child_process').spawn,
  process = spawn('sh',  ['/root/transcend-api/ansible/run_script.sh',access,secret,region,keypair,instanceType,image,group,subnetId,software]);

  process.stdout.on('data',function (data) {
  console.log(data.toString());
});

  process.on('exit',function (code) {
  console.log('child process exited with code ' + code.toString());
  // process.kill();
  });
}

exports.postCreate = async (req,res) => {
  await fullstack.updateInstance(req,res);
}


exports.test = async (req,res) => {
  res.send(shell.cat("/root/ip.txt"));
}


