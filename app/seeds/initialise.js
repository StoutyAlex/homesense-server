
exports.seed = function (knex, Promise) {
  return Promise.all([
    knex('sensors').del(),
  ])
  .then(() => knex('sensors').insert([
    {
      id: "123123123123",
      status: 'DEAD',
      last_heard: null,
    },
  ]));
};
