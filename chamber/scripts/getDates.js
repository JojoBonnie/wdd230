document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    document.getElementById('lastModified').textContent = 'WDD 230 Project - Last Modified: ' + new Date(document.lastModified).toUTCString();
});
