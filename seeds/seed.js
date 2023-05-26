const sequelize = require('../config/connection');
const { User, Project, MovieList } = require('../models');

const userData = require('./userData.json');
const projectData = require('./projectData.json');
const MovieData = require('./MovieList.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const movies = await MovieList.bulkCreate(MovieData);

  for (const project of projectData) {
    await Project.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  

  process.exit(0);
};

seedDatabase();
