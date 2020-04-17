const db = require("../data/db-config")

module.exports = {
    getTasks,
    addTask,
    getTaskById
}

function getTasks() {
    return db("tasks as t")
        .join("projects as p", "t.project_id", "p.id")
        .select("t.id","t.description", "t.notes", "t.completed", "p.name as project_name", "p.description as project_description")

}

function getTaskById(id) {
    return db("tasks as t")
        .where({id})
}

function addTask(task){
    return db('tasks').insert(task, 'id');
}

