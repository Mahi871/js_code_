const marvelHeroes = ['Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow'];

const dcHeroes = ['Batman', 'Superman', 'Wonder Woman', 'Flash', 'Aquaman'];
//push method 
marvelHeroes.push(dcHeroes);

// console.log(marvelHeroes [5][2]);
 
//concat method to merge two arrays and store in a new array
const newHeros = marvelHeroes.concat(dcHeroes);

//  console.log( newHeros);

//spread operator to merge two arrays

 const allHeros = [...marvelHeroes, ...dcHeroes];
//  console.log(typeof allHeros);


//flat method to flatten nested arrays to combine all elements into a single array
 const anotherArr = [10, 20, 30, [1, 2, 3],8, [4, 5,[ 11,12,13,13], 6]];

 const realAnotherArr = anotherArr.flat(Infinity);

 console.log(realAnotherArr);

 console.log(Array.from("hello"));

const score1 =100;
const score2 =200;
const score3 =300;  

 console.log(Array.of(score1, score2, score3));