document.addEventListener("DOMContentLoaded", function () {
    const viewToggle = document.getElementById('viewToggle');
    const membersContainer = document.getElementById('members-container');

    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            displayMembers(data.members);
            toggleView();
        });

    viewToggle.addEventListener('change', toggleView);
});

function displayMembers(members) {
    const membersContainer = document.getElementById('members-container');

    membersContainer.innerHTML = '';
        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.className = 'card';

            memberCard.innerHTML = `
                <img src="images/${member.image}" alt="${member.name} Logo">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>Phone: ${member.phone}</p>
                <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
                <p>Membership Level: ${member.membershipLevel}</p>
                <p>${member.otherInfo}</p>
            `;
            membersContainer.appendChild(memberCard);
        });

}

function toggleView() {
    const viewToggle = document.getElementById('viewToggle');
    const membersContainer = document.getElementById('members-container');
    const containers = membersContainer.querySelectorAll('div');
    containers.forEach(memberContainer => {
        memberContainer.classList.toggle('card', viewToggle.options[viewToggle.selectedIndex].value === 'grid');
        memberContainer.classList.toggle('row', viewToggle.options[viewToggle.selectedIndex].value === 'list');
    });
    membersContainer.classList.toggle('grid-view', viewToggle.options[viewToggle.selectedIndex].value === 'grid');
    membersContainer.classList.toggle('list-view', viewToggle.options[viewToggle.selectedIndex].value === 'list');
    
}
