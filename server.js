// requiring packages
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 3000;


//  parsing into json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// setting handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// var routes = require("./controller/ItineraryController.js")
// app.use(routes);

// app.get('/', function(request, response){
//   response.render('index');
// });

// server listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });



  