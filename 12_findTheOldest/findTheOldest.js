// Given an array of objects representing people with a birth and death year, return the oldest person.

const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

const findTheOldest = function (people) {
  const currentYear = new Date().getFullYear();
  return people.sort(
    (a, b) =>
      (b.yearOfDeath ?? currentYear) -
      b.yearOfBirth -
      ((a.yearOfDeath ?? currentYear) - a.yearOfBirth)
  )[0];
};

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
