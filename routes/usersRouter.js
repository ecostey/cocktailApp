
//Import Middleware, Express
const express = require('express');
//Import usersController.js & viewController.js
const usersController = require('../controllers/usersController');
const viewController = require('../controllers/viewController');

//Activate express
const usersRouter = express.Router();

usersRouter.route('/:id')
    .get(usersController.getOneUser, viewController.showUser);

usersRouter.route('/login')
    .get(usersController.renderLogin)
    .post(usersController.handleLogin);

usersRouter.route('/register')
    .get(usersController.renderRegister)
    .post(usersController.handleRegister);

usersRouter.get('/logout', usersController.handleLogout);

//Export this file
module.exports = usersRouter;