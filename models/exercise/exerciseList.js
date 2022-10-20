//This will hold all created Exercises
const {Model, DataTypes } = require('sequelize');
const { FOREIGNKEYS } = require('sequelize/types/query-types');
const sequelize = require('../../config/connection');

//Create our Exercise model
class Exercise extends Model {}

//Create fields/columns for Exercise model
Excercise.init(