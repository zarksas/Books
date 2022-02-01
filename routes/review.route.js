const { Router } = require('express');
const router = Router();
const { reviewControllers } = require('../controllers/review.controllers')



router.post('/review/:id', reviewControllers.postReviewById);
router.delete('/review/:id', reviewControllers.deleteReviewsById)
router.get('/rewiews/:id', reviewControllers.getAllReviewsById)













module.exports = router;