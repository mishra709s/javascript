/* Convert To Number Start */
let score = 'soubhagya'

// console.log(typeof score)
//console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN
// "soubhagya" => NaN
//  true => 1; false => 0
//  null => 0
//  undefined => NaN
//  {} => NaN
//  [] => 0
// fn() => NaN

/* Convert To Number End */

/* Convert To Boolean Start */
let isLoggedIn = Symbol()

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log('convert Symbol() to boolean', booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "hitesh" => true
// null => false
// undefined => false
// {} => true
// [] => true
// fn() => true
// Symbol() => true

/* Convert To Boolean End */

/* Convert To String Start */
// const fn = function () {}
let someNumber = Symbol()

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

// 33 => "33"
// true => "true"
// false => "false"
// null => "null"
// undefined => "undefined"
// {} => "[object Object]"
// [] => ""
// function () {} => "function fn() {}"
// Symbol() => "Symbol()"

/* Convert To String End */
