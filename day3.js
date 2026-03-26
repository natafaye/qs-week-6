// Finding lets us get access to an element in the HTML
// const paragraph = document.getElementById("special-paragraph")

// paragraph.style.backgroundColor = "green"
// paragraph.style.color = "white"
// paragraph.textContent = "My name is Natalie"
// paragraph.innerHTML = "<button>Click</button><input type='text'/>"

// FINDING
const textbox = document.querySelector("#message-textbox")
const messagesContainer = document.getElementById("messages-container")

function sendMessage() {
    // Get the text from the textbox
    // READING & UPDATING
    //alert(textbox.value)
    // Add a new paragraph to the page with the text of the message

    // CREATING & MOVING
    // Creating a new paragraph soul (that is NOT visible yet)
    const newPSoul = document.createElement("p")
    // Setting the text content of it to whatever is in the textbox right now
    newPSoul.textContent = textbox.value
    // Run this code when the new paragraph is clicked on
    // LISTENING
    newPSoul.addEventListener("click", function () {
        newPSoul.style.textDecoration = "line-through"
    })

    // Move it into the page
    messagesContainer.appendChild(newPSoul)
}

function removeAll() {
    // REMOVING
    // Clear out the insides of the div with the id of messages-container
    messagesContainer.replaceChildren()
}

