const add = function(x, y) {
	return x + y
};

const subtract = function(x, y) {
	return x - y
};

const sum = function(arr) {
	return arr.reduce((a,b) => a + b, 0)
};

const multiply = function(arr) {
  return arr.reduce((a,b) => a * b, 1)
};

const power = function(base, exp) {
	return base ** exp
};

const factorial = function(num) {
  let total = 1;
	for(let i = num; i > 0; i--) {
    total *= i
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
  factorial
};
