var mongoose = require('mongoose'),
  Schema = mongoose.Schema
gameSchema = new Schema({
  playerInitials : {type : String},
  playerScore : {type :  Number}})

module.exports = {
  Game : mongoose.model('Game', gameSchema)
}
