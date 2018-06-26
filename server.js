require('dotenv').config()

const
  express = require('express'),
  app = express(),
  logger = require('morgan'),
  mongoose = require('mongoose'),
  PORT = 3000

app.use(logger('dev'))

app.listen(PORT, (err) => {
  console.log(err || `Server running.`)
})