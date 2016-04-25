angular.module('pong')
  .controller('leaderCtrl', leaderCtrl)


  function leaderCtrl($scope, $http, $state, scoresFactory){
  var leaderCtrl = this
    scoresFactory.all().then(function(data){
      leaderCtrl.scores = data.data.scores
      // console.log(data)
    })
    
    leaderCtrl.getScores = function(){
      // console.log(leaderCtrl.scores)
      return leaderCtrl.scores


    }
    leaderCtrl.getLeaders = function(){
      $http.get("/api/leaderBoard")
      .then(function(data){
        leaderCtrl.leaders = data.data.leaders
        console.log(data)
      })
    }
  }
