module.exports = function(sequelize,DataTypes) {
    var Itinerary = sequelize.define("Itinerary",{
        outbound_airline: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        outbound_flightNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        outbound_totalPrice: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        outbound_priceAdult: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        outbound_priceChild: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        outbound_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        outbound_origin: {
            type:DataTypes.STRING,
            allowNull: false
        },
        outbound_destination: {
            type: DataTypes.STRING,
            allowNull: false
        },
        outbound_terminal: {
            type: DataTypes.STRING,
            allowNull: false
        },
        outbound_seats: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        outbound_class: {
            type: DataTypes.STRING,
            allowNull: false
        },
        inbound_airline: {
            type: DataTypes.STRING,
            allowNull: false
          },
          inbound_flightNumber {
            type: DataTypes.STRING,
            allowNull: false
          },
          inbound_totalPrice {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          inbound_priceAdult {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          inbound_priceChild {
            type: DataTypes.INTEGER,
            allowNull: false
          {,
          inbound_date {
            type: DataTypes.DATE,
            allowNull: false
          },
          inbound_origin {
            type: DataTypes.STRING,
            allowNull: false
          },
          inbound_destination {
            type: DataTypes.STRING,
            allowNull: false
          },
          inbound_terminal {
            type: DataTypes.STRING,
            allowNull: false
          },
          inbound_seats {
            type: DataTypes.STRING,
            allowNull: false
          },
          inbound_class {
            type: DataTypes.STRING,
            allowNull: false
          },
        hotel_name {
            type: DataTypes.STRING,
            allowNull: false
        },
        hotel_address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        hotel_cost: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        hotel_phone: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
};