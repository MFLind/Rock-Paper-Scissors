/* Add constants for the diffent game objects */

const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

/* Score for game */
let score_player = 0;
let score_computer = 0;


/* Get button referens */
let button_rock = document.getElementById("button_rock");
let button_paper = document.getElementById("button_paper");
let button_scissors = document.getElementById("button_scissors");


/* Add event listner for the buttons */
button_rock.addEventListener("click", handleClick);
button_paper.addEventListener("click", handleClick);
button_scissors.addEventListener("click", handleClick);

/* Event handler for button events */
 function handleClick(event) {   
    let playerChoice = event.target.getAttribute('data-choice');

    /* Update Player image for player button selection */
    let playerPhoto = document.getElementById("photo1");
    if (playerChoice == ROCK) {
        playerPhoto.src = "assets/images/rock2.jpg";
    } else if (playerChoice == PAPER) {
        playerPhoto.src = "assets/images/paper.jpg"; 
    } else if (playerChoice == SCISSORS) {
        playerPhoto.src = "assets/images/scissors.jpg";
    }

    /* Get Computer selections */
    let computerChoice = computer_player();

    /* Check winner and update score */
    checkWinner(playerChoice, computerChoice);

}


/* computers turn */
function computer_player() {
    let computerChoice = Math.floor(Math.random()*2);

    /* Update Computer image for random choice selection */
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
