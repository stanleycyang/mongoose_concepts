require('dotenv').load();
var express = require('express');
var http = require('http');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var logger = require('morgan');
// Connect to db according to current operating environment
var db = require('./db/config');
var port = 3000;
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Source in routes
var index = require('./routes/index');
var AnimalRoutes = require('./routes/AnimalRoutes');
var BlogRoutes = require('./routes/BlogRoutes');
var ThingRoutes = require('./routes/ThingRoutes');
var TankRoutes = require('./routes/TankRoutes');
var SubRoutes = require('./routes/SubRoutes');

// Set up routing
app.use('/', index);
app.use('/api/blogs', BlogRoutes);
app.use('/api/animals', AnimalRoutes);
app.use('/api/things', ThingRoutes);
app.use('/api/tanks', TankRoutes);
app.use('/api/subs', SubRoutes);


// Set up node server
var server = http.createServer(app);
// Listen on 3000
server.listen(port, function(){
  console.log('Listening on ' + port);
});
