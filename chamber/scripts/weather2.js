const apiKey = '6d50d0133c6cfbea5c06e3f742f0e33b';
const city = 'Provo';
const units = 'imperial'; // Use 'metric' for Celsius

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},US&units=${units}&appid=${apiKey}`;

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Weather data not available');
    }
    return response.json();
  })
  .then(data => {
    const weatherDiv = document.getElementById('current-weather');
    const temperature = Math.round(data.main.temp);
    const condition = data.weather[0].description;
    const humidity = data.main.humidity;
    const wind = Math.round(data.wind.speed);
    const icon = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    weatherDiv.innerHTML = `
      <h3>${data.name} Weather</h3>
      <img src="${iconUrl}" alt="${condition}">
      <p><strong>Temperature:</strong> ${temperature}°F</p>
      <p><strong>Condition:</strong> ${condition}</p>
      <p><strong>Humidity:</strong> ${humidity}%</p>
      <p><strong>Wind Speed:</strong> ${wind} mph</p>
    `;
  })
  .catch(error => {
    document.getElementById('current-weather').textContent = 'Unable to load weather data.';
    console.error(error);
  });
