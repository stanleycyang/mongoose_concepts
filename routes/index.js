var express = require('express');
var router = express.Router();

router.get('/', function(request, response, next){
  response.send('Hello world!');
});

module.exports = router;
