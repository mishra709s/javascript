const marvel_heroes = ['thor', 'ironman', 'spiderman']
const dc_heroes = ['superman', 'batman', 'flash']

marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes) // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]
// console.log(marvel_heroes[3][1]) // batman

marvel_heroes.concat(dc_heroes)
// console.log(marvel_heroes) // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]

const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes) // [ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_new_heroes) // [ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array) // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

// console.log(Array.isArray('soubhagya')) // false
// console.log(Array.from('soubhagya')) // [ 's', 'o', 'u', 'b', 'h', 'a', 'g', 'y' ]
console.log(Array.from({ name: 'soubhagya' })) // []

let score1 = 100
let score2 = 200
let score3 = 300

const scores = Array.of(score1, score2, score3)
console.log(scores) // [ 100, 200, 300 ]

// read more about isArray, from, of
