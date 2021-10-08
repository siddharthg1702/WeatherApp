function getWindSpeed(windSpeed) {
  // windSpeed = 13
  if (windSpeed >= 25)
    return "https://www.clipartmax.com/png/middle/2-27821_wind-clipart-forecast-icon-line-icon-weather-wind-windy-wind-clipart.png";
  if (windSpeed <= 12)
    return "https://www.clipartmax.com/png/middle/31-318730_cold-wind-blowing-vector-wind-blow-icon.png";
  else
    return "https://www.clipartmax.com/png/middle/31-319198_winds-weather-symbol-vector-weather-symbol-for-wind.png";
}

function getStatusImage(statusCode, startTime, sunriseTime, sunsetTime) {
  var currT = new Date(startTime), riseT = new Date(sunriseTime), setT = new Date(sunsetTime);
  var ind = 0;
  if (currT >= riseT && currT < setT) {
    ind = 1;
  }
  // console.log(currT);
  // console.log(riseT);
  // console.log(setT);
  // console.log(ind);
  var weatherIcons = {
    "4201": ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/rain_heavy.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/rain_heavy.svg"],

    "4001": ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/rain.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/rain.svg"],

    "4200": ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/rain_light.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/rain_light.svg"],

    "6201": ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/freezing_rain_heavy.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/freezing_rain_heavy.svg"],

    "6001": ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/freezing_rain.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/freezing_rain.svg"],

    "6200": ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/freezing_rain_light.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/freezing_rain_light.svg"],

    "6000": ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/freezing_drizzle.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/freezing_drizzle.svg"],

    "4000": ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/drizzle.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/drizzle.svg"],

    "7101": ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/ice_pellets_heavy.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/ice_pellets_heavy.svg"],

    "7000": ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/ice_pellets.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/ice_pellets.svg"],

    "7102": ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/ice_pellets_light.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/ice_pellets_light.svg"],

    "5101": ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/snow_heavy.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/snow_heavy.svg"],

    "5000": ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/snow.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/snow.svg"],

    "5100": ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/snow_light.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/snow_light.svg"],

    "5001": ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/flurries.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/flurries.svg"],

    "8000": ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/tstorm.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/tstorm.svg"],

    "2100": ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/fog_light.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/fog_light.svg"],

    "2000": ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/fog.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/fog.svg"],

    "1001": ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/cloudy.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/cloudy.svg"],

    "1102": ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/mostly_cloudy.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/mostly_cloudy.svg"],

    "1101": ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/partly_cloudy_night.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/partly_cloudy_day.svg"],

    "1100": ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/mostly_clear_night.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/mostly_clear_day.svg"],

    "1000": ["https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/clear_night.svg", "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/d53e9d2ffc4d7e182f91d8fda333b189aaea7a13/color/clear_day.svg"]
  };

  return weatherIcons[statusCode][ind];
}

function fToC(fahrenheit) {
  // var fTemp = fahrenheit;
  // var fToCel = (fTemp - 32) * 5 / 9;

  // return fToCel;

  return fahrenheit;

}

function convertTime(timeStamp) {
  var dt = new Date(timeStamp);
  // console.log("DT = ");
  // console.log(dt);
  var hours = dt.getHours();
  var AmOrPm = hours >= 12 ? 'PM' : 'AM';
  hours = (hours % 12) || 12;

  var finalTime = hours.toString() + AmOrPm;
  return finalTime;
}

function retPrecpType(prepCode) {
  var prepJSON = {
    "0": "N/A",
    "1": "Rain",
    "2": "Snow",
    "3": "Freezing Rain",
    "4": "Ice Pellets"
  };

  return prepJSON[prepCode];
}

