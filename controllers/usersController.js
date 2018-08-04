//Import middleware: Passport & save to variable
const passport = require('passport');

//Import users model & save as variable 'db'
const db = require('../models/users');

function renderLogin(req, res) {
    res.render('auth/login', {
        errors: req.flast('error')
    });
}

const handleLogin = passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/auth/login',
    failureFlash: 'Invalid username and password',
});

function renderRegister (req, res) {
    res.render('auth/register', { errors:req.flash('error') });
}

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

function usersOnly(req, res, next) {
    if (req.user) {
        next();
    } else {
        req.flash('error', 'login required');
        res.redirect('/auth/login');
    }
}

module.exports = {
    renderLogin,
    handleLogin,
    renderRegister,
    handleLogout,
    usersOnly,
};