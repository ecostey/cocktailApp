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

// Collection routers - connect to viewController:
// cocktailsRouter.route('/name')
// .get(cocktailsController.getByName, viewController.showByName);

cocktailsRouter.route('search')
  .get((req, res, next) => {
    res.render('/cocktails_search', {
      redirect: '/cocktails/test/'
    })
  })
// cocktailsRouter.route('/search/name')
//   .get((req, res, next) => {
//     res.render('cocktails_search')
//   })


cocktailsRouter.route('/ingredient')
.get((req, res) => {
res.render('cocktails_search');
})

cocktailsRouter.route('/ingredient/search')
.get(cocktailsController.getByFixn, (req, res) => {
  res.render('cocktails');
})

// cocktailsRouter.route('/makeNew')
// .post(cocktailsController.storeNewCocktail)
cocktailsRouter.route('/')
    .get(cocktailsController.getAll, (req, res) => {
      res.render('cocktails');
    })
    
// cocktailsRouter.get('/test', (req, res) => {
//     console.log(req)
//     res.send(req.query)
// });
        


cocktailsRouter.use(handle404);

//Export this router file.
module.exports = cocktailsRouter;