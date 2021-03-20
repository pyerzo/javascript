// Ecmascript 6 ================================================================

// Default Params --------------------------------------------------------------

// Before
function example(name, age) {
  var name = name || 'Jhair'
  var age = age || 27
  console.log(name, age)
}

// ES6
function _example(name='oscar', age=27) {
  console.log(name, age)
}


// Template literals -----------------------------------------------------------

let hi = 'Hi'
let world = 'World'

// Before
let phrase = hi + ' ' + world
console.log(phrase)

// ES6
phrase = `${hi} ${world}`
console.log(phrase)


// String multiline ------------------------------------------------------------

// Before
let lorem = 'Lorem itsum param value \n'
+ 'lets continue phrase'

// ES6

let es6Lorem = `Lorem itsum param value
lets continues phrase`

console.log(lorem)
console.log(es6Lorem)


// Element's structure ---------------------------------------------------------

person = {
  'name': 'Jhair',
  'age': 27,
  'country': 'ec'
}

// Before
console.log(person.name, person.age, person.country)

//ES6
let {name, age, country} = person;
console.log(name, age, country)


// Propagation operator --------------------------------------------------------

// ES6
let firstTeam = ['Jhair', 'Alex', 'Stefa']
let secondTeam = ['Ale', 'Daya', 'Eduardo']
let education = ['David', ...firstTeam, ...secondTeam]
console.log(education)


// Objects ---------------------------------------------------------------------

// Before
obj = {name: name, age: age}
console.log(obj)

// ES6
es6Obj = {name, age}
console.log(es6Obj)

// Arrow functions -------------------------------------------------------------

const names = [
  {'name': 'Jhair', 'age': 27},
  {'name': 'Alexander', 'age': 40}
]

// Before
let nameList = names.map(function (item) {
  console.log(item.name)
})

// ES6
let _nameList = names.map(item => console.log(item.name))
const __nameList = (name, age, coountry) => {
  console.log(name)
}
const _nameList_ = name => {
  console.log(name)
}
const square = num => num * num;

// Promises --------------------------------------------------------------------

const higherThan = (num, flag) => {
  return new Promise((resolve, reject) => {
    if (num > flag) {
      resolve("It is Higher!")
    } else {
      reject('Nope...')
    }
  })
}

higherThan(8, 10)
  .then(msg => console.log(msg))
  .catch(error => console.log(error))

// Ecmascript 7 ================================================================

// Element in array ------------------------------------------------------------

let numbers = [1,2,3,7,8]
if (numbers.includes(7)) {
  console.log('ES7 - There is a seven')
}

// N times a number ------------------------------------------------------------

let base = 2
let exponent = 3
result = base ** exponent
console.log(`${base}^${exponent}=${result}`)

// Ecmascript 8 ================================================================

// Object to matrix ------------------------------------------------------------

const data = {
  frontend: 'React',
  backend: 'DJango',
  designer: 'Jhair', // Trailing comma
}
const entries = Object.entries(data)
console.log(entries)

// Count elements from object --------------------------------------------------

console.log(entries.length)

// Object values ---------------------------------------------------------------

const values = Object.values(data)
console.log(values)

// Padding ---------------------------------------------------------------------

const string = 'hello'
console.log(string.padStart(10, 'x'))
console.log(string.padEnd(10, 'x'))
console.log('foo'.padEnd(12, ' ---'))

// Async await -----------------------------------------------------------------

// Promise

const promise = (eval) => {
  return new Promise((resolve, reject) => {
    (eval)
      ? setTimeout(() => resolve('Hi I am a promise'), 2000)
      : reject(new Error('Error'))
  })
}

// Async/Await

const asyncAwait = async () => {
  try {
    const message = await promise(true)
    console.log(message)
    await promise(false)
  } catch(error) {
    console.log(error)
  }
}

asyncAwait()

// Ecmascript 9 ================================================================

// Get object attributes dinamically -------------------------------------------

const shape = {
  color: 'red',
  sides: 4,
  height: 300,
  width: 200
}

let {color, ...all} = shape
console.log(color, all)

let triangle = {
  ...shape,
  hypotenuse: 247
}
console.log(triangle)

// Promise finally -------------------------------------------------------------

const finalPromise = (eval) => {
  return new Promise((resolve, reject) => {
    (eval)
      ? setTimeout(() => resolve('OK'), 2000)
      : reject(new Error('Fail'))
  })
}
finalPromise(true)
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log('Final eval'))

// Regex -----------------------------------------------------------------------

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)

// Ecmascript 10 ===============================================================

// Flat arrays -----------------------------------------------------------------
// Trim arrays -----------------------------------------------------------------
// Manage exceptions -----------------------------------------------------------
// Matrix to array -------------------------------------------------------------
// Prototype description -------------------------------------------------------
