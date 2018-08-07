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

    findOne(req, res, next) {
        const { id } = req.params;
        db.findOne(id)
          .then((cocktail) => {
            res.locals.cocktail = cocktail;
            next();
          })
          .catch(err => next(err));
      },

      create(req, res, next) {
        const cocktailData = req.body;
        db.create(cocktailData)
          .then((cocktail) => {
            res.locals.cocktail = cocktail;
            next();
          })
          .catch(err => next(err));
      },

      makeBlankCocktail(req, res, next) {
        const cocktail = {
          name: '',
          description: '',
        };
    
        res.locals.cocktail = cocktail;
        next();
      },

      destroy(req, res, next) {
          debugger;
        const { id } = req.params;
        db.delete(id)
          .then(() => next())
          .catch(err => next(err));
      },

      update(req, res, next) {
          debugger;
        const { id } = req.params;
        const cocktailData = req.body;
    
        db.update(id, cocktailData)
          .then(() => next())
          .catch(err => next(err));
      },
    };

    // //Retrieve all the cocktails with certain fixing(s) & store them in res.locals
    // getByFixn(req, res, next) {
    //     db.findByFixn(req.params.fixn)
    //         .then((cocktails) => {
    //             res.locals.data = cocktails;
    //             next();
    //         })
    //         .catch(e => next(e));
    // },