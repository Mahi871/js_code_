 // reduce function
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// Syntax: array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)

// // Example: Sum of all numbers in an array
// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

// console.log(sum); // Output: 15



// // Example: sum of odd numbers in an array
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sumOfOdd = numbers.reduce((accumulator, currentValue) => {
//   if (currentValue % 2 !== 0) {
    
//     return accumulator;
//     return accumulator + currentValue;

    
//   }
// }, 0);  

// console.log(sumOfOdd); // Output: 25



//sum ofthe array

const arr=[1,2,3,4,5];
const total=arr.reduce((acc,cuv)=> {

  console.log(`acc:${acc} cuv:${cuv}`);
  return acc+cuv  

} ,0);
console.log(total); //output:15


const shoppingCart=[
  {product:'phone',price:699},
  {product:'laptop',price:999},
  {product:'tablet',price:499},
  {product:'monitor',price:199},
  {product:'keyboard',price:99}
];


const newShoppingCart = shoppingCart.reduce((acc,item) => acc + item.price,0); //output:2495

console.log(newShoppingCart);