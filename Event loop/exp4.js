console.log("Start")
setTimeout(() => console.log("Timeout"), 0)
Promise.resolve().then(() => {
  console.log("Promise")
  setTimeout(() => console.log("Nested Timeout"), 0)
})
console.log("End")
