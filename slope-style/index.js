// use the rest operaton to return an array no matter how many animals are passed
function collectAnimals(...animals) {
  return animals;
  //   return [...animals, "camel"]
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]

// write a function that returns a food object with the array names as properties
function combineFruit(fruit, sweets, vegetables) {
  return { fruit, sweets, vegetables };
}

console.log(combineFruit(["apple", "pear"], ["cake", "pie"], ["carrot"]));

// fruit: ["apple", "pear"],
// sweets: ["cake", "pie"],
// vegetables: ["carrot"]

// use destructuing to use the property names as variables
function parseSentence({ location, duration }) {
  return `We're going to have a good time in ${location} for ${duration}`;
}

console.log(
  parseSentence({
    location: "Burly Idaho",
    duration: "2 weeks",
  })
);

// array destructuring to get the first element
function returnFirst(items) {
  const [firstItem] = items;
  return firstItem;
}

console.log(returnFirst(["item1", "item2"]));

// write destructured code to assign variables

const favoriteActivities = [
  "magnets",
  "snowboarding",
  "philanthropy",
  "janitor work",
  "eating",
];

function returnFavorites(arr) {
  const [first, second, third] = favoriteActivities;
  return `My top three favorite activities are ${first}, ${second}, ${third} `;
}

console.log(returnFavorites(favoriteActivities));

// use the rest and spread operators to help take any number of arrays and return one array
function combineAnimals(...animals) {
  return animals.reduce((acc, animal) => {
    return [...acc, ...animal];
  }, []);
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]

// convert to ES6
// function product(a, b, c, d, e) {
//   var numbers = [a, b, c, d, e];

//   return numbers.reduce(function (acc, number) {
//     return acc * number;
//   }, 1);
// }
function product(...nums) {
  return nums.reduce((acc, num) => {
    return acc * num;
  }, 1);
}

console.log(product(3, 2, 3));

//  convert to ES6 syntax with rest and spread operators
// function unshift(array, a, b, c, d, e) {
//   return [a, b, c, d, e].concat(array);
// }

// console.log(unshift(["blah, blah"], "blah", "blah", "blah", "blah", "blah"));

function unshift(array, ...moreStrings) {
  return [...array, ...moreStrings];
}

console.log(unshift(["thing", "to", "add"], "to", "make", "one", "array"));

// simplify with ES6 syntax
// function populatePeople(names) {
//   return names.map(function (name) {
//     name = name.split(" ");
//     const [firstName, lastName] = name
//     return {
//       firstName: firstName,
//       lastName: lastName,
//     };
//   });
// }

// console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]));
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]

function populatePeople(names) {
  return names.map((name) => {
    const [firstName, lastName] = name.split(" ");
    return { firstName, lastName };
  });
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]));
