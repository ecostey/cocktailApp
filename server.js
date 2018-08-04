//Import Middleware
const path = require ('path');
const logger = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');

//Import Route & Controller Files
const cocktailsRouter = require('./routes/cocktailsRouter');
const usersRouter = require('./routes/usersRouter');
const userController = require('./controllers/usersController')

//Create a PORT variable 
const PORT = process.env.PORT || 3000;

//Init middleware (Express, Morgan)
const app = express();
app.use(logger('dev'));

//set the static files
app.use(express.static('public'));

//set the Views
app.engine('ejs', require('ejs').renderFile);
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//Import middleware, Passport:
require('./config/passport');

//Init flash
app.use(flash());


//Init bodyParser
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//Init middleware Passport
app.use(passport.initialize());
app.use(passport.session());


//Init Router Files
app.use('/cocktails', cocktailsRouter);
app.use('/login', usersRouter);

//connect to PORT
app.listen(PORT, () => {
    console.log(`SERVER LISTENING ON ${PORT}, in ${app.get('env')} mode.`);
})

//export app
module.exports = {app};