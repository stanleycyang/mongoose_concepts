var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    Thing = require('../models/Thing');

var thing = new Thing({
  name: "Statue of Liberty",
  binary: new Buffer('1234'),
  living: false,
  age: 55,
  mixed: {any: {thing: 'i want'}},
  _someId: new mongoose.Types.ObjectId,
  array: ['Hello', 'there', 1, 2],
  ofString: ["I", "am", "making", "a", "point"],
  ofNumbers: [123,234,345,456],
  ofBuffer: ['123', '234', '345'],
  ofMixed: [1,[],'three', {four:5}],
  nested: {stuff: 'good'}

});
/*var m = new Thing;*/
//m.name = 'Statue of Liberty';
//m.age = 125;
//m.updated = new Date;
//m.binary = new Buffer(0);
//m.living = false;
//m.mixed = {any: {thing: 'i want'}};
//m.markModified('mixed');
//m._someId = new mongoose.Types.ObjectId;
//m.array.push(1);
//m.ofString.push("String");
//m.ofNumbers.unshift(1,2,3,4);
//m.ofDates.addToSet(new Date);
//m.ofBuffer.pop();
//m.ofMixed = [1, [], 'three', {four: 5}];
/*m.nested.stuff = 'good';*/

router.get('/saveThing', function(request, response, next){
  thing.save(function(error, resp){
    if(error) return response.send(error);
    response.send({
      success: true,
      message: resp
    });
  });
});

module.exports = router;
