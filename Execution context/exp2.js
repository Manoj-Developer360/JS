console.log("Start")
function firstFunction() {
    console.log("firstFunction")
    function secondFunction() {
        console.log("secondFunction")
    }
    secondFunction()
}
firstFunction()
console.log("End")