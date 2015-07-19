var express = require('express');
var router = express.Router();


// index
router.get('/blogs', function(request, response, next){

});

// show
router.get('/blogs/:id', function(request, response, next){

});

// create
router.post('/blogs', function(request, response, next){

});

// update
router.put('blog/:id', function(request, response, next){

});

// destroy
router.delete('blog/:id', function(request, response, next){

});

module.exports = router;
