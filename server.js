// requiring packages
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var exphbs = require("express-handlebars");
var dbconfig = require('./app/config/database');
var mysql = require('mysql');
var connection = mysql.createConnection(dbconfig.connection);
var express  = require('express');
var session  = require('express-session');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var passport = require('passport');
var flash    = require('connect-flash');
require('dotenv').config();

require('./app/config/passport.js')(passport); 

var PORT = process.env.PORT || 3000;


// log every request to the console
app.use(morgan('dev')); 

// read cookies (needed for auth)
app.use(cookieParser()); 
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/views'));


// set up ejs for templating
app.set('view engine', 'ejs'); 

// required for passport
app.use(session({
  secret: 'session active',
  resave: true,
  saveUninitialized: true
} )); // session secret
app.use(passport.initialize());
// persistent login sessions
app.use(passport.session()); 
// use connect-flash for flash messages stored in session
app.use(flash()); 

// setting handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//routes for passport
require('./app/routes/passport-routes.js')(app, passport);

// server listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

  