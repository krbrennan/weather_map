const searchField = document.getElementById('searchInput');

const temp = document.getElementById('temp');
const tempIcon = document.getElementById('temp-icon');
const high = document.getElementById('high');
const low = document.getElementById('low');
const humidity = document.getElementById('humidity');

const main = document.getElementById('main');
const forecast = document.getElementById('forecast');
const cityName = document.getElementById('city-name');
const getGeo = document.getElementById('geo-locate-btn');
// api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}

// const url = 'api.openweathermap.org/data/2.5/weather?zip=18020,us'

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

function capitalize(data){
  // capitalizes the forecast. default is all lower-case
  let info = data.split(" ").map(function(ele){
    return ele[0].toUpperCase() + ele.substr(1)
  });
  return info.join(" ")
}

function results(data){
  console.log(data)
  cityName.innerHTML = data.name
  cityName.style.visibility = 'visible'

  let temperatureIcon = data.weather[0].icon
  tempIcon.src = `http://openweathermap.org/img/w/${temperatureIcon}.png`
  tempIcon.style.visibility = 'visible'

  high.innerHTML = Math.floor(data.main.temp_max) + "˚"
  high.style = 'border-right: 2px solid black;'
  low.innerHTML = Math.floor(data.main.temp_min)+ "˚"

  humidity.innerHTML = data.main.humidity + "%"

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
  });
}
