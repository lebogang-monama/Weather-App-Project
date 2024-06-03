function citySearchSubmit(event) {
  event.preventDefault();
  let h1 = document.querySelector("#current-city");
  let searchInput = document.querySelector("#search-input");
  h1.innerHTML = searchInput.value;

} 
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", citySearchSubmit);