let name="Vasu";
const repocount=5;
// console.log(`Hello My name is ${name} and my repo count is ${repocount}`);



// console.log(gameName.length);
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('3'));
// console.log(typeof gameName);
// console.log(typeof name);
let gameName=new String("abcdefgh");
console.log(gameName[0]);

let newgame=gameName;
newgame="Hello";

console.log(gameName);
console.log(newgame);

//Negative value simply means indexing starts from end
const str2=gameName.slice(-8,4);
console.log(str2);

//We cannot give negative values in substring function. It assumes the substring starts from 0
const str3=gameName.substring(-7,4);
console.log(str3);

//trim method is used to remove white spaces
//we also have trimStart() and trimEnd()
const newStringOne="  Vasu  ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://google.com";
console.log(url.replace("com","in"));

console.log(url.includes("com"));

//Used to create an array of characters split across the specified character
console.log(url.split(":"));


















