const { Router } = require('express');
const router = Router();
const { genresControllers } = require('../controllers/genres.controllers')



router.post('/genres', genresControllers.postGenres);
router.delete('/genres/:id', genresControllers.deleteGenresById);
router.get('/genres', genresControllers.getGenresById)








module.exports = router;