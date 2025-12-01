 // reduce function
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// Syntax: array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)

// // Example: Sum of all numbers in an array
// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

// console.log(sum); // Output: 15



// Example: sum of odd numbers in an array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfOdd = numbers.reduce((accumulator, currentValue) => {
  if (currentValue % 2 !== 0) {
    return accumulator + currentValue;
  }
  return accumulator;
}, 0);  

console.log(sumOfOdd); // Output: 25