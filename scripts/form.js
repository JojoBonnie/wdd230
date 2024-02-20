const form = document.querySelector('form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const passwordMessage = document.getElementById('passwordError');

form.addEventListener('submit', function(event) {
    if (password.value !== confirmPassword.value) {
        passwordMessage.textContent = 'Passwords do not match. Please try again.';
        password.focus();
        password.value = '';
        confirmPassword.value = '';
        event.preventDefault();
    }
});

const range = document.getElementById("pageRating");

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    const selection = document.querySelector('.selection');
    const selectedValue = range.value;
    if (selection !== null && selection.value !== selectedValue) {
        selection.classList.remove('selection');        
    } else {  
        const option = document.querySelector(`option[value="${selectedValue}"]`);
        option.classList.add('selection');
    }
}