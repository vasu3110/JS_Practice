const myArr=[1,2,3,4,5];
//arrays can store multiple datatypes
//arrays are resizable
//JS array-copy operations create shallow copies
// Shallow Copy-a copy whose properties share the same references as those of the source object from which the copy was made
//Deep Copy-properties do not share the same reference

const arr1=[0,1,2,3,4];
const myHeroes=new Array("Batman","Ironman","Captain America");

console.log(arr1[0]);
console.log(myHeroes[2]);

//Arrays Method
arr1.push(6);
console.log(arr1);
arr1.push(7);
console.log(arr1);
arr1.pop();
console.log(arr1);

arr1.unshift(9);
console.log(arr1);

arr1.shift();
console.log(arr1);

const newarr=arr1.join();
console.log(arr1);
console.log(newarr);

//slice, splice

let arr10=new Array(1,2,3,4,5);
console.log(arr10.slice(2,5));
console.log(arr10);
let arr10v2=arr10;
console.log(arr10v2.splice(2,5));
console.log(arr10v2);
console.log(arr10);





