const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// API URL with placeholders for latitude, longitude, and API key
const url = 'https://api.openweathermap.org/data/2.5/weather';

// Latitude and longitude coordinates for Trier, Germany
const lat = '49.75';
const lon = '6.64';

const apiKey = '932029a2b2dfa7faced20efd28c256d8';

const apiFetch = async () => {
  try {
    const response = await fetch(`${url}?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`);

    if (response.ok) {
      const data = await response.json();
      
      console.log(data);

      displayResults(data);
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

apiFetch();

const displayResults = (weatherData) => {
  const temperature = weatherData.main.temp;
  const weatherDescription = weatherData.weather[0].description;
  const weatherIconCode = weatherData.weather[0].icon;

  currentTemp.textContent = `${temperature} °F`;
  captionDesc.textContent = weatherDescription;
  weatherIcon.setAttribute('src', `https://openweathermap.org/img/w/${weatherIconCode}.png`);
  weatherIcon.setAttribute('alt', weatherDescription);
};
