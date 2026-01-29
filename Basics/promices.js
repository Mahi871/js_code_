const promiceOne = new Promise(function(resolve,reject){
    setTimeout(function(){
     console.log("Promice One resolved")
        resolve();
},2000)
});

promiceOne.then(function(){
    console.log("Thank you for resolving promice one")
});

// //using arrow functions
const promiceTwo = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Promice Two resolved")
        resolve();
    },3000)
})

promiceTwo.then(()=>{
    console.log("Thank you for resolving promice two")
})





// //promice three
const promiceThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Promice Three resolved")
        resolve({username:"code_master" , id: 3434 , email:"code_master@example.com"});
    },1000)

})
promiceThree.then((user)=>{
    console.log(user)
})




//promice four with error handling
const promiceFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const error = true;
        if(!error){
            
            resolve({username:"raj_raje" , email:"raj_raje@example.com"});
        }else{
           
            reject("Sorry , promice four not fulfilled due to some error")
        }},1000)

})
promiceFour.then((user)=>{
    console.log(user)
}).then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("Promice four is either resolved or rejected , finally block executed")
})

//async await with promice five 
// it is used to consume promices in a better way

const promiceFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"mahessh_raj" , password:"mahessh@123"});
        }else{
            reject("Sorry , promice five not fulfilled due to some error")
        }
    },1000)
})
async function consumePromiceFive(){
    try{
        const user = await promiceFive;
        console.log(user);
    }catch(error){
        console.log(error);
    }
}
consumePromiceFive();
// // //fetch api with async await

async function fetchData(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.log("Error fetching data:", error);
    }
}

fetchData();

// // //fetch api with then catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=> response.json())
.then((data)=> console.log(data))
.catch((error)=> console.log("Error fetching data:", error));