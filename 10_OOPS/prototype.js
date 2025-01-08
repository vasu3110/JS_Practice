let myName="Vasu  ";
console.log(myName.length);
// console.log(myName.trim().length);
//console.log(myName.trueLength);

//In JS we have a object as the super entity for arrays,function,strings etc
//It means that all the methods and properties of object will be enherited by the functions,arrays,strings
let myHeros=["thor","spiderman"];
let heroPower={
    thor:"Hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spidy Power is ${this.spiderman}`);
    }
}
Object.prototype.Vasu=function(){
    console.log(`Vasu Is present in all objects`);
}


Array.prototype.HeyVasu=function(){
    console.log("Vasu says Hello");
}
//Both will run fine
heroPower.Vasu();
myHeros.Vasu();

myHeros.HeyVasu();

//This will give error
// heroPower.HeyVasu();

const User={
    name: "chai",
    email: "chai@google.com"
}

const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__=User




