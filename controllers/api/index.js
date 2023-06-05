const router = require('express').Router();
const userRoutes = require('./userRoutes');
const saveMovies = require('./saveMoviesRoutes');
const submitReview = require('./submitReview');

router.use('/users', userRoutes);
router.use('/save', saveMovies);
router.use('/review', submitReview);

module.exports = router;
