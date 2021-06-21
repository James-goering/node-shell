const fs = require('fs');

module.exports = function cat(callbackFunc, fName) {

    const filePath = process.cwd() + `/${fName}`;
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            callbackFunc(err);
            return;
        }
        callbackFunc(data);
        // console.log(data)
    })
}