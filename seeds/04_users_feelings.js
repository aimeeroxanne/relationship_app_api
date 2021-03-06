
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_feelings').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_feelings').insert([
        {id: 1, user_id: 1, feeling_id: 1},
        {id: 2, user_id: 1, feeling_id: 2},
        {id: 3, user_id: 1, feeling_id: 3},
        {id: 4, user_id: 1, feeling_id: 4},
        {id: 5, user_id: 1, feeling_id: 5},
        {id: 6, user_id: 1, feeling_id: 6},
        {id: 7, user_id: 1, feeling_id: 7},
        {id: 8, user_id: 1, feeling_id: 8},
        {id: 9, user_id: 1, feeling_id: 9},
        {id: 10, user_id: 1, feeling_id: 10},
        {id: 11, user_id: 1, feeling_id: 11},
        {id: 12, user_id: 1, feeling_id: 12},
        {id: 13, user_id: 1, feeling_id: 13},
        {id: 14, user_id: 1, feeling_id: 14},
        {id: 15, user_id: 2, feeling_id: 1},
        {id: 16, user_id: 2, feeling_id: 2},
        {id: 17, user_id: 2, feeling_id: 3},
        {id: 18, user_id: 2, feeling_id: 4},
        {id: 19, user_id: 2, feeling_id: 5},
        {id: 20, user_id: 2, feeling_id: 6},
        {id: 21, user_id: 2, feeling_id: 7},
        {id: 22, user_id: 2, feeling_id: 8},
        {id: 23, user_id: 2, feeling_id: 9},
        {id: 24, user_id: 2, feeling_id: 10},
        {id: 25, user_id: 2, feeling_id: 11},
        {id: 26, user_id: 2, feeling_id: 12},
        {id: 27, user_id: 2, feeling_id: 13},
        {id: 28, user_id: 2, feeling_id: 14},

      ]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_feelings_id_seq', (SELECT MAX(id) FROM users_feelings));"
      );
    });
};
