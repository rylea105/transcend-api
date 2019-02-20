const Terminate = require('../models/terminate.model.js');

exports.terminateId = async function(req,res) {
    const addObj = new Terminate(req.body);
    await addObj.save();
    res.send(addObj);
  };
  
  exports.findAllTerminate = (req, res) => {
    Terminate.find()
    .then(Terminate => {
        res.status(200).send(Terminate)
    }).catch(err => {
        return "Some error occurred while retrieving Terminate."
    });
  };

  exports.terminateInstance = async (req,res) => {
    var instanceId = req.body.instanceId;
    var access = req.body.access;
    var secret = req.body.secret;
    
    var spawn = require('child_process').spawn,
    process = await spawn('sh',  ['/root/transcend-api/ansible/run_terminate.sh',instanceId,access,secret]);

    await process.stdout.on('data',function (data) {
      console.log(data.toString());
    });
    
    await process.on('exit', async function (code) {
      // await check.increaseCurrent(req,res)
      // await log.deleteLog(req,res);
      // await instance.deleteInstance(req,res);
    });
}