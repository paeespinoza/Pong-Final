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

  },
  allScores:function(req,res){
    db.Game.find({}, function(err, scores){
      if(err){
        console.log(err)
      }
      console.log("scores", scores)
      res.json({scores:scores})
    })
  },
  topTenScores:function(req,res){
    db.Game.find({}, function(err, scores){
      if(err){
        console.log(err)
      }
      console.log("scores", scores)
      //
      function sortNumber(a,b){
        return b['playerScore'] - a['playerScore'];
      }

      var leaders = scores.sort(sortNumber);
      leaders = leaders.slice(0,10)
      console.log("these are the leaders", leaders )
      res.json({leaders:leaders})

    })
  }


}
