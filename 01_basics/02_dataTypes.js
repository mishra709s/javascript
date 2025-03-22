'use strict' // treat all JS code as newer version

// alert(3 + 3) // we are using nodejs, not browser

console.log(3 + 3) // code readability should be high
console.log('Soubhagya')

// Data Types
let name = 'Soubhagya'
let age = 31
let isLogged = true

// number => 2 to power 53
// bigint => 2 to power 53 and above
// string => " " or ' '
// boolean => true or false
// null => null
// undefined => undefined
// object => {}, new Object()
// symbol => we use this for uniqueness (Symbol())
// function => function () {}
// typeOf => to check the type of data

console.table([
  { Expression: 'typeof name', Value: typeof name },
  { Expression: 'typeof age', Value: typeof age },
  { Expression: 'typeof isLogged', Value: typeof isLogged },
  { Expression: 'typeof null', Value: typeof null },
  { Expression: 'typeof undefined', Value: typeof undefined },
  { Expression: 'typeof {}', Value: typeof {} },
  { Expression: 'typeof Symbol()', Value: typeof Symbol() },
  { Expression: 'typeof function () {}', Value: typeof function () {} },
])
