var express = require('express'),
    router = express.Router(),
    Tank = require('../models/Tank');

router.post('/', function(request, response, next){

  var tank = new Tank({name: request.body.name, size: request.body.size});

  tank.save(function(error, obj){
    if(error) return response.send(error);
    return response.send(obj);
  });

  /*can be done like this as well*/
  /*Tank.create({name: name, size: size}, function(error, tank){})*/

});

router.put('/:id', function(request, response, next){
  Tank.findById(request.params.id, function(error, tank){
    if(error) return console.error(error);
    tank.size = 'large';
    tank.save(function(error){
      if(error) return console.error(error);
      response.send(tank);
    });

  });

  // alternative methods: Tank.update
  // Tank.findByIdAndUpdate
});

module.exports = router;
