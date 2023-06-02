const router = require('express').Router();
const { SavedMovies, MovieList, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    try {
        //use the id to find the correct movie from the movielist
        let movieData = await MovieList.findByPk(req.body.id)

        let resave = await SavedMovies.findOne({
            where: {
                movie_id: movieData.id,
                user_id: req.session.user_id,
            },
        })

        if (!resave) {
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
        }
        else {
            return;
        }

    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
});

router.delete('/', withAuth, async (req, res) => {
    try {
        delMovie = await SavedMovies.destroy({
            where: {
                movie_id: req.body.id,
                user_id: req.session.user_id,
            },
        });

        res.status(200).json(delMovie)
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
});


module.exports = router;
