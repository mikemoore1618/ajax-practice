require('dotenv').config()

const
  express = require('express'),
  app = express(),
  logger = require('morgan'),
  mongoose = require('mongoose'),
  PORT = 3000

mongoose.connect(process.env.MONGODB_URI, (err) => {
  console.log(err || "Connected to MongoDB 👍")
})

app.use(logger('dev'))

app.listen(PORT, (err) => {
  console.log(err || `Server running on port ${PORT} 🤘`)
})