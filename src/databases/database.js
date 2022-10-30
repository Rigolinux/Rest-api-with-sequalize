
//read the documentation of the library to know how to use it
import { Sequelize } from "sequelize";


//create a new instance of the class in sequelize

export const sequelize = new Sequelize('proyects-db', "postgres", "123", {
    host: "localhost",
    dialect: "postgres",
    port: 50432,
    
});