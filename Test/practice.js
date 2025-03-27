// function call

const person = {
    fullname: function() {
        return this.firstname + " " + this.lastname
    }
}
const person1 = {
    firstname : "Manoj",
    lastname : "Kumar"
}
 const person2 = {
    firstname : "Virat",
    lastname : "Kohli"
 }
console.log(person.fullname.call(person2))








//write a program to find average,min,max of given array of numbers with for loop

let numbers = [95,85,100,96,94]
let sum = 0 , min = numbers[0] , max = numbers[0]
console.log("Array Elements")
for (i=0 ; i<numbers.length;i++){
    console.log(numbers[i])
    sum += numbers[i]

    if (numbers[i]<min){
        min = numbers[i]
    }

    if (numbers[i]>max){
        max = numbers[i]
    }
}

let avg = sum / numbers.length
console.log("Sum :",sum)
console.log ("Minimum :",min)
console.log("Maximum :",max)
console.log("Average :",avg)



// exponentiation
let x = 100
let z = x**2
console.log(z)



// Write a function to find sum of digits of a given number. 12 must return 1+2 which is 3. 23 must return 5

//  declare function sumofdigits 
// initialize result
// iterate through array using for and of 
// initialize sum
// convert num to str using toString() method
// iterate through digits using for and of
// convert digit to num
// store the sum array
// return the result
// call the function using console.log with array input


let sumofdigits = function(arr){
    result = []
    for (let num of arr){
        let sum = 0
        for (let digit of num.toString()){
            sum +=Number(digit)
        }
        result.push(sum)
    }
    return result
}
console.log(sumofdigits([10,12,23,45]))



// loop


let sumOfDigits = function(arr){
    let result = []
    for (let num of arr){
        let sum = 0
        for (let digit of num.toString()){
            if (!isNaN(digit)){ 
                sum += Number(digit)
            }
        }
        while (sum > 9){ 
            let tempsum = 0
            for (let digit of sum.toString()){
                tempsum += Number(digit)
            }
            sum=tempsum
        }
        result.push(sum)
    }
    return result
}
console.log(sumOfDigits(["9999999999999999999999999999999999999"]))


