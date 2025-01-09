class User{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        //This super keyword is alternate to the call method learned earlier to send the current context to parent class
        super(username)
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const t1= new Teacher("Vasu","abc@gmail.com","123");
const y=new User("Masala Chai");
y.logMe();

console.log(t1===y);
console.log(t1 instanceof Teacher)
console.log(t1 instanceof User)