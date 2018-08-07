//Import Express:
const express = require('express');

//Import controllers:
const cocktailsController = require('../controllers/cocktailsController');
const viewController = require('../controllers/viewController');

//Import express.Router
const cocktailsRouter = express.Router();

//List Routes by specificity:
cocktailsRouter.route('/')
  .get(cocktailsController.getAll, viewController.showAll, viewController.show404)
  .post(cocktailsController.create, viewController.handleCreate);

cocktailsRouter.get(
    '/new',
    cocktailsController.makeBlankCocktail,
    viewController.showNew,
  );

cocktailsRouter.get('/:id/edit', cocktailsController.findOne, viewController.showEdit);

cocktailsRouter.route('/:id')
  .get(
    cocktailsController.findOne,
    viewController.showOne,
    viewController.show404,
  )
  .delete(cocktailsController.destroy, viewController.handleDestroy)
  .put(cocktailsController.update, viewController.handleUpdate);


//Export this router file.
module.exports = cocktailsRouter;