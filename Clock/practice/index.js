// index.js
const startButton = document.querySelector('.btn__start');
const stopButton = document.querySelector('.btn__stop');
const divElement = document.querySelector('.div');

const timer = new Timer(startButton, stopButton, divElement);

console.log(divElement)