// daily visit counter
const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}
numVisits++;
localStorage.setItem("numVisits-ls", numVisits);

// Weather API
const apiKey = '932029a2b2dfa7faced20efd28c256d8';
const city = 'Cape Town,ZA'; 

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

async function getWeather() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log('Weather data:', data);

        const temperature = data.main.temp;
        const description = data.weather[0].description;

        const weatherInfo = document.getElementById('weather-info');
        weatherInfo.innerHTML = `${temperature} °C, ${description}`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

window.onload = getWeather;

