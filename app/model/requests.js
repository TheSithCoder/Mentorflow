'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Requests = new Schema({
    mentee: String,
    requestBody: String,
    comments:[{
        author:String,
        responseText: String
    }],
});

module.exports = mongoose.model('Comment', CommentsSchema);