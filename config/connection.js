const config = require('./db_config');
const pgp = require('pg-promise')();

module.exports = pgp(config);