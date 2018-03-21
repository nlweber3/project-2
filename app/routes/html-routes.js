module.exports = function(app) {
  // Hotels
  app.get('/hotels', function(req, res) {
      res.render('hotels.handlebars');
  });
  // Flights
  app.get('/flights', function(req,res) {
    res.render('amadeus.handlebars');
  });
};
