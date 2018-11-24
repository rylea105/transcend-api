const instance = require("./instance.controller.js");
const log = require("./log.controller.js");
const check = require("./limit.controller.js")
var shell = require('shelljs');
const Limit = require('../models/limit.model.js');
const moment = require('moment');
const SLASH_DMYHMS = 'DD/MM/YYYY HH:mm:ss';

exports.command = async (req, res) => {
    req.body.ip = "-"
    req.body.instanceId= "-"
    req.body.status = "pending"
    
    await this.preCreate(req,res);
    await this.child_process(req,res);
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
  var software = req.body.oneSoftware;
  var count = req.body.count;

  var spawn = require('child_process').spawn,
  process = await spawn('sh',  ['/root/transcend-api/ansible/run_script.sh',access,secret,region,keypair,instanceType,image,group,subnetId,software,count]);

  await process.stdout.on('data',function (data) {
    // io.emit('log', data.toString());
    console.log(data.toString());
});

  await process.on('exit', async function (code) {

  console.log('child process exited with code ' + code.toString());

  req.body.status = "created"
  req.body.ip = shell.cat('/root/ip.txt');
  req.body.instanceId = shell.cat('/root/instanceId.txt');
  req.body.finished = Date.now;

  await instance.updateInstance(req,res);
  await log.updateLog(req,res);
  res.send("Done")
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
  console.log(moment().format(SLASH_DMYHMS));
}





