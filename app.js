require('dotenv').load();
var express = require('express');
var http = require('http');
var mongoose = require('mongoose');
// Connect to db according to current operating environment
var db = require('./db/config');
var port = 3000;
var app = express();

// Source in models
var Blog = require('./models/Blog');

// Set up routing
app.get('/', function(request, response){
  response.send('Hello World!');
});

// Set up node server
var server = http.createServer(app);
// Listen on 3000
server.listen(port, function(){
  console.log('Listening on ' + port);
});
