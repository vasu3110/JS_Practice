const coding=["js","ruby","java","python","cpp"]


// coding.forEach(function(item){
//     console.log(item);
// })
// coding.forEach((item)=>{
//     console.log(item);
// })

function printMe(item){
    console.log(item);
}
//Give only the reference of the function
// coding.forEach(printMe);

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

const myCoding=[
    {
        languageName:"JavaScript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
    {
        languageName:"c++",
        languageFileName:"cpp"
    }
]

myCoding.forEach( (item)=>{
    console.log(item.languageName);
})


