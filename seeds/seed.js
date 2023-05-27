const sequelize = require('../config/connection');
const { User, MovieList } = require('../models');

const userData = require('./userData.json');
const movieData = require('./MovieList.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // Sort the movie list by reviews in descending order
  const sortedMovies = movieData.sort((a, b) => b.review - a.review);

  const movies = await MovieList.bulkCreate(sortedMovies);

  process.exit(0);
};

seedDatabase();
