var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Trine & Vegard 27.08.2016' });
});

module.exports = router;
