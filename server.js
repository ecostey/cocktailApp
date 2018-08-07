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

//Init middleware (Express, Morgan)
const app = express();
app.use(logger('dev'));

//Init bodyParser
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


app.set('view engine', 'ejs');


//Init Router Files
app.use('/cocktails', cocktailsRouter);


//Create a PORT variable 
const PORT = process.env.PORT || 3000;

//Start listening on server &
//print confirmation message to terminal.
// eslint-disable-next-line no-console
app.listen(PORT, () => {
    console.log(`SERVER LISTENING ON ${PORT}`);
})

//export 'app' object
module.exports = {app};