const router = require('express').Router();
const { Sequelize } = require('sequelize');
const MovieList = require('../../models/MovieList');
const SubmittedRating = require('../../models/SubmittedRating');

router.post('/', async (req, res) => {
  const { movieName, review } = req.body;

  try {
    const movie = await MovieList.findOne({ where: { name: movieName } });
    if (!movie) {
      return res.status(404).send(`No movie found with name: ${movieName}`);
    }

    const movieId = movie.id;

    await SubmittedRating.create({
      movie_id: movieId,
      review: review,
    });

    const avgReview = await SubmittedRating.findAll({
      where: {
        movie_id: movieId,
      },
      attributes: [
        [Sequelize.fn('AVG', Sequelize.col('review')), 'avg_review'],
      ],
    });

    const average = avgReview[0].getDataValue('avg_review');
    movie.review = average;
    await movie.save();

    res.status(200).send(`Successfully submitted review for ${movieName}`);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

