document.addEventListener("DOMContentLoaded", function () {
    // Populate visit message based on localStorage
    showVisitMessage();
    storeLastVisit();
});

function showVisitMessage() {
    const visitMessage = document.getElementById('visitMessage');
    const lastVisit = localStorage.getItem('lastVisit');

    if (!lastVisit) {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysSinceLastVisit = calculateDaysSinceLastVisit(lastVisit);
        if (daysSinceLastVisit === 0) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else {
            const plural = daysSinceLastVisit === 1 ? "day" : "days";
            visitMessage.textContent = `You last visited ${daysSinceLastVisit} ${plural} ago.`;
        }
    }
}

function calculateDaysSinceLastVisit(lastVisit) {
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const currentDate = new Date();
    const lastVisitDate = new Date(parseInt(lastVisit));
    const timeDifference = currentDate - lastVisitDate;
    return Math.floor(timeDifference / millisecondsPerDay);
}

function storeLastVisit() {
    const currentDate = Date.now();
    localStorage.setItem('lastVisit', currentDate);
}
