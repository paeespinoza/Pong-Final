var mongoose = require('mogoose'),
  Schema = mongoose.schema,
gameSchema = new Schema({
  winnerInitials : {type : String},
  playerOneScore : {type :  Number},
  playerTwoScore : {type :  Number
  }),

module.exports = {
  Game : mongoose.model('Game', gameSchema)
}
