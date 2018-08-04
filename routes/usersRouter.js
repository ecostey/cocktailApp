
//Import Middleware, Express
const express = require('express');
//Import usersController.js
const usersController = require('../controllers/usersController');
//Activate express
const usersRouter = express.Router();


usersRouter.route('/login')
    .get(usersController.renderLogin)
    .post(usersController.handleLogin);

usersRouter.route('/register')
    .get(usersController.renderRegister)
    .post(usersController.handleRegister);

usersRouter.get('/logout', usersController.handleLogout);

//Export this file
module.exports = usersRouter;