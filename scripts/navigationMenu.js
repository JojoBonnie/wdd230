const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const links = document.querySelectorAll('.navigation li');
links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌙")) {
		main.classList.add("dark");
        main.querySelectorAll("section").forEach(section => section.classList.add("dark"));
		modeButton.textContent = "🔆";
	} else {
		main.classList.remove("dark");
        main.querySelectorAll("section").forEach(section => section.classList.remove("dark"));
		modeButton.textContent = "🌙";
	}
});
