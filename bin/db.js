var mongoose = require('mongoose');
var dbuser = process.env.dbuser || 'dbuser';
var dbpass = process.env.dbpass || 'dbpass';
var dburi = process.env.dburi || 'ds247178.mlab.com:47178/mahacks';
module.exports = mongoose.connect('mongodb://'+dbuser+':'+dbpass+'@'+dburi);