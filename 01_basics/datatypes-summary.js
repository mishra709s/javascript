// Based on how the data is tored in the memory and accessed from the memory, the data types are classified into two types.
// 1. Primitive Data Types
// 2. Non-Primitive Data Types (Refernce Data Types)

// Primitive Data Types
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

let score = 100
let scoreValue = 100.3

const isLoggedIn = true
const outsideTemp = null

let useEmail

let id = Symbol('123')
let anotherzId = Symbol('123')
console.log(id === anotherzId) // false

const bigNum = 3652973426785364n

// Non-Primitive Data Types
// 1. Object
// 2. Array
// 3. Function

// JavaScript is dynamically Types Language

const heros = ['shaktiman', 'naagraj', 'doga']
let obj = {
  name: 'soubhagya',
  age: 28,
}

const myFunc = function () {
  console.log('hello')
}

console.log('typeof score: ', typeof score)
console.log('typeof scoreValue: ', typeof scoreValue)
console.log('typeof isLoggedIn: ', typeof isLoggedIn)
console.log('typeof outsideTemp: ', typeof outsideTemp)
console.log('typeof useEmail: ', typeof useEmail)
console.log('typeof id: ', typeof id)
console.log('typeof anotherzId: ', typeof anotherzId)
console.log('typeof bigNum: ', typeof bigNum)
console.log('typeof heros: ', typeof heros)
console.log('typeof obj: ', typeof obj)
console.log('typeof myFunc: ', typeof myFunc) // its not a function, its an object function
