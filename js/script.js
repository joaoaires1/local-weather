$(document).ready(function() {

    navigator.geolocation.getCurrentPosition(function (pos) {
        var lat = pos.coords.latitude;
        var lon = pos.coords.longitude;
        var api = "http://api.openweathermap.org/data/2.5/weather?lat="+ lat +"&lon="+ lon +"&units=metric&APPID=1e0f8f2685b2155134095f336f509e49";

        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: api,
            success: function (result) {
                var city = result.name;
                var coun = result.sys.country;
                var weatherId = result.weather[0].id;
                var desc = result.weather[0].description;
                var temp = Math.floor(result.main.temp);
                var dt = result.dt;

                $(".show").html(
                    "<div class=\"cidade\">"+ city +", " + coun + "</div>" +
                    "<div class=\"icon\"><i class=\"wi\"></i></div>" +
                    "<div class=\"descricao\">"+ desc +"</div>" +
                    "<div class=\"temperatura\">"+ temp + "</div>"
                )

                if (dt > result.sys.sunrise && dt < result.sys.sunset) {
                    setIconDia(weatherId);
                } else {
                    setIconNoite(weatherId);
                }
                
            }
        })
    })
    
})

function setIconDia(a) {
    switch (a) {
        case 800:
            $(".wi").addClass("wi-day-sunny");
            break;
        case 801:
            $(".wi").addClass("wi-day-cloudy");
            break;
        case (802):
            $(".wi").addClass("wi-cloud");
            break;
        case (803):
            $(".wi").addClass("wi-cloudy");
            break;
        case (804):
            $(".wi").addClass("wi-cloudy");
            break;
        default:
            if (a >= 300 && a <= 321) {
                $(".wi").addClass("wi-rain-mix");
            } else if (a >= 500 && a <= 504) {
                $(".wi").addClass("wi-day-rain");
            } else if (a >= 511 && a <= 531) {
                $(".wi").addClass("wi-rain");
            } else if (a >= 200 && a <= 232) {
                $(".wi").addClass("wi-day-thunderstorm");
            } else {
                $(".wi").addClass("wi-barometer");
            }
    }
}

function setIconNoite(a) {
    switch (a) {
        case 800:
            $(".wi").addClass("wi-night-clear");
            break;
        case 801:
            $(".wi").addClass("wi-night-alt-cloudy");
            break;
        case (802):
            $(".wi").addClass("wi-cloud");
            break;
        case (803):
            $(".wi").addClass("wi-cloudy");
            break;
        case (804):
            $(".wi").addClass("wi-cloudy");
            break;
        default:
            if (a >= 300 && a <= 321) {
                $(".wi").addClass("wi-rain-mix");
            } else if (a >= 500 && a <= 504) {
                $(".wi").addClass("wi-night-alt-rain");
            } else if (a >= 511 && a <= 531) {
                $(".wi").addClass("wi-rain");
            } else if (a >= 200 && a <= 232) {
                $(".wi").addClass("wi-night-alt-thunderstorm");
            } else {
                $(".wi").addClass("wi-barometer");
            }
    }
}
