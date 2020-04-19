const db = require("../data/db-config")

module.exports = {
    getResources,
    addResource,
    getResourceById
}

function getResources() {
    return db("resources")
}

function getResourceById(id) {
    return db("resources as r")
    .where({id})
}

function addResource(resource){
    return db('resources').insert(resource, 'id');
}