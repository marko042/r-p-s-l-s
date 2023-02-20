const computerChoiceDisplay = document.getElementById('computer-choice') //selects all the elements by Id
const userChoiceDisplay = document.getElementById('user-choice') //selects all the elements by Id
const resultDisplay = document.getElementById('result') //selects all the elements by Id
const possibleChoices = document.querySelectorAll('button') //selects all the button elements

let userChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice

}))