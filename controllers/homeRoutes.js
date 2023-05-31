const router = require('express').Router();
const { Project, User, MovieList } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    res.render('Splash');
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


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
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
    res.render('Movies', {
      movies,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
