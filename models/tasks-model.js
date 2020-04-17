const db = require("../data/db-config")

module.exports = {
    getTasks,
    addTask,
    getTaskById
}

function getTasks() {
    return db("tasks")
}

function getTaskById(id) {
    return db("tasks as t")
    .where({id})
}

function addTask(task){
    return db('tasks').insert(task, 'id');
}

