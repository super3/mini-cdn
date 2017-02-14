'use strict';

var fs = require('fs');
var request = require('request');

var express = require('express');
var app = express();

var config = require('./config.js');

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

app.get('/serve/:url', function(req, res) {

  download(req.params.url, config.cacheDir + 'google.png', function() {
    console.log('done');
    res.sendFile(__dirname + '/' + config.cacheDir + 'google.png');
  });

});

// start the server, if running this script alone
if (require.main === module) {
  /* istanbul ignore next */
  app.listen(3000, function() {
    console.log('Server listening on port 3000...');
  });
}

module.exports = app;
