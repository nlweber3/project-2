var apiKey = "&apikey=cG8ZbSEqyCqrad10YByFeF68h07TuCiw";
var userOrigin = "";
var userDestination = "";
var userDeparture = "";
var userReturn = "";
var userAdults = "";
var userChildren =  "";

$("#submitbutton").on("click",function(event) {
event.preventDefault();
userOrigin = $("#origin").val().trim();
userDestination = $("#destination").val().trim();
userDeparture = $("#departure").val().trim();
userReturn = $("#return").val().trim();
userAdults = $("#adults").val().trim();
userChildren = $("#children").val().trim();
$("#origin").val('');
$("#destination").val('');
$("#departure").val('');
$("#return").val('');
$("#adults").val('');
$("#children").val('');
// calling function after getting user input
getAirline();
});


// Function to connect ajax and get response from amadeus
function getAirline() {
    var amadeusURL = "https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?origin="+ userOrigin + "&destination=" + userDestination + "&departure_date=" +userDeparture+ "&return_date=" + userReturn + "&adults=" + userAdults + "&children=" + userChildren + "&number_of_results=5" + apiKey;
    $.ajax({
        url: amadeusURL,
        method: "GET",
        dataType: "json"
    }).done(function(response) {
        console.log(response.results);
        console.log(amadeusURL);
    // Outbound
        for (i=0; i<3; i++) {
            $("#itinerary_container").append( "Airline: " + response.results[i].itineraries[0].outbound.flights[0].marketing_airline + "<br>");
            $("#itinerary_container").append( "Flight Number: " + response.results[i].itineraries[0].outbound.flights[0].flight_number + "<br>");
            $("#itinerary_container").append("Your Total Price: $" + response.results[i].fare.total_price + "<br>");
            $("#itinerary_container").append(" -price per adult: $" + response.results[i].fare.price_per_adult.total_fare + "+ Tax: $" + response.results[0].fare.price_per_adult.tax +"<br>");
            $("#itinerary_container").append(" -price per child: $" + response.results[i].fare.price_per_child.total_fare + "+ Tax: $" + response.results[0].fare.price_per_child.tax + "<br>");
            $("#itinerary_container").append("Departure Date/Time: " + response.results[i].itineraries[0].outbound.flights[0].departs_at + "<br>");
            $("#itinerary_container").append("Origin: " + response.results[i].itineraries[0].outbound.flights[0].origin.airport + " terminal: " + response.results[i].itineraries[0].outbound.flights[0].origin.terminal + "<br>");
            $("#itinerary_container").append("Destination: " + response.results[i].itineraries[0].outbound.flights[0].destination.airport + " terminal: " + response.results[i].itineraries[0].outbound.flights[0].destination.terminal + "<br>");
            $("#itinerary_container").append("Seats remaining: " + response.results[i].itineraries[0].outbound.flights[0].booking_info.seats_remaining + "<br>");
            $("#itinerary_container").append( "Booking Class: " + response.results[0].itineraries[0].outbound.flights[0].booking_info.travel_class + "<br>" + "<hr>");

    // Inbound
            $("#itinerary_returning").append( "Airline: " + response.results[i].itineraries[0].inbound.flights[0].marketing_airline + "<br>");
            $("#itinerary_returning").append( "Flight Number: " + response.results[i].itineraries[0].inbound.flights[0].flight_number + "<br>");
            $("#itinerary_returning").append("Your Total Price: $" + response.results[i].fare.total_price + "<br>");
            $("#itinerary_returning").append(" -price per adult: $" + response.results[i].fare.price_per_adult.total_fare + "+ Tax: $" + response.results[0].fare.price_per_adult.tax +"<br>");
            $("#itinerary_returning").append(" -price per child: $" + response.results[i].fare.price_per_child.total_fare + "+ Tax: $" + response.results[0].fare.price_per_child.tax + "<br>");
            $("#itinerary_returning").append("Departure Date/Time: " + response.results[i].itineraries[0].inbound.flights[0].departs_at + "<br>");
            $("#itinerary_returning").append("Origin: " + response.results[i].itineraries[0].inbound.flights[0].origin.airport + " terminal: " + response.results[i].itineraries[0].outbound.flights[0].origin.terminal + "<br>");
            $("#itinerary_returning").append("Destination: " + response.results[i].itineraries[0].inbound.flights[0].destination.airport + " terminal: " + response.results[i].itineraries[0].outbound.flights[0].destination.terminal + "<br>");
            $("#itinerary_returning").append("Seats remaining: " + response.results[i].itineraries[0].inbound.flights[0].booking_info.seats_remaining + "<br>");
            $("#itinerary_returning").append( "Booking Class: " + response.results[0].itineraries[0].inbound.flights[0].booking_info.travel_class + "<br>" + "<hr>");
        }
    });
};
