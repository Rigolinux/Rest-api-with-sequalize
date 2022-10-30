

//import conection to database
import {sequelize} from '../databases/database.js';

//import types of data for the model
import {DataTypes} from 'sequelize'

//create model of table task
export const Task = sequelize.define('task', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    done:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    
});