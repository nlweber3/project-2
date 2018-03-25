
// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");


// Routes
// =============================================================
module.exports = function(app) {

  app.get("/api/all", function(req, res) {

    db.Itinerary.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });

  // Add a chirp
  app.post("/api/itinerary", function(req, res) {

    console.log("Itinerary Data:");
    console.log(req.body);

    db.Itinerary.create({
      origin: req.body.origin,
      destination: req.body.destination,
      departuredate: req.body.departuredate,
      returndate: req.body.returndate,
      adults: req.body.adults,
      children: req.body.children
    }).then(function(results) {
      res.end();
    });

  });

};
