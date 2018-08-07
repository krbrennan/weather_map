const searchField = document.getElementById('searchInput');

const temp = document.getElementById('temp');
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
  // console.log(e)
  // if Number(e) evaluates to typeof number, getWeatherZip
  // if Number(e) evaluates to NaN, getWeather
  if(typeof e === "number"){
    getWeatherZip(e)
  } else {getWeatherCity(e)}
}

async function getWeatherZip(e){
  const zip = Number(e)
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${zip},US&type=accurate&APPID=ac628c4c599f5392d529f22369c7f85f&units=imperial`)
  return results(await response.json())
}

async function getWeatherCity(e){
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=ac628c4c599f5392d529f22369c7f85f&units=imperial`)
  return results(await response.json())
}

async function getWeatherCoords(e){
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${e}&APPID=ac628c4c599f5392d529f22369c7f85f&units=imperial`)
}

function capitalize(data){

  let info = data.split(" ").map(function(ele){
    return ele[0].toUpperCase() + ele.substr(1)
    // console.log(ele)
  });
  return info.join(" ")
}

function results(data){
  console.log(data)
  temp.innerHTML = Math.floor(data.main.temp)
  main.innerHTML = data.weather[0].main
  forecast.innerHTML = capitalize(data.weather[0].description)
  cityName.innerHTML = data.name
}

// window.onload = getWeather();



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
