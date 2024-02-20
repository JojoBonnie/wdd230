const linksURL = `../data/links.json`;

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data.weeks);
}

function displayLinks(weeks) {
    const activityList = document.getElementById('activityList');

    weeks.forEach(week => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${week.week}:</strong> ${formatLinks(week.links)}`;
        activityList.appendChild(listItem);
    });
}

function formatLinks(links) {
    return links.map(link => `<a href="${link.url}">${getTitle(link.title)}</a>`).join(' | ');
}

function getTitle(title) {
    return title.replace(/-/g, ' ');
}


getLinks();
