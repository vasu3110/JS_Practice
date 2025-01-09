class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username:${this.username}`);
    }

    //Using static we restrict access to this method
    static createId(){
        return `123`;
    }

}

const name=new User("Vasu");
// console.log(name.createId());

class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email=email;
    }
}

const iphone=new Teacher("iphone","i@phone.com");
iphone.logMe();
//This will not work due to static keyword
// console.log(iphone.createId());
