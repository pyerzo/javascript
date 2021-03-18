// Utilities

console.table([1,2]) // Show array in table on console
window.wvalue = 3 // Allows to see var in console wherever it's places on code

// If var name is equal to key, commas can be avoided
let color1 = 'blue'
let color2 = 'green'
let allColors = {color1, color2}
console.log(allColors.color1)

// Code examples

const firstName = 'Jekyll'
const lastName = 'Hyde'

// Types -----------------------------------------------------------------------

// Concat strings - Important to use ` character [' doent work]
// Code can be include inside {}
let fullName = `${firstName} ${lastName.toUpperCase()}`
console.log(fullName)

// Getting string chars
let sub = firstName.substr(1, 4)
console.log(sub)

// Floats
let quant = 100 / 3
let total = Math.round(quant)
console.log(total)
total = quant.toFixed(2) // str
console.log(typeof(total))
console.log(total)

// Objects ---------------------------------------------------------------------

let person = {
  firstName: 'Jeckyll',
  lastName: 'Hyde',
  color: 'White',
  age: 26
}

// Access object's attribute
console.log(person.firstName)

// Another way to access object's attribute
let { age } = person
console.log(age)

// Create new object based on another, add car attribute and increase age
let clonedPerson = {...person, car: 'Chevrolet'}
clonedPerson.age += 1
console.log(person)
console.log(clonedPerson)

// Functions -------------------------------------------------------------------

// Normal
function normalAge(man){
  return man.age > 18
}
console.log(normalAge(person))

// Variable
const varAge = function(man) {
  return man.age > 18
}
console.log(varAge(person))

// Arrow - If there is only one param, () can be avoided
// If there is one line, {} can be avoided
// We can access object attribute directly on params definition
const arrowAge = (man) => {
  return man.age > 18
}
console.log(arrowAge(person))
const inlineArrowAge = (man) => man.age > 18
console.log(inlineArrowAge(person))
const alterInlineArrowAge = ({ age }) => age > 18
console.log(alterInlineArrowAge(person))

// Arrays ----------------------------------------------------------------------
const NUMBERS = [1 ,4 ,7, 8, 3]

// Filter
let filtered = NUMBERS.filter(val => val > 5)
console.log(filtered)

// Map
let mapped = NUMBERS.map(val => val * 2)
console.log(mapped)

// Reduce - An accumulator var is needed
let reduced = NUMBERS.reduce((total, val) => total + val, 0)
console.log(reduced)

// Classes - A JS Class is actually a Prototype --------------------------------
// What is inside {} is the constructor
function Car(height, color) {
  console.log('New car created!!!')
  this.height = height
  this.color = color
  this.describeHeight = () => console.log(`${this.height} is my height`)
}
// Modify a prototype - With Arrow Function "this" doesn't work
Car.prototype.describeColor = function() {
  console.log(`${this.color} is my color`)
}
// Modify using Arrow Function - "this" is the global reference in this case
Car.prototype.doubleHeight = () => console.log(this.height * 2)

let myCar = new Car(18.5, 'white')
console.log(myCar)
myCar.describeHeight()
myCar.describeColor()
myCar.doubleHeight()

// Hierarchy

function Truck(height, color) {
  console.log('New truck created!!!')
  this.height = height
  this.color = color
}
Truck.prototype.describeColor = function() {
  console.log(`${this.color} is my truck color`)
}

// Classes - Better way to use them PO_like

class Polygon {
  constructor (weight, height, sides) {
    this.weight = weight
    this.height = height
    this.sides = sides
  }
  getSides() {
    console.log(`I'm a polygon with ${this.sides} sides`)
  }
}

class Square extends Polygon {
  constructor (weight, height) {
    super(weight, height, 4)
  }
  getSides() {
    console.log(`I'm a square with ${this.sides} sides`)
  }
}

// Timeout ---------------------------------------------------------------------

