const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//Create our Exercise model
class Exercise extends Model {}

//Create fields/columns for Exercise model
Exercise.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
        },
    ex_name: {
        type: DataTypes.CHAR,
        allowNull: false
        },
    intensity: {
        type: DataTypes.CHAR,
    },
    ex_type: {
        type: DataTypes.CHAR,
        allowNull: false, 
    },
    ex_img: {
        //can store url or local route here to reference 
        //Josh mentioned this in the zoom call
        //Is useful to add here so that when calling this Exercise Instance we can grab the IMG aswell
        type: DataTypes.STRING,
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: false,
    underscored: true,
    modelName: 'exercise'
}
);

module.exports = Exercise;
