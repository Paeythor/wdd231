document.addEventListener("DOMContentLoaded", () => {
  const weatherDiv = document.getElementById("current-weather");
  const forecastDiv = document.getElementById("weather-forecast");

  const lat = 40.2338;
  const lon = -111.6585;

  fetch(`https://api.weather.gov/points/${lat},${lon}`)
    .then(response => response.json())
    .then(data => {
      const forecastUrl = data.properties.forecast;
      const observationStationsUrl = data.properties.observationStations;

      
      fetch(forecastUrl)
        .then(response => response.json())
        .then(forecastData => {
          const periods = forecastData.properties.periods;
          weatherDiv.innerHTML = `
            <strong>${periods[0].temperature}°${periods[0].temperatureUnit}</strong><br>
            ${periods[0].shortForecast}<br>
            Wind: ${periods[0].windSpeed} ${periods[0].windDirection}
          `;
        })
        .catch(() => {
          weatherDiv.innerHTML = "Forecast data unavailable.";
        });

      
      fetch(observationStationsUrl)
        .then(response => response.json())
        .then(stationsData => {
          const stationId = stationsData.features[0].properties.stationIdentifier;
          const observationUrl = `https://api.weather.gov/stations/${stationId}/observations/latest`;

          fetch(observationUrl)
            .then(response => response.json())
            .then(observationData => {
              const { temperature, humidity, windSpeed, windDirection } = observationData.properties;
              weatherDiv.innerHTML += `
                <br><strong>Current Conditions:</strong><br>
                Temperature: ${temperature.value}°${temperature.unitCode}<br>
                Humidity: ${humidity.value}%<br>
                Wind: ${windSpeed.value} ${windSpeed.unitCode} ${windDirection}
              `;
            })
            .catch(() => {
              weatherDiv.innerHTML += "<br>Current observation data unavailable.";
            });
        })
        .catch(() => {
          weatherDiv.innerHTML += "<br>Observation stations data unavailable.";
        });
    })
    .catch(() => {
      weatherDiv.innerHTML = "Weather data unavailable.";
    });
});
