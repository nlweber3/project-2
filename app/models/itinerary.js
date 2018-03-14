// Dependencies

var Sequelize = require('sequelize');
var sequelize = require("../config/connection.js");

// Model creation!

var Itinerary = sequelize.define("itinerary", {
    origin: {
        type: Sequelize.STRING
    },
    destination: {
        type: Sequelize.STRING
    },
    hotel: {
        type: Sequelize.STRING
    },
    vehicle: {
        type: Sequelize.STRING
    }
});

// Sync
Itinerary.sync();

// export model
module.exports = Itinerary;
