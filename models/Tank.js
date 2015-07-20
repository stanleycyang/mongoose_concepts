var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var tankSchema = new Schema({
  name: String,
  size: String
});

module.exports = mongoose.model('Tank', tankSchema);
