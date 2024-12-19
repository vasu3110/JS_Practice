//singleton
//Object.create


//object liter̥als

//Defining a symbol
const mySym=Symbol("key1");

const jsUser={
    name:"Vasu",
    "fullName":"Vasu Sharma",
    [mySym]: "mykey1",  //That's how we use a symbol as a key
    age:21,
    location:"Ghaziabad",
    email:"ABC@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Tuesday"]
}
//Access methods
console.log(jsUser.name);
console.log(jsUser["email"]);
console.log(jsUser["fullName"]);
console.log(jsUser[mySym]);

jsUser.email="abc@google.com";
// Object.freeze(jsUser);

jsUser.email="bcd@yahoo.com";
console.log(jsUser);

jsUser.greeting=function(){
    console.log("Hello JS user");
}
jsUser.greeting1=function(){
    console.log(`Hello js user ${this.name}`);
}
console.log(jsUser.greeting1());

