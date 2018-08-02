//Import cocktails db module
const db = require('../models/cocktails');

//export controller functions
module.exports = {

    //Retrieve ALL the cocktails & store them in res.locals
    getAll(req, res, next) {
        db.findAll()
            .then((cocktails) => {
                res.locals.data = cocktails;
                next();
            })
            .catch(e => next(e));
    },

    

}