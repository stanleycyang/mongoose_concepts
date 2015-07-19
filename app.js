var express = require('express');
var http = require('http');
var mongoose = require('mongoose');
var db = process.env.MONGODB || 'mongodb://localhost/mongooseapp';
var port = 3000;
var app = express();

// Connect to mongodb
mongoose.connect(db);

// Set up node server
var server = http.createServer(app);
// Listen on 3000
server.listen(port);
console.log('Server is listening on ' + port);
