async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "YOUR_API_KEY_HERE"; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      const result = `
        <h2>${data.name}</h2>
        <p>${data.weather[0].description}</p>
        <p>🌡️ Temp: ${data.main.temp}°C</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>🌬️ Wind: ${data.wind.speed} m/s</p>
      `;
      document.getElementById("weatherResult").innerHTML = result;
    } else {
      document.getElementById("weatherResult").innerHTML = `<p>City not found</p>`;
    }
  } catch (error) {
    console.error("Error:", error);
    document.getElementById("weatherResult").innerHTML = `<p>Error retrieving weather data</p>`;
  }
}
