const express = require('express');
const router = express.Router();
const { Movie } = require('../models');


router.post('/review', async (req, res) => {
  try {
    const { movieName, review } = req.body;
    const movie = await Movie.findOne({ where: { name: movieName } });
    if (movie) {
      const totalReviews = movie.total_reviews + 1;
      const currentRating = movie.rating;
      const newRating = (currentRating + parseInt(review)) / totalReviews;
      await Movie.update(
        { total_reviews: totalReviews, rating: newRating },
        { where: { name: movieName } }
      );
      res.redirect('/movies');
    } else {
      res.status(404).json({ message: 'Movie not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
