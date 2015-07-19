var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  body:{
    type: String,
    required: true
  },
  comments: [{
    body: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  }],
  date: {
    type: Date,
    default: Date.now
  },
  hidden: {
    type: Boolean,
    default: true
  },
  meta: {
    votes: {
      type: Number,
      min: 0,
      default: 0
    },
    favs: {
      type: Number,
      min: 0,
      default: 0
    }
  }
});

// creates a model to be exported
module.export = mongoose.model('Blog', blogSchema);
