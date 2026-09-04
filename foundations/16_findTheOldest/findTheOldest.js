const people = [
      {
        name: "Carly",
        yearOfBirth: 1066,
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
    ]

const findTheOldest = function(people) {
    let oldestAge = 0;
    let oldestPerson = '';
    people.map((person) => {
        if (!person.yearOfDeath) {
            person.yearOfDeath = 2026
        }
        if (person.yearOfDeath - person.yearOfBirth > oldestAge) {
            oldestAge = person.yearOfDeath - person.yearOfBirth
            oldestPerson = person.name
        } 
    })
    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;


