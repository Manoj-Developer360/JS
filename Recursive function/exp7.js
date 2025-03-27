// sum of digits recursive

const sumOfDigitsRecursive = (arr) => {
    const digitalRoot = (num) => {
        if (num < 10) return num
        return digitalRoot(num.toString().split('').reduce((sum, digit) => sum + Number(digit), 0))
    }   
    return arr.map(num => digitalRoot([...num].reduce((sum, digit) => sum + (isNaN(digit) ? 0 : Number(digit)), 0)))
}
console.log(sumOfDigitsRecursive(["9999999999999999999999999999999999999"]))