const coordBtn = document.getElementById('geo-locate-btn')

const hourlyUl = document.getElementById('hourlyUl');



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

function parseResults(data) {
  handleHourly(data.hourly.data)
}


function handleHourly(data) {
  const date = new Date()
  let currHour = date.getHours()


  let count = 0;

  data.forEach((hour) => {
    if(count >= 12){return}
    console.log(hour)

// elements to create
    div = document.createElement('div')
    el = document.createElement('li')
    time = document.createElement('p')
    temp = document.createElement('p')
    realFeel = document.createElement('p')

    outlook = document.createElement('p')
    precipProbability = document.createElement('p')
    outlookDiv = document.createElement('div')

// element classes
    el.className = 'hourly-li'
    div.className = 'temp-div'
    time.className = 'time'
    temp.className = 'temp'
    realFeel.className = 'realFeel'

    outlook.className = 'outlook'
    precipProbability.className = 'precipProbability'


// rendering content
    time.innerHTML = (currHour % 12) + ":" + "00"
    temp.innerHTML = "Temp:  " + Math.floor(hour.temperature) + "˚"
    realFeel.innerHTML = "Real Feel:  " + Math.ceil(hour.apparentTemperature) + "˚"
    outlook.innerHTML = "Outlook:  " + hour.summary
    precipProbability.innerHTML = hour.precipProbability + "%" + "  Chance of Precipitation"

// appending elements
    el.appendChild(time)
    div.appendChild(temp)
    div.appendChild(realFeel)
    el.appendChild(div)

    outlookDiv.appendChild(outlook)
    outlookDiv.appendChild(precipProbability)
    el.appendChild(outlookDiv)

    hourlyUl.style.visibility = 'visible'

    hourlyUl.appendChild(el)
    count++
    currHour++
  })
}


coordBtn.addEventListener('click', function(e){
  e.preventDefault();
  getCoords()
});
