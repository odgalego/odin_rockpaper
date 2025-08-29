let computerScore = 0;
let humanScore = 0;

console.log("Welcome to the Rock Paper Scissors Game!");


function getComputerChoice() {
   let choice =  Math.round(Math.random() * 100);
   if (choice <= 33) { return "rock"; }
   else if (choice <= 66) { return "paper"; }
   else { return "scissors"; }
}

function getHumanChoice () {
    let hchoice = prompt("Choose your fate! Rock, paper or scissors?");
    hchoice = hchoice.toLowerCase();
    if (hchoice === "rock") { return "rock"; }
    else if (hchoice === "paper") { return "paper"; }
    else if (hchoice === "scissors") { return "scissors"; }
    else { return getHumanChoice(); }
}

function playRound (pc, pl) {
    console.log ("Computer chose " + pc.toUpperCase());
    console.log ("Player chose " + pl.toUpperCase());

    if (pc === "rock") {
        switch (pl) {
            case "rock":
                console.log("It's a tie! Both chose Rock.");
                break;
            case "paper":
                console.log("You won! Paper beats Rock.");
                humanScore++;
                break;
            case "scissors":
                console.log("You lost! Rock beats Scissors.");
                computerScore++;
                break;
        }
    }
    else if (pc === "paper") {
        switch (pl) {
            case "rock":
                console.log("You lost! Paper beats Rock.");
                computerScore++;
                break;
            case "paper":
                console.log("It's a tie! Both chose Paper.");
                break;
            case "scissors":
                console.log("You won! Scissors beat Paper.");
                humanScore++;
                break;
        }
    }
    else if (pc === "scissors") {
                switch (pl) {
            case "rock":
                console.log("You win! Rock beats Scissors.");
                humanScore++;
                break;
            case "paper":
                console.log("You lost! Scissors beat Paper.");
                computerScore++;
                break;
            case "scissors":
                console.log("It's a tie! Both chose Scissors.");
                humanScore++;
                break;
        }
    }
}

function playGame (times) {
    computerScore = 0;
    humanScore = 0;

    for (let i = 0; i < times; i++) {
        playRound (getComputerChoice(), getHumanChoice());
    }

    console.log ("Final Results: Computer " + computerScore + " | Player " + humanScore);
    if ( humanScore > computerScore ) {
        console.log ("Congratulations! You won!");
    }
    else if ( humanScore == computerScore ) {
        console.log("It's a tie...Better to play again ;)");
    }
    else {
        console.log ("Computer won...better luck next time!");
    }
}

playGame(5);
