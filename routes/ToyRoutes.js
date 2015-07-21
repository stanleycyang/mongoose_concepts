var express = require('express'),
    router = express.Router(),
    Toy = require('../models/Toy');


router.post('/', function(request, response, next){
  var toy = new Toy({color: request.body.color, name: request.body.name});
  toy.save(function(error, obj){
    if(error){
      console.log(error.errors.color.message);
      console.log(error.errors.color);
      console.log(error.errors.color.type);
      console.log(error.errors.color.path);
      console.log(error.errors.color.value);
      console.log(error.name);
      console.log(error.message);

      return response.send(error);
    }
    return response.send(obj);
  });
});

// if using this, this refers to the object when validating docs but the global when validating the update validators
router.put('/:id', function(request, response, next){
  // update validators run only on $set and $unset
  Toy.update({}, {color: 'bacon'}, {runValidators: true}, function(error){
    console.log(error.errors.color.message);
  });
});

module.exports = router;
