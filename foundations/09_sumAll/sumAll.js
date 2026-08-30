const sumAll = function(num1, num2) {
    // take two positive ints
    // if either of the parameters are not positive integers return 'ERROR'
    if (isNaN(num1) || isNaN(num2) || num1 < 1 || num2 < 1 || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        return 'ERROR'
    }

    // check which parameter is bigger and assign them to the start and end numbers
    let startNum;
    let endNum;

    if (num1 < num2) {
        startNum = num1;
        endNum = num2
    } else {
        startNum = num2
        endNum = num1
    }

    // for loop is gonna start at smaller parameter of the two and its going to end at being equal to larger parameter
    let sum = 0;

    for (let i = startNum; i <= endNum; i++) {
        sum += i;
    }

    // return sum of every int between the two parameters
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