setTimeout(function () {
  console.log('Timeout!!!')
}, 2000)

// Callbacks - Using only Javascript - Responses are not in order --------------

function getError(response) {
  console.log('ERROR getting person data')
}

function getPeople(id, callback) {
  fetch(`https://swapi.dev/api/people/${id}/`)
    .then(callback)
    .catch(getError)
}

// // Callback HELL (Don't do it) - Not clean code
// getPeople(1, (data) => {
//   console.log(data)
//   getPeople(2, (data) => {
//     console.log(data)
//     getPeople(3, (data) => {
//       console.log(data)
//     })
//   })
// })

// Promises --------------------------------------------------------------------

function getPlanet(id) {
  return fetch(`https://swapi.dev/api/planets/${id}/`)
    .then(response => response.json())
    .catch(error => console.log(error))
}

// getPlanet(1)
//   .then(response => {
//     console.log(response)
//     return getPlanet(2)
//   }).then(response => {
//     console.log(response)
//     return getPlanet(9)
//   }).then(response => {
//     console.log(response)
//   })

function determineHigher(val, alter) {
  return new Promise((resolve, reject) => {
    (val > alter) ? resolve(val) : (alter > val) ? resolve(alter) : reject()
  })
}

determineHigher(1, 2)
  .then(val => console.log(`${val} is higher`))
  .catch(() => console.log('Both are equal'))

// Promises in paralell (all)

let h_vals = [1, 2, 8, 1, 2, 6]
let h_alternative = 3
let h_promises = h_vals.map(val => determineHigher(val, h_alternative))

console.log('---------------------------')

Promise.all(h_promises)
  .then(vals => console.log(vals))
  .catch(error => console.log('FAIL'))

// Async Await -----------------------------------------------------------------

function getStarShip(id) {
  return fetch(`https://swapi.dev/api/starshipss/${id}/`)
    .then(response => response.json())
}

async function getStarShips() {
  try {
    let ship = await getStarShip(3)
    console.log(ship.name)
    ship = await getStarShip(2)
    console.log(ship.name)
    ship = await getStarShip(5)
    console.log(ship.name)
  } catch(error) {
    console.log('ERROR')
    console.log(error)
  }
}

getStarShips()

// Memory ----------------------------------------------------------------------

function factorial(n) {
  if (!this.cache) {
    this.cache = {}
  }
  if (this.cache[n]) {
    return this.cache[n]
  }
  this.cache[n] = n === 1 ? 1 : n * factorial(n-1)
  return this.cache[n]
}

console.log(factorial(4))


// Days between dates ----------------------------------------------------------

function daysBetweenDays(init, end) {
  const day = 1000 * 60 * 60 * 24
  const diff = Math.abs(init - end)
  return diff / day
}

const today = new Date()
const birthday = new Date(1993, 5, 18)

console.log(today)
console.log(birthday)

console.log(daysBetweenDays(birthday, today))


// Closures --------------------------------------------------------------------

function createHi(phraseTail) {
  return function (name) {
    console.log(`Hi ${name} ${phraseTail}`)
  }
}

const hi = createHi('... whats up?')

hi('Jhair')


// Inmutable data structures ---------------------------------------------------

const jhair = {
    firstname: 'Jhair',
    surname: 'Patiño',
    age: 27
}

// This modifies original object and its not recommended

const newAge = human => human.age++

// Correct - It creates a new object and modifies it

const inmutableNewAge = human => ({
  ...human,
  age: human.age + 1
})

// Change function context when it is called -----------------------------------

function sayHi(msg='Hi') {
  console.log(`${msg} ${this.firstname}`)
}

// Bind context to function

const sayHiJhair = sayHi.bind(jhair)
setTimeout(sayHi.bind(jhair), 1000)
sayHi.call(jhair)
setTimeout(sayHi.bind(jhair, "What's up"), 1000)
sayHi.apply(jhair, ["What's up"])
