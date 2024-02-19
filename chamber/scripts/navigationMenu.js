function toggleMenu() {
    var navigation = document.querySelector('.navigation');
    navigation.classList.toggle('active');
    var menuIcon = document.getElementById('menu');
    menuIcon.textContent = menuIcon.textContent === '☰' ? '✖' : '☰';
}

var links = document.querySelectorAll('.navigation a');
links.forEach(link => {
	link.addEventListener('click', () => {
		links.forEach(link => link.classList.remove('active'));
		link.classList.add('active');
	});
});