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

    //Retrieve all the cocktails with a certain name & store them in res.locals
    getByName(req, res, next) {
        db.findByName(req.params.name)
            .then((cocktails) => {
                res.locals.data = cocktails;
                next();
            })
            .catch(e => next(e));
    },

    //Retrieve all the cocktails with certain fixing(s) & store them in res.locals
    getByFixn(req, res, next) {
        db.findByFixn(req.params.fixn)
            .then((cocktails) => {
                res.locals.data = cocktails;
                next();
            })
            .catch(e => next(e));
    },



}