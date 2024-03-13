// returns a new array with only the filtered elements

const arr = [1, 2, 3, 4];
const result = arr.filter((num) => num % 2 === 0);
console.log(result);

const movies = [
  { name: "movie1", genre: "horror" },
  { name: "movie2", genre: "action" },
  { name: "movie3", genre: "action" },
  { name: "movie4", genre: "fantasy" },
];

const actionMovies = movies.filter((movie) => movie.genre === "action");
console.log(actionMovies);
//________________________________________________________________________________
// --- 1. given an array of numbers, return new array with numbers >= 5
function fiveAndGreaterOnly(arr) {
  return arr.filter((num) => num >= 5);
}
console.log(fiveAndGreaterOnly([3, 6, 7, 1, 10, 5]));
//________________________________________________________________________________________________________________________________
// --- 2. given an array of numbers return only even ----------------
function evensOnly(arr) {
  return arr.filter((number) => number % 2 === 0);
}
// test
console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]

//________________________________________________________________________________________________________________________________
// --- 3. given an array of strings, return the new array taht only inlcudes 5 or less characters
function fiveCharactersOrFewerOnly(arr) {
  return arr.filter((string) => string.length <= 5);
}
// test
console.log(
  fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])
); // ["by", "dog", "wolf", "eaten"]
//________________________________________________________________
// ---- 4. given an array of people objects, filter out the list that doesn't belong to
function peopleWhoBelongToTheIlluminati(arr) {
  return arr.filter((obj) => obj.member);
}
// test
console.log(
  peopleWhoBelongToTheIlluminati([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true },
  ])
);
// =>
//[ { name: 'Angelina Jolie', member: true },
//  { name: 'Paris Hilton', member: true },
//  { name: 'Bob Ziroll', member: true } ]
//________________________________________________________________

// ---- 5. make a filterd list of people who are old enough to see the Matrix
function ofAge(arr) {
  return arr.filter((person) => person.age >= 18);
}
// test
console.log(
  ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 },
  ])
);
// =>
//[ { name: 'Angelina Jolie', age: 80 },
//  { name: 'Bob Ziroll', age: 100 } ]
