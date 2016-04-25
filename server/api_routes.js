var
apiRouter = require ('express').Router(),
controllers = require('./controllers.js')
apiRouter.route('/').get(controllers.homeRoute)
apiRouter.route('/api/scores').post(controllers.scores)
apiRouter.route('/api/scores').get(controllers.allScores)
apiRouter.route('/api/leaderBoard').get(controllers.topTenScores)
module.exports = apiRouter
