//models
import { Task } from "../models/Task.js";
import { Project } from "../models/Project.js";

export const getTasks = async (req, res) => {
  Task.findAll()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((err) => {
      return res.status(500).json({ message: err.message });
    });
};

export const createTask = async (req, res) => {
  const { name, done, projectId } = req.body;
  const proyect = Project.findByPk(projectId)
    .then((proyect) => {
      if (!proyect) {
        throw new Error("Project not found");
      } else {
        const task = Task.create({
          name,
          done,
          projectId,
        }).then((task) => {
          return res.status(201).json(task);
        });
      }
    })
    .catch((err) => {
      return res.status(500).json({ message: err.message });
    });
};

export const getOneTask = async (req, res) => {
  const { id } = req.params;
  Task.findByPk(id)
    .then((task) => {
      if (!task) {
        throw new Error("Task not found");
      } else {
        return res.status(200).json(task);
      }
    })
    .catch((err) => {
      return res.status(500).json({ message: err.message });
    });
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  Task.destroy({
    where: {
      id,
    },
  })
    .then(() => {
      res.status(204).json({ message: "Task deleted" });
    })
    .catch((error) => {
      return res.status(500).json({ message: error.message });
    });
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { name, done, projectId } = req.body;
  
    const proyect = Project.findByPk(projectId).then(async (proyect) => {
      if (!proyect) {
        throw new Error("Project not found");
      } else {
        const task = await Task.findByPk(id)
          .then(async (task) => {
            if (task) {
              task.name = name;
              task.done = done;
              task.projectId = projectId;
              await task.save().then((task) => {
                return res.send(task);
              });
            } else {
              throw new Error("Task not found");
            }
          })
          .catch((err) => {
            return res.status(500).json({ message: err.message });
          });
      }
    }).catch((err) => {
        return res.status(500).json({ message: err.message });
    });
  
};
