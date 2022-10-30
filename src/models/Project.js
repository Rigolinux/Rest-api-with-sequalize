
//import conection to database
import {sequelize} from '../databases/database.js';

//import types of data for the model
import {DataTypes} from 'sequelize'

//get model Task
import {Task} from './Task.js';

//create model of table project
export const Project = sequelize.define('project', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false

    },
    priority:{
        type: DataTypes.INTEGER,
    },
    description:{
        type: DataTypes.STRING,
    },
   
})

//relate the models
Project.hasMany(Task, {
    foreinkey: "projectId",
    sourceKey: "id",
  });
  Task.belongsTo(Project, { foreinkey: "projectId", targetId: "id" });