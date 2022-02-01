const Review = require('../models/Review.model');

module.exports.reviewControllers = {
    postReviewById: async(req, res) => {
        const { text, nameAuthor, bookId} = req.body;
        const review = await Review.create({
            text: text,
            nameAuthor: nameAuthor,
            bookId: req.params.id
        })
        res.json(review)
    },

    deleteReviewsById: async(req, res) => {
        await Review.findByIdAndRemove(req.params.id)
        res.json('Рецензия удалена по  id:' + req.params.id)
    },

    getAllReviewsById: async(req, res) => {
        await Review.find({bookId : req.params.id})
        res.json('Все рецензии выведены к этой книге по id:' + req.params.id)
    }
}