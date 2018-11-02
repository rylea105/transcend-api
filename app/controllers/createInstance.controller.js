const instance = require("./instance.controller.js");
const log = require("./log.controller.js");
const check = require("./limit.controller.js")
var shell = require('shelljs');
const Limit = require('../models/limit.model.js');

exports.command = async (req, res) => {
    req.body.ip = "-"
    req.body.instanceId= "-"
    req.body.status = "pending"
    
    const data = req.body
    var type = data.instanceType
    var i = await Limit.findOne({userId: data.userId});
    await i.instanceLimit.map(async d => {  
    switch (d.instanceType){
        case type:
        await this.preCreate(req,res);
        await this.child_process(req,res);
        
        }
    });
    res.send("done")
    
};

exports.preCreate = async (req,res) => {
  var data = await instance.post(req,res);
  req.body._id = data._id;
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
  req.body.instanceId = shell.cat('/root/instanceId.txt');

  await instance.updateInstance(req,res);
  await log.updateInstance(req,res);
  await check.updateCurrent(req,res);
  });
}

exports.postCreate = async (req,res) => {
  await instance.updateInstance(req,res);
}


exports.terminate = async (req,res) => {
    var instanceId = req.body.instanceId;
    var access = req.body.access;
    var secret = req.body.secret;
    
    var spawn = require('child_process').spawn,
    process = await spawn('sh',  ['/root/transcend-api/ansible/terminate',instanceId,access,secret]);

    await process.stdout.on('data',function (data) {
      console.log(data.toString());
    });
    
    await process.on('exit', async function (code) {
      await check.increaseCurrent(req,res)
      await log.deleteLog(req,res);
      await instance.deleteInstance(req,res);
    });
}



exports.test = async (req,res) => {
  const limit = require("./limit.controller");
  limit.updateCurrent(req,res);
  res.send("done")
}

exports.test2 = async(req,res) => {
  res.send("I am ok")
}




