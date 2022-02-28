//Dzina Butko ID 301215947  Assignment 2 Date  05/03/2021

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
