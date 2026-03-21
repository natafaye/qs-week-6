
// Variables
// guess = "pineapple"

// let guess = "" 

// while(guess !== "pineapple") {
//     guess = prompt("Guess!")
// }

// // If we get to here, then the while condition must be false
// alert("You guessed right!")


// Variables
// message = "\nHello!\nWhat's up?\n"
// nextline = "DONE"


function makeAMessage() {
    // Ask the user for a sentence, and keep asking them until they say that they're done
    let message = ""
    let nextline = ""

    // "isn't" in human speak is "!==" in computer speak
    
    while( nextline !== "DONE" ) {
        message += nextline + "\n" // \n is computer speak for "Enter" in an alert or prompt
        nextline = prompt("What's the next line? (enter DONE to stop)")
    }

    alert(message)
}



// These two do the same thing
//message = message + prompt("What's the next line? (enter DONE to stop)")
//message += prompt("What's the next line? (enter DONE to stop)")

function makeAnArray() {
    // Ask the user for a sentence, and keep asking them until they say that they're done
    let lines = []
    let nextline = ""

    // "isn't" in human speak is "!==" in computer speak
    
    while( nextline !== "DONE" ) {
        lines.push(nextline)
        nextline = prompt("What's the next line? (enter DONE to stop)")
    }

    console.log(lines)
}


// removing from an array
// accessing the last item in an array
// for loops


let fruits = ["apple", "peach", "mango", "strawberry"]


// Eat peach out of the array (aka remove it from the array)

// array.splice(INDEX OF WHERE TO START, HOW MANY TO REMOVE, WHAT TO ADD AT THAT SPOT)

fruits.splice(1, 1) // remove "peach" and leave nothing behind

console.log(fruits) // ["apple", "mango", "strawberry"]


// Eat the apple and leave the core behind

fruits.splice(0, 1, "core")

console.log(fruits) // ["core", "mango", "strawberry"]


// Eat the mango and the strawberry

fruits.splice(1, 2)

console.log(fruits) // ["core"]


// Variables
// i = 3
// alert here's a cat
// alert here's a cat
// alert here's a cat
// alert you have a enough

// let i = 0
// while(i < 3) {
//     alert("Here's a cat!")
//     i++ // i = i + 1
// }
// alert("You have enough!")


// Variables
// i = 3
// alert here's a cat
// alert here's a cat
// alert here's a cat
// alert you have a enough


// for(let i = 0; i < 3; i++) {
//     alert("Here's a cat!")
// }

// alert("You have enough!")




// Say hello four times!

// for(let i = 0; i < 4; i++) {
//     alert("hello!")
// }

// for(let i = 0; i < HOWMANYTIMES; i++) {
    // whatever you want to do over and over again
// }



let moreFruits = ["apple", "peach", "mango", "strawberry", "grape"]
//alert(moreFruits)

// keep track of which index we're looking at


for(let i = 0; i < moreFruits.length; i++) {
    alert(moreFruits[i]);
}

// alert(moreFruits[0])
// alert(moreFruits[1])
// alert(moreFruits[2])
// alert(moreFruits[3])



// Make a task list
// 1) User can add to the list until they say to stop (show the list in the prompt as they add each one)
// 2) User can remove from the list by index until it's empty (show the list in the prompt as they remove each one)
// 3) Congratule the user on getting all their tasks done

// For example
// prompt: What do you need to do today?
// user types: "Laundry"
// prompt: What do you need to do today? 0: Laundry
// user types: "Dishes"
// prompt: What do you need to do today? 0: Laundry, 1: Dishes
// user types: "STOP"
// prompt: What have you completed? 0: Laundry, 1: Dishes
// user types: "1"
// prompt: What have you completed? 0: Laundry
// user types: "0"
// alert: You completed all your tasks for the day!