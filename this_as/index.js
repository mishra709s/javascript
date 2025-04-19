'use strict'

//TODO: this in global space

console.log('this in global space (or JS runtime env) :', this)
//1.  The above line prints `window` object in browser and `{}` in node env

//TODO: this inside a function

function x() {
  // here this works differently
  //2.  strict mode - undefined
  //3.  non-strict mode - window object
  console.log('inside a function :', this)
}

//TODO: this in strict mode - (this substitution)

//4. If the value of this keyword is undefined or null,
// this keyword will be replaced with globalObject only in non-strict mode.

//TODO: this keyword value depends on how this is called (window)
//5. this substitution happens in strict mode

x() // undefined (in strict mode)
window.x() // window object (in strict mode)

//TODO: this inside an object's method

/* Difference between a function and a method */
// If you make a function as a part of an object, then its known as method

const student = {
  name: 'Soubhagya',
  printName: function () {
    console.log(this.name)
  },
}

student.printName() // Soubhagya

//TODO: call, apply, bind methods (sharing methods)

const student2 = {
  name: 'student2',
}

student.printName.call(student2) // student2

//TODO: this inside arrow function

/* Arrow function doesn't provide their own this binding (it retains the `this` value of the enclosing lexical context) */

const obj = {
  a: 20,
  x: () => {
    console.log('obj :', this)
  },
}

obj.x() // Window object

//TODO: this inside nested arrow function

const obj2 = {
  a: 20,
  x: function () {
    const y = () => {
      console.log('obj2 :', this)
    }
    y()
  },
}

obj2.x() // obj2{}

const obj3 = {
  a: 20,
  x: () => {
    const y = () => {
      console.log('obj3 :', this)
    }
    y()
  },
}

obj3.x() // window object

//TODO: this inside dom elements => reference to the HTMLElement
