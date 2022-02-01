const mongoose = require('mongoose');



const newsSchema = mongoose.Schema({
    name : String,
    author: {
        ref: "author",
        type: mongoose.SchemaTypes.ObjectId
    },
    genres: {
        ref: "genres",
        type: mongoose.SchemaTypes.ObjectId
    }
})

const Book = mongoose.model('Book', newsSchema);

module.exports = Book;