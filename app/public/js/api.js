    var search = '';
    var carSearch = '';
    var startDate = '';
    var endDate = '';
    var pickUpTime = '';
    var dropOffTime = '';

    function censor(censor) {
        var i = 0;
      
        return function(key, value) {
          if(i !== 0 && typeof(censor) === 'object' && typeof(value) == 'object' && censor == value) 
            return '[Circular]'; 
      
          if(i >= 29) // seems to be a harded maximum of 30 serialized objects?
            return '[Unknown]';
      
          ++i; // so we know we aren't using the original object anymore
      
          return value;  
        }
      };
    
    $("#search").on("click",function(event) {
    event.preventDefault();
    search = $("#hotel-search").val().trim();
    getHotels();
    $("hotel-search").val('');
});

    function getHotels() {
        var hotelURL = "http://api.hotwire.com/v1/deal/hotel?dest=" + search + "&apikey=ypwszhf8vexgvadxj7w4axkt&format=json" + "&limit=1";
        $.ajax({
            url:hotelURL,
            method: "GET",
            dataType: "json",
          })
          .done(function(response) {
              console.log(response);
              $("#hotel-data").append(response.Result.HotelDeal.Headline + "<br>");
              $("#hotel-data").append("Location neighborhood: " + response.Result.HotelDeal.Neighborhood + "<br>");
              $("#hotel-data").append("Your savings percentage: " + response.Result.HotelDeal.SavingsPercentage + "%" + "<br>");
              $("#hotel-data").append("Hotel star rating: " + response.Result.HotelDeal.StarRating + "<br>");
            
             var hotelObj = response.Result.HotelDeal.Headline;
           
             console.log(hotelObj);
             $.ajax("/api/hotels",{
                 type:"POST",
                 data:censor(hotelObj),
             }).then(
                 function(data) {
                     console.log(data);
                     console.log("hotel info created");
                     location.reload();
                 }
             );
      });
    };


    $("#car").on("click",function(event) {
        event.preventDefault();
        carSearch = $("#car-search").val().trim();
        startDate= $("#start-date").val().trim();
        endDate = $("#end-date").val().trim();
        pickUpTime = $("#pickup-time").val().trim();
        dropOffTime = $("#dropoff-time").val().trim();
        getCars();
    });


    function getCars() {
        var carURL = "http://api.hotwire.com/v1/search/car?apikey=ypwszhf8vexgvadxj7w4axkt&dest=" + carSearch + "&startdate=" + startDate  +"&enddate=" + endDate + "&pickuptime=" + pickUpTime + "&dropofftime=" + dropOffTime + "&format=json";
        $.ajax({
            url:carURL,
            method: "GET",
            dataType: "json",
          })
          .done(function(response) {
              console.log(response.Result.TotalPrice);
    })
};