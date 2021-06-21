const fs = require('fs');

module.exports = function ls(callbackFunc) {
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      callbackFunc(err)
    } else {
      const output = files.join('\n');
      callbackFunc(output);
      // process.stdout.write(files.join('\n'))
      // process.stdout.write("prompt > ");
    }
  })
};
