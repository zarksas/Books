const Book = require('../models/Book.model')

module.exports.booksControllers = {
    postBooks: async(req, res) => {
         const { name, author, genres} = req.body;
         const books = await Book.create({
            name: name,
            author: author,
            genres: genres      
        })
        res.json(books)
    },

    deleteBooksById: async(req, res) => {
        await Book.findByIdAndRemove(req.params.id)
        res.json('книга удалена по id:' + req.params.id)
    },

    patchBooks: async(req, res) => {
        const { name, author, genres } = req.body;
       const books = await Book.findByIdAndUpdate({
            name: name,
            author: author,
            genres: genres
        })
        res.json(books)
    },

    getBooksById: async(req, res) => {
       const book = await Book.find(req.params.id)
        res.json(book)
    },

    getBooks: async(req, res) => {
        const books = await Book.find();
        res.json(books)
    },

    getAllBooksById: async(req, res) => {
       const books = await Book.find({genres : req.params.id})
        res.json(books)
    }
}