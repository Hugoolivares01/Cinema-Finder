const router = require('express').Router();
const { SavedMovies, MovieList, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {

    } catch (error) {

    }
})

router.post('/', withAuth, async (req, res) => {
    try {

        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: SavedMovies }],
        });

        const user = userData.get({ plain: true });

        //use the id to find the correct movie from the movielist
        let movieData = await MovieList.findOne(
            {
                where: {
                    id: req.body.id
                }
            }
        )

        console.log(movieData)

        //create the saved movie in the saved movie database
        await SavedMovies.create({ id: movieData.id, genre: movieData.genre, name: movieData.name, review: movieData.review, rating: movieData.rating, user_id: user.id });

        // //pull in all the movies to rerender the handlebars template
        // const allMovieData = await MovieList.findAll();
        // const movies = allMovieData.map((movie) => movie.get({ plain: true }));
        // const savedMovieData = await SavedMovies.findAll();
        // const savedMovies = savedMovieData.map((saved) => saved.get({ plain: true }));

        // //render the handlebars template
        // res.render('Movies', {
        //     movies,
        //     logged_in: true,
        //     savedMovies
        // });

        console.log(movieData.name)
        console.log("Successfully created a new saved movie!")
    } catch (err) {
        res.status(400).json(err);
    }
});

// router.post('/', async (req, res) => {
//   try {
//     const userData = await User.create(req.body);

//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;

//       res.status(200).json(userData);
//     });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.post('/login', async (req, res) => {
//   try {
//     const userData = await User.findOne({ where: { email: req.body.email } });

//     if (!userData) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect email or password, please try again' });
//       return;
//     }

//     const validPassword = await userData.checkPassword(req.body.password);

//     if (!validPassword) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect email or password, please try again' });
//       return;
//     }

//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;

//       res.json({ user: userData, message: 'You are now logged in!' });
//     });

//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.post('/logout', (req, res) => {
//   if (req.session.logged_in) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//   }
// });

module.exports = router;
