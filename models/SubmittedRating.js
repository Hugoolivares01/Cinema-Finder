const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SubmittedRating extends Model { }

SubmittedRating.init(
  {
    movie_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },    
    rating: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'SubmittedRating',
  }
);

module.exports = SubmittedRating;
