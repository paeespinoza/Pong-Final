var express = require('express'),
    app     = express(),
    logger  = require('morgan'),
    router  = express.Router(),
    server  = require('http').createServer(app),
    mongoose = require('mongoose'),
    cors     = require('cors'),
    bodyParser = require('body-parser'),
    apiRoutes = require('./api_routes.js'),
    config = require('../config.json'),
    path = require('path'),
    mongodb_url = 'mogodb://localhost:27017/pong'

    mongoose.connect(mongodb_url, function(err){
      if (err) console.log(err)
      console.log('connected to MongoDB')
    })

app.use(logger('dev'))
app.use(express.static(__dirname +'/public'))

app.set("port", process.env.PORT || 3000)
app.use(logger('dev'))
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(bodyParser.json())
app.use(cors())
app.use('api', apiRoutes)
app.use(express.static(path.join(__dirname, '../client')))
app.use('/', apiRoutes)
app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'))
})
