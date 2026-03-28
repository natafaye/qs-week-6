
// STATE = data
let color = "Green"

// RENDERING = making the UI match the data
const colorText = document.getElementById("color-text")
function renderApp() {
    colorText.textContent = color

    if(color === "Green") {
        document.body.style.backgroundColor = "#79B473"
    } else if(color === "Blue") {
        document.body.style.backgroundColor = "#34B8D0"
    } else if(color === "Purple") {
        document.body.style.backgroundColor = "#8377D1"
    }
}
renderApp()

// LISTENING = respond to user actions (usually by updating the state)
function onBlueClick() {
    color = "Blue"
    renderApp()
}

function onPurpleClick() {
    color = "Purple"
    renderApp()
}
