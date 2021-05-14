// Callback structure

sum = (a, b) => a + b

calc = (a, b, callback) => callback(a, b)

console.log(calc(2, 4, sum))

date = (callback) => {
  console.log(new Date)
  setTimeout(() => {
    let date = new Date
    callback(date)
  }, 3000)
}

printDate = (dateNow) => console.log(dateNow)

date(printDate)

// Calling API using XMLHttpRequest

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

function fetchData(url, callback) {
  let xhttp = new XMLHttpRequest
  xhttp.open('GET', url, true)
  xhttp.onreadystatechange = function(event) {
    if (xhttp.readyState === 4) {
      if(xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText))
      } else {
        const error = new Error('Error ' + url)
        return callback(error, null)
      }
    }
  }
  xhttp.send()
}

function getPokemon(error, data) {
  if (error) {
    console.log(error)
    return
  }
  pokemon = data['results'][0]
  fetchData(pokemon['url'], (error, info) => {
    (error) ? console.log(error) : console.log(info)
  })
}

fetchData('https://pokeapi.co/api/v2/pokemon', getPokemon)
