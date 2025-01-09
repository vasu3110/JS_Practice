function SetUsername(username){
    this.username=username;
}
function createUser(username,email,password){
    // SetUsername(username);   //This won't work
    SetUsername.call(this,username)   //This will work

    this.email=email;
    this.password=password;
}

//We expect to get the output as an object with name,email,password set as passed in the argument
//But if we don't use call method and pass the current execution context in the setUsername() username is not set
//actually when the setUsername function is called username is set in its local context but as soon as its context is removed from the stack the value assigned is also deleted

const x=new createUser("Vasu","abc","123");
console.log(x);