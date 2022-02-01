const { Router } = require('express');
const router = Router();
const { booksControllers } = require('../controllers/books.controllers')



router.post('/books', booksControllers.postBooks);
router.delete('/books/:id', booksControllers.deleteBooksById);
router.patch('/books', booksControllers.patchBooks);
router.get('/books/:id', booksControllers.getBooksById);
router.get('/books', booksControllers.getBooks);
router.get('/books/:id', booksControllers.getAllBooksById)












module.exports = router;