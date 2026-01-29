class User {
    constructor(username){
        this.username= username

    }           

    logMe (){
        console.log(`username is ${this.username  }`)
    }

   static createId(){
  return 123;
   }
 
    
}

const user1 = new User ('john_doe');

// console.log(user1.createId());

class Teacher extends User {
    constructor(username,email){
        super(username);
        this.email = email;
    }
}

const teaher1 =new Teacher('raj raje','teacher@example.com');
console.log(teaher1);
teaher1.logMe();
