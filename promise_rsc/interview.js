// Promises in JS
// Ques 1 - What's the output
/*------ Explanation ---------*/
//  When the promise is initialized (line 7-10) it will find all the synchronous codes and execute it
// console.log('Start')

// const promise1 = new Promise((res, rej) => {
//   console.log(1)
//   res(2)
// })

// promise1.then((res) => {
//   console.log(res)
// })

// console.log('End')

// Ans - Start 1 End 2

// Ques 2
// console.log('Start')

// const promise1 = new Promise((res, rej) => {
//   console.log(1)
//   res(2)
//   console.log(3)
// })

// promise1.then((res) => {
//   console.log(res)
// })

// console.log('End')

// Ans - Start 1 3 End 2

// Ques 3
/*------ Explanation ---------*/
// If there is no resolve then the the execution won't go into .then so it won't print anything, not even undefined
// console.log('Start')

// const promise1 = new Promise((res, rej) => {
//   console.log(1)
//   console.log(3)
// })

// promise1.then((res) => {
//   console.log('Result :', res)
// })

// console.log('End')

// Ans - Start 1 3 End

// Ques 4
/*------ Explanation ---------*/

console.log('Start')

const fn = () =>
  new Promise((res, rej) => {
    console.log(1)
    res('success')
  })

console.log('middle')

fn().then((res) => {
  console.log(res)
})

console.log('End')

// Ans - Start middle 1 End success
