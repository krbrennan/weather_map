const searchField = document.getElementById('searchInput')

const temp = document.getElementById('temp')
const main = document.getElementById('main')
const forecast = document.getElementById('forecast')
// api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}

// const url = 'api.openweathermap.org/data/2.5/weather?zip=18020,us'

searchField.addEventListener('submit', function(e){
  e.preventDefault();
  e.persist;
  handleForm(e.target[0].value);
})

function handleForm(e) {
  console.log(e)
}

async function getWeather(){
  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?zip=18020&APPID=ac628c4c599f5392d529f22369c7f85f&units=imperial')
  return results(await response.json())
}

function capitalize(data){

  let info = data.split(" ").map(function(ele){
    return ele[0].toUpperCase() + ele.substr(1)
    // console.log(ele)
  });
  return info.join(" ")
}

function results(data){
  // console.log(data)
  temp.innerHTML = Math.floor(data.main.temp)
  main.innerHTML = data.weather[0].main
  forecast.innerHTML = capitalize(data.weather[0].description)


}

// window.onload = getWeather();
