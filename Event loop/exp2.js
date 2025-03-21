console.log("1")
setTimeout(() => console.log("2"), 0)
Promise.resolve().then(() => console.log("3"))
console.log("4")



console.log("Start")
setTimeout(() => console.log("Timeout"), 1000) //macrotask / callback function 2
Promise.resolve().then(() => console.log("Promise")) //microtask 1
console.log("End")
