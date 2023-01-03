let game = document.querySelector('.gameContainer');
let difficult = document.querySelector('.difficult').value;
let difficultChoice = document.getElementById('difficult');
let option = document.querySelectorAll('.optionContainer')
let temps = document.querySelector('.temps');
let timeChoice = document.getElementById('timer');
let bouton = document.getElementById('go');
let scoreContainer = document.getElementById('score');
let square;
let random;
let table;
let secondes;
let interval;
let score = 0;

function play() {
    bouton.disabled = true;
    difficultChoice.disabled = true
    timeChoice.disabled = true
    createSquare()
    randomSquare()
    table[random].addEventListener('click', () => {
        table[random].style.backgroundColor = '#FFE570'
        score++;
        scoreContainer.innerHTML = score;
        play()
    })
}

function time() {
    secondes--
    temps.innerHTML = secondes
    if (temps.innerHTML == "0") {
        alert("Temps écoulé")
        temps.style.display = 'none'
        game.style.display = 'none'
    }
}

function createSquare() {
    secondes = document.querySelector('.timer').value
    game.innerHTML = ''
    difficult = document.querySelector('.difficult').value;
    let start = document.querySelector('.start')
    for (let i = 0; i < difficult; i++) {
        let square = document.createElement('div')
        square.classList.add('square')
        game.appendChild(square)
    }
    interval = setInterval(time, 1000)
}

function randomSquare() {
    table = [...document.getElementsByClassName('square')]
    random = Math.floor(Math.random() * difficult)
    for (let i = 0; i < table.length; i++) {
        table[random].style.backgroundColor = '#8A7721'
    }
}