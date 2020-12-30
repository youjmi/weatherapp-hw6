
var currentDate = $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
var ApiKey = "964e1a54e21fa546d4037b013310911c"

//Set Timer to go live. //
setInterval(function () {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}, 1000)

//Set up Button Click function to call info
$("#btn").on("click", function (e) {
    e.preventDefault();

    var cityName = $("#enterCity").val().trim()
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial" + "&appid=" + ApiKey;
    if (cityName === "") {
        alert("Please put valid City name. ")
    }

    $.ajax({
        type: "GET",
        url: queryURL,
        dataType: "jsonp"
    })
        .then(function (response) {
            console.log(response); {
                clearBox()

                //City, Temps to Pull on Main
                var cityMain = $("<h2>").text(response.name);
                var searchTemp = $("<h5>").text("Temperature: " + response.main.temp + "°F")
                var searchFeels = $("<h5>").text("But Feels Like: " + response.main.feels_like + "°F")

                //List of Information pulled to Search/
                var searchCity = $("<h5>").text(response.name)

                //Weather and Icons
                var wiconURL = $('<img src="https://openweathermap.org/img/wn/' + response.weather[0].icon + '.png" alt="weather icon">')

                //Humidity//
                var humidity = $("<h5>").text("Humidity: " + response.main.humidity + "%")
            

                //Force thru
                $("#MainInfo").append(cityMain, wiconURL, searchTemp, searchFeels, humidity)
                $("#searchInfo").append(searchCity)
        
            }

            var lon = response.coord.lon
            var lat = response.coord.lat
    
    
            var uvURL = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=" + ApiKey;
    
            $.ajax ({
                url: uvURL,
                method: "GET"
            })
            .then(function (uvi) { 
                console.log(uvi)

                var uviVal = $("<h5>").text("UV Index: " + uvi.value);


                if (uvi.value >=0 && uvi.value< 3) {
                    $(uviVal).attr("class","low")
                }
                else if (uvi.value >= 3 && uvi.value < 6) {
                    $(uviVal).attr("class","moderate")
                }
                else if (uvi.value >= 6 && uvi.value <8 ) {
                    $(uviVal).attr("class","high")
                }
                else if (uvi.value >= 8 && uvi.value < 11) {
                    $(uviVal).attr("class","veryHigh")
                }
                else (
                    $(uviVal).attr("class","extremelyHigh")
                )
                
                $("#MainInfo").append(uviVal)

             })

             var ForecastURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial" + "&appid=" + ApiKey;
             $.ajax({
                 url: ForecastURL,
                 method: "GET",
                 dataType: "jsonp"
             })
             .then(function (forecast) {  
                console.log(forecast)

                     for (var i= 0; i< 6; i++){
                    
                        var date = moment().format('L')
                        var forDate = $("<h4>").text(date)
                        var tempHigh = $("<h6>").text("Highest Temp: " + forecast.main.temp_max + "°F")
                        var tempLow = $("<h6>").text("Lowest Temp: " + forecast.main.temp_min + "°F")
                        var forhumidity = $("<h6>").text("Humidity: " + forecast.main.humidity + "%")
                        var wiconURL = $('<img src="https://openweathermap.org/img/wn/' + response.weather[0].icon + '.png" alt="weather icon">')


                        $("#forecast").append(forDate,wiconURL,tempHigh,tempLow,forhumidity)
                    
                     }
             })
        })
        


    //5 day forecast//
    // function fiveDayForecast() {

    //     var fivedayForecast = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + ApiKey;
    //     $.ajax({
    //         type: "GET",
    //         url: fivedayForecast,
    //         dataType: "jsonp"
    //     })
    //         .then(function (forecast) {
    //             console.log(forecast)

    //             for (var i = 1; i < 6; i++) {

    //                 var indDayDate = $("<h4>").text(moment().format('L')[i])


    //                 $("#forecast").append(fiveDayDate, indDayDate)
    //             }
    //         }
    //         )}

    // })




    function clearBox() {
        $("#MainInfo").empty()
        $("#forecast").empty()
    }
})
