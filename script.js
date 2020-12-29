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
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial" + "&appid=" + ApiKey;
    if (cityName === "") {
        alert("Please put valid City name. ")
        
        firstCall()
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
                var searchFeels = $("<h4>").text("But Feels Like: " + response.main.feels_like + "°F")

                //List of Information pulled to Search/
                var searchCity = $("<h4>").text(response.name)

                //Weather and Icons
                var wiconURL = $('<img src="https://openweathermap.org/img/wn/' + response.weather[0].icon + '.png" alt="weather icon">')

                //Humidity//
                var humidity = $("<h4>").text("Humidity: " + response.main.humidity + "%")

                //Force thru
                $("#MainInfo").append(cityMain, wiconURL, searchTemp, searchFeels, humidity)
                $("#searchInfo").append(searchCity)
            }
            fiveDayForecast()
        })
    //5 day forecast//
    function fiveDayForecast() {

        var fivedayForecast = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + ApiKey;
        $.ajax({
            type: "GET",
            url: fivedayForecast,
            dataType: "jsonp"
        })
            .then(function (response) {
                console.log(response)

                for (var i = 1; i < 6; i++) {

                    var fiveDayDate = moment().format('L');
                    var indDayDate = fiveDayDate[i]
                    

                    $("#forecast").append(fiveDayDate, indDayDate)
                }
            }
            )}
            
    })

   
   
function clearBox() {
    $("#MainInfo").empty()
    $("#forecast").empty()
    
}
//clear functions