const apiKey = 'a386a450686e3e9bb08cffdb9eefbd4a';
const lat = 40.24;
const lon = -111.66;
const units = 'imperial';

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

async function getWeather() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Weather data not available');
    }
    const data = await response.json();
    const weatherDiv = document.getElementById('current-weather');
    const temp = Math.round(data.main.temp);
    const desc = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = Math.round(data.wind.speed);
    const icon = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    weatherDiv.innerHTML = `
      <h3>${data.name} Weather</h3>
      <img src="${iconUrl}" alt="${desc}">
      <p><strong>Temperature:</strong> ${temp} °F</p>
      <p><strong>Condition:</strong> ${desc.charAt(0).toUpperCase() + desc.slice(1)}</p>
      <p><strong>Humidity:</strong> ${humidity}%</p>
      <p><strong>Wind Speed:</strong> ${windSpeed} mph</p>
    `;
  } catch (error) {
    const weatherDiv = document.getElementById('current-weather');
    weatherDiv.textContent = 'Unable to load weather data.';
    console.error(error);
  }
}

getWeather();
