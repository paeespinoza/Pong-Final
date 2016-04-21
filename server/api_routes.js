var
apiRouter = require ('express').Router(),
controllers = require('./controllers.js')
apiRouter.route('/').get(controllers.homeRoute)

module.exports = apiRouter
