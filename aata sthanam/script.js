// Define an array of games with their names and URLs
const games = [
    { name: 'Tic-Tac-Toe', url: 'tic_tac_toe.html' },
    { name: 'Chess', url: 'chess.html' },
    // Add more games here as needed
];

// Function to dynamically generate game buttons
function generateGameButtons() {
    const gameButtonsContainer = document.getElementById('game-buttons');
    games.forEach((game) => {
        const button = document.createElement('button');
        button.textContent = `Play ${game.name}`;
        button.addEventListener('click', () => {
            window.location.href = game.url;
        });
        gameButtonsContainer.appendChild(button);
    });
}

// Call the function to generate game buttons on page load
window.addEventListener('load', generateGameButtons);
