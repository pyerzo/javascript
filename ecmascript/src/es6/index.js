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
