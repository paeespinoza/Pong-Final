var
db = require('./models.js'),
config = require('../config.json')

module.exports ={
  homeRoute:function(req,res){
    res.sendFile('../client/index.html')
  },
  scores:function(req,res){
    console.log("req.body", req.body)
    var game = new db.Game(req.body)
    game.save(function(err){
      if (err){
         res.json({
        message: err.message,
        success: false
      })
    }
    res.json({
      message: 'score saved',
      success: true
    })
    })
    
  }

}
