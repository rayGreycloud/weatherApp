// check if browser supports geolocation
if('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        loadWeather(position.coords.latitude + ',' + position.coords.longitude);
    });
  // set Portland as default location
} else {
    loadWeather("Portland, OR", "2475687");
}

// refresh weather with set interval function 
$(document).ready(function() {
    setInverval(getWeather, 10000);
})

// load weather function 
function loadWeather(location, woeid) {
    $.simpleWeather({
        location: location,
        woeid: woeid,
        unit: 'f',
        success: function(weather) {
            city = weather.city;
            temp = weather.temp + '&deg;';
            wcode = '<img class="weathericon" src="images/weathericons/' + weather.code + '.svg">';
            wind = '<p>' + weather.wind.speed + '</p><p>' + weather.units.speed + '</p>'; 
            humidity = weather.humidity + ' %';

            $(".location").text(city);
            $(".temperature").html(temp);
            $(".climate_bg").html(wcode);
            $(".windspeed").html(wind);
            $(".humidity").text(humidity);
        },
        error: function(error) {
            $(".error").html('<p>' + error + '</p>');        
        }
    });
}    

