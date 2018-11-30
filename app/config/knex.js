const path = require('path');

module.exports = {
  client: 'sqlite3',
  connection: {
    // host: config.db.host,
    // user: config.db.username,
    // password: config.db.password || process.env.DB_PASSWORD,
    filename: "../../database.sqlite",
    timezone: 'UTC',
    charset: 'utf8mb4',
  },
  useNullAsDefault: true,
  migrations: {
    directory: path.join(__dirname, 'app', '../../migrations'),
    tableName: 'knex_migrations',
  },
  seeds: {
    directory: path.join(__dirname, 'app', '../../seeds'),
  }
};
