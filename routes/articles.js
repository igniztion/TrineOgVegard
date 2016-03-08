var DocumentDBClient = require('documentdb').DocumentClient;
var async = require('async');

function Articles(articleDao) {
  this.articleDao = articleDao;
}

Articles.prototype = {
  getArticles : function(req, res){
      var self = this;
      
      var querySpec = {
          query : 'SELECT TOP 5 * FROM root'
      };
      
      self.articleDao.find(querySpec, function(err, items){
         if(err){
             throw err;
         } 
         
         res.render('index', {
            title: 'Trine & Vegard',
            articles: items
         });        
      });
      
  },
  addArticle : function(req, res){
      var self = this;
      var item = req.body;
      
      self.articleDao.addItem(item, function(err){
          if (err){
              throw (err);
          }
          
          res.redirect('/');
      });
  }
};

module.exports = Articles;