const chromeUser={}

chromeUser.id="123abc";
chromeUser.name="John";
chromeUser.isLoggedIn=false;

// console.log(chromeUser);
const regularUser={
    email:"abc@google.com",
    name:{
        fullname:{
            firstName:"Vasu",
            lastName:"Sharma"
        }
    }
}

console.log(regularUser.name.fullname.lastName);

const obj1={
    1:'A',
    2:'B'
}
const obj2={
    3:'A',
    4:'B'
}
//This will create nested objects
// const obj3={obj1,obj2};
// console.log(obj3);

//This will combine the two objects obj1,obj2 and returns a modified a object
const obj4=Object.assign({},obj1,obj2);
console.log(obj4);
console.log(obj1);

//We use spread operator to concatenate two objects
const obj3={...obj1,...obj2};
// console.log(obj3);
const users=[
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:2,
        email:"b@gmail.com"
    },
    {
        id:3,
        email:"c@gmail.com"
    },
]

console.log(users[1].email);
console.log(chromeUser);
console.log(Object.keys(chromeUser));
console.log(Object.values(chromeUser));
console.log(Object.entries(chromeUser));

console.log(chromeUser.hasOwnProperty('hello'));

const course={
    coursename:"js in hindi",
    price:"1000",
    courseinstructor:"Hitesh"
}

const {courseinstructor:instructor}=course;
 
console.log(instructor);



