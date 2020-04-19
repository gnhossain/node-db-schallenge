
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name:"resource 1", description: 'resource description 1'},
        {name:"resource 2", description: 'resource description 2'},
        {name:"resource 3", description: 'resource description 3'}
      ]);
    });
};
