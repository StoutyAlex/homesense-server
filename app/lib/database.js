const knexConfig = require('../config/knex');
const context = require('knex')(knexConfig);
const Bookshelf = require('bookshelf')(context);

Bookshelf.plugin('registry');
module.exports = Bookshelf;
