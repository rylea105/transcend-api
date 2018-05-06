function createInstance(access_key,secret_key){
  const exec = require('child_process').exec;
  const child = exec(‘sh ../../ansible/run_script.sh ${access_key} ${secret_key} ’,
      (error, stdout, stderr) => {
          console.log(`stdout: ${stdout}`);
          console.log(`stderr: ${stderr}`);
          if (error !== null) {
              console.log(`exec error: ${error}`);
          }
  });
}
