var DocumentDBClient = require('documentdb').DocumentClient;
var async = require('async');
var config = require('../config');

function Rsvp(rsvpDao) {
  this.rsvpDao = rsvpDao;
}

Rsvp.prototype = {
    show: function(req, res){
        res.render('respond',{
            title: "Svar - " + config.title
        });
    },

    getResponses : function(req, res){
        var self = this;
        
        var querySpec = {
            query : 'SELECT TOP 5 * FROM root'
        };
        
        self.rsvpDao.find(querySpec, function(err, items){
            if(err){
                console.log(err);
                items = [];
            } 
            
            res.render('index', {
            title: 'Trine & Vegard',
            articles: items
            });        
        });
        
    },
    addResponse : function(req, res, next){
        var self = this;
        var item = req.body;
        
        self.rsvpDao.addItem(item, function(err){
            if (err){
                console.log(err);
            }
            
            res.render('respond',{
                title: "Takk - " + config.title,
                submit: true,
                isComing: item.coming === 'yes'
            });
        });
    }
};

module.exports = Rsvp;