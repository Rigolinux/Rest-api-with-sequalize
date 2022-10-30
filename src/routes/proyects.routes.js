import { Router } from "express";

//controllers

import { createProyect, getProyects, getOneProyect, deleteProyect, updateProyect,getTasks } from '../controllers/proyectsControllers.js'

const router = Router();

router.get("/proyects", getProyects);
router.post("/proyects",createProyect);
router.put("/proyects/:id", updateProyect);
router.delete("/proyects/:id", deleteProyect);
router.get("/proyects/:id",getOneProyect);

// 
router.get("/proyects/:id/tasks", getTasks);

export default router;
