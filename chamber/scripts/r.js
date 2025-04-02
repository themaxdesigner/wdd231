document.addEventListener("DOMContentLoaded", () => {
  fetchWeather();
  fetchEvents();
  fetchCompanySpotlight();
});

// Fetch and display weather information
async function fetchWeather() {
  const apiKey = "c533ba184ac48e09c20921835b9171b0";
  const city = "Umuahia,NG"; 
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

  try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Weather data not available");
      const data = await response.json();

      // Extract current weather
      const currentTemp = data.list[0].main.temp;
      const description = data.list[0].weather[0].description;
      document.getElementById("weather").innerHTML = `🌡️ ${currentTemp}°C - ${description}`;

      // Extract 3-day forecast
      let forecastHTML = "";
      for (let i = 1; i <= 3; i++) {
          const day = data.list[i * 8]; // Every 24 hours
          const forecastDate = new Date(day.dt * 1000).toLocaleDateString();
          const temp = day.main.temp;
          const icon = day.weather[0].icon;
          forecastHTML += `
              <p><strong>${forecastDate}</strong>: ${temp}°C <img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather icon"></p>
          `;
      }

      document.getElementById("forecast").innerHTML = forecastHTML;
  } catch (error) {
      console.error("Error fetching weather data:", error);
      document.getElementById("weather").innerHTML = "Weather information unavailable.";
      document.getElementById("forecast").innerHTML = "Forecast data unavailable.";
  }
}

// Fetch and display upcoming events (replace with your real API)
async function fetchEvents() {
  try {
      // Replace this URL with your real events API endpoint
      const eventsApiUrl = "9376db1b9afdb81351793b414e798550"; // <-- Real API URL for events

      const response = await fetch(eventsApiUrl);
      if (!response.ok) throw new Error("Events data not available");
      const events = await response.json();

      let eventHTML = "<ul>";
      events.forEach(event => {
          eventHTML += `
              <li><strong>${event.name}</strong><br> 
                  Date: ${event.date} <br> 
                  Location: ${event.location}</li>
          `;
      });
      eventHTML += "</ul>";

      document.getElementById("events").innerHTML = eventHTML;
  } catch (error) {
      console.error("Error fetching events:", error);
      document.getElementById("events").innerHTML = "Event data unavailable.";
  }
}

// Fetch and display company spotlight (replace with your real API)
async function fetchCompanySpotlight() {
  try {
      // Replace this URL with your real company spotlight API endpoint
      const spotlightApiUrl = "9376db1b9afdb81351793b414e798550"; // <-- Real API URL for company spotlight

      const response = await fetch(spotlightApiUrl);
      if (!response.ok) throw new Error("Company spotlight data not available");
      const spotlight = await response.json();

      const spotlightHTML = `
          <h3>Company Spotlight: ${spotlight.name}</h3>
          <p>${spotlight.description}</p>
          <p>Contact: <a href="mailto:${spotlight.contact}">${spotlight.contact}</a></p>
          <p>Visit: <a href="${spotlight.website}" target="_blank">${spotlight.website}</a></p>
      `;

      document.getElementById("companySpotlight").innerHTML = spotlightHTML;
  } catch (error) {
      console.error("Error fetching company spotlight:", error);
      document.getElementById("companySpotlight").innerHTML = "Company spotlight data unavailable.";
  }
}
const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('#animateme');

hamburgerElement.addEventListener('click', () => {
  navElement.classList.toggle('open');
  hamburgerElement.classList.toggle('open');
  

});
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
