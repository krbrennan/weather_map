getCoords();

function getCoords(){
  navigator.geolocation.getCurrentPosition(function(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    getWeatherCoords(lat,long);
    getForecastCoords(lat,long);
    getRadar(lat,long);
  });
}
