angular.module('pong')
  .controller('gameCtrl', gameCtrl)
  function gameCtrl($scope){
    var gameCtrl = this


// PONG COURT
var pongCourt = document.getElementById ('canvas');
// var pongCourt = document.getElementById ('titleCanvas');
var context = pongCourt.getContext('2d');
var playerScores = pongCourt.getContext('2d');
var paddle1 = pongCourt.getContext('2d');
var paddle2 = pongCourt.getContext('2d');
var ball = pongCourt.getContext('2d');

// ----------------------------------------------------------\\
// ----------------------------------------------------------\\


if (pongCourt.getContext) {

  var generic = {
    'fillColor': '#95E3EC',
    'height': 50,
    'width': 10
  };
  var paddle1Stuff ={
    'xInit': 10,
    'y': 180,
    score : 0

  };
  var paddle2Stuff ={
    'xInit' : 730,
    'y':180,
    score : 0
  };

  var ballStuff = {
    'height': 10,
    'width': 10,
   x:300,
   y:200,
   speedX:randomize(),
   speedY:randomize()
  }

  gameCtrl.requestAnimationFrame = window.requestAnimationFrame
  console.log(gameCtrl.requestAnimationFrame)


  // PONG COURT\\
  // var render = function(){
  gameCtrl.render = function(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle='purple';
    context.fillRect(0, 0, 1000, 1000);
    context.font = "30px Terminator Real NFI";
    context.fillStyle = '#CAEDF9'
    // context.fillText(paddle1Stuff.score, 25,50);
    // context.fillText(paddle2Stuff.score , 700,50);

    gameCtrl.requestAnimationFrame.call(window, gameCtrl.render);


    // CENTER DIVIDER\\
    context.fillStyle = '#24A5BA' ;
    context.fillRect(365, 0, 12, 404);
    // PADDLE ONE\\
    paddle1.beginPath();
    paddle1.rect(paddle1Stuff.xInit, paddle1Stuff.y, generic.width, generic.height);
    paddle1.fillStyle = generic.fillColor;
    paddle1.fill();
    // PADDLE TWO\\
    paddle2.beginPath();
    paddle2.rect(paddle2Stuff.xInit, paddle2Stuff.y, generic.width, generic.height);
    paddle2.fillStyle = generic.fillColor;
    paddle2.fill();
    // PONG BALL
    ball.beginPath();
    ball.rect(ballStuff.x, ballStuff.y, ballStuff.height, ballStuff.width);
    ball.fillStyle = generic.fillColor;
    ball.fill();

  };
this.render();
};
// ANIMATION for PADDLE1 \\
var requestAnimationFrame =
  gameCtrl.requestAnimationFrame =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        function(callback) {
          return setTimeout(callback, 1);
        };
var animate = function (prop, val, duration) {

  var start = new Date().getTime();
  var end = start + duration;
  var current = paddle1Stuff[prop];
  var distance = val - current;
console.log(paddle1);
  var step = function() {
      var timestamp =new Date().getTime();
      var progress = Math.min((duration - (end -timestamp)) / duration, 1);
      paddle1Stuff[prop] = current + (distance * progress);
      if(progress < 1 && paddle1Stuff[prop] >= 0 && (paddle1Stuff[prop] + generic.height) <= canvas.height) requestAnimationFrame(step);
      if(paddle1Stuff[prop] < 0){paddle1Stuff[prop] = 0}
      if((paddle1Stuff[prop] + generic.height) > canvas.height){paddle1Stuff[prop] = canvas.height - generic.height}
      };
    return step();
}


// KEY CONTROL for PADDLE1--------------------------------------//
//----------------------------------------------------//
// KEY UP EVENT
document.body.addEventListener('keydown', function(e){
  var info = meta(e);
  if(info) {
    e.preventDefault();
    animate(info[0], paddle1Stuff[info[0]] + info[1], 200);

  };
});
// KEY DOWN EVENT
document.body.addEventListener('keyup', function(e) {
    var info = meta(e);
    // console.log(e)
    if (info) {
        e.preventDefault();
        animate(info[0], paddle1Stuff[info[0]], 200);

    };
});
// END KEY CONTROL----------------------------------------\\
//----------------------------------------------------//

var meta = function(e) {
  var distance = 100;
  var prop = 'y';
  var mult = 1;
//
  if(e.which != 65 && e.which != 90) {
      return false;
  }
  if (e.which === 65) {
        mult = -1;
    }

  if(e.which === 90) {
    prop = 'y';
  }
  return[prop, mult * distance];
};


// **********************************************************************
// **********************************************************************

// / ANIMATION for paddle2 \\
var requestAnimationFrame =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        function(callback) {
          return setTimeout(callback, 1);
        };
var animate2 = function (prop, val, duration) {

  var start = new Date().getTime();
  var end = start + duration;
  var current = paddle2Stuff[prop];
  var distance = val - current;
// console.log(paddle2);
  var step = function() {
      var timestamp =new Date().getTime();
      var progress = Math.min((duration - (end -timestamp)) / duration, 1);
      paddle2Stuff[prop] = current + (distance * progress);
      if(progress < 1 && paddle2Stuff[prop] >= 0 && (paddle2Stuff[prop] + generic.height) <= canvas.height) requestAnimationFrame(step);
      if(paddle2Stuff[prop] < 0){paddle2Stuff[prop] = 0}
      if((paddle2Stuff[prop] + generic.height) > canvas.height){paddle2Stuff[prop] = canvas.height - generic.height}

      };
    return step();
}

// KEY CONTROL for PADDLE2--------------------------------------//
//----------------------------------------------------//

document.body.addEventListener('keydown', function(e){
  var info = meta2(e);
  if(info) {
    e.preventDefault();
    animate2(info[0], paddle2Stuff[info[0]] + info[1], 200);

  };
});

document.body.addEventListener('keyup', function(e) {
    var info = meta2(e);
    // console.log(e)
    if (info) {
        e.preventDefault();
        animate2(info[0], paddle2Stuff[info[0]], 200);

    };
});


var meta2 = function(e) {
  var distance = 100;
  var prop = 'y';
  var mult = 1;
//
  if(e.which != 38 && e.which != 40) {
      return false;
  }
  if (e.which === 38) {
        mult = -1;
    }

  if(e.which === 40) {
    prop = 'y';
  }
  return[prop, mult * distance];
};
// END KEY CONTROL----------------------------------------\\
//----------------------------------------------------//


// PONG BALL ANIMATION---------------------------------------

function ballMovement(){

  var modifier = 0.05
  var isGameStarted = true
  // console.log('start', new Date().getTime())

  if(isGameStarted) {
    ballStuff.x += -ballStuff.speedX * modifier;
    ballStuff.y += ballStuff.speedY * modifier;

  }

  // BALL BOUNCE---------------------------
  // console.log('canvas', canvas.width, 'ballStuff', ballStuff.width)
  if(ballStuff.x <= 0) {
    gameCtrl.gameEnd = new Date().getTime()
    gameCtrl.score = gameCtrl.calculateScore(gameCtrl.gameStart, gameCtrl.gameEnd)
    gameCtrl.gameEnded = true
    console.log(gameCtrl.gameEnded)
    // console.log('start', gameCtrl.gameStart)
    // console.log('gameCtrl.score', gameCtrl.score)
    // console.log('end', gameCtrl.gameEnd)
    paddle2Stuff.score++;

    $scope.$apply()
    return startReset()
    // console.log('hello1')
  }

  if(ballStuff.x > canvas.width - ballStuff.width) {
    gameCtrl.gameEnd = new Date().getTime()
      gameCtrl.score = gameCtrl.calculateScore(gameCtrl.gameStart, gameCtrl.gameEnd)
      gameCtrl.gameEnded = true
      console.log(gameCtrl.gameEnded)
      // console.log('start', gameCtrl.gameStart)
      // console.log('gameCtrl.score', gameCtrl.score)
      // console.log('end', gameCtrl.gameEnd)
    paddle1Stuff.score++;
    $scope.$apply()
    return startReset()
    // console.log('hello2')
  }

  // if(ballStuff.y <= 0){
  //   ballStuff.speedY = Math.abs(ballStuff.speedY);
  // }
  //
  // if(ballStuff.y >= canvas.height){
  //   return startReset()
  //   // console.log('hello3')
  // }

  if (ballStuff.y + ballStuff.size >= canvas.height){
    ballStuff.speedY = Math.abs(ballStuff.speedY) * -1;
  }

  // COLLISION DETECTION--------------------------------

  if(
  ballStuff.x <=(paddle1Stuff.xInit + generic.width)
  && paddle1Stuff.xInit <= (ballStuff.x + ballStuff.width)
  && ballStuff.y <= (paddle1Stuff.y + generic.height)
  && paddle1Stuff.y <= (ballStuff.y + ballStuff.height)
  ) {
    ballStuff.speedX = -ballStuff.speedX * 1.1;
    // ballStuff.speedY = -ballStuff.speedY;
  }
  if(
  ballStuff.x <=(paddle2Stuff.xInit + generic.width)
  && paddle2Stuff.xInit <= (ballStuff.x + ballStuff.width)
  && ballStuff.y <= (paddle2Stuff.y + generic.height)
  && paddle2Stuff.y <= (ballStuff.y + ballStuff.height)
  ) {
    ballStuff.speedX = -ballStuff.speedX * 1.1;
    // ballStuff.speedY = randomize();
  }
  if(ballStuff.y < 0){
    console.log(ballStuff.y, ballStuff.speedY)
    ballStuff.y = 0
    ballStuff.speedY = -ballStuff.speedY
  }
if(((ballStuff.y + ballStuff.height) > canvas.height)){
  ballStuff.speedY = -ballStuff.speedY

}




requestAnimationFrame(ballMovement)
}``
gameCtrl.gameStart = new Date().getTime()
gameCtrl.gameEnded = false
console.log(gameCtrl.gameEnded)
console.log('start', gameCtrl.gameStart)

ballMovement()
// console.log('cavas.height', canvas.height, canvas.width)


function randomize() {
  // Random float between 0 and 999.9
  var _rand = (Math.random() * 100) + 50;
  // positive or negative?
  return Math.random() > 0.5 ? _rand : _rand * -1;
}
// -------------------------------------------------------
// Calculate Score---------------------------------------------------
gameCtrl.calculateScore = function(start, end){
  console.log(end, start)
  return gameCtrl.gameEnd - gameCtrl.gameStart

}


// -------------------------------------------------------
// GAME RESET---------------------------------------------------

  function startReset(){

    setTimeout(function(){
      gameCtrl.gameStart = new Date().getTime()
      gameCtrl.gameEnded = false
      console.log(gameCtrl.gameEnded)
      console.log('start', gameCtrl.gameStart)
      $scope.$apply()
      reset()
    },5000);
  }
  // setInterval(function(){
  //   $scope.$apply()
  //   console.log('apply')
  //
  // },1000)
  function reset(){



  // isGameStarted = true;
  ballStuff.x = (canvas.width - ballStuff.width) / 2;
  ballStuff.y = (canvas.height - ballStuff.height) / 2;
  ballStuff.speedX = randomize();
  ballStuff.speedY = randomize();
  ballMovement()

}
}
