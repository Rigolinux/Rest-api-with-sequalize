
//models
import { Project } from "../models/Project.js";
import { Task } from "../models/Task.js";

export const getProyects = async (req, res) => {

    await Project.findAll().then((projects) => {
        res.json(projects);

    }).catch((err) => {
        return res.status(500).json({message: error.message});
    });
};


export const createProyect = async (req, res) => {
  const { name, priority, description } = req.body;

  //create new project
  Project.create({
    name,
    priority,
    description,
  })
    .then((proyect) => {
      res.send(proyect);
    })
    .catch((error) => {
        return res.status(500).json({message: error.message});
    });
};

export const deleteProyect = async (req, res) => {
  const { id } = req.params;
  Project.destroy({
    where: {
      id,
    },
  })
    .then(() => {
      res.status(204).json({ message: "Proyect deleted" });
    })
    .catch((error) => {
        return res.status(500).json({message: error.message});
    });
};

export const updateProyect = async (req, res) => {
  const { id } = req.params;
  const { name, priority, description } = req.body;
    try{
  const proyect = await Project.findByPk(id);
    proyect.name = name;
    proyect.priority = priority;
    proyect.description = description;
    await proyect.save().then((proyect) => {
        return res.send(proyect);
    })
    }catch(error){
        return res.status(500).json({message:error.message});
    }
  
    
};

export const getOneProyect = async (req, res) => {
  const { id } = req.params;
  Project.findOne({
    where: {
      id,
    },
  })
    .then((project) => {
      if (project) {
        res.send(project);
      } else {
        res.send("not found");
      }
    })
    .catch((error) => {
      res.send("error: " + error);
    });
};

export const getTasks = async (req, res) => {
    Task.findAll({
        where: {
            projectId: req.params.id
        }
    }).then((task) => {
        if(task.length === 0) {
          throw new Error('No tasks found');
        } 
        else  {
            res.send(task);
        }
      }
    ).catch((error) => {
        return res.status(500).json({message: error.message});
    });
}
