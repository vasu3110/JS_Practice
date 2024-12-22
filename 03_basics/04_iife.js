//Sometimes there is a need to immidiately execute a function after its execution. We use iife for this purpose
//IIFE is also used in cases where there is a chance that globally declared variables may cause pollution due to usage in the function scope

//Normal declaration
function chai(){
    console.log(`DB connected`);
}
chai();

//iife declaration
(function chai(){
    //Named iife
    console.log(`DB connected`);
})();
//Always place a semicolon after iife function call so that its scope is terminated
//()()-First parenthesis is for function declaration while the second parenthesis is for calling that function

((name)=>{
    //unnamed iife
    console.log(`DB connected again ${name}`);
})("Vasu");
