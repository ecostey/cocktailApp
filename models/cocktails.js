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

    //Find & show a cocktail by it's id.
    findOne(id) {
        return db.one(`
            SELECT name, fixing, recipe
            FROM cocktails
            WHERE id = $1`, id);
    },


    //Create and add a new cocktail to cocktails table
    create(newCocktail) {
        return db.one(`
        INSERT INTO cocktails
        (name, fixing, recipe)
        VALUES
        ($1, $2, $3)
        RETURNING *
        `, [newCocktail.name, newCocktail.fixing, newCocktail.recipe]);
      },


      //Update 1 Cocktail (Select the cocktail by its id)
      update(id, modifCocktail) {
        return db.query(`
        UPDATE cocktails
        SET 
          name = $2, 
          fixing = $3,
          recipe = $4
        WHERE id = $1
        RETURNING *
        `, [id, modifCocktail.name, modifCocktail.fixing, modifCocktail.recipe]);
      },

      //Destroy 1 cocktail (select the cocktail by its id)
      delete(id) {
        return db.query(`
        DELETE FROM cocktails
        WHERE id = $1
        `, id);
      }

    };
    
   
   
   


    // //Find & list cocktails based on user-inputted cocktail name
    // findByFixn(inputFixn) {
    //     inputFixn = `%${inputFixn}%`;
    //     return db.many(`
    //         SELECT name, fixings, recipe
    //         FROM cocktails
    //         WHERE fixings LIKE $1`, inputFixn
    //     );
    // },