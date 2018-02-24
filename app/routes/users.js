var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://dbuser:dbpass@ds247178.mlab.com:47178/mahacks');
var User = require('../model/users.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
    var username = req.body.username;
    User.findOne()
});

module.exports = router;