function retStatus(statusCode) {
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

var globalResponse;
var daily_card;

function removeGraphs() {
  document.getElementById("graphData").style.display = "none";
  document.getElementById("removeGraph").style.display = "none";
  document.getElementById("graphData2").style.display = "none";
  document.getElementById("displayGraph").style.display = "block";
}

function displayGraphs1and2() {
  // document.getElementById("displayGraph").style.display = "none";
  displayGraphs();
  displayGraphs2();
}

function displayGraphs() {
  document.getElementById("removeGraph").style.display = "block";
  document.getElementById("displayGraph").style.display = "none";
  document.getElementById("graphData").style.display = "block";
  var chart;
  chart = new Highcharts.Chart({

    chart: {
      renderTo: 'graphData',
      type: 'arearange',
      zoomType: 'x',
      scrollablePlotArea: {
        minWidth: 600,
        scrollPositionX: 1
      }
    },

    title: {
      text: 'Temperature Ranges (Min, Max)'
    },

    xAxis: {
      type: 'datetime',
      accessibility: {
        rangeDescription: 'Range: Jan 1st 2021 to Dec 31 2022.'
      },
    },

    yAxis: {
      title: {
        text: null
      }
    },

    tooltip: {
      crosshairs: true,
      shared: true,
      valueSuffix: '°C',
      xDateFormat: '%A, %b %e'
    },
    plotOptions: {
      series:
      {
        color: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0.5, 'rgba(235, 180, 74, 0.7)'],
            [1, 'rgba(65,105,225,0.4)']]
        }
      }
    },

    legend: {
      enabled: false
    },

    series: [{
      name: 'Temperatures',
      data: TempPoints(globalResponse.data_1d)
    }]
  });

}

function TempPoints(tempData) {
  var tempValues = new Array();
  for (let i = 0; i < tempData.length; i++) {
    var tmpData = new Array();
    var temDate = new Date(tempData[i]["startTime"]);
    tmpData.push(temDate.getTime());
    tmpData.push(tempData[i]["values"]["temperatureMin"]);
    tmpData.push(tempData[i]["values"]["temperatureMax"]);
    tempValues.push(tmpData);
  }
  console.log(tempValues);
  return tempValues;
}


function displayGraphs2() {
  document.getElementById("graphData2").style.display = "block";
}

function Meteogram(json, container) {
  // Parallel arrays for the chart data, these are populated as the JSON file
  // is loaded
  this.symbols = [];
  this.precipitations = [];
  this.precipitationsError = []; // Only for some data sets
  this.winds = [];
  this.temperatures = [];
  this.pressures = [];

  // Initialize
  this.json = json;
  this.container = container;

  // Run
  this.parseYrData();
}


Meteogram.dictionary = {
  clearsky: {
    symbol: '01',
    text: 'Clear sky'
  },
  fair: {
    symbol: '02',
    text: 'Fair'
  },
  partlycloudy: {
    symbol: '03',
    text: 'Partly cloudy'
  },
  cloudy: {
    symbol: '04',
    text: 'Cloudy'
  },
  lightrainshowers: {
    symbol: '40',
    text: 'Light rain showers'
  },
  rainshowers: {
    symbol: '05',
    text: 'Rain showers'
  },
  heavyrainshowers: {
    symbol: '41',
    text: 'Heavy rain showers'
  },
  lightrainshowersandthunder: {
    symbol: '24',
    text: 'Light rain showers and thunder'
  },
  rainshowersandthunder: {
    symbol: '06',
    text: 'Rain showers and thunder'
  },
  heavyrainshowersandthunder: {
    symbol: '25',
    text: 'Heavy rain showers and thunder'
  },
  lightsleetshowers: {
    symbol: '42',
    text: 'Light sleet showers'
  },
  sleetshowers: {
    symbol: '07',
    text: 'Sleet showers'
  },
  heavysleetshowers: {
    symbol: '43',
    text: 'Heavy sleet showers'
  },
  lightsleetshowersandthunder: {
    symbol: '26',
    text: 'Light sleet showers and thunder'
  },
  sleetshowersandthunder: {
    symbol: '20',
    text: 'Sleet showers and thunder'
  },
  heavysleetshowersandthunder: {
    symbol: '27',
    text: 'Heavy sleet showers and thunder'
  },
  lightsnowshowers: {
    symbol: '44',
    text: 'Light snow showers'
  },
  snowshowers: {
    symbol: '08',
    text: 'Snow showers'
  },
  heavysnowshowers: {
    symbol: '45',
    text: 'Heavy show showers'
  },
  lightsnowshowersandthunder: {
    symbol: '28',
    text: 'Light snow showers and thunder'
  },
  snowshowersandthunder: {
    symbol: '21',
    text: 'Snow showers and thunder'
  },
  heavysnowshowersandthunder: {
    symbol: '29',
    text: 'Heavy snow showers and thunder'
  },
  lightrain: {
    symbol: '46',
    text: 'Light rain'
  },
  rain: {
    symbol: '09',
    text: 'Rain'
  },
  heavyrain: {
    symbol: '10',
    text: 'Heavy rain'
  },
  lightrainandthunder: {
    symbol: '30',
    text: 'Light rain and thunder'
  },
  rainandthunder: {
    symbol: '22',
    text: 'Rain and thunder'
  },
  heavyrainandthunder: {
    symbol: '11',
    text: 'Heavy rain and thunder'
  },
  lightsleet: {
    symbol: '47',
    text: 'Light sleet'
  },
  sleet: {
    symbol: '12',
    text: 'Sleet'
  },
  heavysleet: {
    symbol: '48',
    text: 'Heavy sleet'
  },
  lightsleetandthunder: {
    symbol: '31',
    text: 'Light sleet and thunder'
  },
  sleetandthunder: {
    symbol: '23',
    text: 'Sleet and thunder'
  },
  heavysleetandthunder: {
    symbol: '32',
    text: 'Heavy sleet and thunder'
  },
  lightsnow: {
    symbol: '49',
    text: 'Light snow'
  },
  snow: {
    symbol: '13',
    text: 'Snow'
  },
  heavysnow: {
    symbol: '50',
    text: 'Heavy snow'
  },
  lightsnowandthunder: {
    symbol: '33',
    text: 'Light snow and thunder'
  },
  snowandthunder: {
    symbol: '14',
    text: 'Snow and thunder'
  },
  heavysnowandthunder: {
    symbol: '34',
    text: 'Heavy snow and thunder'
  },
  fog: {
    symbol: '15',
    text: 'Fog'
  }
};

