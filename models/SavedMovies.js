const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const MovieList = require("./MovieList")
const User = require("./User")


class SavedMovies extends Model { }

SavedMovies.init(
  {
    movie_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
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
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // movie_id: {
    //   type: DataTypes.INTEGER,
    //   unique: true,
    //   references: {
    //     model: MovieList,
    //     key: 'id'
    //   },
    // },
    // user_id: {
    //   type: DataTypes.INTEGER,
    //   unique: true,
    //   references: {
    //     model: User,
    //     key: 'id',
    //   },
    // },
    // title: {
    //   type: DataTypes.STRING,
    //   unique: true,
    //   references: {
    //     model: MovieList,
    //     key: 'title',
    //   },
    // }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'SavedMovies',
  }
);

module.exports = SavedMovies;
