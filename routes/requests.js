var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://dbuser:dbpass@ds247178.mlab.com:47178/mahacks');
var Requests = require('../model/requests.js');

//get all non taken requests when requesting /requests/
router.get('/', function(req, res, next){
    Requests.find({'isTaken':false}, function(err,requests){
        res.json(requests);
    })
});

//get a specific request
router.get('/:id', function(req,res,next){
    var theId = req.params.id;
    Requests.findById(theId, function(err, response){
        res.json(response);
    });
})

//get all of your requests
router.get('/mine/:username', function(req,res,next){
    theUsername = req.params.username;
    Requests.find({$or:[{'mentor':theUsername},{'mentee':theUsername}]},function(err, requests){
        res.json(requests);
    });
});

//create a request
router.post('/new', function(req,res,next){
    var request = new Requests();
    request.mentee = req.body.username;
    request.requestBody = req.body.requestBody;
    request.isTaken = false;
    request.title = req.body.title;
    request.mentor = "";
    request.chat = [];
    request.save(function(err){
        if(err) {res.send(err);}
        res.json({message:"Added request"});
    })
})

//delete a request
router.get('/delete/:id', function(req,res,next){
    Requests.findByIdAndRemove(
        req.params.id,
        function(response){
            res.json({messsage:"Success"})
        }
    )
})

//take a request
router.get('/take/:request/:username', function(req,res,next){
    Requests.findByIdAndUpdate(
        req.params.request,
        {$set: {'isTaken':true, 'mentor':req.params.username}},
        {safe:true},
        function(err,request){
            if(err){
                res.json({error: err});
            }else{
                res.json({message: "success"})
            }
        }
    )
})

//get chat of a request
router.get('/chat/:id',function(req,res,next){
    Requests.findById(
        req.params.id,
        function(err, response){
            res.json(response.chat);
        }
    );
})
//post a new message in a chat
router.post('/chat/:id', function(req,res,next){
    var theId = req.params.id;
    var theUsername = req.body.username;
    var theChatText = req.body.chatText;
    var theChat = {
        'author': theUsername,
        'chatText': theChatText
    }
    Requests.findById(
        theId,
        function(err,request){
            request.chat = [...request.chat, theChat];
            request.save(function(err,updated){
                if(err) res.send(err);
                else res.json(updated);
            })
        }
    )
})

module.exports= router;