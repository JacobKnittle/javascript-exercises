const convertToCelsius = function (fahrenheit) {
  return +(((fahrenheit - 32) * 5) / 9).toFixed(1);
};

const convertToFahrenheit = function (celsius) {
  return +((celsius * 9) / 5 + 32).toFixed(1);
};

// round to one decimal point

console.log(convertToCelsius(100), 37.8);
console.log(convertToFahrenheit(73.2), 163.8);
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
