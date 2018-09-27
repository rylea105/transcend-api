var spawn = require('child_process').spawn,
    process    = spawn('dir',  ['','']);

process.stdout.on('data', function (data) {
  console.log('stdout: ' + data.toString());
});

process.stderr.on('data', function (data) {
  console.log('stderr: ' + data.toString());
});

process.on('exit', function (code) {
  console.log('child process exited with code ' + code.toString());
});