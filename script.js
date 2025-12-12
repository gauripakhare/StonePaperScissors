let userscore=0;
let computerscore=0;
const choices=document.querySelectorAll('.choice');
const msg=document.querySelector('#msg');
const userScorePara= document.querySelector('#user-score');
const compScorePara= document.querySelector('#computer-score');

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

function playGame(userChoice) {
    const compChoice = getComputerChoice();
   if(userChoice === compChoice) {
        drawGame();
    }else{

        let userwin = true;
        if (userChoice === 'rock') {
            userwin = compChoice === 'paper' ? false : true;
        } else if (userChoice === 'paper') {
            userwin = compChoice === 'scissors' ? false : true;
        } else if (userChoice === 'scissors') {
            userwin = compChoice === 'rock' ? false : true;
        }
        showWinner(userwin, userChoice, compChoice);

    }
}   

const getComputerChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

const showWinner = (userwin, userChoice, compChoice) => {
    if (userwin) {
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerHTML = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerscore++;
        compScorePara.innerText = computerscore;
        msg.innerHTML = `You lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }       
};
const drawGame = () => {
    msg.innerText = "Game draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};