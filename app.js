let userScore = 0;
let compScore = 0;
console.log(userScore);

const choices = document.querySelectorAll(".choice");
// const img =document.querySelectorAll("img")
const msg = document.querySelector('#msg')
const UserScore = document.querySelector('#user-score');
const CompScore = document.querySelector('#comp-score');


const genComputerChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

}

const drawGame = () => {
    console.log("Game Was Draw");
    msg.innerText = 'Game was Draw, Play Again';
    msg.style.backgroundColor = 'white';
    msg.style.color ="orange";

}

const showWinner = (userWin, userChoiceId, compChoice) => {
    if (userWin) {
        userScore++;
        UserScore.innerText = userScore;
        msg.innerText = `You win! ${userChoiceId} beats ${compChoice}`;
        msg.style.backgroundColor = 'lightGreen'

    } else {
        console.log('you lost');
        compScore++;
        CompScore.innerText = compScore;
        msg.innerText = `you lost ${compChoice} beats ${userChoiceId}`;
        msg.style.backgroundColor = 'red'
        msg.style.color = 'beige'
    }
}

const playGame = (userChoiceId) => {

    console.log("user Choice = ", userChoiceId);
    const compChoice = genComputerChoice();
    console.log('comp choice = ', compChoice);

    if (userChoiceId == compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoiceId == "rock") {
            userWin = compChoice == 'paper' ? false : true;
        } else if (userChoiceId == "paper") {
            userWin = compChoice == 'scissor' ? false : true;
        } else if (userChoiceId == "scissor") {
            userWin = compChoice == 'rock' ? false : true;
        }
        showWinner(userWin, userChoiceId, compChoice);
    }
}
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoiceId = choice.getAttribute("id")

        playGame(userChoiceId);
    });
})


