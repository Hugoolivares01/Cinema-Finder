const router = require('express').Router();
const { User, MovieList, SavedMovies } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    res.render('Splash', {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/signup', async (req, res) => {
  try {
    res.render('signup', {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.redirect('/');
    }
  });
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/movies');
    return;
  }

  res.render('login');
});

router.get('/movies', withAuth, async (req, res) => {
  try {
    const movieData = await MovieList.findAll();
    const movies = movieData.map((movie) => movie.get({ plain: true }));

    const MovieD = await MovieList.findAll();
    const moviesort = MovieD.map((movie) => movie.get({ plain: true }));
    const topMovies = moviesort.sort((a, b) => b.review - a.review).slice(0, 10);

    const savedMovieData = await SavedMovies.findAll({ where: { user_id: req.session.user_id } });
    const savedMovies = savedMovieData.map((saved) => saved.get({ plain: true }));

    res.render('Movies', {
      movies,
      topMovies,
      logged_in: true,
      savedMovies
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
