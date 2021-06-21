const fs = require('fs');

module.exports = function cat(fName) {

    const filePath = process.cwd() + `/${fName}`;
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return;
        }
        console.log(data)
    })
}