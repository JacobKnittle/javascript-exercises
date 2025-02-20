// Write a function that determines whether or not a given string is a palindrome.

// A palindrome is a string that is spelled the same both forwards and backwards, usually without considering punctuation or word breaks:

const palindromes = function (str) {
  let punctuation = /[\.,?!]/g;
  let alteredString = str
    .toLowerCase()
    .replaceAll(punctuation, "")
    .replaceAll(" ", "");
  return alteredString === alteredString.split("").reverse().join("");
};
console.log(palindromes("Leon Noel"));
// Do not edit below this line
module.exports = palindromes;
