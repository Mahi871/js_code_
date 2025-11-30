const score= 100;
//if concept
if (score < 90) {
    console.log("Grade: A");
} else if (score < 80) {
    console.log("Grade: B");
} else if (score < 70) {
    console.log("Grade: C");
}
else{
    console.log("Grade: F");
}

const islogedin= true;
const access =true;

if (islogedin && access) {
    console.log("You have access to the dashboard");
} else {
    console.log("Access denied");
}


const islogedinByMail= true;
const islogedinByGoogle= false;

//or concept used for multiple conditions 

if (islogedinByMail || islogedinByGoogle) {
    console.log("User is logged in");
} else {
    console.log("User is not logged in");
}

//switch concept
const day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";     
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";   
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";

        break;
}