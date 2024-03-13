// .map array
// returns a new array looping over and calls a function on each element
// ---- 1. Double numbers -----
function doubleNumbers(arr) {
  const result = arr.map((n) => n * 2);
  return result;
}
console.log(doubleNumbers([1, 2, 3, 4]));

// map over an array of objects
const users = [{ name: "John" }, { name: "Eric" }, { name: "Carl" }];
const mappedUsers = users.map((user) => user.name);
console.log(mappedUsers);

// ----- 2. take an array of numbers and convert them to strings-----
function stringItUp(arr) {
  const strings = arr.map((num) => num.toString());
  return strings;
}

console.log(stringItUp([2, 5, 100]));

// ----3. capitalize the first letter of the string --------
function capitalizeNames(arr) {
  return arr.map((str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  });
}

console.log(capitalizeNames(["clare", "JOSIE", "derek", "Suzie"]));

// --- 4. make an array of strings of the names --------------------------------
function namesOnly(arr) {
  return arr.map((obj) => obj.name);
}

console.log(
  namesOnly([
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ])
);

// ---- 5. make an array of strings of the names saying if they can go to the Matrix
// if they are >= 18
function makeStrings(arr) {
  return arr.map((key) =>
    key.age >= 18
      ? `${key.name} can go to the Matrix`
      : `${key.name} is not old enough!`
  );
}
console.log(
  makeStrings([
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ])
);

//  ------- 6. make an array of the names in h1s and the ages in h2s ------------------------------
function readyToPutInTheDom(arr) {
  return arr.map((char) => `<h1> ${char.name}</h1><h2>${char.age}</h2>`);
}

console.log(
  readyToPutInTheDom([
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ])
);
