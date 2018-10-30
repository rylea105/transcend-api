const instance = require("./instance.controller.js");
const log = require("./log.controller.js");
var shell = require('shelljs');

exports.command = async (req, res) => {  
    req.body.ip = "-"
    req.body.status = "pending"
    
    var data = await this.preCreate(req,res);
    
    req.body._id = data._id;

    await this.child_process(req,res);
    
};

exports.preCreate = async (req,res) => {
  await instance.post(req,res);
  await log.post(req,res);
}

exports.child_process = async (req,res) => {
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
  process = await spawn('sh',  ['/root/transcend-api/ansible/run_script.sh',access,secret,region,keypair,instanceType,image,group,subnetId,software]);

  await process.stdout.on('data',function (data) {
  console.log(data.toString());
});

  await process.on('exit', async function (code) {

  console.log('child process exited with code ' + code.toString());

  req.body.status = "created"
  req.body.ip = shell.cat('/root/ip.txt');

  instance.updateInstance(req,res);
  });


  
}

exports.postCreate = async (req,res) => {
  await instance.updateInstance(req,res);
}


exports.test = async (req,res) => {
  var data = await instance.post(req,res);
  console.log(data._id);
  req.body._id = data._id
  instance.findOneItem(req,res);

}


