//Import middleware
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

//Import users.js from models
const userDB = require('../models/users');

//Intake user's username & password from req.body & pass info to callback
passport.use(new localStrategy((username, password, done) => (
    //try logging the user in
    userDB.login(username, password)
        //If login is successful pass user as 2nd argument of done()
        .then(user => done(null, user))
        //If NOT successful pass false as the second argument of done()
        .catch(err => done(null, false)))));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    userDB.findByID(id)
        .then(user => done(null, user))
        .catch(done);
});