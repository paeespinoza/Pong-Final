angular.module('pong')
  .factory("scoresFactory", scoresFactory)
  scoresFactory.$inject = ['$http']
  console.log (scoresFactory.$inject)
  function scoresFactory($http){
    var scoresData = {}
    scoresData.all = function(){
      console.log($http)
      return $http.get('/api/scores')
    }
return scoresData
  }
