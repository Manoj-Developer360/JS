function test() {
    var x = 100
    let y = 200
  
    if (true) {
      var x = 300 // Changes the outer 'x'
      let y = 400 // Creates a new 'y' inside this block
      console.log("Inside block:", x, y)
    }
    console.log("Outside block:", x, y)
  }
test();
  

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1000);
// }
//   // Output: 3 3 3 (because `var` is function-scoped)

  

// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1000);
// }
//   // Output: 0 1 2 (Each iteration has its own `i` due to block scope)
  