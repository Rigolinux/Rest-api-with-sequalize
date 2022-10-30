import { Router } from "express";

//controllers
import { createTask, getTasks, getOneTask, deleteTask, updateTask } from '../controllers/taskControllers.js'

const router = Router();

router.get("/tasks", getTasks);
router.post("/tasks",createTask);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);
router.get("/tasks/:id",getOneTask);



export default router;

