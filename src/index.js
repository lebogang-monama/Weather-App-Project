function Weather(response) {
let currentTemperature = document.querySelector("#current-temperature");
let temperature = Math.round(response.data.temperature.current);
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
let windElement =  document.querySelector("#wind");

console.log(response.data.wind.speed);

currentTemperature.innerHTML = temperature;
descriptionElement.innerHTML = response.data.condition.description;
humidityElement.innerHTML = response.data.temperature.humidity;
windElement.innerHTML = response.data.wind.speed;
}

function searchCity(city) {
  let apiKey = "082e132ob80f941b2a0b6afd02a0td4e";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
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