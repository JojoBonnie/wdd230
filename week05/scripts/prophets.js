const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

const getProphetData = async () => {
  try {
    const response = await fetch(url);

    const data = await response.json();

    displayProphets(data.prophets);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Function to display prophets by building cards
const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    // Creating elements
    const card = document.createElement('section');
    const fullName = document.createElement('h2');
    const birthDate = document.createElement('span');
    const birthPlace = document.createElement('p');
    const portrait = document.createElement('img');

    // Populating elements
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '200');
    portrait.setAttribute('height', '250');

    // Appending elements to the card
    card.appendChild(fullName);
    card.appendChild(birthDate);
    card.appendChild(birthPlace);
    card.appendChild(portrait);

    // Adding the card to the "cards" div
    cards.appendChild(card);
  });
};

// Call the function to fetch and display data when the page loads
getProphetData();
