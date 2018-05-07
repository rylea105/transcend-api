  const exec = require('child_process').exec;
  const child = exec(`sh ~/transcend-api/ansible/run_script.sh } `,
      (error, stdout, stderr) => {
          console.log(`stdout: ${stdout}`);
          console.log(`stderr: ${stderr}`);
          return `stdout: ${stdout}` + `stderr: ${stderr}`;
          if (error !== null) {
              console.log(`exec error: ${error}`);
              return
          }
  });
