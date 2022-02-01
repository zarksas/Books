const Book = require('../models/Book.model')

module.exports.booksControllers = {
    postBooks: async(req, res) => {
         const { name, author, genres} = req.body;
         const book = await Book.create({
            name: name,
            author: author,
            genres: genres      
        })
        res.json(book)
    },

    deleteBooksById: async(req, res) => {
        await Book.findByIdAndRemove(req.params.id)
        res.json('книга удалена по id:' + req.params.id)
    },

    patchBooks: async(req, res) => {
        const { name, author, genres } = req.body;
        await Book.findByIdAndUpdate({
            name: name,
            author: author,
            genres: genres
        })
        res.json('книга изменена')
    },

    getBooksById: async(req, res) => {
        await Book.find(req.params.id)
        res.json('Книга выведена по id:' + req.params.id)
    },

    getBooks: async(req, res) => {
        const books = await Book.find();
        res.json(books)
    },

    getAllBooksById: async(req, res) => {
        await Book.find({genres : req.params.id})
        res.json('выведены все книги из жанра по id:' + req.params.id)
    }
}