

// selects all the elements by Id
const computerChoiceDisplay = document.getElementById('computer-choice') 
const userChoiceDisplay = document.getElementById('user-choice') 
const resultDisplay = document.getElementById('result') 
const possibleChoices = document.querySelectorAll('button') 
let userChoice

//grabs the user choice and stores it
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id                                                                   
    userChoiceDisplay.innerHTML = userChoice

}))