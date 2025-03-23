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
// console.log(stringNumber)
// console.log(typeof stringNumber)

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

/********************* Operations *********************/
let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = 'hello'
let str2 = ' soubhagya'

let str3 = str1 + str2
// console.log(str3); // hello soubhagya

// console.log("1" + 2); // "12"
// console.log(1 + "2"); // "12"
// console.log("1" + 2 + 2); // "122"
// console.log(1 + 2 + "2"); // "32"

// console.log( (3 + 4) * 5 % 3); // 2
// console.log(+true); // 1
// console.log(+""); // 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter
console.log(gameCounter)

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
