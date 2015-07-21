var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var toySchema = new Schema({
  color: String,
  name: String
});



var Toy = mongoose.model('Toy', toySchema);

// Added validation
Toy.schema.path('color').validate(function(value){
  return /blue|green|white|red|orange|periwinkle/i.test(value);
}, 'Invalid color');


module.exports = Toy;
