var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var thingSchema = new Schema({
  name: String,
  binary: Buffer,
  living: Boolean,
  updated: {type: Date, default: Date.now},
  age: {type: Number, min: 18, max: 65},
  mixed: Schema.Types.Mixed,
  _someId: Schema.Types.ObjectId,
  array: [],
  ofString: [String],
  ofNumbers: [Number],
  ofDates: [Date],
  ofBuffer: [Buffer],
  ofBoolean: [Boolean],
  ofMixed: [Schema.Types.Mixed],
  ofObjectId: [Schema.Types.ObjectId],
  nested: {
    stuff: {type: String, lowercase: true, trim: true}
  }
}, {strict: false});

module.exports = mongoose.model('Thing', thingSchema);
