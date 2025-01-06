console.log("Hello");
const promiseOne=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    },1000);
});

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task-2");
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username:"Chai",email:"chai@example.com"})        
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour=new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error=false;
        if(!error){
            resolve({username:"Vasu",password:"123"});
        }
        else{
            reject('Error something went wrong');
        }
    }, 1000);
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=> console.log("The Promise is either resolved or rejected"));


const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error=false;
        if(!error){
            resolve({username:"JS",password:"123"});
        }
        else{
            reject('Error JS went wrong');
        }
    }, 1000);
});

//Using async await is alternate to then and catch methods used earlier
async function consumePromiseFive(){
    try{
        const response=await promiseFive;
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

consumePromiseFive();

// async function getAllUsers(){
//     try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         console.log(response);
//         const data=await response.json();
//         console.log(data);
//     }
//     catch(error){
//         console.log("E:",error);
//     }
// }
// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((doc)=>{
    console.log(doc);
})
.catch((error)=>{
    console.log(error);
});