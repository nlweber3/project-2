
module.exports = function(app) {

  // Flights
  app.get('/itinerary', function(req,res) {
    res.render('itinerary.handlebars');
  });
};
