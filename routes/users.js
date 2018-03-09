var express = require('express');
var router = express.Router();
var mongoose = require('../bin/db.js');
var User = require('../model/users.js');
/* GET users listing. */

router.get('/:username', function(req, res, next) {
    var testUsername = req.params.username;
    User.findOne({username: testUsername}, function(err, user){
        console.log(user);
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
