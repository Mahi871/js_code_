function setUserName(username) {
    this.username = username;
}

function createUser(username,email,password){
   setUserName.call(this, username);
    this.email = email;
    this.password = password;
}

const user1 = new createUser("john_doe", "john@example.com", "123456");

console.log(user1); // john_doe

