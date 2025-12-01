

for (let i = 0; i < 10; i++) {
    const element = i;
   // console.log(element);
    
}


for (let i = 0; i <= 10; i++) {
   console.log(`outer loop is: ${i}`);
    for (let j = 0; j <= 10; j++) {
       // console.log(` inner loop is: ${j} && outer loop is: ${i}    `);
    //console.log( i + "*" + j + "=" + (i*j) );
}
}

const myArry =["iornman", "spiderman", "hulk", "thor", "captain america"];

for (let index = 0; index < myArry.length; index++) {
    const element = myArry[index];
    console.log(`my fav super hero is: ${element}`);
    
}

//while loop

let  a = 0;

while (a < 10) {
    console.log(`while loop number is: ${a}`);
    a++;
}

//do while loop

let b = 0;  
do {
    console.log(`do while loop number is: ${b}`);
    b++;
}
    while (b < 10); 
    