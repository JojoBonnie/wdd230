const baseURL = "https://jojobonnie.github.io/wdd230"; 
const linksURL = `${baseURL}/data/links.json`;

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data);
}

function displayLinks(weeks) {
  const activityList = document.querySelector('.card ul');

  weeks.forEach(week => {
    const weekElement = document.createElement('li');
    const weekHeading = document.createElement('h3');
    weekHeading.textContent = week.week;
    weekElement.appendChild(weekHeading);

    const linksList = document.createElement('ul');
    week.links.forEach(link => {
      const listItem = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.href = `${baseURL}/${link.url}`;
      anchor.textContent = link.title;
      listItem.appendChild(anchor);
      linksList.appendChild(listItem);
    });

    weekElement.appendChild(linksList);
    activityList.appendChild(weekElement);
  });
}

getLinks();
