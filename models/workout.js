const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Workout extends Model {}

Workout.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    //FK to user id
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model:'user',
        key:'id'
      }
    },
    exercise_list: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    //Getting STRING with a FUNCTION to find choosen EXERCISES
    //and sending to this exerciseList Attribute as an ARRAY
    exercise_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'exercise',
        key: 'id'
      }
    }
},
{
    //connect exerciseList here
    sequelize,
    timestamps: false,
    freezeTableName: false,
    underscored: true,
    modelName: 'workout'
}
);

module.exports = Workout;