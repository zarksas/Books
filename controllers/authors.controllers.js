const Author = require('../models/Author.model');


module.exports.authorsControllers = {
    postAuthors: async(req, res) => {
        const { name, description} = req.body;
        const author = await Author.create({
            name: name,
            description: description
        })
        res.json(author)
    },

    deleteAuthorsById: async(req, res) => {
        await Author.findByIdAndRemove(req.params.id)
        res.json('автор удален по id:' + req.params.id)
    }
    
}