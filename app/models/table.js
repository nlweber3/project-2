
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

module.exports = function(sequelize, DataTypes) {
  var Itinerary = sequelize.define("Itinerary", {
    origin: DataTypes.STRING,
    destination: DataTypes.STRING,
    departuredate: DataTypes.STRING,
    returndate: DataTypes.STRING,
    adults: DataTypes.INTEGER,
    children: DataTypes.INTEGER
  });
  return Itinerary;
};
