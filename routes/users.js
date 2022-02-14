/* Dzina Butko ID 301215947  Assignment Date  08/02/2021*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('index', {title:'Express'});
});

module.exports = router;
