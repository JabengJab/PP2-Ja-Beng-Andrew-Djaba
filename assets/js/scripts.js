const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const roundsDisplay = document.getElementById("duelRounds");
const gameHistory = document.getElementById("gameHistory");
const rulesBtn = document.getElementById("rulesBtn");
const modal = document.getElementById("rulesModal");
const closeBtn = document.querySelector(".close");

// Game State
let gameState = {
    playerScore: 0,
    computerScore: 0,
    rounds: 5,
    history: []
};

// Win Conditions
const winConditions = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["spock", "paper"],
    spock: ["rock", "scissors"]
};

// Emoji mapping
const emojiMap = {
    rock: "👊",
    paper: "✋",
    scissors: "✂️",
    lizard: "🦎",
    spock: "🖖"
};

// Modal functionality
rulesBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

function playGame(playerChoice) {
    if (gameState.rounds <= 0) {
        showGameOver();
        return;
    }

    const computerChoice = choices[Math.floor(Math.random() * 5)];
    const result = determineWinner(playerChoice, computerChoice);

    updateDisplay(playerChoice, computerChoice, result);
    updateScores(result);
    updateHistory(playerChoice, computerChoice, result);
    
    gameState.rounds--;
    roundsDisplay.textContent = `Rounds left: ${gameState.rounds}`;

    if (gameState.rounds <= 0) {
        showGameOver();
    }
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "TIE";
    }
    return winConditions[playerChoice].includes(computerChoice) ? "WIN" : "LOSE";
}

function updateDisplay(playerChoice, computerChoice, result) {
    playerDisplay.textContent = `PLAYER: ${emojiMap[playerChoice]}`;
    computerDisplay.textContent = `COMPUTER: ${emojiMap[computerChoice]}`;

    // Clear previous classes
    resultDisplay.className = "";
    
    // Set result text and class
    switch(result) {
        case "WIN":
            resultDisplay.textContent = "YOU WIN!";
            resultDisplay.classList.add("winner");
            break;
        case "LOSE":
            resultDisplay.textContent = "YOU LOSE!";
            break;
        case "TIE":
            resultDisplay.textContent = "IT'S A TIE!";
            break;
    }
}

function updateScores(result) {
    if (result === "WIN") {
        gameState.playerScore++;
        playerScoreDisplay.textContent = gameState.playerScore;
    } else if (result === "LOSE") {
        gameState.computerScore++;
        computerScoreDisplay.textContent = gameState.computerScore;
    }
}

function updateHistory(playerChoice, computerChoice, result) {
    const resultText = {
        "WIN": "won",
        "LOSE": "lost",
        "TIE": "tied"
    };
    
    const historyEntry = document.createElement("p");
    historyEntry.textContent = `Round ${5 - gameState.rounds}: You chose ${playerChoice}, computer chose ${computerChoice}. You ${resultText[result]}!`;
    gameHistory.prepend(historyEntry);
}

function showGameOver() {
    let message;
    if (gameState.playerScore > gameState.computerScore) {
        message = "You won the game!";
    } else if (gameState.playerScore < gameState.computerScore) {
        message = "Computer won the game!";
    } else {
        message = "The game ended in a tie!";
    }
    
    const gameOverMsg = document.createElement("p");
    gameOverMsg.textContent = `Game Over! ${message} Final Score: You ${gameState.playerScore} - Computer ${gameState.computerScore}`;
    gameOverMsg.style.fontWeight = "bold";
    gameOverMsg.style.fontSize = "1.5rem";
    gameOverMsg.style.marginTop = "20px";
    gameHistory.prepend(gameOverMsg);
}

function resetGame() {
    gameState = {
        playerScore: 0,
        computerScore: 0,
        rounds: 5,
        history: []
    };
    
    playerScoreDisplay.textContent = gameState.playerScore;
    computerScoreDisplay.textContent = gameState.computerScore;
    roundsDisplay.textContent = `Rounds left: ${gameState.rounds}`;
    playerDisplay.textContent = 'PLAYER:';
    computerDisplay.textContent = 'COMPUTER:';
    resultDisplay.textContent = '';
    resultDisplay.className = '';
    gameHistory.innerHTML = '';
}