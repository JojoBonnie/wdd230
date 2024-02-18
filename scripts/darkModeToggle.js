function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    main.querySelectorAll("section").forEach(section => section.classList.toggle('dark-mode'));
    var modeIcon = document.getElementById('mode');
    modeIcon.textContent = modeIcon.textContent === '🌙' ? '☀️' : '🌙'; // Toggle icons
}
