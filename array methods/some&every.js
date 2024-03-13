// .some() returns true if at least one item matches
// .every() returns true if every item matches

const names = ["Jack", "John", "Jill", "Joseph", "Jackie", "Steve"];

const result = names.some((name) => name[0] === "S");
console.log(result);

const everyName = names.every((name) => name[0] === "J");
console.log(everyName);
