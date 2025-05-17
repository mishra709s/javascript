let div = document.querySelector('div')
let button = document.querySelector('button')
let section = document.querySelector('section')
let newBtn = document.getElementById('newBtn')
console.log(newBtn)

// Event - Event moves from child to parent elements
// div.addEventListener('click', () => {
//   console.log('div clicked')
// })

// button.addEventListener('click', () => {
//   console.log('button clicked')
// })

// section.addEventListener('click', () => {
//   console.log('section clicked')
// })

// Event Capturing - Event moves from parent to child elements
// div.addEventListener(
//   'click',
//   () => {
//     console.log('div clicked')
//   },
//   true
// )

// button.addEventListener(
//   'click',
//   () => {
//     console.log('button clicked')
//   },
//   true
// )

// section.addEventListener(
//   'click',
//   () => {
//     console.log('section clicked')
//   },
//   true
// )

// Stop Propagation, Stop Immediate Propagation, Prevent Default

div.addEventListener('click', (e) => {
  //   e.stopPropagation()
  console.log('div clicked')
})

button.addEventListener('click', (e) => {
  e.stopImmediatePropagation()
  console.log('button clicked')
})

section.addEventListener('click', (e) => {
  console.log('section clicked')
})

// Difference between e.stopPropagation() and e.stopImmediatePropagation()

// e.stopPropagation()
// - Stops the event from bubbling up to ancestor elements
// - Other event listeners on the same element will still run

// e.stopImmediatePropagation()
// - Stops the event from bubbling up and
// - Prevents any other listeners on the same element from running

newBtn.addEventListener('click', () => {
  console.log('Listener 1')
})

newBtn.addEventListener('click', (e) => {
  // e.stopPropagation()
  e.stopImmediatePropagation()
  console.log('Listener 2')
})

newBtn.addEventListener('click', () => {
  console.log('Listener 3')
})

document.body.addEventListener('click', () => {
  console.log('Body Clicked')
})
