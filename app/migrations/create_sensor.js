
exports.up = function(knex, Promise) {
  return knex.schema.createTable('sensors', function(t) {
    t.string('id', 50).primary();
    t.string('status').nullable();
    t.datetime('last_heard').nullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('sensors');
};
