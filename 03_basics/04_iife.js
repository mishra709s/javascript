// Immediately Invoked Function Expression (IIFE)
// IIFE is a function that runs as soon as it is defined
;(function () {
  console.log('This function is invoked immediately!')
})()
;(() => {
  console.log('This function is invoked immediately!')
})()
;((name) => {
  console.log(`Hello, ${name}! This function is invoked immediately!`)
})('Soubhagya')(function namedIIFE() {
  console.log('Named IIFE')
})()
