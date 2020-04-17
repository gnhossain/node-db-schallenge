const db = require("../data/db-config")

module.exports = {
    getProjects,
    addProject,
    getProjectById
}

function getProjects() {
    return db("projects")
}

function getProjectById(id) {
    return db("projects as p")
    .where({id})
}

function addProject(project){
    return db('projects').insert(project, 'id');
}

