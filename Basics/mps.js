const myNum =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//  const newmyNum = myNum.map((num) => num + 10);

// console.log(newmyNum);

//chaining map with filter

const chainedResult = myNum.map((num) => num * 2).map((num)=> num*5).filter((num) => num >20);

console.log(chainedResult );