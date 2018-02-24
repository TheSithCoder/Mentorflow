var express = require('express');
var router = express.Router();
var users = require('./users');
var requests = require('./requests.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/users', users);
router.use('/requests', requests);

module.exports = router;
