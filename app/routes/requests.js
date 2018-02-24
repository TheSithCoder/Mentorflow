var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://dbuser:dbpass@ds247178.mlab.com:47178/mahacks');
var Request = require('../model/requests.js');

//get all non taken requests when requesting /requests/
router.get('/', function(req, res, next){
    Requests.find({'isTaken':false}, function(requests){
        res.json(requests);
    })
});

//get a specific request
router.get('/:id', function(req,res,next){
    var theId = req.params.id;
    Requests.findOne({'_id': theId }, function(response){
        res.json(response);
    })
})

//get all of your requests
router.get('/mine/:username', function(req,res,next){
    Requests.find({$or:[{},{}]})
})

//create a request
router.post('/new', function(req,res,next){
    
})

//take a request
router.get('/take/:request/:username', function(req,res,next){

})

//get chat of a request
router.get('/chat/:id',function(req,res,next){

})
//post a new message in a chat
router.post('/chat/:id', function(req,res,next){

})

export default router;