function Weather(response) {
let currentTemperature = document.querySelector("#degrees-celsius");
let farenheit = document.querySelector("#degrees-farenheit");
let temperature = Math.round(response.data.temperature.current);
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
let windElement =  document.querySelector("#wind");
let timeElement = document.querySelector("#time");
let date = new Date(response.data.time * 1000);


currentTemperature.innerHTML = temperature;
farenheit.innerHTML = Math.round((temperature*9/5)+32);
timeElement.innerHTML = formatDate(date);
descriptionElement.innerHTML = response.data.condition.description;
humidityElement.innerHTML = response.data.temperature.humidity;
windElement.innerHTML = response.data.wind.speed;
}


function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours <10) {
    hours = `0${hours}`;
  }

  return `${day}, ${hours}:${minutes}`;
}


function searchCity(city) {
  let apiKey = "082e132ob80f941b2a0b6afd02a0td4e";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(Weather);
}


function citySearchSubmit(event) {
  event.preventDefault();
  let h1 = document.querySelector("#current-city");
  let searchInput = document.querySelector("#search-input");
  h1.innerHTML = searchInput.value;
  searchCity(searchInput.value);
} 


let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", citySearchSubmit);