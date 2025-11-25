

// Creating an object using the Object constructor
const tinder = new Object();
tinder.name = "Tinder";
tinder.yearFounded = 2012;
tinder.isPopular = true;

// console.log(tinder);

const instagram = {
    username: "insta_user",
    followers: 1500,
    mail : "insta22@gmail.com",
    isVerified: false
 
}

// console.log(instagram.account);


 const obj1 = {
    a: 1,
    b: 2,
 };

 const obj2 = {
    f: 3,
    c: 4,
 };

 // Merging two objects using Object.assign()
 const mergedObj = Object.assign({}, obj1, obj2);
//  console.log(mergedObj); 


//  console.log(Object.keys(mergedObj)); // Output: ['a', 'b', 'f', 'c']
//  console.log(Object.values(mergedObj)); // Output: [1, 2, 3, 4]
//  console.log(Object.entries(mergedObj)); // Output: [['a', 1], ['b', 2], ['f', 3], ['c', 4]]

 // Using the spread operator to merge two objects
 const mergedObjSpread = {...obj1, ...obj2};
   // console.log(mergedObjSpread);

   console.log(Object.keys(instagram)); // Output: ['username', 'followers', 'mail', 'isVerified', 'account']
   console.log(Object.values(instagram)); // Output: ['insta_user', 1500, '   
    console.log(Object.entries(instagram )); // Output: [['username', 'insta_user'], ['followers', 1500], ['mail', '