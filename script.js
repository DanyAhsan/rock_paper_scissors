let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const userScoreElement = document.getElementById('user-score');
const compScoreElement = document.getElementById('comp-score');
const msg = document.getElementById('msg');

const computerChoice = () =>{
    const option = ["rock", "paper", "scissors"];
    const genIndex = Math.floor(Math.random()*3);

    return option[genIndex];
}

const draw = () =>{
        console.log("Game Draw")
        msg.innerText = "Game Draw";
        msg.style.backgroundColor = "darkblue";
        // msg.innerText = `You Win ${choiceId} beats ${compChoice}`;
}

const showWinner = (youWin, choiceId, compChoice) =>{
    if (youWin){
    console.log("You Win");
    userScore++;
    userScoreElement.innerText = userScore;
    msg.innerText = `You Win ${choiceId} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    } else {
        console.log("Computer Win");
        compScore++;
        compScoreElement.innerText = compScore;
        msg.innerText = "Computer Win";
        msg.style.backgroundColor = "red";
        msg.innerText = `Computer Win ${compChoice} beats ${choiceId}`;
    }
}

const playGame = (choiceId) =>{
    console.log("you choose ", choiceId);

    const compChoice = computerChoice();
    console.log("computer choose ", compChoice);

    
    if (choiceId === compChoice){
        draw();
    } else {
        let youWin = true;
        if (choiceId === "rock") {
            // paper, scissor
            youWin = compChoice === "paper" ? false : true;
        } else if (choiceId === "paper") {
            //rock, scissor
            youWin = compChoice === "scissors" ? false : true;
        } else { 
            //rock, paper
            youWin = compChoice === "rock" ? false : true;
        }
            showWinner(youWin, choiceId, compChoice);
    }
    
}

choices.forEach((e) => {
    e.addEventListener("click", ()=>{

        const choiceId = e.getAttribute("id");
        // console.log("choice was clicked ", choiceId);
        playGame(choiceId);
    })
});
