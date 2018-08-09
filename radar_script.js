// const radarGif = document.getElementById('gif');
//
// function getCoords(){
//   navigator.geolocation.getCurrentPosition(function(position) {
//     let lat = position.coords.latitude;
//     let long = position.coords.longitude;
//     console.log(lat,long)
//     getRadar(lat,long);
//   });
// }
//
//   // async function getRadar(lat,long){
//   //   const proxy = 'https://cors-anywhere.herokuapp.com/'
//   //   const response = await fetch(proxy + `http://api.wunderground.com/api/3f1b4a4efc252d22/radar/image.gif?centerlat=${lat}&centerlon=${long}&radius=100&width=280&height=280&newmaps=1`, {
//   //     // headers: {
//   //     //   "mode": "no-cors",
//   //     //   "Access-Controll-Allow-Origin": "http://localhost:3000",
//   //     //   "Access-Controll-Allow-Methods": "POST, GET",
//   //     //   "Access-Controll-Allow-Credentials": "true",
//   //     //   "Access-Controll-Allow-Headers": "Content-Type Authorization"
//   //     // }
//   //
//   //   });
//   //   return handleRadar(await response.json())
//   // }
//
//   async function getRadar(lat,long){
//       const url = `https://tile.openweathermap.org/map/precipitation_new/50/50/50.png?appid=ac628c4c599f5392d529f22369c7f85f`
//       const proxy = `https://cors-anywhere.herokuapp.com/`
//       const response = await fetch(url, {
//         method: "get",
//       })
//       const next = response.body
//       const reader = next.getReader()
//       console.log(reader)
//       console.log(response)
//       // return handleRadar(await response.json())
//   }
//
// function handleRadar(gif) {
//   console.log(gif)
// }
//
// getCoords();
