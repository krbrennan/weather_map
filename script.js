// api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}

// const url = 'api.openweathermap.org/data/2.5/weather?zip=18020,us'

async function getWeather(){
  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?zip=18020&APPID=ac628c4c599f5392d529f22369c7f85f')
  const data = await response.json()
}
