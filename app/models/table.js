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
