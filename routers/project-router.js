const express = require("express");
const router = express.Router();

const db = require("../models/projects-model");

router.get('/', (req,res) => {
    db.getProjects()
        .then(projects => {
            projects.forEach(project => {
                if (project.completed) {
                    project.completed = "true"
                } else {
                    project.completed = "false"
                }
            })
            res.status(201).json(projects)
        })
        .catch(err => {
            res.status(500).json({
                message: "Error getting projects: ", err
            })
        })
});

router.get("/:id", (req, res) => {
    const id = req.params.id
    db.getProjectById(id) 
    .then(project => {
        project.forEach(project => {
            if (project.completed) {
                project.completed = "true"
            } else {
                project.completed = "false"
            }
            db.getTasksByProjectId(id)
            .then(tasks => {
                tasks.forEach(task => {
                    if (task.completed) {
                        task.completed = "true"
                    } else {
                        task.completed = "false"
                    }
                })
                project.tasks = tasks;
                res.status(201).json(project)
            })
            
        })
    })
    .catch(err => {
        res.status(500).json({
            message: "Error getting project: ", err
        })
    })
});

router.post("/", (req,res) => {
    const proj = req.body;
    db.addProject(proj)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => {
            res.status(500).json({
                message: "Error adding project: ", err
            })
        })
})

module.exports = router;