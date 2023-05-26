const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class MovieList extends Model {}

MovieList.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    review: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    rating: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'MovieList',
  }
);

module.exports = MovieList;
