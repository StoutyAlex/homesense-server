const path = require('path');
const config = require('./loader').load();

module.exports = {
  client: 'sqlite',
  connection: {
    // host: config.db.host,
    // user: config.db.username,
    // password: config.db.password || process.env.DB_PASSWORD,
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: "database.sqlite",
    timezone: 'UTC',
    charset: 'utf8mb4',
  }
};