Meteogram.prototype.drawWeatherSymbols = function (chart) {

  chart.series[0].data.forEach((point, i) => {
    if (this.resolution > 36e5 || i % 2 === 0) {

      // const [symbol, specifier] = this.symbols[i].split('_'),
      //     icon = Meteogram.dictionary[symbol].symbol +
      //         ({ day: 'd', night: 'n' }[specifier] || '');

      // if (Meteogram.dictionary[symbol]) {
      //     chart.renderer
      //         .image(
      //             'https://cdn.jsdelivr.net/gh/nrkno/yr-weather-symbols' +
      //                 `@8.0.1/dist/svg/${icon}.svg`,
      //             point.plotX + chart.plotLeft - 8,
      //             point.plotY + chart.plotTop - 30,
      //             30,
      //             30
      //         )
      //         .attr({
      //             zIndex: 5
      //         })
      //         .add();
      // } else {
      //     console.log(symbol);
      // }
    }
  });
};

Meteogram.prototype.drawBlocksForWindArrows = function (chart) {
  const xAxis = chart.xAxis[0];

  for (
    let pos = xAxis.min, max = xAxis.max, i = 0;
    pos <= max + 36e5; pos += 36e5,
    i += 1
  ) {

    // Get the X position
    const isLast = pos === max + 36e5,
      x = Math.round(xAxis.toPixels(pos)) + (isLast ? 0.5 : -0.5);

    // Draw the vertical dividers and ticks
    const isLong = this.resolution > 36e5 ?
      pos % this.resolution === 0 :
      i % 2 === 0;

    chart.renderer
      .path([
        'M', x, chart.plotTop + chart.plotHeight + (isLong ? 0 : 28),
        'L', x, chart.plotTop + chart.plotHeight + 32,
        'Z'
      ])
      .attr({
        stroke: chart.options.chart.plotBorderColor,
        'stroke-width': 1
      })
      .add();
  }

  // Center items in block
  chart.get('windbarbs').markerGroup.attr({
    translateX: chart.get('windbarbs').markerGroup.translateX + 8
  });

};

