// Fibonacci Sequence

function fibonacci (n){
    if (n===0 || n===1){
        return n
    }
    return fibonacci(n-1) + fibonacci(n-2)
}
console.log(fibonacci(7))