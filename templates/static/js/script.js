function getWindSpeed(windSpeed)
{
  if(windSpeed >= 25) 
    return "https://www.clipartmax.com/png/middle/2-27821_wind-clipart-forecast-icon-line-icon-weather-wind-windy-wind-clipart.png";
  if(windSpeed <= 12)
    return "https://www.clipartmax.com/png/middle/31-318730_cold-wind-blowing-vector-wind-blow-icon.png";
  else
    return "https://www.clipartmax.com/png/middle/31-319198_winds-weather-symbol-vector-weather-symbol-for-wind.png";
}

function getStatusImage(statusCode, startTime, sunriseTime, sunsetTime)
{
  var currT = new Date(startTime), riseT = new Date(sunriseTime), setT = new Date(sunsetTime);
  var ind = 0;
  if(currT >= riseT && currT < setT)
  {
    ind = 1;
  }
  // console.log(currT);
  // console.log(riseT);
  // console.log(setT);
  // console.log(ind);
  var weatherIcons = {
    "4201" : ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/rain_heavy.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/rain_heavy.svg"],
    
    "4001" : ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/rain.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/rain.svg"],
    
    "4200" : ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/rain_light.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/rain_light.svg"],
    
    "6201" : ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/freezing_rain_heavy.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/freezing_rain_heavy.svg"],
    
    "6001": ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/freezing_rain.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/freezing_rain.svg"],
    
    "6200" : ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/freezing_rain_light.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/freezing_rain_light.svg"],
    
    "6000" : ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/freezing_drizzle.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/freezing_drizzle.svg"],
    
    "4000" : ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/drizzle.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/drizzle.svg"],
    
    "7101" : ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/ice_pellets_heavy.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/ice_pellets_heavy.svg"],
    
    "7000" : ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/ice_pellets.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/ice_pellets.svg"],
    
    "7102" : ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/ice_pellets_light.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/ice_pellets_light.svg"],
    
    "5101" : ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/snow_heavy.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/snow_heavy.svg"],
    
    "5000" : ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/snow.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/snow.svg"],
    
    "5100" : ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/snow_light.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/snow_light.svg"],
    
    "5001" : ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/flurries.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/flurries.svg"],
    
    "8000" : ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/tstorm.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/tstorm.svg"],
    
    "2100" : ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/fog_light.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/fog_light.svg"],
    
    "2000" : ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/fog.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/fog.svg"],
    
    "1001" : ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/cloudy.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/cloudy.svg"],
    
    "1102" : ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/mostly_cloudy.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/mostly_cloudy.svg"],
    
    "1101" : ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/partly_cloudy_night.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/partly_cloudy_day.svg"],
    
    "1100" : ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/mostly_clear_night.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/mostly_clear_day.svg"],
    
    "1000" : ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/clear_night.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/clear_day.svg"]
  };

  return weatherIcons[statusCode][ind];
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  
  return fToCel;
  
} 

function convertTime(timeStamp)
{
  var dt = new Date(timeStamp);
  // console.log("DT = ");
  // console.log(dt);
  var hours = dt.getHours();
  var AmOrPm = hours >= 12 ? 'PM' : 'AM';
  hours = (hours%12) || 12;

  var finalTime = hours.toString() + AmOrPm;
  return finalTime;
}

function retPrecpType(prepCode)
{
  var prepJSON = {
    "0" : "N/A",
    "1" : "Rain",
    "2" : "Snow",
    "3" : "Freezing Rain",
    "4" : "Ice Pellets"
  };

  return prepJSON[prepCode];
}

function retStatus(statusCode)
{
  var weatherJSON = {
    "0": "Unknown",
    "1000": "Clear",
    "1001": "Cloudy",
    "1100": "Mostly Clear",
    "1101": "Partly Cloudy",
    "1102": "Mostly Cloudy",
    "2000": "Fog",
    "2100": "Light Fog",
    "3000": "Light Wind",
    "3001": "Wind",
    "3002": "Strong Wind",
    "4000": "Drizzle",
    "4001": "Rain",
    "4200": "Light Rain",
    "4201": "Heavy Rain",
    "5000": "Snow",
    "5001": "Flurries",
    "5100": "Light Snow",
    "5101": "Heavy Snow",
    "6000": "Freezing Drizzle",
    "6001": "Freezing Rain",
    "6200": "Light Freezing Rain",
    "6201": "Heavy Freezing Rain",
    "7000": "Ice Pellets",
    "7101": "Heavy Ice Pellets",
    "7102": "Light Ice Pellets",
    "8000": "Thunderstorm"
  };
  return weatherJSON[statusCode];
};

