//여긴 전부 다 공부해야겠다...
const API_KEY = "fd3fcc2a19edc0fb2ce2255ab05109f2";

function geoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const showCity = document.querySelector(".weather span:first-child");
      const showWeather = document.querySelector(".weather span:nth-child(2)");
      const showTemp = document.querySelector(".weather span:last-child");
      showCity.innerText = data.name;
      showWeather.innerText = data.weather[0].main;
      showTemp.innerText = data.main.temp;
    });
}

function geoErr() {
  //alert("Can't get your Position ㅠㅜ");
}

navigator.geolocation.getCurrentPosition(geoOk, geoErr);
