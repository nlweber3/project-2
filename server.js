// Require necessary files
require('dotenv').config();


// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var exphbs = require("express-handlebars");
var html_routes = require('./app/routes/html-routes')(app);
// var api_routes = require('./app/routes/api-routes')(app);
var path = require('path');
var dbconfig = require('./app/config/database');
var mysql = require('mysql');
var connection = mysql.createConnection(dbconfig.connection);
var session = require('express-session');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var passport = require('passport');
var flash = require('connect-flash');

var PORT = process.env.PORT || 3000;
var db = require("./app/models");
require('dotenv').config();

require('./app/config/passport.js')(passport);

app.use(express.static('app/public'));
//  parsing into json
app.use(bodyParser.urlencoded({
  extended: true
}));

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
}));
// session secret
app.use(passport.initialize());

// persistent login sessions
app.use(passport.session());

// use connect-flash for flash messages stored in session
app.use(flash());

require('./app/routes/passport-routes.js')(app, passport);
require('./app/config/passport.js')(passport);

// html_routes(app);
// app.use('/api', api_routes);

// setting handlebars
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// // server listener
// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });

require('./app/routes/api-routes')(app);

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
