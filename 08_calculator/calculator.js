const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function (arr) {
  return arr.reduce((a, b) => a * b, 1);
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  let total = 1;
  while (num > 1) {
    total *= num;
    num--;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
