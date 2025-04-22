// Question

// Very frequently asked Question
// Level -> Easy

// Write custom function for Array.flat() using both recursive and iterative approach

// const flattenRecursive =(arr) =>{
//     // code here
// }

// const flattenIterative =(arr) =>{
//     // code here
// }

// Follow up
// // Write a function to flatten a nested array upto a given depth
// const flattenRecursiveWithDepth = (arr) => {
//     // code here
// }

/*------------------------------------ Solution ---------------------------------------------------*/

// Recursive approach WITHOUT depth
const nestedArr = [1, [2, 3], 4, [5, 6, 7], 8, [9, 10, [11, 12, 13, [14, 15]]]]

const flattenRecursive = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array')
  }
  let output = []

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      output.push(...flattenRecursive(arr[i]))
    } else {
      output.push(arr[i])
    }
  }
  return output
}

// console.log(flattenRecursive(nestedArr))

// Recursive approach WITH depth

// const nestedArr2 = [1, [2, 3], 4, [5, 6, 7], 8, [9, 10, [11, 12, 13, [14, 15]]]]
// const depth = 2

// const flattenRecursiveWithDepth = (arr, depth) => {
//   if (!Array.isArray(arr)) {
//     throw new Error('Input must be an array')
//   }
//   if (depth === 0) return arr

//   let output = []

//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i]) && depth > 0) {
//       output.push(...flattenRecursiveWithDepth(arr[i], depth - 1))
//     } else {
//       output.push(arr[i])
//     }
//   }
//   return output
// }

// console.log(flattenRecursiveWithDepth(nestedArr2, depth))

// Iterative approach WITHOUT depth
const nestedArr3 = [
  1,
  [2, 3],
  4,
  [5, 6, 7],
  8,
  [9, 10, [11, 12, 13, [14, 15]]],
  20,
  21,
]

const flattenIterative = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array')
  }

  const stack = [...arr]
  const result = []

  while (stack.length) {
    const ele = stack.pop()
    if (Array.isArray(ele)) {
      stack.push(...ele)
    } else {
      result.push(ele)
    }
  }
  return result.reverse()
}

console.log(flattenIterative(nestedArr3))
