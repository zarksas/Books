const mongoose = require('mongoose');



const newsSchema = mongoose.Schema({
    name: String,
    description: String
})

const Author = mongoose.model('Author', newsSchema);

module.exports = Author;