const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;

//grabs the user choice and stores it

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}));

//Declares a function for computer choice

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 5) + 1; //alternatively use possibleChoices.lenght

    if (randomNumber === 1) {
        computerChoice = 'rock';
    }

    if (randomNumber === 2) {
        computerChoice = 'paper';
    }

    if (randomNumber === 3) {
        computerChoice = 'scissors';
    }

    if (randomNumber === 4) {
        computerChoice = 'lizard';
    }

    if (randomNumber === 5) {
        computerChoice = 'spock';
    }

    computerChoiceDisplay.innerHTML = computerChoice;

}


// Gets the result based on the choices made by user and computer and displays it
function getResult() {
    if (computerChoice === userChoice) {
        result = "it's a tie, pick again!";
    }

    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = "Scissors cuts Paper!";
    }

    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = "Paper covers Rock!";
    }

    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = "Rock crushes Scissors!";
    }

    if (computerChoice === 'rock' && userChoice === 'lizard') {
        result = "Rock crushes Lizard!";
    }

    if (computerChoice === 'lizard' && userChoice === 'spock') {
        result = "Lizard poisons Spock!";
    }

    if (computerChoice === 'spock' && userChoice === 'scissors') {
        result = "Spock smashes Scissors!";
    }

    if (computerChoice === 'scissors' && userChoice === 'lizard') {
        result = "Scissors decapitates Lizard!";
    }

    if (computerChoice === 'lizard' && userChoice === 'paper') {
        result = "Lizard eats Paper!";
    }

    if (computerChoice === 'paper' && userChoice === 'spock') {
        result = "Paper disproves Spock!";
    }

    if (computerChoice === 'spock' && userChoice === 'rock') {
        result = "Spock vaporizes Rock";
    }
    resultDisplay.innerHTML = result;

}