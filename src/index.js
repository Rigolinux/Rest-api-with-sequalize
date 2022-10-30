
//imports
import app from "./app.js";
import {sequelize} from './databases/database.js';




const port = process.env.PORT || 3000;

//minute of video 32:03


const main = async () => {
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

try {
    //sincrionize the models with the database
    await sequelize.sync();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
    
}
}

main();