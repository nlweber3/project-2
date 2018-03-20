// requiring packages
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var exphbs = require("express-handlebars");
var html_routes = require('./app/routes/html-routes');
var api_routes = require('./app/roputes/api-routes');
var path = require('path');

var PORT = process.env.PORT || 3000;

app.use(express.static('app/public'));
//  parsing into json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// setting handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

html_routes(app);
app.use('/api', api_routes);

// server listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });



  