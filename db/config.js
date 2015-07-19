var mongoose = require('mongoose'),
    constants = require('./constants'),
    database = '';

switch(process.env.NODE_ENV){
  case 'development':
    database = constants.LOCAL_MONGO + constants.DB_NAME;
    break;
  case 'test':
    database = constants.LOCAL_MONGO + constants.TEST_DB_NAME;
    break;
  default:
    database = process.env.MONGODB;
}


// Connect to mongodb
mongoose.connect(database);

// Check the connection
var connection = mongoose.connection;
connection.on('error', function(msg){
  console.error('The follow error has occurred: %s', msg);
});

connection.once('open', function(){
  console.log('db connection to %s was successful', database);
});


module.exports = mongoose;
