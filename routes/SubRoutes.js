var express = require('express'),
    router = express.Router(),
    Parent = require('../models/Sub');

// Embeds the children into the parent object
router.post('/', function(request, response, next){
  var parent = new Parent({children: [{name: 'Matt'}, {name: 'Sarah'}]});
  parent.save(function(error, obj){
    if(error) return response.send(error);
    response.send(obj);
  });
});

router.post('/new', function(request, response, next){
  Parent.findById('55ac75edd5728dab9e44be03', function(error, parent){
    // Also use parent.children.create for 1 step save
    parent.children.push({name: request.body.name});
    parent.save(function(error){
      if(error) return response.send(error);
      return response.send('Success');
    });
  });
});

// Delete the child
router.delete('/:id', function(request, response, next){
  Parent.findById('55ac75edd5728dab9e44be03', function(error, parent){
    var doc = parent.children.id(request.params.id).remove();
    parent.save(function(error){
      if(error) return response.send(error);
      response.send('Sub doc was removed');
    });
  });
});

// Pulls all the children of the parent doc
router.get('/', function(request, response,next){
  Parent.findById('55ac75edd5728dab9e44be03', function(error, obj){
    return response.send(obj.children);
  });
});

// Pull the children of the obj
router.get('/:id', function(request, response, next){
  Parent.findById('55ac75edd5728dab9e44be03', function(error, obj){
    return response.send(obj.children.id('55ac75edd5728dab9e44be05'));
  });
});

module.exports = router;
