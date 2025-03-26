// There are 3 ways to create an object in JavaScript
// 1. Object literal
// 2. Using new keyword
// 3. Using Object.create() method
// 4. singleton pattern

// Object Literals
const mySym = Symbol('key1')
const jsUser = {
  name: 'soubhagya',
  age: 25,
  email: 'soubhagya@example.com',
  isLoggedIn: true,
  lastLoggedIn: ['monday', 'Saturday'],
  [mySym]: 'secretValue',
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

jsUser.email = 'newemail@example.com'
// Object.freeze(jsUser)
jsUser.email = 'anotheremail@example.com'
// console.log(jsUser)

jsUser.greeting = function () {
  console.log('Hello JS user')
}

jsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${jsUser.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())