Meteogram.prototype.getChartOptions = function () {
  return {
    chart: {
      renderTo: this.container,
      marginBottom: 70,
      marginRight: 40,
      marginTop: 50,
      plotBorderWidth: 1,
      height: 310,
      alignTicks: false,
      scrollablePlotArea: {
        minWidth: 720
      }
    },

    defs: {
      patterns: [{
        id: 'precipitation-error',
        path: {
          d: [
            'M', 3.3, 0, 'L', -6.7, 10,
            'M', 6.7, 0, 'L', -3.3, 10,
            'M', 10, 0, 'L', 0, 10,
            'M', 13.3, 0, 'L', 3.3, 10,
            'M', 16.7, 0, 'L', 6.7, 10
          ].join(' '),
          stroke: '#68CFE8',
          strokeWidth: 1
        }
      }]
    },

    title: {
      text: 'Hourly Weather(For Next 5 Days)',
      align: 'center',
      style: {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
      }
    },

    credits: {
      text: 'Forecast from <a href="https://yr.no">yr.no</a>',
      href: 'https://yr.no',
      position: {
        x: -40
      }
    },

    tooltip: {
      shared: true,
      useHTML: true,
      headerFormat:
        '<small>{point.x:%A, %b %e, %H:%M} - {point.point.to:%H:%M}</small><br>' +
        '<b>{point.point.symbolName}</b><br>'

    },

    xAxis: [{ // Bottom X axis
      type: 'datetime',
      tickInterval: 2 * 36e5, // two hours
      minorTickInterval: 36e5, // one hour
      tickLength: 0,
      gridLineWidth: 1,
      gridLineColor: 'rgba(128, 128, 128, 0.1)',
      startOnTick: false,
      endOnTick: false,
      minPadding: 0,
      maxPadding: 0,
      offset: 30,
      showLastLabel: true,
      labels: {
        format: '{value:%H}'
      },
      crosshair: true
    }, { // Top X axis
      linkedTo: 0,
      type: 'datetime',
      tickInterval: 24 * 3600 * 1000,
      labels: {
        format: '{value:<span style="font-size: 12px; font-weight: bold">%a</span> %b %e}',
        align: 'left',
        x: 3,
        y: -5
      },
      opposite: true,
      tickLength: 20,
      gridLineWidth: 1
    }],

    yAxis: [{ // temperature axis
      title: {
        text: null
      },
      labels: {
        format: '{value}°',
        style: {
          fontSize: '10px'
        },
        x: -3
      },
      plotLines: [{ // zero plane
        value: 0,
        color: '#BBBBBB',
        width: 1,
        zIndex: 2
      }],
      maxPadding: 0.3,
      minRange: 8,
      tickInterval: 1,
      gridLineColor: 'rgba(128, 128, 128, 0.1)'

    }, { // precipitation axis
      title: {
        text: null
      },
      labels: {
        enabled: false
      },
      gridLineWidth: 0,
      tickLength: 0,
      minRange: 10,
      min: 0

    }, { // Air pressure
      allowDecimals: false,
      title: { // Title on top of axis
        text: 'hPa',
        offset: 0,
        align: 'high',
        rotation: 0,
        style: {
          fontSize: '10px',
          color: Highcharts.getOptions().colors[2]
        },
        textAlign: 'left',
        x: 3
      },
      labels: {
        style: {
          fontSize: '8px',
          color: Highcharts.getOptions().colors[2]
        },
        y: 2,
        x: 3
      },
      gridLineWidth: 0,
      opposite: true,
      showLastLabel: false
    }],

    legend: {
      enabled: false
    },

    plotOptions: {
      series: {
        pointPlacement: 'between'
      }
    },


    series: [{
      name: 'Temperature',
      data: this.temperatures,
      type: 'spline',
      marker: {
        enabled: false,
        states: {
          hover: {
            enabled: true
          }
        }
      },
      tooltip: {
        pointFormat: '<span style="color:{point.color}">\u25CF</span> ' +
          '{series.name}: <b>{point.y}°C</b><br/>'
      },
      zIndex: 1,
      color: '#FF3333',
      negativeColor: '#48AFE8'
    }, {
      name: 'Precipitation',
      data: this.precipitationsError,
      type: 'column',
      color: 'url(#precipitation-error)',
      yAxis: 1,
      groupPadding: 0,
      pointPadding: 0,
      tooltip: {
        valueSuffix: ' mm',
        pointFormat: '<span style="color:{point.color}">\u25CF</span> ' +
          '{series.name}: <b>{point.minvalue} mm - {point.maxvalue} mm</b><br/>'
      },
      grouping: false,
      dataLabels: {
        enabled: this.hasPrecipitationError,
        filter: {
          operator: '>',
          property: 'maxValue',
          value: 0
        },
        style: {
          fontSize: '8px',
          color: 'gray'
        }
      }
    }, {
      name: 'Humidity',
      data: this.precipitations,
      type: 'column',
      color: '#68CFE8',
      yAxis: 1,
      groupPadding: 0,
      pointPadding: 0,
      grouping: false,
      dataLabels: {
        enabled: !this.hasPrecipitationError,
        filter: {
          operator: '>',
          property: 'y',
          value: 0
        },
        style: {
          fontSize: '8px',
          color: 'gray'
        }
      },
      tooltip: {
        valueSuffix: ' mm'
      }
    }, {
      name: 'Air pressure',
      color: '#FFA500',//Highcharts.getOptions().colors[2],
      data: this.pressures,
      marker: {
        enabled: false
      },
      shadow: false,
      tooltip: {
        valueSuffix: ' hPa'
      },
      dashStyle: 'shortdot',
      yAxis: 2
    }, {
      name: 'Wind',
      type: 'windbarb',
      id: 'windbarbs',
      color: Highcharts.getOptions().colors[1],
      lineWidth: 1.5,
      data: this.winds,
      vectorLength: 18,
      yOffset: -15,
      tooltip: {
        valueSuffix: ' m/s'
      }
    }]
  };
};

