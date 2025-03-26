// Print Numbers from 1 to N

function printNumbers (n, start = 1){
    if (start>n)
        return
    console.log(start)
    printNumbers(n,start+1)
}
printNumbers(5)