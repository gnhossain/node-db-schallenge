
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name:" project 1", description: 'description 1'},
        {name:" project 2", description: 'description 2'},
        {name:" project 3", description: 'description 3'}
      ]);
    });
};
