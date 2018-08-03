const db = require('../config/connection');

module.exports = {
    
     //Find & List All of a user's favorited cocktails
     findAllFavs(id) {
        return db.many(`
            SELECT name, fixings, recipe
            FROM user_favorites
            JOIN cocktails on user_favorites
            WHERE user_id = $1`, id);
    },

    // //Allow Users to make updates to their favorited cocktails
    // updateFav(id) {
    //     return db.one(`
    //     UPDATE user_favorites
    //     SET /$name/, /$fixings/, /$recipe/
    //     FROM user_favorites
    //     WHERE user_favorites.cocktails_id = cocktails.id
    //     `)
    // },

    //Users can delete cocktails from their 'favorites' list
    //Use pgpromise to delete ONE row (by cocktail_id) from the favorites/join table.
    deleteAFav(id) {
        return db.none(`
        DELETE FROM user_favorites
        WHERE id = $1
        `, id);
    },





}

