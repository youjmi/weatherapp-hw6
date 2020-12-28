var dailyHour = moment().format('H')
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
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + ApiKey;
    if (cityName === "") {
        alert ("Please put City name. ")
    }

    $.ajax({
        type: "GET",
        url: queryURL,
        dataType: "jsonp"
    })
        .then(function (response) {
            console.log(response); {

                //City to Pull with Date on Main
                var cityMain = $("#cityName").text(response.name);

                //List of Cities pulled in Search Bar//
                var searchCity = $("#input-city-append").text(response.name)
                var searchTemp = $("#$input-temp-append").text("Temperature:" + response.main.temp + "°F")

                //Weather and Icons
                var wiconURL = "http://openweathermap.org/img/wn/" + response.weather[0].icon + ".png"
                // var wicon = 
                // var wicon = 
            }


        })
    //5 day forecast//
    var fivedayForecast = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + ApiKey;

    $.ajax({
        url: fivedayForecast,
        method: "GET",
        dataType :"jsonp",
    })
        .then(function (response) {
            
        })

})

