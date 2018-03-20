// Api Routes - this file offers routes for displaying and saving data to the database

// Dependencies
var connection = require("../config/connection.js");
var router = require('express').Router();
var Itenerary = require('../models/itinerary');

// Routes
module.exports = function(app) {
    //Get all itineraries.
    app.get("/itineraries/all", function(app) {
        var dbQuery = "SELECT * FROM itinerary";

        connection.query(dbQuery, function(err, result) {
            if(err) throw err;
            res.json(result);
        });
    });

    // Add an itinerary
    app.post("/itineraries/new", function(req, res) {
        console.log("Itineraries Data: ");
        console.log(req.body);
    });

    
}
router.post('/create',function(request, response) {
    Itenerary.create(response, req.body);

});

module.exports = router; 