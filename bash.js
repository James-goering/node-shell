process.stdout.write('prompt > ');
const pwd = require('./pwd.js');
const ls = require('./ls.js');
const cat = require('./cat.js');
const curl = require('./curl.js');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim().split(" ");  //remove the newline
      if(cmd[0] === 'pwd'){
        pwd(done);
      } else if (cmd[0] === 'ls') {
        ls(done);
      } else if (cmd[0] === 'cat') {
        const fileName = cmd[1];
        cat(done, fileName);
      } else if (cmd[0] === 'curl') {
        const fileName = cmd[1];
        curl(done, fileName);
      }
    process.stdout.write('\nYou typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  })


  const done = (output) => {
      process.stdout.write(output);
  }





