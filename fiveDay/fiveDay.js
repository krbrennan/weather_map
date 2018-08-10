const searchBox = document.getElementById('searchInput')
const coordBtn = document.getElementById('geo-locate-btn')

function getCoords(){
  navigator.geolocation.getCurrentPosition(function(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    getForecast(lat,long);
  });
}

async function getForecast(lat,long) {
  const proxy = `https://thingproxy.freeboard.io/fetch/`
  const url = `https://api.darksky.net/forecast/3c36360a47f4cc747e19871230e1ecd8/${lat},${long}`
  const response = await fetch(proxy + url)
  return parseResults(await response.json())
}

function parseResults(e){
  console.log(e)
}




searchBox.addEventListener('submit', function(e){
  e.preventDefault()
  e.persist
  getForecast(e)
});

coordBtn.addEventListener('click', function(e){
  e.preventDefault()
  getCoords()
});
