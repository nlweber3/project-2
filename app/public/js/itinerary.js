var apiKey = "&apikey=cG8ZbSEqyCqrad10YByFeF68h07TuCiw";
var userOrigin = "";
var userDestination = "";
var userDeparture = "";
var userReturn = "";
var userAdults = "";
var userChildren =  "";
var hotelSearch = '';
var carSearch = '';
var startDate = '';
var endDate = '';
var pickUpTime = '';
var dropOffTime = '';



    $("#submitbutton").on("click",function(event) {
    event.preventDefault();
    userOrigin = $("#origin").val().trim();
    userDestination = $("#destination").val().trim();
    userDeparture = $("#departure").val().trim();
    userReturn = $("#return").val().trim();
    userAdults = $("#adults").val().trim();
    userChildren = $("#children").val().trim();
    // hotels
    // hotelSearch = $("#hotel-search").val().trim();
    // vehicle
    // carSearch = $("#car-search").val().trim();
    // startDate= $("#start-date").val().trim();
    // endDate = $("#end-date").val().trim();
    // pickUpTime = $("#pickup-time").val().trim();
    // dropOffTime = $("#dropoff-time").val().trim();

    $("#origin").val('');
    $("#destination").val('');
    $("#departure").val('');
    $("#return").val('');
    $("#adults").val('');
    $("#children").val('');
    // hotel
    $("hotel-search").val('');
    // calling function after getting user input
    getAirline();
    getHotels();
    // getCars();
    });

var airlineData;
var hotelData;
// Function to connect ajax and get response from amadeus
function getAirline() {
    var amadeusURL = "https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?origin="+ userOrigin + "&destination=" + userDestination + "&departure_date=" +userDeparture+ "&return_date=" + userReturn + "&adults=" + userAdults + "&children=" + userChildren + "&number_of_results=5" + apiKey;
    $.ajax({
        url: amadeusURL,
        method: "GET",
        dataType: "json"
    }).done(function(response) {
        airlineData = response.results;
        console.log(response.results);
        console.log(amadeusURL);
        // Outbound
        for (i=0; i<3; i++) {
            $('#itinerary_container').append("Airline: " + response.results[i].itineraries[0].outbound.flights[0].marketing_airline + "</div><br>");
            $('#itinerary_container').append( "Flight Number: " + response.results[i].itineraries[0].outbound.flights[0].flight_number + "<br>");
            $('#itinerary_container').append("Your Total Price: $" + response.results[i].fare.total_price + "<br>");
            $('#itinerary_container').append(" -price per adult: $" + response.results[i].fare.price_per_adult.total_fare + "+ Tax: $" + response.results[0].fare.price_per_adult.tax +"<br>");
            $('#itinerary_container').append(" -price per child: $" + response.results[i].fare.price_per_child.total_fare + "+ Tax: $" + response.results[0].fare.price_per_child.tax + "<br>");
            $('#itinerary_container').append("Departure Date/Time: " + response.results[i].itineraries[0].outbound.flights[0].departs_at + "<br>");
            $('#itinerary_container').append("Origin: " + response.results[i].itineraries[0].outbound.flights[0].origin.airport + " terminal: " + response.results[i].itineraries[0].outbound.flights[0].origin.terminal + "<br>");
            $('#itinerary_container').append("Destination: " + response.results[i].itineraries[0].outbound.flights[0].destination.airport + " terminal: " + response.results[i].itineraries[0].outbound.flights[0].destination.terminal + "<br>");
            $('#itinerary_container').append("Seats remaining: " + response.results[i].itineraries[0].outbound.flights[0].booking_info.seats_remaining + "<br>");
            $('#itinerary_container').append( "Booking Class: " + response.results[0].itineraries[0].outbound.flights[0].booking_info.travel_class + "<br>" +"<div>" + createRadioButtons('outbound', i) +"</div>");


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
            $("#itinerary_returning").append( "Booking Class: " + response.results[0].itineraries[0].inbound.flights[0].booking_info.travel_class + "<br>" +"<div>" + createRadioButtons('inbound', i) + "</div>");
        }
    });
};

