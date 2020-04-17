const express = require("express");
const router = express.Router();

const db = require("../models/resource-model");

router.get('/', (req,res) => {
    db.getResources()
        .then(resources => {
            res.status(201).json(resources)
        })
        .catch(err => {
            res.status(500).json({
                message: "Error getting resources: ", err
            })
        })
});

router.get("/:id", (req, res) => {
    const id = req.params.id
    db.getResourceById(id) 
    .then(resource => {
            
            res.status(201).json(resource)
    })
    .catch(err => {
        res.status(500).json({
            message: "Error getting resource: ", err
        })
    })
});

router.post("/", (req,res) => {
    const r = req.body;
    db.addResource(r)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(err => {
            res.status(500).json({
                message: "Error adding resource: ", err
            })
        })
})

module.exports = router;