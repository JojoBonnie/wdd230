function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll("section").forEach(section => section.classList.toggle('dark-mode'));
    document.querySelectorAll("div").forEach(div => div.classList.toggle('dark-mode'));
    var modeIcon = document.getElementById('mode');
    modeIcon.textContent = modeIcon.textContent === '🌙' ? '☀️' : '🌙'; // Toggle icons
}
