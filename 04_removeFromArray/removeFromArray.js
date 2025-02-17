const removeFromArray = function () {
  let elements = arguments[0];
  let removeElements = [];

  for (let i = 1; i < arguments.length; i++) {
    removeElements.push(arguments[i]);
  }

  let filteredArray = elements.filter((el) => !removeElements.includes(el));

  return filteredArray;
};
console.log(removeFromArray([1, 2, 3, 4], 3, 2));
// Do not edit below this line
module.exports = removeFromArray;
