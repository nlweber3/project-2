module.exports = function(app){
    app.get('/',function (request,response){
        response.render('index');
    });
};
module.exports = function(app) {
  // Hotels
  app.get('/hotels', function(req, res) {
      res.render('hotels.handlebars');
  });
  // Flights
  app.get('/itinerary', function(req,res) {
    res.render('itinerary.handlebars');
  });
};
