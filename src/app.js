import express from 'express'

const app = express();


//routes
import proyectsroutes from './routes/proyects.routes.js'
import taskroutes from './routes/task.routes.js'

//middlewares
app.use(express.json());

app.use(proyectsroutes);
app.use(taskroutes);

export default app
