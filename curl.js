const request = require('request');
module.exports = function curl(callbackFunc, url){
  request(url, function(error, response, body){
    callbackFunc('error:', error); // Print the error if one occurred
    callbackFunc('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    callbackFunc(body);
    // console.log('body:', body);
  });
}
