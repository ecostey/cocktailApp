/**
 * @module cocktails.js
 * @desc this module holds the CRUD methods in SQL that connect to caocktail_db database. 
 */

// Import pgp through db config/connection
const db = require('../config/connection');

module.exports = {
    //Find & List All cocktails ()
    findAll() {
        return db.many(`
            SELECT *
            FROM cocktails
            ORDER BY cocktails.name`
        );
    },



}