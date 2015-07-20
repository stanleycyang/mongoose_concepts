// Sub docs are docs with schemas of their own which are elements of a parents document array
// They are not saved individually, tget are saved whenever their top-level parent document is saved

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var childSchema = new Schema({name: 'string'});
childSchema.pre('save', function(next){
  if('invalid' == this.name) return next(new Error('#sadpanda'));
  next();
});

var parentSchema = new Schema({children: [childSchema]});

module.exports = mongoose.model('Parent', parentSchema);


// Alternative declaration syntax
// var parent Schema = new Schema({
//   children: [{name: String}]
// })
