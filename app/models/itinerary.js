// Dependencies
var Sequelize = require('sequelize');
var sequelize = require("../config/connection.js");

// Model creation!
var Itinerary = sequelize.define("itinerary", {
    airline: {
        type: Sequelize.STRING
    },
    flight_number: {
        type: Sequelize.STRING
    },
    total_price: {
        type: Sequelize.STRING
    },
    price_adult: {
        type: Sequelize.STRING
    },
    price_child: {
        type: Sequelize.FLOAT
    },
    departure_date_time: {
        type: Sequelize.DATEONLY
    },
    origin: {
        type: Sequelize.STRING
    },
    destination: {
        type: Sequelize.STRING
    },
    seats_remaining: {
        type: INTEGER
    },
    booking_class: {
        type: Sequelize.STRING
    }
});

// Sync
Itinerary.sync();

// export model
module.exports = Itinerary;
