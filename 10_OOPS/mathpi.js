// Object.getOwnPropertyDescriptor(Math)

// console.log(Math.PI);
// Math.PI=5
// console.log(Math.PI);

const descriptor=Object.getOwnPropertyDescriptor(Math,"PI");
console.log(descriptor);

const mynewobj=Object.create(null);
const chai={
    name:'ginger',
    price: 250,
    isAvailable:true
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// Object.defineProperty(chai,'name',{
//     writable:false,
//     enumerable:false,
// })

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key,value] of chai) {
    console.log(`${key}:${value}`)
}