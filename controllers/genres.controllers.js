const Genres = require('../models/Genres.model');

module.exports.genresControllers = {
    postGenres: async(req, res) => {
        const { name, description} = req.body;
        const genres = await Genres.create({
            name: name,
            description: description
        })
        res.json(genres)
    },

    deleteGenresById: async(req, res) => {
        await Genres.findByIdAndRemove(req.params.id)
        res.json('жанр удален по id:' + req.params.id)
    },

    getGenresById: async(req, res) => {
        const genres = await Genres.find();
        res.json(genres)
    }
}