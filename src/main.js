const mainScreen = document.getElementById('initial')
const resultScreen = document.getElementById('result')
const numberOfAttempts = document.getElementById('attempts')
const plural = document.getElementById('plural')
const restartButton = document.getElementById('reset')
const submitButton = document.getElementById('try')
const randomNumber = Math.round(Math.random()*10)
let userAttempts = 0

function handleClick(event){
    event.preventDefault();
    const inputNumber = document.getElementById('inputNumber')
    if (Number(inputNumber.value < 1) || Number(inputNumber.value) > 9){
        alert("Número inválido")
        userAttempts--
    }
    userAttempts++

    if(Number(inputNumber.value) == randomNumber){
        toggleScreen()
        numberOfAttempts.innerText = userAttempts
        if (userAttempts > 1){
            plural.innerText = "es"
        }
    }

    inputNumber.value = ''

}

function resetClick(){
    document.location.reload(true)
}

function toggleScreen() {
    resultScreen.classList.toggle('hide')
    mainScreen.classList.toggle('hide')
}

submitButton.addEventListener('click', handleClick)
restartButton.addEventListener('click', resetClick)




