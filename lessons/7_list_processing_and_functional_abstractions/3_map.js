function myMap(array, func) {
  let transformed = [];

  for(let i = 0; i < array.length; i += 1) transformed.push(func(array[i]))

  return transformed;
}

var plusOne = function (n) { return n + 1; };

myMap([1, 2, 3, 4], plusOne);       // [ 2, 3, 4, 5 ]

function getBooksTitle(books) {
  return myMap(books, element => { return element['title'] })
}

var books = [
  {
    title: 'JavaScript and JQuery: Interactive Front-End Web Development',
    author: 'Jon Ducket',
    edition: '1st',
  },
  {
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: 'Haverbeke',
    edition: '2nd',
  },
  {
    title: "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics",
    author: 'Jennifer Niederst Robbins',
    edition: '4th',
  },
];

var getTitle = function (book) {
  return book['title'];
};

getBooksTitle(books);


// console output
// [
//   "JavaScript and JQuery: Interactive Front-End Web Development",
//   "Eloquent JavaScript: A Modern Introduction to Programming",
//   "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics"
// ]
