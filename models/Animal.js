var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var animalSchema = new Schema({
  name: String,
  type: String,
  // Secondary indexes here, defined at field level
  tags: {
    type: [String],
    index: true
  }
}, {autoIndex: false});

// Mongoose calls ensureIndex when starting up. This should be disabled in production since index creation can cause significant performance impact
//animalSchema.set('autoIndex', false);

// Defining instance methods to animal Schema
animalSchema.methods.findSimilarTypes = function(callback){
  return this.model('Animal').find({type: this.type}, callback);
};

animalSchema.methods.findSimilarNames = function(callback){
  return this.model('Animal').find({type: this.name}, callback);
};

// Define static (class) methods to Animal Schema
animalSchema.statics.findByName = function(name, callback){
  return this.find({name: new RegExp(name, 'i')}, callback);
};

// Virtuals are document properties that can be get and set but do not get persisted in the database. It is really useful for combining fields, while setters are great for decomposing single values into multiple values for storage

// Getter
animalSchema.virtual('nametype').get(function(){
  return this.name + ' is a ' + this.type;
});

// Setter
animalSchema.virtual('nametype').set(function(name){
  var split = name.split(' ');
  this.name = split[0];
  this.type = split[1];
});


module.exports = mongoose.model('Animal', animalSchema);
