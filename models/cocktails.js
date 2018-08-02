/**
 * @module cocktails.js
 * @desc this module holds the CRUD methods in SQL that connect to caocktail_db database. 
 */

// Import pgp through db config/connection
const db = require('../config/connection');

module.exports = {
    //Find & List All cocktails
    findAll() {
        return db.many(`
            SELECT name, fixings, recipe
            FROM cocktails
            ORDER BY cocktails.name`
        );
    },

    //Find & list cocktails based on user-inputted cocktail name
    findByName(inputName) {
        inputName = `%${inputName}%`;
        return db.many(`
            SELECT name, fixings, recipe
            FROM cocktails
            WHERE name LIKE $1`, inputName
        );
    },

    //Find & list cocktails based on user-inputted cocktail name
    findByFixn(inputFixn) {
        inputFixn = `%${inputFixn}%`;
        return db.many(`
            SELECT name, fixings, recipe
            FROM cocktails
            WHERE fixings LIKE $1`, inputFixn
        );
    },






}