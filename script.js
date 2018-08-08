const searchField = document.getElementById('searchInput');


// current weather
const temp = document.getElementById('temp');
const tempIcon = document.getElementById('temp-icon');
const high = document.getElementById('high');
const low = document.getElementById('low');
const humidity = document.getElementById('humidity');
//
const main = document.getElementById('main');
const forecast = document.getElementById('forecast');
const cityName = document.getElementById('city-name');
const getGeo = document.getElementById('geo-locate-btn');

// forecast
const todayTemp = document.getElementById('today-temp')
const todayTempIcon = document.getElementById('today-temp-icon')
const todayHighLow = document.getElementById('today-high-low')
const todayHigh = document.getElementById('today-high')
const todayLow = document.getElementById('today-low')
const todayHumidityDiv = document.querySelector('today-humidity')
const todayHumidity = document.getElementById('today-humidity')

const tonightTemp = document.getElementById('tonight-temp')
const tonightTempIcon = document.getElementById('tonight-temp-icon')
const tonightHighLow = document.getElementById('tonight-high-low')
const tonightHigh = document.getElementById('tonight-high')
const tonightLow = document.getElementById('tonight-low')

const tomorrowTemp = document.getElementById('tomorrow-temp')
const tomorrowTempIcon = document.getElementById('tomorrow-temp-icon')
const tomorrowHighLow = document.getElementById('tomorrow-high-low')
const tomorrowHigh = document.getElementById('tomorrow-high')
const tomorrowLow = document.getElementById('tomorrow-low')





searchField.addEventListener('submit', function(e){
  e.preventDefault();
  e.persist;
  handleForm(e.target[0].value);
});

getGeo.addEventListener('click', function(e){
  e.preventDefault();
  getCoords();
});

function handleForm(e) {
  getWeather(e)
  getForecast(e)
}

// async function getWeatherZip(e){
//   const zip = Number(e)
//   const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&APPID=ac628c4c599f5392d529f22369c7f85f&units=imperial`)
//   return results(await response.json())
// }

async function getWeather(e){
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e},us&APPID=ac628c4c599f5392d529f22369c7f85f&units=imperial`)
  return results(await response.json())
}

async function getWeatherCoords(lat,long){
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=ac628c4c599f5392d529f22369c7f85f&units=imperial`)
  return results(await response.json())
}

async function getForecast(e){
  const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${e},us&APPID=ac628c4c599f5392d529f22369c7f85f&units=imperial`)
  return forecastResults(await response.json())
}

async function getForecastCoords(lat, long){
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&APPID=ac628c4c599f5392d529f22369c7f85f&units=imperial`)
  return forecastResults(await response.json())
}


function capitalize(data){
  // capitalizes the forecast. default is all lower-case
  let info = data.split(" ").map(function(ele){
    return ele[0].toUpperCase() + ele.substr(1)
  });
  return info.join(" ")
}

function forecastResults(data){
  // console.log(data.list[0].weather[0].icon)
  console.log(data)
// Today
  let temperatureIcon = data.list[0].weather[0].icon
  todayTempIcon.src = `http://openweathermap.org/img/w/${temperatureIcon}.png`
  todayTempIcon.style.visibility = 'visible'

  todayHigh.innerHTML = Math.floor(data.list[0].main.temp_max) + "˚"
  todayHigh.style = 'border-right: 2px solid black;'
  todayLow.innerHTML = Math.floor(data.list[0].main.temp_min)+ "˚"

// Tonight
  let tonightTemperatureIcon = data.list[2].weather[0].icon
  tonightTempIcon.src = `http://openweathermap.org/img/w/${tonightTemperatureIcon}.png`
  tonightTempIcon.style.visibility = 'visible'

  tonightLow.innerHTML = Math.floor(data.list[2].main.temp_min)+ "˚"

// Tomorrow
  let temperatureIcon = data.list[0].weather[0].icon
  todayTempIcon.src = `http://openweathermap.org/img/w/${temperatureIcon}.png`
  todayTempIcon.style.visibility = 'visible'

  todayHigh.innerHTML = Math.floor(data.list[0].main.temp_max) + "˚"
  todayHigh.style = 'border-right: 2px solid black;'
  todayLow.innerHTML = Math.floor(data.list[0].main.temp_min)+ "˚"
}

function results(data){
  // console.log(data)
  cityName.innerHTML = data.name
  cityName.style.visibility = 'visible'

  let temperatureIcon = data.weather[0].icon
  tempIcon.src = `http://openweathermap.org/img/w/${temperatureIcon}.png`
  tempIcon.style.visibility = 'visible'

  // high.innerHTML = Math.floor(data.main.temp_max) + "˚"
  // high.style = 'border-right: 2px solid black;'
  // low.innerHTML = Math.floor(data.main.temp_min)+ "˚"

  humidity.innerHTML = data.main.humidity + "%" + "Humidity"

  temp.innerHTML = Math.floor(data.main.temp)
  main.innerHTML = data.weather[0].main
  forecast.innerHTML = capitalize(data.weather[0].description)
}

//
//
//
// GEOLOCATOR
//
//
function getCoords(){
  navigator.geolocation.getCurrentPosition(function(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    getWeatherCoords(lat,long);
    getForecastCoords(lat,long);
  });
}
