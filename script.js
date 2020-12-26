

var dailyHour = moment().format('H')
var currentDate = $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));



//Set Timer to go live. //
setInterval(function () {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}, 1000)

//Set up Button Click function to call info
$("#btn").on("click", function (e) {
    e.preventDefault();
    var ApiKey = "964e1a54e21fa546d4037b013310911c"
    var cityName = $("#enterCity").val().trim()
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + ApiKey;


    $.ajax({
        type: "GET",
        url: queryURL,
    })
        .then(function (response) {
            console.log(response); {

                //City to Pull with Date on Main
                var cityMain = $("#cityName").text(response.city.name);
                console.log(cityMain)
   

                //List of Cities pulled in Search Bar//
                var searchCity =$("#input-city-append").text(response.city.name)
                // var searchTemp =$("$input-temp-append").text(response.main.temp + '')
                // console.log(searchTemp)

                //Weather and Icons

                // var wicon = 
            }
        })
})




