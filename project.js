// 1. Join all elements of the array into a string
let myColor = ["Red", "Green", "White", "Black"];

console.log("Joined with default (,):", myColor.join()); // "Red,Green,White,Black"
console.log("Using toString():", myColor.toString()); // "Red,Green,White,Black"
console.log("Joined with '+':", myColor.join("+")); // "Red+Green+White+Black"

// 2. Most frequent item in an array
var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
var frequency = {};
var maxFreq = 0;
var mostFrequent;

for (let item of arr1) {
  frequency[item] = (frequency[item] || 0) + 1;
  if (frequency[item] > maxFreq) {
    maxFreq = frequency[item];
    mostFrequent = item;
  }
}

console.log(`${mostFrequent} ( ${maxFreq} times )`); // a ( 5 times )

// 3. Truncate a string
function truncateString(str, num) {
  return str.slice(0, num);
}

console.log(truncateString("Robin Singh", 4)); // Output: "Robi"

// 4. Capitalize the first letter of each word
function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeWords("js string exercises")); // Output: "Js String Exercises"

// 5. Filter array elements between two values
function arrBetween(a, b, arr) {
  return arr.filter((num) => num > a && num < b);
}

console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7])); // ➞ [5, 4, 7]
console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6])); // ➞ [8, 6]
console.log(arrBetween(7, 32, [1, 2, 3, 78])); // ➞ []

// 6. Find the index of an element in an array
function findIndex(arr, value) {
  return arr.indexOf(value);
}

console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh")); // ➞ 2
console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue")); // ➞ 1
console.log(findIndex(["a", "g", "y", "d"], "d")); // ➞ 3
console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")); // ➞ 0
