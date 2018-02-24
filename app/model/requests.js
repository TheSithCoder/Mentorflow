'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Requests = new Schema({
    mentee: String,
    requestBody: String,
    isTaken: Boolean,
    mentor:String,
    chat:[{
        author:String,
        responseText: String
    }],
});

module.exports = mongoose.model('Comment', CommentsSchema);