let a=300;
if(true){
    //All the variables declared inside the local scope are not accessible outside the scope when declared using let and const keyword
    let a=10;
    const b=20;
    console.log(`Inner:${a}`);

    //But any variable declared using var keyword can be accessed outside the scope, hence avoid its usage as it may create confusions.
    var c=200;
}
console.log(a);
console.log(c);

//Function can be accessed by their names before their declaration without any errors due to hoisting
console.log(addone(4));

function addone(num){
    return num+1;
}

//But in case we store the function in a variable then we can't access the variable before its declaration
const addTwo=function(num){
    return num+2;
}

addTwo(5);
 