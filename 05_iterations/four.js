// for in loop

const myObject = {
  js: 'javascript',
  cpp: 'C++',
  rb: 'ruby',
  swift: 'swift by apple',
}

for (const key in myObject) {
  //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ['js', 'rb', 'py', 'java', 'cpp']

for (const key in programming) {
  //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }

// Quick Interview Tip:
// for...in → Object keys (properties)
// for...of → Array/String/Set/Map values

// Feature       | for...in                                    | for...of
// Loops over    | Keys (property names)                       | Values (iterable elements)
// Works on      | Objects mainly, also Arrays (but not ideal) | Arrays, Strings, Sets, Maps, etc.
// Best use-case | Traversing an object's properties           | Traversing elements in order
// Output        | Keys (strings)                              | Values (elements)
