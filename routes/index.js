var express = require('express');
var router = express.Router();
var config = require('../config')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: config.title,
    currentPath: ""
 });
});

router.get('/guide', function(req, res, next){
    res.render('guide', {
        title: 'Info - ' + config.title,
        gmapsscripturl: 'https://maps.googleapis.com/maps/api/js?key=' + config.gmapskey + '&callback=initBoth&signed_in=true',
        currentPath: 'guide'
    });
});

router.get('/wishlist', function(req, res, next){
    res.render('wishlist', {
      title: 'Ønskeliste - ' + config.title,
      currentPath: 'wishlist'
    });
});

router.get('/sleep', function(req, res, next){
    res.render('sleep', {
        title: 'Overnatting - ' + config.title,
        gmapsscripturl: 'https://maps.googleapis.com/maps/api/js?key=' + config.gmapskey + '&callback=initMap&signed_in=true',
        currentPath: 'sleep'
    });
});

module.exports = router;
