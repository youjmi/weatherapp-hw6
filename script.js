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
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial"+"&appid=" + ApiKey;
    if (cityName === "") {
        alert ("Please put valid City name. ")
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
                var searchTemp = $("<h4>").text("Temperature: " + response.main.temp + "°F")
                var searchFeels = $("<h5>").text("But Feels Like: " +response.main.feels_like + "°F")

                //List of Information pulled to Search/
                var searchCity = $("<h3>").text(response.name)
    
                //Weather and Icons
                var wiconURL = $('<img src="https://openweathermap.org/img/wn/' + response.weather[0].icon + '.png" alt="weather icon">')

                $("#WeatherInfo").append(cityMain,wiconURL,searchTemp,searchFeels,)
                $("#searchInfo").append(searchCity)
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
            console.log(response)

        })
    
})
function clearBox(){
$("#WeatherInfo").empty()
}
//clear functions