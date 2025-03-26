// find vowel letters and count them in the given input

// declare and define function count vowels
//the function will have one argument , name Input 
// declare a counter variables
// iterate through input using for and of 
// declare a variable called is vowel, which wil return the iterated character is vowel or not
// the variable assignment will have array of vowels in smaller case follwed by index of method with the iterated characters as parameters
// to ensure it is working foe smaller and uppercase make the iterated character lowercase while sending it is a parameter using toLowercase function
// it will follwed by a > -1 to ensure that the character is available in the array or not
// if the value of is vowel varaiable i true increment the counter varaiable 
// let the for loop run for all tbhe characters
// return the counter varaiable finally
// call the function using console.log with input




let countVowels = function(input){
    count = 0
    for(let i of input){
        let isVowel = ["a","e","i","o","u"].indexOf(i.toLowerCase()) >-1
        if (isVowel){
            count++
        }
    }
    return count
}
console.log(countVowels("Manoj"))

