// A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers.

const fibonacci = function (num) {
    if (num < 0 ) return 'OOPS'
  num = +num;
  let nums = [0, 1];
  for (let i = 2; i <= 25; i++) {
    nums.push(nums[i - 2] + nums[i - 1]);
  }
  return nums[num];
};

console.log(fibonacci(4)); // returns the 4th member of the series: 3  (1, 1, 2, 3)
console.log(fibonacci(6)); // returns 8
// Do not edit below this line
module.exports = fibonacci;
