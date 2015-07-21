var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var carSchema = new Schema({
  brand: {
    type: String,
    required: true
  },
  year:{
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Car', carSchema);
