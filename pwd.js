module.exports = function pwd(callbackFunc) {
  const output = process.cwd();
  callbackFunc(output);
  // process.stdout.write(process.cwd());
}

