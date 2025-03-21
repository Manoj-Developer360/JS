let person = { name: "Manoj", age: 21 } // seal
Object.seal(person)   //Prevents adding/removing properties but allows modifying existing properties.
person.age = 22
person.city = "Dindigul"
delete person.name
console.log(person)

console.log(Object.isSealed(person)) //Checking if an Object is Sealed






let person = { name: "Vijay", age: 50 }  // hasOwnProperty
console.log(person.hasOwnProperty("age")) 
console.log(person.hasOwnProperty("State"))
console.log(person)



let settings = { theme: "dark", language : "English" }  // check if 
if (settings.hasOwnProperty("theme")) {
    console.log("Theme is set to:", settings.theme)
} else {
    console.log("No theme found.")
}




let entries = [['name', 'Vijay'], ['age', 50]] //Object.fromEntries
let person = Object.fromEntries(entries)
console.log(person)




let userMap = new Map([      // Convert a Map to an Object
    ['username', 'manoj'],
    ['email', 'manoj123@.com'],
    ['role', 'admin']
])
let userObject = Object.fromEntries(userMap)
console.log(userObject)