// function getHotels() {
//     var hotelURL = "http://api.hotwire.com/v1/deal/hotel?dest=" + hotelSearch + "&apikey=ypwszhf8vexgvadxj7w4axkt&format=json" + "&limit=3";
//     $.ajax({
//         url:hotelURL,
//         method: "GET",
//         dataType: "json",
//       })
//       .done(function(response) {
//           console.log(response);
//           hotelData = response;
//           for (i=0; i<3; i++) {
//               $("#hotel-data").append("Hotel Name: " + response.Result[i].Headline + "<br>");
//               $("#hotel-data").append("Location: " + response.Result[i].Neighborhood + "<br>");
//               $("#hotel-data").append("Price: $" + response.Result[i].Price + "<br>");
//               $("#hotel-data").append("Rating: " + response.Result[i].StarRating + "<br>" +"<div>" + createRadioButtons('hotels', i) + "</div>");
//       };
//   });
// };


function getHotels() {
    var hotelURL = "https://api.sandbox.amadeus.com/v1.2/hotels/search-airport?" + "apikey=cG8ZbSEqyCqrad10YByFeF68h07TuCiw" + "&location=" + userDestination + "&check_in=" + userDeparture + "&check_out=" + userReturn + "&number_of_results=3";
    $.ajax({
        url: hotelURL,
        method:"GET",
        dataType: "json"
    }).done(function(response) {
        hotelData = response.results;
        console.log(response);
        console.log(hotelURL);


        for (var j = 0; j < 3 ; j++) {
            $("#hotel-data").append("Address: " + response.results[j].address.line1 + "<br>");
            $("#hotel-data").append(" " + response.results[j].address.city);
            $("#hotel-data").append(", " + response.results[j].address.region );
            $("#hotel-data").append(" " + response.results[j].address.postal_code);
            $("#hotel-data").append(" " + response.results[j].address.country + "<br>");
            $("#hotel-data").append("Phone Number: " + response.results[j].contacts[0].detail + "<br>" + "<div>" + createRadioButtons('hotels', j) +"</div>");
        };
  });
};

function createRadioButtons(typeName, idx){
    var radioButton = document.createElement('input');
    radioButton.setAttribute('type', 'radio');
    radioButton.setAttribute('name', typeName);
    radioButton.setAttribute('value', idx);
    return radioButton.outerHTML;
}


    $('#confirmbutton').on("click", function() {
        console.log('click confirm button');
        var dataPoints = ['outbound', 'inbound'];
        var dataObj = {};
        dataPoints.forEach(dataPoint => {
            var idx = $('[name='+dataPoint+']:checked').val();
            dataObj[dataPoint] = airlineData[idx].itineraries[0][dataPoint];
        });
        console.log(dataObj);

    })
//
// function getCars() {
//     var carURL = "http://api.hotwire.com/v1/search/car?apikey=ypwszhf8vexgvadxj7w4axkt&dest=" + carSearch + "&startdate=" + startDate  +"&enddate=" + endDate + "&pickuptime=" + pickUpTime + "&dropofftime=" + dropOffTime + "&format=json";
//     $.ajax({
//         url:carURL,
//         method: "GET",
//         dataType: "json",
//       })
//       .done(function(response) {
//           console.log(response)
//           console.log(response.MetaData.CarMetaData);
//
//           for (var j = 0 ; j < 3; j++) {
//               console.log(response.MetaData.CarMeta.CarTypes[j]);
//
//               $("#car-data").append("Car Type: " + response.MetaData.CarMetaData.CarTypes[j].CarTypeName);
//               $("#car-data").append("Features: " + response.MetaData.CarMetaData.CarTypes[j].PossibleFeatures);
//               $("#car-data").append("Model: " + response.MetaData.CarMetaData.CarTypes[j].PossibleModels);
//               $("#car-data").append("Seating: " + response.MetaData.CarMetaData.CarTypes[j].TypicalSeating);
//
//               $("#car-data").append(response.Result[j].DailyRate);
//               $("#car-data").append(response.Result[j].DropoffDay);
//               $("#car-data").append(response.Result[j].DropoffTime);
//               $("#car-data").append(response.Result[j].LocationDescription);
//               $("#car-data").append(response.Result[j].PickupAirport);
//               $("#car-data").append(response.Result[j].PickupDay);
//               $("#car-data").append(response.Result[j].PickupTime);
//               $("#car-data").append(response.Result[j].SubTotal);
//               $("#car-data").append(response.Result[j].TaxesAndFees);
//               $("#car-data").append(response.Result[j].TotalPrice);
//           };
//     });
// };
