const path = require('path');
const dbPath = path.resolve(__dirname, '../../database.sqlite');

module.exports = {
  client: 'sqlite3',
  connection: {
    // host: config.db.host,
    user: 'root',
    password: "",
    filename: dbPath,
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
