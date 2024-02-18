function toggleMenu() {
    var navigation = document.querySelector('.navigation');
    navigation.classList.toggle('active');
    var menuIcon = document.getElementById('menu');
    menuIcon.textContent = menuIcon.textContent === '☰' ? '✖' : '☰'; // Toggle icons
}

