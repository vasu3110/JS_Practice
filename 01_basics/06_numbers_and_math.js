const score=400;
console.log(score);

const balance=new Number(200);
console.log(balance);

console.log(score.toString().charAt(0));

//We can specify the precision value of the number using toFixed method
console.log(score.toFixed(2));

//toPrecision() returns a string with a given precision 
const num2=23.8966;
console.log(num2.toPrecision(3));


const num3=1000000;
console.log(num3.toLocaleString('en-IN'));


//++++++++++++++++++++++Maths++++++++++++++++++++++
// console.log(Math.abs(-4));
// console.log(Math.round(4.5));
// console.log(Math.round(-4.5));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(2.3));
// console.log(2**3);
// console.log(Math.min(2,3,4));
// console.log(Math.max(2,3,4));



//
console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor((Math.random()*10)+1));

const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1))+min);


