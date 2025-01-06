const user={
    username:"Vasu",
    loginCount:9,
    signedIn:true,

    getUserDetails:function(){
        //This will throw error
        // console.log(`${username}`);
        // console.log(`${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
user.getUserDetails();


// const promiseOne=new Promise();
// const date=new Date();

function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    // return this;
    this.greeting=function(){
        console.log(`Welcome ${this.username}`);
    }
}

const userOne=new User("Vasu",12,true);
const userTwo=new User("Sharma",12,false);
console.log(userOne);
console.log(userTwo);

//When we use new keyword a new object is created or instantiated
//Constructor function is called next
//Values are injected using this keyword