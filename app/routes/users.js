var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://dbuser:dbpass@ds247178.mlab.com:47178/mahacks');
var User = require('../model/users.js');
/* GET users listing. */

router.get('/:username', function(req, res, next) {
    var testUsername = req.params.username;
    User.find({username: testUsername}, function(err, user){
        if(user == null){
            res.json({
                free: true
            });
        }else{
            res.json({
                free: false
            })
        }
    })
});

router.post('/', function(req,res,next){
    var newUser = new User();
    newUser.username = req.body.username;
    newUser.save(function(err){
        if(err)
            res.send(err);
        res.json({message:"Added users"});
    });
})

module.exports = router;
