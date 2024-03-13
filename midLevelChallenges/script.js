// challenge 1. sorting an array in ascending order

function sortNumbers(numbers) {
  return numbers.sort((a, b) => a - b);
}

console.log(sortNumbers([4, 7, 1, 8, 14]));


// challenge 2. mapping an array to convert strings to uppercase
function convertToUppercase(strings) {
return strings.map(str => str.toUpperCase())
}

console.log(convertToUppercase([ 'hello', 'world', 'javascript']))
