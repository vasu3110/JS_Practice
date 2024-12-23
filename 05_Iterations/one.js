//for of
//It is an array specific loop
// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings="Hello World";
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }


//Maps
const map=new Map();
map.set('IN',"India");
map.set('US',"United States Of America");
map.set('Fr',"France");
// console.log(map);

//This will print the map in array form with each key-value pair in an array
// for (const key of map) {
//     console.log(key);
// }

//For printing the key-value pair eperately we destructure the array
for (const [key,value] of map) {
    console.log(key,':-',value);
}

const myObj={
    'game1':'nfs',
    'game2':'spiderman'
}

//Objects are not iterated in this way
// for (const [key,value] of myObj) {
//     console.log(key,':-',value);
// }

