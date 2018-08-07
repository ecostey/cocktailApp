//Import Express:
const express = require('express');

//Import controllers:
const cocktailsController = require('../controllers/cocktailsController');
const viewController = require('../controllers/viewController');

const cocktailsRouter = express.Router();

//List Routes:
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








// const showJSON = (req, res) => {
//     res.json(res.locals.data);
// };

// const handle404 = (err, req, res, next) => {
//     console.error(err);
//     res.sendStatus(404);
// };

// const send400 = (err, req, res, next) => {
//     console.error(err);
//     res.sendStatus(400);
// };