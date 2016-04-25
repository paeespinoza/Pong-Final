angular.module("pong").config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('game', {
      url: "/",
      templateUrl: "partials/game.html",
      controller: "gameCtrl as game"
    })
    .state('leaderBoard', {
      url: "/leaderBoard",
      templateUrl: "partials/leaderBoard.html",
      controller: "leaderCtrl as leader"
    })

});
