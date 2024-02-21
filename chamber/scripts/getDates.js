document.addEventListener("DOMContentLoaded", function () {
    // Populate current year
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Populate last modified date
    document.getElementById('lastModified').textContent = 'WDD 230 Project - Last Modified: ' + new Date(document.lastModified).toUTCString();

});

