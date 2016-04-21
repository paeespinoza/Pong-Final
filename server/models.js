var mongoose = require('mongoose'),
  Schema = mongoose.Schema
gameSchema = new Schema({
  winnerInitials : {type : String},
  playerOneScore : {type :  Number},
  playerTwoScore : {type :  Number}})

module.exports = {
  Game : mongoose.model('Game', gameSchema)
}
