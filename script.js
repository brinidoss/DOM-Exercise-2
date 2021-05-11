const menuButton = document.querySelector('.menu-toggle');
const menuDisplay = document.querySelector('nav');
const menuLetters = document.querySelector('#letters');
const menuNumbers = document.querySelector('#numbers');
const lettersDisplay = document.querySelector('.letters');
const numbersDisplay = document.querySelector('.numbers');


menuButton.addEventListener('click', (event) => {
    menuDisplay.style.display = 'block';
    event.preventDefault();
})

menuLetters.addEventListener('click', (event) => {
    menuDisplay.style.display = 'none';
    lettersDisplay.style.display = 'block';
    numbersDisplay.style.display = 'none';
    event.preventDefault();
})

menuNumbers.addEventListener('click', (event) => {
    menuDisplay.style.display = 'none';
    lettersDisplay.style.display = 'none';
    numbersDisplay.style.display = 'block';
    event.preventDefault();
})
