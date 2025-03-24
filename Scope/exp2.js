const person = { name: "Manoj", age: 25 }
person.age = 30 // Allowed (modifying properties)
console.log(person.age) 
console.log(person)
// person = { name: "Bob" }; // Error (Re-assignment not allowed)


const colors = ["red", "blue"]
colors.push("green") // Allowed
console.log(colors) 

//colors = ["yellow"]; // Error
