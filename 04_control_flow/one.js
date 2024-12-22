//if
// if (condition) {
//      //code
// }

const userLoggedIn=true;
const debitCard=true;
const loggedInFromGoogle=false;
const loggedInFromEmail=true;

if(userLoggedIn && debitCard && 2==2){
    console.log("Allowed to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User Logged in");
}


