//Import cocktails db module
const db = require('../models/cocktails');

//export controller functions
module.exports = {

    //Retrieve ALL the cocktails & store them in res.locals
    getAll(req, res, next) {
        db.findAll()
            .then((cocktails) => {
                res.locals.cocktails = cocktails;
                next();
            })
            .catch(e => next(e));
    },

    //Retrieve all the cocktails with a certain name & store them in res.locals
    // getByName(req, res, next) {
    //     db.findByName(req.body)
    //         .then((cocktails) => {
    //             res.locals.data = cocktails;
    //             next();
    //         })
    //         .catch(e => next(e));
    // },

    //Retrieve all the cocktails with certain fixing(s) & store them in res.locals
    getByFixn(req, res, next) {
        db.findByFixn(req.body)
            .then((cocktails) => {
                res.locals.cocktails = cocktails;
                next();
            })
            .catch(e => next(e));
    },

    //Accept cocktail input from user and store new cocktail data in res.locals.
    storeNewCocktail(req, res, next) {
        console.log(req.body);
        const {name, fixings, recipe} = req.body;
        db.createCocktail({name, fixings, recipe})
            .then((newCocktail) => {
                res.locals.data = newCocktail;
                res.json(newCocktail);
                next();
            })
        .catch(e => next(e));
    }, 



};
