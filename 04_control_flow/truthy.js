const userEmail="ABC@gmail.com";
//String is assumed true value
//Empty string is considered false value
//Empty array is considered false value
//falsy values-->false,0,-0,BigInt 0n,"",null,undefined,NaN
//truthy values-->"0",'false'," ", [],{},function(){}


if(userEmail){
    console.log("Got User Email");
}
else{
    console.log("Don't have Email");
}

const emptyObj={};
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}

//Nullish Coalescing Operator(??):null undefined
//This operator is used as a safety check against null value

let val1;
// val1=5 ?? 10; //Here 5 is assigned to val1
val1=undefined ?? 10;  //Here 10 is assigned to val1 since first value is undefined
console.log(val1);
let val2=null ?? 10 ?? 20; //First non null value is assigned to the variable
console.log(val2);

//Ternary Operator.It is different from nullish coalescent operator
const iceTeaPrice=100;
iceTeaPrice<=80 ? console.log("Less than 80") : console.log("More than 80");