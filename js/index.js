let button1 = document.querySelector('.button_top');
let button2 = document.querySelector('.button_bottom');
let number = document.querySelector('.counter');

let counter = 0;

button1.addEventListener('click', () => {
    counter += 1;
    number.innerText = counter;
});

button2.addEventListener('click', () => {
    counter = 0;
    number.innerText = counter;
});