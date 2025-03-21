let fruits = ["Apple", "Banana", "Cherry"] // shift
console.log(fruits.shift()) // remove first element
console.log(fruits)


let colors = ["Red", "Green"] //unshift
colors.unshift("Blue") //Add Elements to the Beginning
console.log(colors)

let cars = ["BMW", "Audi", "Tesla"] // delete
delete cars[1] // It does not shift elements; it leaves an "empty" space.
console.log(cars)
console.log(cars.length)



let arr1 = [1, 2] // merge
let arr2 = [3, 4]
let merged = arr1.concat(arr2)
console.log(merged)


let numbers = [10, 20, 30, 40, 50] //copywithin
numbers.copyWithin(2, 0, 2) // define index value
console.log(numbers)


let nested = [1, [2, 3], [4, [5, 6]]] // flat
console.log(nested.flat(2)) // Flattens 2 levels or use (.flat(Infinity)) Flattens all levels


let names = ["John", "Jane", "Doe"] // splice
names.splice(1, 1, "Mike", "Emma") //start, deleteCount, item1, item2, ... (0,1,2) start,remove then forward
console.log(names)



let cities = ["New York", "Paris", "Tokyo"] //toSpliced()
let newCities = cities.toSpliced(1, 1, "London") // similar to splice
console.log(newCities)
console.log(cities)


let letters = ["A", "B", "C", "D", "E"] // slice
console.log(letters.slice(1, 4)) // start, end

