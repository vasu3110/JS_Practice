function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power=2;
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username,score){
    this.username=username;
    this.score=score;
}

//Since function is also an object so we can inject a method inside it using prototype
createUser.prototype.increment=function(){
    this.score++;
}
createUser.prototype.printMe=function(){
    console.log(`Price is ${this.score}`);
}


//When we do not use new keyword we are not able to access the function injected.Hence we should use new while calling the function
const chai=new createUser("chai",25);
const tea=createUser("Tea",250);


chai.printMe();
