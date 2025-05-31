document.addEventListener("DOMContentLoaded", () => {
  const weatherDiv = document.getElementById("current-weather");
  const forecastDiv = document.getElementById("weather-forecast");

  // Replace with your real API key and location
  const apiKey = "YOUR_API_KEY";
  const city = "Timbuktu";

  fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
    .then(response => response.json())
    .then(data => {
      const { temp_f, condition, humidity } = data.current;
      weatherDiv.innerHTML = `
        <strong>${temp_f}&deg;F</strong><br>
        ${condition.text}<br>
        Humidity: ${humidity}%
      `;
    })
    .catch(() => {
      weatherDiv.innerHTML = "Weather data unavailable.";
    });

  fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3`)
    .then(response => response.json())
    .then(data => {
      const days = data.forecast.forecastday;
      forecastDiv.innerHTML = `
        Today: <strong>${days[0].day.maxtemp_f}&deg;F</strong><br>
        Wednesday: <strong>${days[1].day.maxtemp_f}&deg;F</strong><br>
        Thursday: <strong>${days[2].day.maxtemp_f}&deg;F</strong>
      `;
    })
    .catch(() => {
      forecastDiv.innerHTML = "Forecast unavailable.";
    });

  // Theme toggle example
  const toggleTheme = document.getElementById("toggle-theme");
  toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});
