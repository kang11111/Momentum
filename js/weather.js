const API_KEY = config.apiKey;

function onGeoSuccess(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const locationIcon = document.querySelector("#location i")
      const city = document.querySelector("#location span")
      const weatherIcon = document.querySelector("#weather img")
      const temp = document.querySelector("#weather span")
      const weatherIconSrc = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      
      locationIcon.classList.add("fa-solid", "fa-location-dot");
      city.innerText = data.name;
      weatherIcon.setAttribute('src', weatherIconSrc);
      temp.innerText = `${Math.floor(data.main.temp)}℃`;
    });
}
function onGeoError(){
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);