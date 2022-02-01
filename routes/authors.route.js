const { Router } = require('express');
const router = Router();
const { authorsControllers } = require('../controllers/authors.controllers')



router.post('/authors', authorsControllers.postAuthors);
router.delete('/authors/:id', authorsControllers.deleteAuthorsById)













module.exports = router;