require('dotenv').load();
var express = require('express');
var http = require('http');
var mongoose = require('mongoose');
// Connect to db according to current operating environment
var db = require('./db/config');
var port = 3000;
var app = express();

// Source in routes
var index = require('./routes/index');
var AnimalRoutes = require('./routes/AnimalRoutes');
var BlogRoutes = require('./routes/BlogRoutes');

// Set up routing
app.use('/', index);
app.use('/api/blogs', BlogRoutes);
app.use('/api/animals', AnimalRoutes);


// Set up node server
var server = http.createServer(app);
// Listen on 3000
server.listen(port, function(){
  console.log('Listening on ' + port);
});
