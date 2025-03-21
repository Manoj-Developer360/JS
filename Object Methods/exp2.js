let person = { name: "Manoj", age: 22, city: "Dindigul" }
console.log(Object.keys(person))  // Array of keys
console.log(Object.values(person)) // Array of values
console.log(Object.entries(person)) // Array of key-value pairs



let obj1 = { a: 1, b: 2 } //assign
let obj2 = { c: 3, d: 4 }
let mergedObj = Object.assign(obj1, obj2)
console.log(mergedObj)




let defaults = { theme: "light", fontSize: 14 }   //Overwriting Properties
let userSettings = { theme: "dark" }
let finalSettings = Object.assign(defaults, userSettings)
console.log(finalSettings)



let user = { name: "John", age: 30 } // freeze
Object.freeze(user)
user.age = 35  //NO change
user.city = "New York"  // Cannot add new properties
delete user.name  // Cannot delete properties
console.log(user)

console.log(Object.isFrozen(user)) // check freeze is true or not


let user = { name: "John", age: 30 } // freeze nested objects
Object.freeze(user)
user.age = 22
console.log(user.age)





