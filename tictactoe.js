
// STATE (data of the app)
let currentTurn = "o"
let board = [
    "x", "x", "o",
    "o", "", "",
    "", "", "o"
]


// User Interface (UI) what the user sees

// RENDERING
const boardDiv = document.getElementById("board")
function renderBoard() {
    // Clear out the old rendered squares
    boardDiv.replaceChildren()

    // Re-render the squares based on the updated data
    for (let i = 0; i < board.length; i++) {
        const square = board[i]

        const squareDiv = document.createElement("div")
        // Show something nicer than a character
        if (square === "x") {
            squareDiv.textContent = "⚔️"
        } else if (square === "o") {
            squareDiv.textContent = "🏵️"
        } else {
            // LISTENING
            squareDiv.addEventListener("click", function () {
                // Update the state
                board[i] = currentTurn
                if (currentTurn === "x") {
                    currentTurn = "o"
                } else {
                    currentTurn = "x"
                }

                // Update the UI to match the state
                renderBoard()
                renderTurnIndicator()
            })
        }

        boardDiv.appendChild(squareDiv)
    }
}

const turnIndicator = document.getElementById("turn-indicator")
// The UI should match the state
function renderTurnIndicator() {
    turnIndicator.textContent = currentTurn
}

// Render when the page first loads in
renderBoard()
renderTurnIndicator()