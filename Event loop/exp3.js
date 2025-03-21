console.log("X")
setTimeout(() => {
  console.log("Y")
  setTimeout(() => console.log("Z"), 0)
}, 10)
console.log("W")
