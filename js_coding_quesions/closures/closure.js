// let a = 10

// function test() {
//   let a = 20
//   console.log(a)
// }

// test()

// When test() will execute, it will create an execution context for the function.
// and try to find the value of a in its own context, if not found then it will go to its parent context and try to find the value of a

// This is known as lexical scope in JS
// Lexical scope describes how your child function have access to the variable defined in the parent scope

// let count = 0

// function counter() {
//   console.log((count += 1))
// }
// console.log(window)
// counter() // 1
// counter() // 2
// counter() // 3

// Key Concept:
// A variable can still be in global scope without being a property of the window object.
// Functions declared globally (with function) are hoisted and added to window
// let / const variables are block-scoped and not hoisted to window, even in global scope

// Issues with the above code
// 1. We should not put our variables in the global scope or window, if by mistake another script has count variable,
// it will overwrite our variable

// let count1 = 0

// function counter() {
//   console.log((count += 1))
// }
// count1 = 20
// counter() // 21
// counter() // 22
// counter() // 23

// Lets use the variable inside teh function
// function counterNew() {
//   let count = 0
//   //   console.log((count += 1))
// }

// counterNew()
// counterNew()
// counterNew()

// CLOSURES: When a function is defined inside another function and accesses variables from the outer function, it forms a closure
// In JS, a closure is a function that references variables in the outer scope from its inner scope.
// The closure preserves the outer scope inside its inner scope even after outer function is returned

// function counter() {
//   let count = 0

//   function calculate() {
//     console.log((count += 1))
//   }
//   //   calculate()
//   return calculate
// }

// const result = counter()
// result()
// result()
// console.dir(result)
// // counter()
// // counter()
// // counter()

// Real-world UseCase of CLosure:
// 1. Data encapsulation
// 2. Function factories
// 3. Maintaining state across function calls without using global variables

// const result = counter() is not needed if we crap the function in an IIFI

// const closureFunc = (function outerFunc() {
//   let variable = 10
//   function innerFunction() {
//     console.log((variable += 1))
//   }
//   return innerFunction
// })()

// closureFunc()
// closureFunc()

let products = document.getElementsByClassName('item')

let cartCounter = (function () {
  let count = 0
  return {
    increment: () => (count += 1),
    decrement: () => (count -= 1),
    totalCount: () => count,
  }
})()

function updateCart() {
  document.getElementById('count').innerHTML = cartCounter.totalCount()
}

for (let i = 0; i < products.length; i++) {
  products[i].addEventListener('click', function () {
    if (this.className.indexOf('selected') < 0) {
      this.className += ' selected'
      cartCounter.increment()
      updateCart()
    } else {
      this.className = this.className.replace('selected', '')
      cartCounter.decrement()
      updateCart()
    }
  })
}
