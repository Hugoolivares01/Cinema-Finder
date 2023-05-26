const User = require('./User');
const MovieList = require('./MovieList');
const SavedMovies = require('./SavedMovies');

User.hasMany(Movies, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

MovieList.belongsTo(User, {
  foreignKey: 'user_id'
});

SavedMovies.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, MovieList, SavedMovies };
