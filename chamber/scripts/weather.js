const apiKey = 'YOUR_API_KEY';
const lat = '40.7128';  
const lon = '-74.0060'; 

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();

  const today = data.list[0];
  document.getElementById('weather-description').textContent = today.weather[0].description;
  document.getElementById('temp').textContent = Math.round(today.main.temp);

  const forecast = data.list.filter(entry => entry.dt_txt.includes("12:00:00")).slice(0, 3);
  const forecastDiv = document.getElementById('forecast');
  forecast.forEach(day => {
    const div = document.createElement('div');
    const date = new Date(day.dt_txt);
    div.innerHTML = `<strong>${date.toLocaleDateString()}</strong>: ${Math.round(day.main.temp)}°F`;
    forecastDiv.appendChild(div);
  });
}

getWeather();
