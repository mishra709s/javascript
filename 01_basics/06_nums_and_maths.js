const score = 400
const balance = new Number(100)

console.log(score, balance) // 400 Number {100}
console.log(typeof score, typeof balance) // number object

console.log(balance.toString().length) // 3
console.log(balance.toFixed(1)) // 100.00

const otherNumber = 123.8986
console.log(otherNumber.toPrecision(3)) // 124

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random())
console.log(Math.random() * 10 + 1)
console.log(Math.floor(Math.random() * 10) + 1)

const min = 10
const max = 20

// Here we did (max - min + 1) is because we want to have the exact range of numbers between min and max and + 1 to avoid 0 value.
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
