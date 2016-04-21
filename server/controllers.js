var
db = require('./models.js'),
config = require('../config.json')

module.exports ={
  homeRoute:function(req,res){
    res.sendFile('../client/index.html')
  }

}
