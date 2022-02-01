const mongoose = require('mongoose');



const newsSchema = mongoose.Schema({
    text:  String,
    nameAuthor: String,
    bookId: {
        ref: "book",
        type: mongoose.SchemaTypes.ObjectId
    }

})

const Review = mongoose.model('Review', newsSchema);

module.exports = Review;