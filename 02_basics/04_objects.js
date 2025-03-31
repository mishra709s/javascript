// const tinderUser = new Object() // Object constructor or signleton object
const tinderUser = {}

tinderUser.id = '123abc'
tinderUser.name = 'John Doe'
tinderUser.age = 25
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regUser = {
  email: 'sum@gmail.com',
  fullName: {
    userFullName: {
      firstName: 'Soubhagya',
      lastName: 'Mishra',
    },
  },
}

// console.log(regUser.fullName.userFullName.firstName)

const obj1 = {
  1: 'a',
  2: 'b',
}

const obj2 = {
  3: 'a',
  4: 'b',
}

const obj4 = {
  5: 'a',
  6: 'b',
}

// const obj3 = { obj1, obj2 }
// console.log(obj3)

// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = { ...obj1, ...obj2, ...obj4 }
// console.log(obj3)

const users = [
  {
    id: 1,
    email: 'h@gmail.com',
  },
  {
    id: 2,
    email: 'i@gmail.com',
  },
  {
    id: 3,
    email: 't@gmail.com',
  },
  {
    id: 4,
    email: 'j@gmail.com',
  },
]

users[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))

// console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedIn'))
