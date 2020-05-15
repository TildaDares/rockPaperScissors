//Generates random strings 
computerPlay = () => {
    const arrRockOptions = ['rock', 'paper', 'scissors'];
    let randomOption = Math.floor(Math.random() * arrRockOptions.length);
    return arrRockOptions[randomOption];
}
changeComputerImg = (compPlay) => {
    let compImg = document.getElementById('comp-game');
    if (compPlay == 'rock') {
        compImg.src = 'Images/rock.png';
    }
    if (compPlay == 'paper') {
        compImg.src = 'Images/paper.png';
    }
    if (compPlay == 'scissors') {
        compImg.src = 'Images/scissors.png';
    }
}
let playerName = prompt("Enter your name");
if (playerName == '' || playerName == null) playerName = 'Player';
let countWinsPlayer = 0; //Number of player wins
let countWinsComputer = 0; //Number of computer wins
let score_name = document.querySelector('.score-div');
let computerScore = score_name.children[1];
let updatePlayerName = document.querySelector('.player-dash');
updatePlayerName.firstElementChild.textContent = `${playerName}`;
score_name.lastElementChild.textContent = `${playerName}: ${countWinsPlayer}`;
let game_status = document.getElementById('game-status');
let playerSelection = document.querySelectorAll('.player-btn button');
let restartBtn = document.getElementById('restart').addEventListener('click', restartGame);

for (let i = 0; i < playerSelection.length; i++) {
    playerSelection[i].addEventListener("click", playRound);
}

function restartGame(e) {
    countWinsPlayer = 0;
    countWinsComputer = 0;
    for (let i = 0; i < playerSelection.length; i++) {
        playerSelection[i].disabled = false;
    }
    game_status.textContent = "Let's Begin!";
    computerScore.textContent = `Computer: ${countWinsComputer}`;
    score_name.lastElementChild.textContent = `${playerName}: ${countWinsPlayer}`;
}
//Compares the player's input with the computer's and determines who wins the round
function playRound(e) {
    let computerSelection = computerPlay();
    console.log(e.target.id);
    changeComputerImg(computerSelection);
    if (e.target.id == 'rock' && computerSelection === 'scissors') {
        game_status.textContent = `${playerName} wins! Rock beats Scissors`;
        countWinsPlayer++;
        score_name.lastElementChild.textContent = `${playerName}: ${countWinsPlayer}`;
    } else if (e.target.id == 'paper' && computerSelection === 'rock') {
        game_status.textContent = `${playerName} wins! Paper beats Rock`;
        countWinsPlayer++;
        score_name.lastElementChild.textContent = `${playerName}: ${countWinsPlayer}`;
    } else if (e.target.id == 'scissors' && computerSelection === 'paper') {
        game_status.textContent = `${playerName} wins! Scissors beats Paper`;
        countWinsPlayer++;
        score_name.lastElementChild.textContent = `${playerName}: ${countWinsPlayer}`;
    } else if (e.target.id == 'paper' && computerSelection === 'scissors') {
        game_status.textContent = `${playerName} Loses! Scissors beats Paper`;
        countWinsComputer++;
        computerScore.textContent = `Computer: ${countWinsComputer}`;
    } else if (e.target.id == 'rock' && computerSelection === 'paper') {
        game_status.textContent = `${playerName} Loses! Paper beats Rock`;
        countWinsComputer++;
        computerScore.textContent = `Computer: ${countWinsComputer}`;
    } else if (e.target.id == 'scissors' && computerSelection === 'rock') {
        game_status.textContent = `${playerName} Loses! Rock beats Scissors`;
        countWinsComputer++;
        computerScore.textContent = `Computer: ${countWinsComputer}`;
    } else {
        game_status.textContent = "It's a tie";
        return "Tie";
    }
    if (countWinsComputer == 5 || countWinsPlayer == 5) {
        for (let i = 0; i < playerSelection.length; i++) {
            playerSelection[i].disabled = true;
        }
        if (countWinsComputer > countWinsPlayer) {
            game_status.textContent = `Computer Wins by ${countWinsComputer} points`;
        } else if (countWinsComputer < countWinsPlayer) {
            game_status.textContent = `Woohoo! ${playerName} Wins by ${countWinsPlayer} points`;

        } else {
            game_status.textContent = "It's a tie";
        }
    }
}