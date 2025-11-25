 function addition (num1, num2) {
    return num1 + num2;
}
 const nainAdd = addition(2, 3); // 5
    console.log(nainAdd);

     
// Rest Parameter it used to represent an indefinite number of arguments as an array.
    function itemCart (...items){
        return items;
    }

    console.log(itemCart('apple', 'banana', 'orange')); // ['apple', 'banana', 'orange']


    const userDetails ={
        name: 'John Doe',
        age: 30,
        city: 'New York',
        mail:"jhon@.com",
        id: 101
    }

    function userDetailShow(anyObject){

        console.log (`Name: ${anyObject.name}, Age: ${anyObject.age}, City: ${anyObject.city}, Mail: ${anyObject.mail}, Id: ${anyObject.id}`)
    }

    userDetailShow(userDetails); // Name: John Doe, Age: 30, City: New York, Mail: jhon@.com, Id: 101


    //function use in aary
    const myArry = [100, 200, 300, 400, 500];

    function sumArray(arr){
        return arr[3]
    }

    console.log(sumArray(myArry)); // 400