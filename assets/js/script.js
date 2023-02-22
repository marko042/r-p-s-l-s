//Pick out all the elements that are buttons

const possibleChoices = document.querySelectorAll('button');





possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => { // add event listener to button clicks
    let userChoice = e.target.id;
    generateComputerChoice(userChoice, getResult);
    
}));

//Declares a function for computer choice


function generateComputerChoice(userChoice, showResult) {
    const randomNumber = Math.floor(Math.random() * 5); //alternatively use possibleChoices.lenght
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock']; // create array of options with index matching choice numbers
    let computerChoice = choices[randomNumber]; //getting computer choice value from the array based on random number
    showResult(computerChoice, userChoice);
}


    // Gets the result based on the choices made by user and computer and displays it
    function getResult(computerChoice, userChoice) {
        let result = 'calculating...';
        if (computerChoice === userChoice) {
            result = "it's a tie, pick again!";
        } else if (computerChoice === 'scissors' && userChoice === 'paper') { //comparing computer choice and user choice to create result message
            result = "Scissors cuts Paper!"; //comparing computer choice and user choice to create result message
        } else if (computerChoice === 'paper' && userChoice === 'rock') {
            result = "Paper covers Rock!";
        } else if (computerChoice === 'rock' && userChoice === 'scissors') {
            result = "Rock crushes Scissors!";
        } else if (computerChoice === 'rock' && userChoice === 'lizard') {
            result = "Rock crushes Lizard!";
        } else if (computerChoice === 'lizard' && userChoice === 'spock') {
            result = "Lizard poisons Spock!";
        } else if (computerChoice === 'spock' && userChoice === 'scissors') {
            result = "Spock smashes Scissors!";
        } else if (computerChoice === 'scissors' && userChoice === 'lizard') {
            result = "Scissors decapitates Lizard!";
        } else if (computerChoice === 'lizard' && userChoice === 'paper') {
            result = "Lizard eats Paper!";
        } else if (computerChoice === 'paper' && userChoice === 'spock') {
            result = "Paper disproves Spock!";
        } else if (computerChoice === 'spock' && userChoice === 'rock') {
            result = "Spock vaporizes Rock";
        } else if (userChoice === 'scissors' && computerChoice === 'paper') {
            result = "Scissors cuts Paper!";
        } else if (userChoice === 'paper' && computerChoice === 'rock') {
            result = "Paper covers Rock!";
        } else if (userChoice === 'rock' && computerChoice === 'scissors') {
            result = "Rock crushes Scissors!";
        } else if (userChoice === 'rock' && computerChoice === 'lizard') {
            result = "Rock crushes Lizard!";
        } else if (userChoice === 'lizard' && computerChoice === 'spock') {
            result = "Lizard poisons Spock!";
        } else if (userChoice === 'spock' && computerChoice === 'scissors') {
            result = "Spock smashes Scissors!";
        } else if (userChoice === 'scissors' && computerChoice === 'lizard') {
            result = "Scissors decapitates Lizard!";
        } else if (userChoice === 'lizard' && computerChoice === 'paper') {
            result = "Lizard eats Paper!";
        } else if (userChoice === 'paper' && computerChoice === 'spock') {
            result = "Paper disproves Spock!";
        } else if (userChoice === 'spock' && computerChoice === 'rock') {
            result = "Spock vaporizes Rock";
        }

        // Display everything
        document.getElementById('user-choice').innerHTML = userChoice;
        console.log(result);
        document.getElementById('result').innerHTML = result;
        document.getElementById('computer-choice').innerHTML = computerChoice;

    }