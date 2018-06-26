require('dotenv').config()

const
  express = require('express'),
  app = express(),
  logger = require('morgan'),
  mongoose = require('mongoose'),
  PORT = 3000,
  booksRouter = require('./routes/books.js')

mongoose.connect(process.env.MONGODB_URI, (err) => {
  console.log(err || "Connected to MongoDB 👍")
})

app.use(logger('dev'))
app.use(express.json())
app.use(express.static('public'))

app.use('/api/books', booksRouter)

app.listen(PORT, (err) => {
  console.log(err || `Server running on Port ${PORT} 🤘`)
})