function retDay(dayCode) {
  var dayJSON = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return dayJSON[dayCode];
};

$(document).ready(function () {

  function getData() {
    var street = document.getElementById("street").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;

    console.log(street);
    console.log(city);
    console.log(state);

    var outputdata = { "street": street, "city": city, "state": state };

    if($("#location").is(':checked'))
    {
      $.ajax({
        url: "/locationWeather",
        type: "GET",
        success: function (response) {
          console.log(response);
          var icon = getStatusImage(response.data_1h[0].values?.weatherCode, response.data_1h[0].startTime, response.data_1d[0].values?.sunriseTime, response.data_1d[0].values?.sunsetTime);
          document.getElementById("today-image-icon").src = icon;
          document.getElementById("current-loc").innerHTML = response.address;
          document.getElementById("status").innerHTML = retStatus(response.data_1h[0].values?.weatherCode);
          document.getElementById("temperature").innerHTML = fToC(response.data_1h[0].values?.temperature).toFixed(1) + "°";
          document.getElementById("humidity").innerHTML = response.data_1h[0].values?.humidity + "%";
          document.getElementById("pressure").innerHTML = response.data_1h[0].values?.pressureSeaLevel + "inHg";
          document.getElementById("wind-speed").innerHTML = response.data_1h[0].values?.windSpeed + "mph";
          document.getElementById("visibility").innerHTML = response.data_1h[0].values?.visibility + "mi";
          document.getElementById("cloud-cover").innerHTML = response.data_1h[0].values?.cloudCover + "%";
          document.getElementById("uv-level").innerHTML = response.data_1h[0].values?.uvIndex;
          document.getElementById("today-card").style.display = "block";
          document.getElementById("today-wind-speed-icon").src = getWindSpeed(response.data_1h[0].values?.windSpeed);

          var tableEle = document.getElementById("forecast-table");
          for(var i = 0; i < 10; i += 1)
          {
            var row = tableEle.insertRow(i + 1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            cell1.innerHTML = response.data_1d[i+1].startTime.slice(0, 10);
            
            var icon_child = document.createElement("img");
            icon_child.src = getStatusImage(response.data_1d[i+1].values?.weatherCode, response.data_1h[0].startTime, response.data_1d[0].values?.sunriseTime, response.data_1d[0].values?.sunsetTime);
            icon_child.style.width = "25px";
            icon_child.style.height = "25px";
            cell2.appendChild(icon_child);

            var day_status = document.createElement("div");
            day_status.innerHTML = retStatus(response.data_1d[i+1].values?.weatherCode);
            cell2.appendChild(day_status);
            
            // cell2.innerHTML = retStatus(response.data_1d[i+1].values?.weatherCode);
            cell3.innerHTML = response.data_1d[i+1].values?.temperatureMax;
            cell4.innerHTML = response.data_1d[i+1].values?.temperatureMin;
            cell5.innerHTML = response.data_1d[i+1].values?.windSpeed;
            row.id = "forecast-" + (i+1).toString();

            

            var cardDiv = document.createElement("div");
            cardDiv.id = "daily-card" + (i+1).toString();
            cardDiv.class = "daily-card-class";
            cardDiv.style.display = "none";

            var child = document.createElement("div");
            var dt = new Date(response.data_1d[i + 1].startTime);
            child.innerHTML = retDay(dt.getDay()) + ", " + dt.toString().slice(8, 10) + " " + dt.toString().slice(4, 7)  + " " + dt.toString().slice(11, 15);
            // child.innerHTML = response.data_1d[i+1].startTime.slice(0, 10);
            child.class = "d-date";
            cardDiv.appendChild(child);

            child = document.createElement("div");
            child.innerHTML = retStatus(response.data_1d[i+1].values?.weatherCode);
            // child.innerHTML = response.data_1d[i+1].values?.weatherCode;
            child.class = "d-status";
            cardDiv.appendChild(child);

            child = document.createElement("div");
            child.innerHTML = response.data_1d[i+1].values?.temperatureMax + "°F/" + response.data_1d[i+1].values?.temperatureMin + "°F";
            child.class = "d-max-min";
            cardDiv.appendChild(child);

            child = document.createElement("img");
            child.src = getStatusImage(response.data_1d[i+1].values?.weatherCode, response.data_1h[0].startTime, response.data_1d[0].values?.sunriseTime, response.data_1d[0].values?.sunsetTime);
            // child.innerHTML = response.data_1d[i+1].values?.temperatureMax + "°F/" + response.data_1d[i+1].values?.temperatureMin + "°F";
            child.class = "d-status-icon";
            child.style.width = "75px";
            cardDiv.appendChild(child);

            child = document.createElement("div");
            child.innerHTML = retPrecpType(response.data_1d[i+1].values?.precipitationType);
            // child.innerHTML = response.data_1d[i+1].values?.precipitationType;
            child.class = "d-precp-type";
            cardDiv.appendChild(child);

            child = document.createElement("div");
            child.innerHTML = response.data_1d[i+1].values?.precipitationProbability + "%";
            child.class = "d-precp-prob";
            cardDiv.appendChild(child);

            child = document.createElement("div");
            child.innerHTML = response.data_1d[i+1].values?.windSpeed + "mph";
            child.class = "d-wind-speed";
            cardDiv.appendChild(child);

            child = document.createElement("div");
            child.innerHTML = response.data_1d[i+1].values?.humidity + "%";
            child.class = "d-humidity";
            cardDiv.appendChild(child);

            child = document.createElement("div");
            child.innerHTML = response.data_1d[i+1].values?.visibility + "mi";
            child.class = "d-visibility";
            cardDiv.appendChild(child);

            var sunrise_format = convertTime(response.data_1d[i+1].values?.sunriseTime)
            var sunset_format = convertTime(response.data_1d[i+1].values?.sunsetTime)
            // console.log(sunrise_format);

            child = document.createElement("div");
            // child.innerHTML = response.data_1d[i+1].values?.sunriseTime + "/" + response.data_1d[i + 1].values?.sunsetTime;
            child.innerHTML = sunrise_format + "/" + sunset_format;
            child.class = "d-sunrise";
            cardDiv.appendChild(child);

            var currDiv = document.getElementById("daily-weather");
            currDiv.appendChild(cardDiv);
            var createClickHandler = function(clickedRow) {
              return function() {
                var tempStr = "daily-card" + clickedRow.id.slice(9);
                document.getElementById(tempStr).style.display = "block";
                // console.log(clickedRow.id);
                console.log(tempStr);
                document.getElementById("forecast-section").style.display = "none";
                document.getElementById("today-card").style.display = "none";
              }
            };
            row.onclick = createClickHandler(row);
          }
          document.getElementById("forecast-section").style.display = "block";
        },
        error: function (response) {
        }
      });
    }
    else
    {
      console.log(outputdata);
      $.ajax({
        url: "/getmethod",
        type: "GET",
        data: outputdata,
        success: function (response) {
          console.log(response);
          // document.getElementById("status").innerHTML = response.data_1d[0].values?.weatherCode;
          // document.getElementById("temperature").innerHTML = response[0].values?.temperature;
          // document.getElementById("humidity").innerHTML = response[0].values?.humidity;
          // document.getElementById("pressure").innerHTML = response[0].values?.pressureSeaLevel;
          // document.getElementById("wind-speed").innerHTML = response[0].values?.windSpeed;
          // document.getElementById("visibility").innerHTML = response[0].values?.visibility;
          // document.getElementById("cloud-cover").innerHTML = response[0].values?.cloudCover;
          // document.getElementById("uv-level").innerHTML = response[0].values?.uvIndex;
          // document.getElementById("today-card").style.display = "block"
        },
        error: function (response) {
        }
      });
    }

  }

  $("#weather_form").submit(function () {
    getData();
  });

  $("#submit_search").click(function () {
    getData();
  });

  $("#location").change(function() {
    console.log("In check");
    $(this).is(':checked') ?
      $('#street').prop('required', false) : 
      $('#street').prop('required', true) ; 
    $(this).is(':checked') ?
      $('#city').prop('required', false) : 
      $('#city').prop('required', true) ; 
    $(this).is(':checked') ?
      $('#state').prop('required', false) : 
      $('#state').prop('required', true) ; 
  });
});