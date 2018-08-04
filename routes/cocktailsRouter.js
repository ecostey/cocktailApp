//Import Express:
const express = require('express');

//Import controllers:
//const authController = require('../controllers/authController');
const cocktailsController = require('../controllers/cocktailsController');
const viewController = require('../controllers/viewController');

const cocktailsRouter = express.Router();

//Apply authController:
//cocktailsController.use(authController.usersOnly);

const showJSON = (req, res) => {
    res.json(res.locals.data);
};

const handle404 = (err, req, res, next) => {
    console.error(err);
    res.sendStatus(404);
};

const send400 = (err, req, res, next) => {
    console.error(err);
    res.sendStatus(400);
};


//Special urls



// Items
// cocktailsRouter.route('/:id')
//   .get(cocktailsController.getOne, showJSON)

// Collection
cocktailsRouter.route('/ingredient/:fixn')
.get(cocktailsController.getByFixn, viewController.showByIngredient)
cocktailsRouter.route('/name/:name')
.get(cocktailsController.getByName, viewController.showByName)
// cocktailsRouter.route('/makeNew')
// .post(cocktailsController.storeNewCocktail)
cocktailsRouter.route('/')
    .get(cocktailsController.getAll, showJSON)
    

cocktailsRouter.use(handle404);

//Export this router file.
module.exports = cocktailsRouter;