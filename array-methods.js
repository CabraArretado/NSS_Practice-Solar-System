const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets")

let createElement = (arrayP) => {
    planetEl.innerHTML = ''
    arrayP.forEach(el => {
        planetEl.innerHTML += `<div>${el}</div><br />`
    })
}

document.querySelector("#show").addEventListener("click", event => {
    createElement(planets)
})

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
let planetsUp = planets.map((el) => {
    let [b, ...rest] = el
    return b.toUpperCase() + (rest.join(""))
})

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

let planetsE = planets.filter(e => e.toLowerCase().includes("e"))
console.log(planetsE)