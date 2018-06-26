const
  express = require('express'),
  booksRouter = new express.Router(),
  booksCtrl = require('../controllers/books.js')

booksRouter.get('/', booksCtrl.index)
booksRouter.post('/', booksCtrl.create)

module.exports = booksRouter