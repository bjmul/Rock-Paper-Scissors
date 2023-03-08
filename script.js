const game = () => {
    let drawCount = 0;
    let playerCount = 0;
    let cpuCount = 0;


//start the game
    const startGame = () => {
            const letsPlay = document.querySelector('.intro button');
            const introScreen = document.querySelector('.intro');
            const match = document.querySelector('.options');

            letsPlay.addEventListener('click', () => {
                introScreen.classList.add('fadeOut');
                match.classList.add('fadeIn');
            });
    };
    //play match
    const playMatch = () => {
        const playerChoice = document.querySelectorAll('[data-selection]');
        const playerHand = document.querySelector('#player-fist');
        const cpuHand = document.querySelector('#cpu-fist');
        //cpu options
        const cpuChoices = ['rock', 'paper', 'scissors'];

        playerChoice.forEach(playerChoice => {
            playerChoice.addEventListener('click', function() {
                playerHand.style.animation='none';
                cpuHand.style.animation='none';
                document.querySelector('.cpu-choice').style.transform='none';
                document.querySelector('.player-choice').style.transform='none';
                const playerChoiceName = playerChoice.dataset.selection;
                //cpu choice
                const cpuNumber = Math.floor(Math.random()*cpuChoices.length);
                const cpuChoice = cpuChoices[cpuNumber];
                // call compare hands
                compareHands(playerChoiceName, cpuChoice);
                // update images
                playerHand.src = `./images/${playerChoiceName}.png`;
                cpuHand.src = `./images/${cpuChoice}.png`;
                //update counters
                document.getElementById('playerCounter').innerHTML = playerCount;
                document.getElementById('cpuCounter').innerHTML = cpuCount;
                document.getElementById('drawCounter').innerHTML = drawCount;
            });
        });
    };

    const compareHands = (playerChoice, cpuChoice) => {
        //text
        const whoWon = document.querySelector('#whoWon');
    if (playerChoice === cpuChoice) {
        whoWon.textContent = 'Draw';
        drawCount++;
        return;
    }
    if (playerChoice === 'rock') {
        if (cpuChoice === 'scissors') {
            whoWon.textContent = 'Player Wins';
            playerCount++;
            return;
        }
        else {
            whoWon.textContent = 'Computer Wins';
            cpuCount++;
            return;
        }
    }
    if (playerChoice === 'paper') {
        if (cpuChoice === 'rock') {
            whoWon.textContent = 'Player Wins';
            playerCount++;
            return;
        }
        else {
            whoWon.textContent = 'Computer Wins';
            cpuCount++;
            return;
        }
    }
    if (playerChoice === 'scissors') {
        if (cpuChoice === 'paper') {
            whoWon.textContent = 'Player Wins';
            playerCount++;
            return;
        }
        else {
            whoWon.textContent = 'Computer Wins';
            cpuCount++;
            return;
        }
    }
    }
    //call all inner functions
    startGame();
    playMatch();
};

//start game function
game();













/*** 

const selectionPlayer = document.querySelectorAll('[data-selection]');
const choices = ['rock', 'paper', 'scissors']

let drawCount = 0;
let playerCount = 0;
let cpuCount = 0;

function whoWins(choice1, choice2) {
    choice1 = choices.indexOf(choice1);
    choice2 = choices.indexOf(choice2);
    if (choice1 == choice2) {
        drawCount++;
        return 'Draw';
    }
    if (choice1 == 0 && choice2 == 2 && choice1 == 1 && choice2 == 0 || choice1 == 2 && choice2 == 0) {
        playerCount++;
        return 'Player wins!'
    }
    if (choice2 == 0 && choice1 == 2 || choice2 == 1 && choice1 == 0 || choice2 == 2 && choice1 == 0) {
        cpuCount++;
        return 'Computer wins!'
    }
}

let playerChoice;
let cpuChoice;

selectionPlayer.forEach(selectionPlayer => {
        selectionPlayer.addEventListener('click', e => {
            const selectionName = selectionPlayer.dataset.selection;
            if (selectionName == 'rock') {
                playerChoice = 0;
                cpuChoice = choices[Math.floor(Math.random()*choices.length)];
            }
            else if (selectionName == 'paper') {
                playerChoice = 1;
                cpuChoice = choices[Math.floor(Math.random()*choices.length)];
            }
            else if (selectionName == 'scissors') {
                playerChoice = 2;
                cpuChoice = choices[Math.floor(Math.random()*choices.length)];
            }
        })
    })

whoWon = whoWins(playerChoice, cpuChoice);

document.getElementById('playerCounter').innerHTML = playerCount;
document.getElementById('cpuCounter').innerHTML = cpuCount;
document.getElementById('drawCounter').innerHTML = drawCount;
document.getElementById('whoWon').innerHTML = whoWon;
document.getElementById('cpu-fist').src = ''; **/