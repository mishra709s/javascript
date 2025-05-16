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

// console.log('Start')

// const fn = () =>
//   new Promise((res, rej) => {
//     console.log(1)
//     res('success')
//   })

// console.log('middle')

// fn().then((res) => {
//   console.log(res)
// })

// console.log('End')

// Ans - Start middle 1 End success

//  Ques 4
/*------ Explanation ---------*/
// As its a rejected promise, it will directly go to catch, irrespective of whatever .then are present before catch()
// and as we are not returning anything from the catch(), it will go to the next .then()

// Ans - Error 1, Success 4

// function job() {
//   return new Promise(function (resolve, reject) {
//     reject()
//   })
// }

// let promise = job()

// promise
//   .then(function () {
//     console.log('Success 1')
//   })
//   .then(function () {
//     console.log('Success 2')
//   })
//   .then(function () {
//     console.log('Success 3')
//   })
//   .catch(function () {
//     console.log('Error 1')
//   })
//   .then(function () {
//     console.log('Success 4')
//   })

//  Ques 5
// Ans - Success, Error, Error Caught

// function job(state) {
//   return new Promise(function (resolve, reject) {
//     if (state) {
//       resolve('Success')
//     } else {
//       reject('Error')
//     }
//   })
// }

// let promise = job(true)

// promise
//   .then(function (data) {
//     console.log(data)
//     return job(false)
//   })
//   .catch(function (error) {
//     console.log(error)
//     return 'Error Caught'
//   })
//   .then(function (data) {
//     console.log(data)
//     return job(true)
//   })
//   .catch(function (error) {
//     console.log(error)
//   })

//  Ques 6

// function job(state) {
//   return new Promise(function (resolve, reject) {
//     if (state) {
//       resolve('Success')
//     } else {
//       reject('Error')
//     }
//   })
// }

// let promise = job(true)

// promise
//   .then(function (data) {
//     console.log(data) // Success
//     return job(true)
//   })
//   .then(function (data) {
//     if (data !== 'victory') {
//       throw 'Defeat'
//     }
//     return job(true) // Won't be executed as the execution is already thrown, so return is skipped
//   })
//   .then(function (data) {
//     console.log(data)
//   })
//   .catch(function (error) {
//     console.log(error) // Defeat
//     return job(false)
//   })
//   .then(function (data) {
//     console.log(data)
//     return job(true)
//   })
//   .catch(function (error) {
//     console.log(error) // Error
//     return 'Error Caught' // Here its a resolved Promise
//   })
//   .then(function (data) {
//     console.log(data) // Error Caught
//     return new Error('test') // its a resolved promise
//   })
//   .then(function (data) {
//     console.log('Success: ', data.message) // Success: test
//   })
//   .catch(function (error) {
//     console.log('Error:', error.message)
//   })

// Ans - Success, Defeat, Error, Error Caught, Success: test

// Ques 7

// const firstPromise = new Promise((res, rej) => {
//   res('First!')
// })

// const secondPromise = new Promise((res, rej) => {
//   res(firstPromise)
// })

// secondPromise
//   .then((res) => {
//     return res
//   })
//   .then((res) => console.log(res)) // First!

// Ques 8 - Rewrite the example code using `async/await` instead of `.then/catch`

// function loadJson(url) {
//   return fetch(url).then((res) => {
//     if (res.status === 200) {
//       return res.json()
//     } else {
//       throw new Error(res.status)
//     }
//   })
// }

// loadJson('https://fakeurl.com').catch((err) => {
//   console.log(err)
// })

// // Ans

// async function loadJson(url) {
//   let response = await fetch(url)

//   if (response.status === 200) {
//     let json = response.json()
//     return json
//   }

//   throw new Error(response.status)
// }

// loadJson('https://fakeurl.com').catch((err) => {
//   console.log(err)
// })

// Ques 9 - Solve Promises recursively

function printUserName(userName) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(`My name is ${userName}`)
    }, 1000)
  })
}

function likeTheVideo(videoName) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(`Like the ${videoName} video`)
    }, 1000)
  })
}

function shareTheVideo(videoName) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(`Share the ${videoName} video`)
    }, 1000)
  })
}

function promRecurse(funcPromise) {
  if (funcPromise.length === 0) return // check if there are promises passed

  const currPromise = funcPromise.shift()

  currPromise.then((res) => console.log(res)).catch((err) => console.log(err))

  promRecurse(funcPromise)
}

promRecurse([
  printUserName('Soubhagya'),
  likeTheVideo('JavaScript Interview Questions'),
  shareTheVideo('JavaScript Interview Questions'),
])
