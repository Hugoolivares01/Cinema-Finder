const User = require('./User');
const MovieList = require('./MovieList');
const SavedMovies = require('./SavedMovies');
const SubmittedRating = require('./SubmittedRating');


User.hasMany(SavedMovies, { foreignKey: 'user_id' });


module.exports = { User, MovieList, SavedMovies, SubmittedRating };
