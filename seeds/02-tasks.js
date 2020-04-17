
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: "task 1", notes:"task 1 notes", project_id: 1, completed: false},
        {description: "task 2", notes:"task 2 notes", project_id: 1, completed: false},
        {description: "task 3", notes:"task 3 notes", project_id: 3, completed: true}
      ]);
    });
};
