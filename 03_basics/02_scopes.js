//var c = 300
let a = 300
if (true) {
  let a = 10
  const b = 20
  // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

// Nested Scropes

function one() {
  const username = 'soubhagya'

  function two() {
    const website = 'youtube'
    console.log(username)
  }
  console.log(website)
  two()
}
one()

// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addOne(5))

function addOne(num) {
  return num + 1
}

addTwo(5)
const addTwo = function (num) {
  return num + 2
}
