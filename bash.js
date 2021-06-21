process.stdout.write('prompt > ');
const pwd = require('./pwd.js');
const ls = require('./ls.js');


process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();  //remove the newline
      if(cmd === 'pwd'){
        pwd();
      } else if (cmd === 'ls') {
        ls();
      }
    process.stdout.write('\nYou typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  })







