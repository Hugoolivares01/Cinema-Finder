const User = require('./User');
const MovieList = require('./MovieList');
const SavedMovies = require('./SavedMovies');


User.hasMany(SavedMovies, { foreignKey: 'user_id' });

// SavedMovies.belongsTo(User, { foreignKey: 'userId' });
// SavedMovies.belongsTo(MovieList, { foreignKey: 'MovieListId' });
// MovieList.belongsToMany(User, { through: SavedMovies });
// User.belongsToMany(SavedMovies, { through: 'UserMovies' })
// SavedMovies.belongsToMany(User, { through: 'UserMovies' });

module.exports = { User, MovieList, SavedMovies };
