try {
  if (2 === 2) {
    throw new Error("hey I am an error");
  }
} catch (err) {
  console.log(err);
} finally {
  console.log(" I am running no matter what");
}

/// 1a write a function that returns the sum of two numbers. Thorw an error if either argument is not a number
function sum(x, y) {
  //check data types first and throw error
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("oops, x or y is not a number");
  }
  return x + y;
}

// console.log(sum(4, "7"));
console.log(sum(8, 15));

// 1b call the sum function inside a try block using "1" and "2" as arguments. Use console.log in a catch block to inform the user of the error

try {
  sum("1", "2");
} catch (err) {
  console.log(err);
}

// 2a given a user object, write a function called login that takes a username and password as parameters. Throw an error if either of them don't match,
// or log to the console a message saying "login successful"

function login(username, password) {
  const user = { username: "Sasha", password: "sasha" };
  if (user.username != username || user.password != password) {
    throw new Error("wrong credentials");
  } else {
    console.log("login successful");
  }
  return user;
}

// console.log(login("sam", "sasha"))
console.log(login("Sasha", "sasha"));

// 2b call the login function within a try block. In one instance use the correct credentials and in another use incorrect credentials

try {
  login("sasha", "sasha");
} catch (err) {
  console.log(err);
}

try {
  login("Sasha", "sasha");
  if (login) {
    console.log("success");
  }
} catch (error) {
  console.log(error);
}
