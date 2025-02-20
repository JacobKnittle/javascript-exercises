const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];
// Your job is to write a function that takes the array and returns an array of titles: javascript

const getTheTitles = function (books) {
  return books.map((book) => book.title);
};

console.log(getTheTitles(books)); // ['Book','Book2'])

// Do not edit below this line
module.exports = getTheTitles;
