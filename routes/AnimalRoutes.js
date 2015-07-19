var express = require('express');
var router = express.Router();
var Animal = require('../models/Animal');

var dog = new Animal({
  name: 'Sally',
  type: 'dog'
});

router.get('/nametype', function(request, response, next){
  response.send(dog.nametype);
});

router.post('/nametype', function(request, response, next){
  dog.nametype = 'Sally Yellow';
  // Send back the JSON of the broken down name
  response.send({
    name: dog.name,
    type: dog.type
  });
});

router.get('/dogs', function(request, response, next){

  // Finding similar type of dogs
  dog.findSimilarTypes(function(error, dogs){
    if(error) return console.error(error);
    response.send(dogs);
  });

});

// Post new dogs
router.post('/', function(request, response, next){
  // Create the animal object with the Schema
  var animal = new Animal({
    name: request.body.name,
    type: request.body.type
  });

  // Save the animal into the DB
  animal.save(function(error){
    if(error) return response.json({success: false, message: 'failed'});
    response.json({
      success: true,
      message: 'Animal created!'
    });
  });
});

// Use the class method to find animal by name
router.post('/findByName', function(request, response, next){
  var name = request.body.name;
  Animal.findByName(name, function(error, animals){
    if(error) response.send(error);
    response.send(animals);
  });
});

module.exports = router;
