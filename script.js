

var dailyHour = moment().format('H')
var currentDate = $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));



//Set Timer to go live. //
setInterval(function () {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}, 1000)

//Set up Button Click function to call info
$("#btn").on("click",function (e) {
    e.preventDefault();
    var ApiKey ="964e1a54e21fa546d4037b013310911c"
    var cityName = $("#enterCity").val().trim()
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName+ "&appid="+ ApiKey;


    $.ajax({
        type: "GET",
        url: queryURL,
    }) 
    .then(function(response) {
       console.log(response)
    }) 
})

//Date to pull and City to Pull
// var dayDate = moment().format("MMM Do YY")
// var seeCity = 


