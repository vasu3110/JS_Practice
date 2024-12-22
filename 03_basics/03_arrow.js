const user={
    username:"Vasu",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username} ,welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username="Sam";
// user.welcomeMessage();

//this is used to refer to current context.In case we print this in global context in node we get empty object.

//But if we print this in browser we see window object getting printed.In browser's JS engine browser is the global scope.
console.log(this);

function chai(){
    let username="Vasu";
    console.log(this.username);
}
//We can't use this in a function in the same way as we used it in objects.
chai();

//This is arrow function
//Again accessing a variable using this will give undefined output

//Also this will give empty output if printed within arrow function
const chai1=()=>{
    let username="Vasu";
    console.log(this.username);
}

chai1();

// const addtwo=(num1,num2)=>{
//     return num1+num2;
// }


//This way of writing the function is called implicit return

//When we write the function body within curly braces we have to write the return keyword whereas if we use parenthesis we remove the return keyword
const addtwo=(num1,num2)=> (num1+num2);

console.log(addtwo(3,4));

//We can also return an object using implicit return
 
const returnobj=(num1,num2)=>({username:"Vasu"});
console.log(returnobj(1,2));
const myArr=[2,5,3,7,4];

