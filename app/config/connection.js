// Dependencies
var Sequelize = require("sequelize");

// Create sql connection
var sequelize = new Sequelize("itinerary_db", "root", "password", {
    host: "localhost",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

// Export the connection for other files to use
module.exports = sequelize;
