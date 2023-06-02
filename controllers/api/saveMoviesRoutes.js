const router = require('express').Router();
const { SavedMovies, MovieList, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    try {
        //use the id to find the correct movie from the movielist
        let movieData = await MovieList.findByPk(req.body.id)

        const savedMovie = await SavedMovies.create({
            user_id: req.session.user_id,
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

router.delete('/', withAuth, async (req, res) => {
    try {

        const saveMovieData = await SavedMovies.destroy({
            where: {
                user_id: req.session.user_id,
                movie_id: req.params.id,
            },
        });

        if (!saveMovieData) {
            res.status(404).json({ message: 'No project found with this id!' });
            return;
        }

        res.status(200).json(saveMovieData);
        console.log(myMovie)
    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
});


module.exports = router;
