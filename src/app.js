function displayTemperature(response) {
  console.log(response.data.temperature.current);
  console.log(response.data.city);
  console.log(response.data.condition.description);
  console.log(response.data.temperature.humidity);
  console.log(response.data.wind.speed);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = Math.round(response.data.temperature.humidity);
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiUrl = `https://api.shecodes.io/weather/v1/current?query=London&key=ta59o034a54d51cbbddfb3328040f28f&units-metric`;

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
