
const myArr = [1, 2, 3, 4, 5];
// console.log(myArr);
// myArr.push(6);
// console.log(myArr); 
// myArr.pop();
// console.log(myArr);
// myArr.shift();
// console.log(myArr);
// myArr.unshift(0);
// console.log(myArr);

const newArr = myArr.slice(1, 4);
console.log("A", newArr);

const splicedArr = myArr.splice(1, 3 );
console.log("B", splicedArr);
console.log("C", myArr);

