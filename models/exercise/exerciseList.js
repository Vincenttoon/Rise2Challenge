const {Model, DataTypes } = require('sequelize');
const { FOREIGNKEYS } = require('sequelize/types/query-types');
const sequelize = require('../../config/connection');

//Create our Exercise model
class ExerciseList extends Model {}

//Create fields/columns for Exercise model
ExcerciseList.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
        },
    name: {
        type: DataTypes.CHAR,
        allowNull: false
        },
    description: {
        type: DataTypes.CHAR,
    },
    //references exercise base which holds all info about exercise
    ex_base_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'base',
            key: 'id'
        }
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'exerciseList'
}
);

module.exports = ExerciseList;
