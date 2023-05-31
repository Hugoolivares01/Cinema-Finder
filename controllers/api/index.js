const router = require('express').Router();
const userRoutes = require('./userRoutes');
const saveMovies = require('./saveMoviesRoutes');

router.use('/users', userRoutes);
router.use('/save', saveMovies);


module.exports = router;
