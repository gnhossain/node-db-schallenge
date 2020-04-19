
exports.up = function(knex) {

    return knex.schema
    .createTable("projects", tbl => {
        tbl.increments();
        tbl
            .string("name")
            .notNullable();
        tbl
            .string("description");
        tbl
            .boolean("completed")
            .notNullable()
            .defaultTo(false)
    })

    .createTable("tasks", tbl => {
        tbl.increments();
        tbl
            .string("description")
            .notNullable();
        tbl
            .string("notes");
        tbl
            .boolean("completed")
            .notNullable()
            .defaultTo(false)
        tbl
            .integer("project_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("projects")
            .onUpdate("CASCADE")
            .onDelete("RESTRICT");
    })
    .createTable("resources", tbl => {
        tbl.increments();
        tbl
            .string("name")
            .notNullable();
        tbl
            .string("description");
    })

    .createTable("project-resources", tbl => {
        tbl.increments();
        tbl
            .integer("project_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("projects")
            .onUpdate("CASCADE")
            .onDelete("RESTRICT");
        tbl
            .integer("resource_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("resources")
            .onUpdate("CASCADE")
            .onDelete("RESTRICT");
    })
  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("project-resources")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects");
};
