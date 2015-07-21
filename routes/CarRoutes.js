var express = require('express'),
    router = express.Router(),
    Car = require('../models/Car');

router.post('/', function(request, response, next){
  var car = new Car({
    brand: request.body.brand,
    year: request.body.year
  });
  car.save(function(error, obj){
    if(error) return response.send(error);
    response.send(obj);
  });
});

router.get('/', function(request, response, next){
  // Find each car with the brand honda, and select the brand and year fields
  Car.find({'brand': 'Honda'}, 'brand year', function(error, car){
    if(error) return console.error(error);
    response.send(car);
  });
});

// Uses the query variable. Enables a building up of the chaining syntax
router.get('/onecar', function(request, response, next){
  // Find a car with the brand of toyota
  var query = Car.findOne({'brand': 'Toyota'});
  // select the brand and year fields
  query.select('brand year');
  // execute the query at a later time
  query.exec(function(error, car){
    if(error) return response.send(error);
    response.send(car);
  });

});


// Chaining
router.get('/thecar', function(request, response, next){
  Car.
    find({
      brand: /Honda/,
      year: {$gt: 100, $lt: 5000}
    }).
      limit(10).
      sort({brand: -1}).
      select({brand: 1, year: 1}).
      exec(function(error, car){
      if(error) return response.send(error);
      return response.send(car);
    });
});

module.exports = router;
