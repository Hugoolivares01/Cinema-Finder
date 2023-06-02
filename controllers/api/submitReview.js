const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Sequelize } = require('sequelize');

router.post('/reviews', async (req, res) => {
    const { movieName, review } = req.body;
  
    const movie = await MovieList.findOne({ where: { name: movieName } });
    if (!movie) {
      return res.status(404).send(`No movie found with name: ${movieName}`);
    }
  
    const movieId = movie.id;
  
    await SubmittedRatings.create({
      movie_id: movieId,
      review: review,
    });
  
    const avgReview = await SubmittedRatings.findAll({
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
  });

  module.exports = router;