const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const MovieList = require('./MovieList');

class SubmittedRatings extends Model { }

SubmittedRatings.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    movie_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'MovieList',
        key: 'id',
      }
    },
    review: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 10,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'SubmittedRatings',
  }
);

module.exports = SubmittedRatings;
