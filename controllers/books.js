const Book = require('../models/Book.js')

module.exports = {
  index: (req, res) => {
    Book.find({}, (err, allBooks) => {
      res.json(allBooks)
    })
  },

  create: (req, res) => {
    Book.create(req.body, (err, savedBook) => {
      res.json({ success: true, message: "book created.", book: savedBook })
    })
  }
}