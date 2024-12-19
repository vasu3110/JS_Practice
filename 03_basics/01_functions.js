function saymyname(){
    console.log("My name is Vasu");
}
//saymyname is the reference to the function
saymyname();

//num1 and num2 passed in the function definition are called parameters
function add(num1,num2){
    console.log(num1+num2);
}

function add1(num1,num2){
    let result=num1+num2;
    return result;
}

//Actual values passed in the function call are called arguments
add(2,4);

const result=add1(5,6);
console.log(result);

//We can also give a default value to paramaters
function loginUserMessage(username="Sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`;
}

//If we don't pass any parameter in the function call we will get undefined in the place of the parameter
console.log(loginUserMessage("Vasu"));
console.log(loginUserMessage());

function calculateCartPrice(num1){
    return num1;
}
console.log(calculateCartPrice(200));

//We may want to pass in multiple values in the function. It is done using rest operator which is ...
function calculateCartPrice1(val1,val2,...num1){
    return num1;
}
console.log(calculateCartPrice1(200,300,400,2000));

const user={
    username:"Vasu",
    price:199
}

//There is a issue in below function code as when we are accessing properties of an object we are not checking that type is present in the object definition or not. This is a reason we use Typescript

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user);

handleObject({
    username:"Sam",
    price:399
})

const newarr=[200,400,100,600];
function returnSecondValue(arr){
    return arr[1];
}

// console.log(returnSecondValue(newarr));
console.log(returnSecondValue([200,300,400,500]));
