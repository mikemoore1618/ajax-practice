const
  mongoose = require('mongoose'),
  bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    pages: Number
  }, { timestamps: true })

const Book = mongoose.model('Book', bookSchema)

module.exports = Book