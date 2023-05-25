const User = require('./User');
const Project = require('./Project');
const MovieList = require('./MovieList');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Project, MovieList };
