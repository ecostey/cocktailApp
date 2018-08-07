//const config = require('./db_config');
const pgp = require('pg-promise')();
const opts = {database: 'cocktails_db'};
const db = pgp(opts);

module.exports = db;
//module.exports = pgp(config);