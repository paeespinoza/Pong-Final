var
apiRouter = require ('express').Router()
apiRouter.route('/').get(function(req,res){
  res.sendFile('../client/index.html')
})
module.exports = apiRouter
