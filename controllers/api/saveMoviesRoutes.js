const router = require('express').Router();
const { SavedMovies, MovieList, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    try {
        //use the id to find the correct movie from the movielist
        let movieData = await MovieList.findByPk(req.body.id)
        // movieData.get({ plain: true });
        const savedMovie = await SavedMovies.create({
            user_id: req.session.user_id,
            // userId: req.session.user_id,
            // MovieListId: movieData.id,
            movie_id: movieData.id,
            genre: movieData.genre,
            name: movieData.name,
            review: movieData.review,
            rating: movieData.rating
        });
        res.status(200).json(savedMovie)
        console.log("Successfully created a new saved movie!")
        console.log(savedMovie)
        console.log(movieData)
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
});


module.exports = router;
