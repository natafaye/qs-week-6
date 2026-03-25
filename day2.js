// Const helps you not accidentally change a variable that you didn't mean to

const myFavoriteColor = "green"

// Is my favorite color pink?
// = is a command "You are now pink"
// === is a question "Are you pink?"
if (myFavoriteColor === "pink") {
    alert("Yes it is!")
}


// THREE JOB-READY CONCEPTS OF JS
// 1) Functions (calling them, writing them, passing parameters)
// 2) Arrays of objects (navigating inside of them, building them, looping over them)
// 3) Callbacks (coming soon)


// Saving a contact in your phone
function doSomething() {
    alert("hi!")
}

// Functions
// * Calling functions
// * Parameters
// * Return
// * Functions calling other functions


// Call the function (or the contact in your phone)
//doSomething()


// Name functions after actions (verbs)

function makeWeekendPlans(moneyInBankAccount, friendsAvailable) { // In the background: let moneyInBankAccount; let friendsAvailable
    if (moneyInBankAccount > 100 && friendsAvailable) {
        alert("Party!")
    } else {
        alert("Study")
    }
}

// Pass in values to the parameters
// makeWeekendPlans(10, false)
// makeWeekendPlans(200, false)
// makeWeekendPlans(200, true)



function cookInOven(food, temperature) { // let food = "rice"; let temperature = 200
    let cookedFood = "Cooked " + food + " at " + temperature
    return cookedFood
}

let cookedRice = cookInOven("rice", 200)
let mainDish = cookInOven("chicken and veggies", 350)
console.log("Here's what's for dinner: " + cookedRice + " and " + mainDish)







function sayHi(name) { // let name = "Natalie"
    return "hello " + name + "!"
}

// Functions simplify to whatever they return
let message = sayHi("Natalie") + " " + sayHi("Juan")
console.log(message)



// Make a kitchen gadget function (microwave, toaster, instant pot)
// Use it to "cook" two things and alert/console.log out the meal


// Arrays
// Numbered list with an order
// Arrays have indexes (0, 1, 2)
// Sandwiches

const ingredients = ["rice", "chicken", "veggies"]

ingredients[1] // "chicken"


// Objects
// Collection of variables with names but no order
// Objects have properties (whatever we want to name them)
// Burrito

const teacher = {
    name: "Natalie",
    role: "teacher",
    favoriteColor: "green"
}

const student = {
    name: "Juan",
    role: "student",
    favoriteColor: "black"
}

teacher.role // "teacher"
teacher.favoriteColor // "green"
student.name // "Juan"


// Looping over an array

const posts = [
    {
        id: 12,
        text: "How's everyone doing?",
        author: "David",
        likes: 12
    },
    {
        id: 15,
        text: "I had a great weekend",
        author: "Agatha",
        likes: 3
    },
    {
        id: 16,
        text: "I love cats",
        author: "David",
        likes: 5
    },
]


function displayPosts() {
    // Loop over the array to display each one
    let alertMessage = "\n"
    // Goal: "David: How's everyone doing?   Agatha: I had a great weekend    David: I love cats"

    // for (let i = 0; i < posts.length; i++) {
    //     alertMessage += posts[i].author + ": " + posts[i].text + "\n\n"
    // }

    for( const postItem of posts) {
        alertMessage += postItem.author + ": " + postItem.text + "\n\n"
    }

    alert(alertMessage)
}

displayPosts()

posts.push({
    id: 24,
    text: "I hate cats",
    author: "Mario",
    likes: -3
})

displayPosts()

posts.splice(1, 1)

displayPosts()





const appointments = [
    {
        id: 0,
        rsvped: false,
        startTime: "12 PM",
        endTime: "1 PM",
        date: "Feb 3rd",
        name: "Lunch",
        important: false,
    },
    {
        id: 1,
        rsvped: false,
        startTime: "1 PM",
        endTime: "3 PM",
        date: "Feb 3rd",
        name: "Meeting with Boss",
        important: false,
        rsvped: false
    },
    {
        id: 2,
        rsvped: false,
        startTime: "7 PM",
        endTime: "9 PM",
        date: "Feb 4th",
        name: "Date",
        important: true,
    },
]

// Mark the second appointment as important
appointments[1].important = true


console.log(appointments)

// Loop over the array RSVP to all the appointments

// for(let i = 0; i < appointments.length; i++) {
//     appointments[i].rsvped = true
// }

// for(let i = 0; i < appointments.length; i++) {
//     const app = appointments[i]
//     app.rsvped = true
// }

for(const app of appointments) { // in the background: const app = appointments[i]
    app.rsvped = true
}

console.log(appointments)