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





//Init Router Files
app.use('/cocktails', cocktailsRouter);

//Create a PORT variable 
const PORT = process.env.PORT || 3000;




app.listen(PORT, () => {
    console.log(`SERVER LISTENING ON ${PORT}`);
})

module.exports = {app};