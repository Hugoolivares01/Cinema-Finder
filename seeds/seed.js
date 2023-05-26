const sequelize = require('../config/connection');
const { User, MovieList } = require('../models');

const userData = require('./userData.json');
const MovieData = require('./MovieList.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const movies = await MovieList.bulkCreate(MovieData);

  process.exit(0);
};

seedDatabase();
