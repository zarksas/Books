const mongoose = require('mongoose');



const newsSchema = mongoose.Schema({
    name: String,
    description: String
})

const Genres = mongoose.model('Genres', newsSchema);

module.exports = Genres;