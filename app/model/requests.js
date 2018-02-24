'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RequestsSchema = new Schema({
    mentee: String,
    requestBody: String,
    isTaken: Boolean,
    mentor:String,
    title:String,
    chat:[{
        author:String,
        chatText: String
    }],
});

module.exports = mongoose.model('Requests', RequestsSchema);