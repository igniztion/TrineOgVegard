var express = require('express');
var router = express.Router();
var config = require('../config')

router.get('/', function(req, res, next){
    res.render('guide', {
        title: 'Kart - ' + config.title,
        gmapsscripturl: 'https://maps.googleapis.com/maps/api/js?key=' + config.gmapskey + '&callback=initMap&signed_in=true',
        currentPath: 'guide'
    })
});

module.exports = router;