Meteogram.prototype.onChartLoad = function (chart) {

  this.drawWeatherSymbols(chart);
  this.drawBlocksForWindArrows(chart);

};

Meteogram.prototype.createChart = function () {
  this.chart = new Highcharts.Chart(this.getChartOptions(), chart => {
    this.onChartLoad(chart);
  });
};

Meteogram.prototype.error = function () {
  document.getElementById('loading').innerHTML =
    '<i class="fa fa-frown-o"></i> Failed loading data, please try again later';
};

Meteogram.prototype.parseYrData = function () {

  let pointStart;

  if (!this.json) {
    return this.error();
  }

  // Loop over hourly (or 6-hourly) forecasts
  this.json.forEach((node, i) => {
    const currdate = new Date(node.startTime);
    const x = currdate.getTime();
    const to = currdate.getHours() + 1;
    if (to > pointStart + 6 * 24 * 36e5) {
      return;
    }

    this.temperatures.push({
      x,
      y: node.values.temperature,
      to,
    });

    this.precipitations.push({
      x,
      y: node.values.humidity
    });

    if (i % 2 === 0) {
      this.winds.push({
        x,
        value: node.values.windSpeed,
        direction: node.values.windDirection
      });
    }

    this.pressures.push({
      x,
      y: node.values.pressureSeaLevel
    });

    if (i === 0) {
      pointStart = (x + to) / 2;
    }
  });

  this.createChart();
};

