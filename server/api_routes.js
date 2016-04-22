var
apiRouter = require ('express').Router(),
controllers = require('./controllers.js')
apiRouter.route('/').get(controllers.homeRoute)
apiRouter.route('/api/scores').post(controllers.scores)
module.exports = apiRouter
