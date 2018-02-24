var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://dbuser:dbpass@ds247178.mlab.com:47178/mahacks');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{
    id: 1,
    username: "sampsepi0l"
  },{
    id:2,
    username: "Memelord11"
  }])
});

module.exports = router;
