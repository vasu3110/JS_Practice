// let myDate=new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate=new Date(2025,0,1);
let myCreatedDate1=new Date(2025,0,1,5,3);
let myCreatedDate3=new Date(2025,0,1);

console.log(myCreatedDate1.toLocaleString());

//yyyy-mm-dd
let myCreatedDate4=new Date("2023-02-01");
console.log(myCreatedDate4.toDateString());

//mm-dd-yyyy
let myCreatedDate5=new Date("01-01-2024");
console.log(myCreatedDate5.toDateString());

//Timestamp
let myTimeStamp=Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.ceil(Date.now()/(1000*60*60*24*365)));

newDate.toLocaleString('default',{
    weekday:"long",
});



