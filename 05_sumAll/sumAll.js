//takes 2 positive integers and returns the sum of every integer between (and including) them:

// ```javascript
// sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
// ```
const sumAll = function (num1, num2) {
  let smallNum;
  let largerNum;
  let total = 0;

  // return ERROR if negative, non-integer, non number parameter
  if (
    !Number.isInteger(num1) ||
    !Number.isInteger(num2) ||
    num1 < 0 ||
    num2 < 0
  ) {
    return "ERROR";
  }

  // needs to handle num1 being larger than num2
  if (num1 > num2) {
    smallNum = num2;
    largerNum = num1;
  } else {
    smallNum = num1;
    largerNum = num2;
  }

  for (let i = smallNum; i <= largerNum; i++) {
    total += i;
  }
  return total;
};

console.log(sumAll(123, 1), 7626);

// Do not edit below this line
module.exports = sumAll;
