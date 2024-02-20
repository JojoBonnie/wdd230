document.addEventListener("DOMContentLoaded", function () {
    // Populate current year
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Populate last modified date
    document.getElementById('lastModified').textContent = 'WDD 230 Project - Last Modified: ' + new Date(document.lastModified).toUTCString();

    // Fetch weather data from OpenWeatherMap API
    fetchWeatherData();

    // Fetch member data from your JSON source
    fetchMemberData();

    // Display meet and greet banner on Mondays, Tuesdays, and Wednesdays
    displayMeetGreetBanner();
});

async function fetchWeatherData() {
    // Weather API
    const apiKey = '932029a2b2dfa7faced20efd28c256d8';
    const city = 'Cape Town,ZA'; 

    const apiCurrentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const apiForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiCurrentUrl);
        const weatherData = await response.json();

        const forecastResponse = await fetch(apiForecastUrl);
        const forecastData = await forecastResponse.json();
        // Render weather information
        renderWeatherInfo(weatherData, forecastData);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function renderWeatherInfo(weatherData, forecastData) {
    const weatherInfoContainer = document.querySelector('.weather-card');
    const forecastList = forecastData.list; // list of 5-day forecast at 3 hourly intervals
    // Get the data for today and next 3 days' forecast where time is 12:00:00 from the list
    const today = new Date().getDate();
    const threeDayForecast = forecastList.filter(day => new Date(day.dt_txt).getDate() !== today && day.dt_txt.includes('12:00:00')).slice(0, 3);

    const temperature = weatherData.main.temp;
    const condition = weatherData.weather[0].description;

    // Display current weather information
    const currentWeatherHTML = `
        <p>Temperature: ${temperature}°C</p>
        <p>Condition: ${condition}</p>
    `;

    // Display 3-day forecast
    const forecastHTML = `
        <h3>3 Day Forecast:</h3>
        ${threeDayForecast.map(day => `<p>${getFormattedDate(day.dt_txt)}: ${day.main.temp}°C</p>`).join('')}
    `;

    // Combine and set the HTML content
    weatherInfoContainer.innerHTML = currentWeatherHTML + forecastHTML;
}

// Helper function to format date from dt_txt
function getFormattedDate(dt_txt) {
    const date = new Date(dt_txt);
    return `${date.getDate()}/${date.getMonth() + 1}`;
}


async function fetchMemberData() {
    try {
        const response = await fetch('data/members.json');
        const memberData = await response.json();
        // Filter members with silver or gold membership levels
        const qualifiedMembers = memberData.members.filter(member =>
            member.membershipLevel === 'Silver' || member.membershipLevel === 'Gold'
        );

        // Render spotlight advertisements
        renderSpotlightAdvertisements(qualifiedMembers);
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}

function renderSpotlightAdvertisements(members) {
    const spotlightsContainer = document.getElementById('spotlights');

    // Shuffle the members array to randomly load different qualified members
    const shuffledMembers = shuffleArray(members);

    // Display two to three spotlight advertisements
    for (let i = 0; i < Math.min(shuffledMembers.length, 3); i++) {
        const member = shuffledMembers[i];
        const spotlightCard = document.createElement('div');
        spotlightCard.className = 'spotlight';

        spotlightCard.innerHTML = `
            <img src="images/${member.image}" alt="${member.name} Logo" loading="lazy">
            <p>${member.name} - ${member.otherInfo}</p>
        `;
        spotlightsContainer.appendChild(spotlightCard);
    }
}

function shuffleArray(array) {
    // Function to shuffle an array (Fisher-Yates algorithm)
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function displayMeetGreetBanner() {
    const currentDay = new Date().getDay();
    const banner = document.getElementById('meet-greet-banner');

    // Display banner on Mondays (1), Tuesdays (2), and Wednesdays (3)
    if (currentDay >= 1 && currentDay <= 3) {
        banner.style.display = 'block';
    }
}

function closeBanner() {
    const banner = document.getElementById('meet-greet-banner');
    banner.style.display = 'none';
}
