function createInstance(){
  const exec = require('child_process').exec;
  const child = exec(‘sh ../../ansible/run_script.sh } ’,
      (error, stdout, stderr) => {
          console.log(`stdout: ${stdout}`);
          console.log(`stderr: ${stderr}`);
          if (error !== null) {
              console.log(`exec error: ${error}`);
          }
  });
}
