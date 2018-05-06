function createInstance(access_key){
  const exec = require('child_process').exec;
  const child = exec('ansible-playbook ../script/ec2_webServer.yml',
      (error, stdout, stderr) => {
          console.log(`stdout: ${stdout}`);
          console.log(`stderr: ${stderr}`);
          if (error !== null) {
              console.log(`exec error: ${error}`);
          }
  });
}
