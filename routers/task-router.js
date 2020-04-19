const express = require("express");
const router = express.Router();

const db = require("../models/tasks-model");

router.get('/', (req,res) => {
    db.getTasks()
        .then(tasks => {
            tasks.forEach(task => {
                if (task.completed) {
                    task.completed = "true"
                } else {
                    task.completed = "false"
                }
            })
            res.status(201).json(tasks)
        })
        .catch(err => {
            res.status(500).json({
                message: "Error getting tasks: ", err
            })
        })
});

router.get("/:id", (req, res) => {
    const id = req.params.id
    db.getTaskById(id) 
    .then(task => {
            if (task.completed) {
                task.completed = "true"
            } else {
                task.completed = "false"
            }
            
            res.status(201).json(task)
    })
    .catch(err => {
        res.status(500).json({
            message: "Error getting tasks: ", err
        })
    })
});

router.post("/", (req,res) => {
    const t = req.body;
    db.addTask(t)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(err => {
            res.status(500).json({
                message: "Error adding task: ", err
            })
        })
})

module.exports = router;