$(document).ready(function () {

  function highChart() {
    console.log("Hello World");
    window.meteogram = new Meteogram(globalResponse.data_1h, 'graphData2');
  }

  function getData() {

    var tableHeaderRowCount = 1;
    var table = document.getElementById('forecast-table');
    var rowCount = table.rows.length;
    for (var i = tableHeaderRowCount; i < rowCount; i++) {
      table.deleteRow(tableHeaderRowCount);
    }

    document.getElementById("forecast-section").style.display = "none";
    document.getElementById("daily-weather").style.display = "none";
    document.getElementById("daily-header").style.display = "none";
    document.getElementById("today-card").style.display = "none";

    var street = document.getElementById("street").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;

    console.log(street);
    console.log(city);
    console.log(state);

    var outputdata = { "street": street, "city": city, "state": state, "checked": $("#location").is(':checked') };
    console.log(outputdata)

    $.ajax({
      url: "/locationWeather",
      type: "GET",
      data: outputdata,
      success: function (response) {
        console.log(response);
        globalResponse = response;
        
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
        for (var i = 0; i < 14; i += 1) {
          var row = tableEle.insertRow(i + 1);
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          var cell3 = row.insertCell(2);
          var cell4 = row.insertCell(3);
          var cell5 = row.insertCell(4);

          var dt = new Date(response.data_1d[i + 1].startTime);
          cell1.innerHTML = retDay(dt.getDay()) + ", " + dt.toString().slice(8, 10) + " " + dt.toString().slice(4, 7) + " " + dt.toString().slice(11, 15);

          var icon_child = document.createElement("img");
          icon_child.src = getStatusImage(response.data_1d[i + 1].values?.weatherCode, response.data_1h[0].startTime, response.data_1d[0].values?.sunriseTime, response.data_1d[0].values?.sunsetTime);
          icon_child.style.width = "40px";
          icon_child.style.height = "40px";
          cell2.appendChild(icon_child);
          cell2.style.display = "flex";
          cell2.style["align-items"] = "center";
          cell2.style["justify-content"] = "center";

          var day_status = document.createElement("div");
          day_status.innerHTML = "&nbsp&nbsp&nbsp&nbsp" + retStatus(response.data_1d[i + 1].values?.weatherCode);
          cell2.appendChild(day_status);

          cell3.innerHTML = fToC(response.data_1d[i + 1].values?.temperatureMax).toFixed(2);
          cell4.innerHTML = fToC(response.data_1d[i + 1].values?.temperatureMin).toFixed(2);
          cell5.innerHTML = response.data_1d[i + 1].values?.windSpeed;
          row.id = "forecast-" + (i + 1).toString();

          var cardDiv = document.createElement("div");
          cardDiv.id = "daily-card" + (i + 1).toString();
          cardDiv.class = "daily-card-class";
          cardDiv.style.display = "none";

          var child = document.createElement("div");
          var parent = document.createElement("div");
          var parent2 = document.createElement("div");
          parent2.style.display = "flex";
          parent2.style["justify-content"] = "space-between";

          child.innerHTML = retDay(dt.getDay()) + ", " + dt.toString().slice(8, 10) + " " + dt.toString().slice(4, 7) + " " + dt.toString().slice(11, 15) + "<br><br>";
          child.class = "d-date";
          child.style.color = "#384b79";
          child.style["font-size"] = "1.5em";
          parent.appendChild(child);

          child = document.createElement("div");
          child.innerHTML = retStatus(response.data_1d[i + 1].values?.weatherCode) + "<br><br>";
          child.class = "d-status";
          child.style.color = "#384b79";
          child.style["font-size"] = "1.5em";
          parent.appendChild(child);

          child = document.createElement("div");
          child.innerHTML = response.data_1d[i + 1].values?.temperatureMax + "°F/" + response.data_1d[i + 1].values?.temperatureMin + "°F" + "<br><br>";
          child.class = "d-max-min";
          child.style.color = "#384b79";
          child.style["font-size"] = "2em";
          parent.appendChild(child);

          parent2.appendChild(parent);

          child = document.createElement("img");
          child.src = getStatusImage(response.data_1d[i + 1].values?.weatherCode, response.data_1h[0].startTime, response.data_1d[0].values?.sunriseTime, response.data_1d[0].values?.sunsetTime);
          child.class = "d-status-icon";
          child.style.width = "150px";
          child.style["padding-left"] = "25px";
          child.style["padding-bottom"] = "75px";

          parent2.appendChild(child);
          cardDiv.appendChild(parent2);

          parent = document.createElement("div");

          child = document.createElement("div");
          child.innerHTML = "Precipitation: " + retPrecpType(response.data_1d[i + 1].values?.precipitationType);
          child.class = "d-precp-type";
          child.style.color = "white";
          child.style["line-height"] = "30px";
          parent.appendChild(child);

          child = document.createElement("div");
          child.innerHTML = "Chance of Rain: " + response.data_1d[i + 1].values?.precipitationProbability + "%";
          child.class = "d-precp-prob";
          child.style.color = "white";
          child.style["line-height"] = "30px";
          parent.appendChild(child);

          child = document.createElement("div");
          child.innerHTML = "Wind Speed: " + response.data_1d[i + 1].values?.windSpeed + "mph";
          child.class = "d-wind-speed";
          child.style.color = "white";
          child.style["line-height"] = "30px";
          parent.appendChild(child);

          child = document.createElement("div");
          child.innerHTML = "Humidity: " + response.data_1d[i + 1].values?.humidity + "%";
          child.class = "d-humidity";
          child.style.color = "white";
          child.style["line-height"] = "30px";
          parent.appendChild(child);

          child = document.createElement("div");
          child.innerHTML = "Visiility: " + response.data_1d[i + 1].values?.visibility + "mi";
          child.class = "d-visibility";
          child.style.color = "white";
          child.style["line-height"] = "30px";
          parent.appendChild(child);

          var sunrise_format = convertTime(response.data_1d[i + 1].values?.sunriseTime)
          var sunset_format = convertTime(response.data_1d[i + 1].values?.sunsetTime)

          child = document.createElement("div");
          child.innerHTML = "Sunrise/Sunset: " + sunrise_format + "/" + sunset_format;
          child.class = "d-sunrise";
          child.style.color = "white";
          child.style["line-height"] = "30px";
          child.style["padding-bottom"] = "20px"
          parent.appendChild(child);

          parent.style["text-align"] = "center";


          cardDiv.appendChild(parent);

          var currDiv = document.getElementById("daily-weather");
          currDiv.appendChild(cardDiv);
          var createClickHandler = function (clickedRow) {
            return function () {
              var tempStr = "daily-card" + clickedRow.id.slice(9);
              document.getElementById(tempStr).style.display = "block";
              console.log(tempStr);
              document.getElementById("forecast-section").style.display = "none";
              document.getElementById("today-card").style.display = "none";
              document.getElementById("daily-weather").style.display = "block";
              document.getElementById("daily-header").style.display = "block";
              document.getElementById("chart-section").style.display = "block";
              daily_card = tempStr;
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

  myGetData = getData;

  $("#weather_form").submit(function () {
    getData();
  });

  $("#displayGraph").click(function () {
    highChart();
  });

  $("#location").change(function () {
    console.log("In check");
    $(this).is(':checked') ?
      $('#street').prop('required', false) :
      $('#street').prop('required', true);
    $(this).is(':checked') ?
      $('#city').prop('required', false) :
      $('#city').prop('required', true);
    $(this).is(':checked') ?
      $('#state').prop('required', false) :
      $('#state').prop('required', true);
    
    if($(this).is(':checked'))
    {
      document.getElementById("street").value = "";
      document.getElementById("city").value = "";
      document.getElementById("state").value = "";
      document.getElementById("street").disabled = true;
      document.getElementById("city").disabled = true;
      document.getElementById("state").disabled = true;
    }
    else
    {
      document.getElementById("street").disabled = false;
      document.getElementById("city").disabled = false;
      document.getElementById("state").disabled = false;
    }
  });
});

function clearFunc() {
  var tableHeaderRowCount = 1;
  var table = document.getElementById('forecast-table');
  var rowCount = table.rows.length;
  for (var i = tableHeaderRowCount; i < rowCount; i++) {
    table.deleteRow(tableHeaderRowCount);
  }

  document.getElementById("street").value = "";
  document.getElementById("city").value = "";
  document.getElementById("state").value = "";
  document.getElementById("forecast-section").style.display = "none";
  document.getElementById("daily-weather").style.display = "none";
  document.getElementById("daily-header").style.display = "none";
  document.getElementById("today-card").style.display = "none";
  document.getElementById("chart-section").style.display = "none";

  document.getElementById("street").disabled = false;
  document.getElementById("city").disabled = false;
  document.getElementById("state").disabled = false;
  document.getElementById("location").checked = false;

  removeGraphs();

}

window.onload = function() {
  const queryString = window.location.search;
  console.log(queryString);

  if(queryString == "")
    return;

  const urlParams = new URLSearchParams(queryString);
  console.log(urlParams.get("location"));

  if(urlParams.get("location") == null)
  {
    console.log("Address given");
    document.getElementById("street").value = urlParams.get("street");
    document.getElementById("city").value = urlParams.get("city");
    document.getElementById("state").value = urlParams.get("state");

    myGetData();
  }
  else
  {
    console.log("Auto detect");
    document.getElementById("location").checked = true;
    document.getElementById("street").disabled = true;
    document.getElementById("city").disabled = true;
    document.getElementById("state").disabled = true;
    myGetData();
  }
};