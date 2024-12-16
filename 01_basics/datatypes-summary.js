// primitive-Passed by Value
//7 Types: String,Number,Boolean,null,undefined,Symbol,BigInt
const score=100;
const scoreVal=100.3;

const isLoggedIn=false;
const outsideTemp=null;
let userEmail;

const id=Symbol('123');
const anotherId=Symbol('123');
console.log(id===anotherId);

const bigNumber=3456543576654356754n;
console.log(bigNumber);


//Reference type(Non-primitive)
//Arrays,Objects,functions

const heroes=["shaktiman","naagraj","doga"];

//Objects
let myObj={
    Name:"Vasu",
    age:21,
}

//functions can also be treated as a variable in js
const myfunc=function(){
    console.log("Hello World");
}

myfunc();
console.log(typeof myfunc);
// data type of non primitive datatypes is returned as object
//In case of typeof function we get function as the datatype which is also called function object 

/* DataTypes
Undefined=>undefined
null=>object
Boolean=>boolean
Number=>number
String=>string
*/
