//Import middleware: Passport & save to variable
const passport = require('passport');

//Import users model & save as variable 'db'
const db = require('../models/users');

function renderLogin(req, res) {
    res.render('auth/login', {
        errors: req.flast('error')
    });
}

//How to handle a user's log in: 
//use middleware, Passport, to authenticate log in
//If successful, redirect user to the root/landing page
//If NOT succesfull, redirect back to the login page AND flash an error message to user.
const handleLogin = passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/auth/login',
    failureFlash: 'Invalid username and password',
});


function renderRegister (req, res) {
    res.render('auth/register', { errors:req.flash('error') });
}

//Handle the user's registation:
//Get the user's inputted username & password
//Register the new user to the users table of the database
//Once account is set up- log in the user / run register() in users.js
//If there is an error, assume the username entered was not UNIQUE.
    //Respond w/ error message & redirect the user to re-register.
function handleRegister(req, res, next) {
    const { username, password } = req.body;
    userDB.register(username, password)
        .then((newUser) => {
            req.login(newUser, err => (err ? next(err) : res.redirect('/')));
        })
        .catch((err) => {
            req.flash('error', 'username unavailable');
            res.redirect('/auth/register');
        });
}

//Handle a user's log out - log them out and redirect them to the root/landing page
function handleLogout(req, res) {
    res.logout();
    res.redirect('/');
}

//Restricts user's access to the site's functions pending thier log in status
//If the user is logged in- they're good to go
//If the user is NOT logged in- send user and error message & redirect them to the login screen
function usersOnly(req, res, next) {
    if (req.user) {
        next();
    } else {
        req.flash('error', 'login required');
        res.redirect('/auth/login');
    }
}

//Export all functions in this file.
module.exports = {
    renderLogin,
    handleLogin,
    renderRegister,
    handleLogout,
    usersOnly,
};