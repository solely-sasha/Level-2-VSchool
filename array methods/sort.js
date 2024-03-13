// .sort() returns array sorted - mutates original array

// 1. sort an array from smallest to largest
function leastToGreatest(arr) {
  return arr.sort((a, b) => a - b);
}

console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));

// 2. sort an array from largest to smallest
function greatestToLeast(arr) {
  return arr.sort((a, b) => b - a);
}

console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));

// 3. sort an array from shorest string to longest
function lengthSort(arr) {
  return arr.sort((a, b) => a.length - b.length);
}

console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));

// 4. sort an array alphabetically
function alphabetical(arr) {
  return arr.sort();
}

console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"]));

// 5. sort the objects in the array by age
function byAge(arr) {
  return arr.sort((a, b) => a.age < b.age && -1);
}

console.log(
  byAge([
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 },
  ])
);
// => [ { name: 'Misunderstood Observer', age: 2 },
//  { name: 'Quiet Samurai', age: 22 },
//  { name: 'Unlucky Swami', age: 77 },
//  { name: 'Arrogant Ambassador', age: 100 } ]
