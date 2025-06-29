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