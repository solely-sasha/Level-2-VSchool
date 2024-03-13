// forEach loops through entire array

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const result = arr.forEach((num) => {
  console.log(num);
});

const newArray = [];
arr.forEach((num) => num % 2 === 0 && newArray.push(num));
console.log(newArray);

const users = [{ name: "joe" }, { name: "julie" }, { name: "rick" }];

// .find() returns first item in array matching the criteria
const resultOfFind = users.find((user) => user.name.charAt(0) === "j");
console.log(resultOfFind);

// .findIndex() returns index number of found item
const indexOfFind = users.findIndex((user) => user.name === "rick");
console.log(indexOfFind);
