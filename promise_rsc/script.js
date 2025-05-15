/*----------------------------------- Promises in js -----------------------------*/
/*----------------------------------- Synchronous vs Asynchronous Code -----------------------------*/

/*----------------- Synchronous Code Ex -1 --------------*/
// console.log('Start')
// console.log('Mid')
// console.log('Finish')

/*----------------- Asynchronous Code --------------*/
// console.log('Start')
// setTimeout(() => {
//   console.log('Async code')
// }, 1000)
// console.log('Finish')

/*------ NOTE: -------*/
// 1. JS runs the synchronous code first then it calls the web apis, i.e setTimeout here. Here event loop is used

/*----------------- Asynchronous Code Ex -2 ------------------------*/
// console.log('Start')

// function printUserName(userName) {
//   setTimeout(() => {
//     return `My name is ${userName}`
//   }, 1000)
// }

// const name = printUserName('Soubhagya')
// console.log(name)
// console.log('Finish')

/*---------------------------- Asynchronous Code Ex -3 (Callback hell) - How can we fix ex- 2 --------------------------------*/
// console.log('Start')

// function printUserName(userName, cb) {
//   setTimeout(() => {
//     cb(`My name is ${userName}`)
//   }, 1000)
// }

// function likeTheVideo(videoName, cb) {
//   setTimeout(() => {
//     cb(`Like the ${videoName} video`)
//   }, 1000)
// }

// function shareTheVideo(videoName, cb) {
//   setTimeout(() => {
//     cb(`Share the ${videoName} video`)
//   }, 1000)
// }

// const name = printUserName('Soubhagya', function (message) {
//   console.log(message)
//   likeTheVideo('JS Interview Questions', function (message) {
//     console.log(message)
//     shareTheVideo('JS Interview Questions', function (message) {
//       console.log(message)
//     })
//   })
// })

// console.log('Finish')

/*----------------------------------- Promises -----------------------------*/
/*----- Promise basically represents the upcoming completion or a failure of an asynchronous event and its resulting value ----*/

/*---- Ex-1 ----*/
// console.log('Start')

// const sub = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const result = true
//     if (result) resolve('Subscribe to my channel')
//     else reject(new Error(`Why didn't you subscribe to my channel`))
//   }, 2000)
// })

// sub
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((error) => {
//     console.log(error)
//   })

// // console.log(sub)

// console.log('Finish')

/*---- Ex-2 ----*/

// console.log('Start')
// const resProm = Promise.resolve('Subscribe')
// console.log(resProm)
// resProm
//   .then((res) => console.log(res))
//   .catch((err) => console.log('error', err))
// console.log('Stop')

/*----------------------------------- Re-write Promises without callbacks (Promise hell) -----------------------------*/
// console.log('Start')

// function printUserName(userName) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(`My name is ${userName}`)
//     }, 1000)
//   })
// }

// function likeTheVideo(videoName) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(`Like the ${videoName} video`)
//     }, 1000)
//   })
// }

// function shareTheVideo(videoName) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(`Share the ${videoName} video`)
//     }, 1000)
//   })
// }

// printUserName('Soubhagya')
//   .then((res) => {
//     console.log(res)
//     likeTheVideo('JavaScript Interview Questions').then((res) => {
//       console.log(res)
//       shareTheVideo('JavaScript Interview Questions').then((res) => {
//         console.log(res)
//       })
//     })
//   })
//   .catch((err) => console.log(err))

// console.log('Finish')

/*----------------------------------- Resolve Promises hell using Promise Chaining -----------------------------*/
// console.log('Start')

// function printUserName(userName) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(`My name is ${userName}`)
//     }, 1000)
//   })
// }

// function likeTheVideo(videoName) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(`Like the ${videoName} video`)
//     }, 1000)
//   })
// }

// function shareTheVideo(videoName) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(`Share the ${videoName} video`)
//     }, 1000)
//   })
// }

// printUserName('Soubhagya')
//   .then((res) => {
//     console.log(res)
//     return likeTheVideo('JavaScript Interview Questions')
//   })
//   .then((res) => {
//     console.log(res)
//     return shareTheVideo('JavaScript Interview Questions')
//   })
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     console.log(err)
//   })

// console.log('Finish')

/*----------------------------------- Promise Combinators -----------------------------*/
/*----- It helps us to execute more than one promise at one time then return result accordingly ----*/
/*------- There are 4 types of Promise Combinators --------*/

/*---- 1. Promise.all() ----------*/

/* Its going to run all the promises in parallel and return all the fulfilled promises,
and if a single promise failed then its going to fail the complete Promise.all() */
function printUserName(userName) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(`My name is ${userName}`)
    }, 100)
  })
}

function likeTheVideo(videoName) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej(`Like the ${videoName} video`)
    }, 1000)
  })
}

function shareTheVideo(videoName) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(`Share the ${videoName} video`)
    }, 500)
  })
}

// console.log(
//   Promise.all([
//     printUserName('Shubham'),
//     likeTheVideo('Roadside Coder'),
//     shareTheVideo('Roadside Coder'),
//   ])
// )

// Promise.all([
//   printUserName('Shubham'),
//   likeTheVideo('Roadside Coder'),
//   shareTheVideo('Roadside Coder'),
// ])
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     console.log('Error: Promise Failed', err)
//   })

/*---- 2. Promise.race() ----------*/

/* Its syntax is exactly same as Promise.all() but it returns the first promise that gets fulfilled or rejected */

// console.log(
//   Promise.race([
//     printUserName('Shubham'),
//     likeTheVideo('Roadside Coder'),
//     shareTheVideo('Roadside Coder'),
//   ])
// )

// Promise.race([
//   printUserName('Shubham'),
//   likeTheVideo('Roadside Coder'),
//   shareTheVideo('Roadside Coder'),
// ])
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     console.log(err)
//   })

/*---- 2. Promise.allSettled() ----------*/
/* This works exactly as Promise.all() but even if anyone of the Promises failed, 
it will return all of the promises that are fulfilled as well */

// Promise.allSettled([
//   printUserName('Shubham'),
//   likeTheVideo('Roadside Coder'),
//   shareTheVideo('Roadside Coder'),
// ])
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     console.log(err)
//   })

/*---- 2. Promise.any() ----------*/
/* This works exactly as Promise.race() but it only returns the first fulfilled Promise and ignores all the rejected ones */
/* If all the Promises failed then it gives this error - AggregateError: All promises were rejected */

// Promise.any([
//   printUserName('Shubham'),
//   likeTheVideo('Roadside Coder'),
//   shareTheVideo('Roadside Coder'),
// ])
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     console.log(err)
//   })

/*-------------- Async/Await ---------------*/

const result = async () => {
  try {
    const message1 = await printUserName('Soubhagya Mishra')
    const message2 = await likeTheVideo('JavaScript Interview Questions')
    const message3 = await shareTheVideo('JavaScript Interview Questions')

    console.log({ message1, message2, message3 })
  } catch (error) {
    console.log('Error: ', error)
  }
}

result()
