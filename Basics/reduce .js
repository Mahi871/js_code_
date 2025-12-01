 // reduce function
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// Syntax: array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)

// Example: Sum of all numbers in an array
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15


const  myarr = [10, 20, 30, 40, 50];

const total = marr .reduce( function (acc , curr) {

    console.log("Accumulator:", acc, "Current Value:", curr);
    return acc + curr;
},0);

console.log("Total:", total); // Output: 150