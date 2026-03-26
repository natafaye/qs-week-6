
let currentTurn = "❌"


const boardDiv = document.getElementById("board")
const turnIndicator = document.getElementById("turn-indicator")

for(let i = 0; i < 9; i++) {
    // Make a new div
    const squareDiv = document.createElement("div")
    // Stick it in boardDiv
    // Pattern: newParent.appendChild(divToMove)
    boardDiv.appendChild(squareDiv)

    squareDiv.addEventListener("click", function() {
        squareDiv.textContent = currentTurn
        // Swap turns
        if(currentTurn === "❌") {
            currentTurn = "⭕"
        } else {
            currentTurn = "❌"
        }
        turnIndicator.textContent = currentTurn
    })
}