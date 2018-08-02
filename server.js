//Import Middleware
const path = require ('path');
const logger = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');

//Import Route & Controller Files


//Create a PORT variable 
const PORT = process.env.PORT || 3000;

//Init Express
const app = express();