// Api Routes - this file offers routes for displaying and saving data to the database

// Dependencies
var db = require("../models");
// var router = Router();

// Routes
module.exports = function(app) {
    app.get("/api/posts/", function(req, res) {
      db.Post.findAll({})
        .then(function(dbPost) {
          res.json(dbPost);
      });
    });

    app.get("/api/posts", function(req, res) {
      console.log(req.body);
      db.Post.create({
        outbound_airline: req.body.outAirline,
        outbound_flightNumber: req.body.outFlightNumber,
        outbound_totalPrice: req.body.outTotalPrice,
        outbound_priceAdult: req.body.outPriceAdult,
        outbound_priceChild: req.body.outPriceChild,
        outbound_date: req.body.outDate,
        outbound_origin: req.body.outOrigin,
        outbound_destination: req.body.outDestination,
        outbound_terminal: req.body.outTerminal,
        outbound_seats: req.body.outSeats,
        outbound_class: req.body.outClass,

        inbound_airline: req.body.inAirline,
        inbound_flightNumber: req.body.inFlightNumber,
        inbound_totalPrice: req.body.inTotalPrice,
        inbound_priceAdult: req.body.inPriceAdult,
        inbound_priceChild: req.body.inPriceChild,
        inbound_date: req.body.inDate,
        inbound_origin: req.body.inOrigin,
        inbound_destination: req.body.inDestination,
        inbound_terminal: req.body.inTerminal,
        inbound_seats: req.body.inSeats,
        inbound_class: req.body.inClass,

        hotel_name: req.body.hotelName,
        hotel_address: req.body.hotelAddress,
        hotel_cost: req.body.hotelCost,
        hotel_phone: req.body.hotelPhone

      }).then(function(dbPost) {
        res.json(dbPost);
      });
    });


};

// router.post('/create',function(request, response) {
//     Itenerary.create(response, req.body);

// });

// module.exports = router;
