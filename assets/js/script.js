/*  */

const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

let score_player = 0;
let score_computer = 0;


/* Get button referens */

let button_rock = document.getElementById("button_rock");
let button_paper = document.getElementById("button_paper");
let button_scissors = document.getElementById("button_scissors");

/* event listner for rock */

button_rock.addEventListener("click", handleClick);
button_paper.addEventListener("click", handleClick);
button_scissors.addEventListener("click", handleClick);


 function handleClick(event) {   
    let playerChoice = event.target.getAttribute('data-choice');

    let playerPhoto = document.getElementById("photo1");
    if (playerChoice == ROCK) {
        playerPhoto.src = "assets/images/rock2.jpg";
    } else if (playerChoice == PAPER) {
        playerPhoto.src = "assets/images/paper.jpg"; 
    } else if (playerChoice == SCISSORS) {
        playerPhoto.src = "assets/images/scissors.jpg";
    }

    let computerChoice = computer_player();
    checkWinner(playerChoice, computerChoice);

};


/* computers turn */

function computer_player() {
    let computerChoice = Math.floor(Math.random()*2);

    let computerPhoto = document.getElementById("photo2");
    if (computerChoice == ROCK) {
        computerPhoto.src = "assets/images/rock2.jpg";
    } else if (computerChoice == PAPER) {
        computerPhoto.src = "assets/images/paper.jpg"; 
    } else if (computerChoice == SCISSORS) {
        computerPhoto.src = "assets/images/scissors.jpg";
    }

    return computerChoice;
}

/* Correct answers */

function checkWinner(playerChoice, computerChoice) {

    if (playerChoice == computerChoice) {
        /* it is a draw */
        document.getElementById("wins").innerHTML = "It's a Draw";
        return;
    }

    if (playerChoice == PAPER) {
        if (computerChoice == SCISSORS) {
            /* computer wins */
            score_computer++;
            document.getElementById("wins").innerHTML = "Computer Wins";
        } else {
            /* player wins */
            score_player++;
            document.getElementById("wins").innerHTML = "Player Wins";
        }
    } else if (playerChoice == ROCK) {
        if (computerChoice == PAPER) {
            /* computer wins */
            score_computer++;
            document.getElementById("wins").innerHTML = "Computer Wins";
        } else {
            /* player wins */
            score_player++;
            document.getElementById("wins").innerHTML = "Player Wins";
        }   
    } else if (playerChoice == SCISSORS) {
        if (computerChoice == ROCK) {
            /* computer wins */
            score_computer++;
            document.getElementById("wins").innerHTML = "Computer Wins";
        } else {
            /* player wins */
            score_player++;
            document.getElementById("wins").innerHTML = "Player Wins";
        }
    }

    /* Update scores */
    document.getElementById("pscore").innerHTML = score_player;
    document.getElementById("cscore").innerHTML = score_computer;
}
