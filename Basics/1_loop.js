
const myObject = {

    js : "javaScript",
    py : "python",
    rb : "ruby",
    css : "cascading style sheet"

}
for (let key in myObject) {
  //  console.log(`${key} : ${myObject[key]}`);
    
}

// for in loop with array

const myArray = ["apple", "banana", "grapes", "mango", "orange"];

for (let index in myArray) {
    //console.log(`index is: ${index} and value is: ${myArray[index]}`);



    
}


//for each loop with array

// myArray.forEach(function (value) {
//     console.log(`   value is: ${value}`);
// });


//using arrow function we are applied for each loop on array
myArray.forEach((value)=>{
 console.log(` ${value}`);
})