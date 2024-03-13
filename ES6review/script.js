// ...rest operator makes the arguments (numbers) an array
function addNumbers(...numbers) {
  // numbers is now an array that we can use .reduce() on
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

console.log(addNumbers(1, 2, 3, 4, 5, 6, 7, 8));

// summing all numbers with reduce
const moreNumbers = [5, 15, 23, 86, 90];
const sum = moreNumbers.reduce((acc, curr) => acc + curr);
console.log(sum);

// spread operator to combine arrays instead of concat
const defaultColors = ["red", "green", "yellow"];
const userFavoriteColors = ["blue", "black"];
// const allColors = [...defaultColors, ...userFavoriteColors]
const allColors = ["pink", ...defaultColors, ...userFavoriteColors];
console.log(allColors);

function validateShoppingList(...items) {
  // ...items turns the arguments into an array
  if (items.indexOf("milk") < 0) {
    // indexOf returns -1 if it doesn't exist
    // if milk isn't on the list, it's added to the array and the spread operator carries the other items from the array
    return ["milk", ...items];
  }

  return items;
}

console.log(validateShoppingList("oranges", "bread", "eggs"));

const MathLibrary = {
  calculateProduct(...rest) {
    console.log("Please use the multiply method instead");
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
  },
};

console.log(MathLibrary.calculateProduct(4, 6));
console.log(MathLibrary.multiply(4, 9));

// rest operator to sum up an indefinite amount of numbers
function sumOfNums(...nums) {
  let total = 0;
  for (let num of nums) {
    total += num;
  }
  return total;
}

console.log(sumOfNums(1, 2, 3)); // Output: 6
console.log(sumOfNums(1, 2, 3, 4, 5)); // Output: 15

// spread operator to find the average
function average(...numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum / numbers.length;
}

console.log(average(1, 2, 3, 4, 5)); // Output: 3 (total is 15 / 5 numbers)
console.log(average(100, 75, 85, 100)); // Output: 3 (total is 15 / 5 numbers)

// Challenge: Write a function largestNumber that takes an array of numbers and returns the largest number using the spread operator.

// function largestNumber(...numbers) {
//   const largest = numbers.sort((a, b) => b - a);
//   return largest[0]
// }
// console.log(largestNumber(5, 8, 84, 34));

// OR using Math.max

function largestNumber(numbers) {
  return Math.max(...numbers);
}

console.log(largestNumber([3, 10, 2, 72, 1, 14])); // array needs to go here if it's not ... in the parameters

// function largestNumber(...numbers) {
//   return Math.max(...numbers);
// }

// console.log(largestNumber(3, 10, 2, 72, 1, 14));

// change to ES6
// function product(a, b, c, d, e) {
//   const numbers = [a, b, c, d, e];

//   return numbers.reduce(function (acc, number) {
//     return acc * number;
//   }, 1);

// }

function product(...numbers) {
  return numbers.reduce((acc, number) => {
    return acc * number;
  }, 1);
}
console.log(product(2, 3, 1, 4));

// change to ES6
function unshift(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
}

const items = ["item1", "item2", "item3", "item4"];
function newArray(...array) {
  return [...array, ...items];
}

console.log(newArray("newItem1", "newItem2"));

const name = "John";
let age = 101;

function runForLoop(pets) {
  let petObjects = [];
  for (let i = 0; i < pets.length; i++) {
    let pet = { type: pets[i] };
    let name;
    if (pets[i] === "cat") {
      name = "fluffy";
    } else {
      name = "spot";
    }
    console.log("pet name: ", name);
    pet.name = name;
    petObjects.push(pet);
  }
  console.log("man name: ", name);
  return petObjects;
}

console.log(runForLoop(["cat", "dog"]));

// function mapVegetables(arr) {
//   return arr.map(function (carrot) {
//     return { type: "carrot", name: carrot };
//   });
// }
const carrots = ["bright orange", "ripe", "rotten"];

function mapVegetables(arr) {
  return arr.map((val) => ({ type: "carrot", name: val }));
}

console.log(mapVegetables(carrots));

// re-write using an arrow function
const people = [
  {
    name: "Princess Peach",
    friendly: false,
  },
  {
    name: "Luigi",
    friendly: true,
  },
  {
    name: "Mario",
    friendly: true,
  },
  {
    name: "Bowser",
    friendly: false,
  },
];

// function filterForFriendly(arr) {
//   return arr.filter(function (person) {
//     return person.friendly;
//   });
// }
// console.log(filterForFriendly(people));
// _______________________________________________________________________________________
// function filterForFriendly(arr) {
//    return  arr.filter((person => person.friendly))

// }
// console.log(filterForFriendly(people)); // ---- returns the objects
//____________________________________________________________________________________________________-
// ----- access just the name chaining on .map() --------------------------------
function filterForFriendly(arr) {
  return arr.filter((person) => person.friendly).map((person) => person.name);
}
console.log(filterForFriendly(people)); // returns just the names in an array

// re-write as arrow function
// function doMathSum(a, b) {
//   return a + b;
// }

// var produceProduct = function (a, b) {
//   return a * b;
// };
// console.log(doMathSum(8, 16));

// ---- with arrow function ----

const doMathSum = (a, b) => a + b;
console.log(doMathSum(8, 16));

const produceProduct = (a, b) => a * b;
console.log(produceProduct(8, 5));

// write a printString function that takes firstNme, lastName, and age as params and returns something like this: Hi Kat Stark, how does it feel to be 40?
// use default params of firstName = "Jane", lastName = "Doe", age = 100
function printString(firstName = "Jane", lastName = "Doe", age = 100) {
  return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`;
}
console.log(printString("Sasha", "Sims", 38));

// change syntax to one line

const animals = [
  {
    type: "dog",
    name: "theodore",
  },
  {
    type: "cat",
    name: "whiskers",
  },
  {
    type: "pig",
    name: "piglette",
  },
  {
    type: "dog",
    name: "sparky",
  },
];

// function filterForDogs(arr) {
//   return arr.filter((animal) => {
//     if (animal.type === "dog") {
//       return true;
//     } else {
//       return false;
//     }
//   });
// }
function filterForDogs(arr) {
  return arr.filter((animals) => animals.type === "dog");
}

console.log(filterForDogs(animals));

function greetGuest(name, location) {
  return `Hi, ${name}! 
    Welcome to ${location}`;
}

console.log(greetGuest("Sasha", "Paris"));
