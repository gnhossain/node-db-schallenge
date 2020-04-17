const db = require("../data/db-config")

module.exports = {
    getProjects,
    addProject,
    getProjectById,
    getTasksByProjectId
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

function getTasksByProjectId(id){
    return db("tasks as t").select("t.id", "t.description", "t.notes", "t.completed")
        .where({project_id: id})
}