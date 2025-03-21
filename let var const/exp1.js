var x = 10
if (true) {
  var x = 12 // Re-declaring inside the block affects the outer variable
}
console.log(x) 



let y = 10;
if (true) {
  let y = 20; // This 'y' is separate from the outer 'y'
  console.log(y); // Output: 20
}
console.log(y); // Output: 10 (Outer 'y' is not affected)



// const z = 10;
// z = 20; // Error: Assignment to constant variable
// console.log(z);

const z = 18;
console.log(z);
