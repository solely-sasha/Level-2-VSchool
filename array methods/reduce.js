// .reduce() reduce data into a smaller or different set of data

// ASSIGNMENT
// 1. turn an array of numbers into a total of all numbers
function total(arr) {
  const sum = arr.reduce((final, num) => {
    return (final += num);
  }, 0);
  return sum;
}

console.log(total([1, 2, 3])); // 6

// 2 turn an array of numbers into a string of numbers
function stringConcat(arr) {
  const numString = arr.reduce((final, num) => {
    return `${final}${num}`;
  });
  return numString;
}

console.log(stringConcat([1, 2, 3])); // "123"

// 3. Turn an array of voter objects inot a count of how many voted
function totalVotes(arr) {
  const votedNumber = arr.reduce((final, voter) => {
    if (voter.voted) {
      final++;
    }
    return final;
  }, 0);
  return votedNumber;
}

var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];
console.log(totalVotes(voters)); // 7

// 4. given an array of all your wishlist itmes, figure out how much it would cost to just buy everything at once
function shoppingSpree(arr) {
  let fullPrice = arr.reduce((final, currentPrice) => {
    final += currentPrice.price;
    return final;
  }, 0);

  return fullPrice;
}

var wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

console.log(shoppingSpree(wishlist)); // 227005

// 5. given an array of arrays, flatten them into a single array
function flatten(arr) {
  const flattenedArr = arr.reduce((final, curr) => {
    return final.concat(curr);
  }, []);
  return flattenedArr;
}

var arrays = [["1", "2", "3"], [true], [4, 5, 6]];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

// 6. given an array of potential voters, return an object representing the results of the vote
var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

function voterResults(arr) {
  const voterCategory = arr.reduce(
    (final, curr) => {
      if (curr.age >= 18 && curr.age <= 25) {
        final.numYoungPeople++;
        if (curr.voted) {
          final.numYoungVotes++;
        }
      } else if (curr.age >= 26 && curr.age <= 35) {
        final.numMidPeople++;
        if (curr.voted) {
          final.numMidVotes++;
        }
      } else if (curr.age >= 36 && curr.age <= 55) {
        final.numOldPeople++;
        if (curr.voted) {
          final.numOldVotes++;
        }
      }
      return final;
    },
    {
      numYoungVotes: 0,
      numYoungPeople: 0,
      numMidVotes: 0,
      numMidPeople: 0,
      numOldVotes: 0,
      numOldPeople: 0,
    }
  );
  return voterCategory;
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/

// PRACTICE ---------------------------------------------------------------
// 1 - reduce the array of numbers into a sum of all the numbers
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const result1 = nums.reduce((final, num) => {
//   final += num;
//   return final;
// });

// console.log(result1);

// // 2 - reduce the users to an array of strings of the user's first and last names
// const users = [
//   { fName: "joe", lName: "smithy" },
//   { fName: "tina", lName: "johnson" },
//   { fName: "rick", lName: "sanchez" },
// ];

// const result2 = users.reduce((final, user) => {
//   final.push(`${user.fName} ${user.lName}`);
//   return final;
// }, []);

// console.log(result2);

// // 3 - reduce the array into a count of how many people voted
// const voters = [
//   { name: "steve", voted: true },
//   { name: "janet", voted: true },
//   { name: "rebecca", voted: false },
//   { name: "harvey", voted: true },
// ];

// const result3 = voters.reduce((final, voter) => {
//   if (voter.voted) {
//     final++;
//   }
//   return final;
// }, 0);

// console.log(result3);

// // return an object of who voted and didn't {didVote: 3, didntVote: 1}
// const voterObj = voters.reduce(
//   (final, voter) => {
//     voter.voted ? final.didVote++ : final.didntVote++;
//     return final;
//   },
//   { didVote: 0, didntVote: 0 }
// );

// console.log(voterObj);
