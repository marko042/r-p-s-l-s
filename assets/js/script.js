// selects all the elements by Id and button elements

const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice

//grabs the user choice and stores it
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateCompChoice()
}))

function generateCompChoice() {
    const randomNumber = Math.floor(Math.random() * 5) +1 //alternatively use possibleChoices.lenght

    if (randomNumber === 1 ) {
        computerChoice = 'rock'
    }

    if (randomNumber === 2 ) {
        computerChoice = 'paper'
    }

    if (randomNumber === 3 ) {
        computerChoice = 'scissors'
    }

    if (randomNumber === 4 ) {
        computerChoice = 'lizard'
    }

    if (randomNumber === 5 ) {
        computerChoice = 'spock'
    }

    computerChoiceDisplay.innerHTML = computerChoice

}