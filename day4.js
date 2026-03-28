// What to know before React
// 1) Functions calling other functions
// X Arrays of objects
// X Callback functions (map, filter, find)
// X Event handling
// 5) Javascript bells & whistles (arrow functions, template literals, destructuring, spread operator, short circuiting)
// X How to structure an app (rendering, listening, state)


// Dog Shelter Website
// list of dogs
// filter & search through the dogs
// add/remove dogs by the admin



// Template Literals
const food = "rice"
const temperature = 300

// Perfectly great
const cookedFood = food + " cooked at " + temperature
// Template literal
const cookedFood2 = `${food} cooked at ${temperature}`



const addOne = (number) => {
  return number + 1
}


// Data Types
// boolean, string, number
// object, array
// function



// function filter(array, shouldKeep) {
//     const filteredArray = []
//     for(let i = 0; i < array.length; i++) {
//         const item = array[i]
//         if(shouldKeep(item)) {
//             filteredArray.push(item)
//         }
//     }
//     return filteredArray
// }

const fruits = ["apple", "", "", "banana", "", "", ""]
const fullStrings = fruits.filter((item) => item !== "") 
// filter(fruits, (item) => item !== "") // ["apple", "banana"]
console.log(fullStrings)

const names = ["Natalie", "Juan", "Mary", "Jose"]
const shortNames = names.filter((name) => name.startsWith("J")) 
//filter(names, (name) => name.startsWith("J"))
console.log(shortNames)





// My favorite higher-order functions: filter, find, map
// With arrays of objects





const books = [
    {
        id: 0,
        title: "Jane Eyre",
        genre: "Classic"
    },
    {
        id: 1,
        title: "Ancillary Justice",
        genre: "Science Fiction"
    },
    {
        id: 2,
        title: "Atomic Habits",
        genre: "Nonfiction"
    },
    {
        id: 3,
        title: "Dune",
        genre: "Science Fiction"
    },
]

// Practice Ideas:
// Filter - filter for all Science Fiction books (Ancillary Justice, Dune)
// Find - find the book with the id of 2 (Atomic Habits)
// Map - map each book in this style: "Jane Eyre (Classic)"


// looping then book would be books[i]
// genre of the book is Science Fiction
const sfBooks = books.filter( (book) => book.genre === "Science Fiction" )
console.log(sfBooks)


// id of the book is 2
const specificBook = books.find( (book) => book.id === 2 )
console.log(specificBook)


// Map an array of objects to how we want to display them
//alert(books.map( (book) => book.title + " (" + book.genre + ")" ))
//alert(books.map( (book) => `${book.title} (${book.genre})` ))




const products = [
    {
        id: 0,
        name: "Doritos",
        row: 1,
        price: 1
    },
    {
        id: 1,
        name: "Fruit Snacks",
        row: 1,
        price: 2
    },
    {
        id: 2,
        name: "Water Bottle",
        row: 2,
        price: 1
    },
    {
        id: 3,
        name: "Power Bar",
        row: 2,
        price: 3
    },
    {
        id: 4,
        name: "Sprite",
        row: 3,
        price: 1
    },
    {
        id: 5,
        name: "Poptart",
        row: 3,
        price: 2
    },
]

// Practice Ideas:
// Map - map each product in this style: "Row 1 - $1 Doritos"
// Filter - filter for all products in row 3 (Sprite, Poptart)
// Filter - filter for all products that are cheaper than $2 (Doritos, Water Bottle, Sprite)
// Find - find the product with the id of 2 (Water Bottle)
// Find - find the product in row 2 with a price of 3 (Power Bar)

// Map
console.log( 
    products.map(
        product => `Row ${product.row} - $${product.price} ${product.name}`
    ) 
)

// Filter

const row3Products = products.filter( product => product.row === 3 )
console.log(row3Products)
