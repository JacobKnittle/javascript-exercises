const fibonacci = function(num) {
    num = +num
    if (num < 0 ) return 'OOPS'
    if (num === 0) return 0
    if (num === 1) return 1
    if (num === 2) return 1
    let total = 0
    let numbers = [1,1]
    for (let i = 1; i < num - 1; i++) {
        total = numbers[i - 1] + numbers[i]
        numbers.push(total)
    }
    return total

};

// Do not edit below this line
module.exports = fibonacci;

// console.log(fibonacci(6)) // 8