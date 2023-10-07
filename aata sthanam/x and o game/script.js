const board = document.getElementById('board');
const currentPlayerDisplay = document.getElementById('current-player');
const gameStatusDisplay = document.getElementById('game-status');
const resetButton = document.getElementById('reset-button');

let currentPlayer = 'X';
let boardState = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

// Winning combinations
const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
];

// Function to handle cell click
function handleCellClick(index) {
    if (boardState[index] === '' && gameActive) {
        boardState[index] = currentPlayer;
        renderBoard();
        checkWin();
        togglePlayer();
    }
}

// Function to render the board
function renderBoard() {
    board.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = boardState[i];
        cell.addEventListener('click', () => handleCellClick(i));
        board.appendChild(cell);
    }
}

// Function to check for a win
function checkWin() {
    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            gameActive = false;
            gameStatusDisplay.textContent = `${currentPlayer} wins!`;
            return;
        }
    }

    if (!boardState.includes('')) {
        gameActive = false;
        gameStatusDisplay.textContent = "It's a draw!";
    }
}

// Function to toggle the current player
function togglePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    currentPlayerDisplay.textContent = currentPlayer;
}

// Function to reset the game
function resetGame() {
    boardState = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    gameStatusDisplay.textContent = '';
    renderBoard();
    currentPlayerDisplay.textContent = currentPlayer;
}

// Event listener for the reset button
resetButton.addEventListener('click', resetGame);

// Initial render
renderBoard();
