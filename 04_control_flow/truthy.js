const userEmail = 'example@example.com'

if (userEmail) {
  console.log('User email is valid')
} else {
  console.log('User email is invalid')
}

// falsy values
// 0, "", undefined, null, NaN, false,-0, BigInt 0n

// truthy values
// "0", " ", [], {}, -1, true, 1, Infinity, -Infinity, 'false', function(){}, Symbol(), BigInt 1n, -1n, -0n, -0

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
  console.log('Object is empty')
}

// false === 0 // true
// false=== "" // true
// 0=='' // true
// 0 == false // true

// Nullish Coalescing Operator (??): null undefined

let val1
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1)

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log('less than 80') : console.log('more than 80')
