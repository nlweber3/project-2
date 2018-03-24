
// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Itinerary = require("../models/table.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get("/api/all", function(req, res) {

    // Finding all Chirps, and then returning them to the user as JSON.
    // Sequelize queries are aynchronous, which helps with percieved speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    Itinerary.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });

  // Add a chirp
  app.post("/api/new", function(req, res) {

    console.log("Itinerary Data:");
    console.log(req.body);

    Chirp.create({
      origin: req.body.origin,
      destination: req.body.destination,
      departuredate: req.body.departuredate,
      returndate: req.body.returndate,
      adults: req.body.adults,
      children: req.body.children

    }).then(function(results) {
      // `results` here would be the newly created chirp
      res.end();
    });

  });

};
