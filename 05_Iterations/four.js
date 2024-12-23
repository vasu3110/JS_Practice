const  myNums=[1,2,3,4,5,6,7,8,9,10];

//If we want to return some value using the loop over myNums array we have to use filter method.
//Note that we cannot directly return a value using for-each value
// const newNums=myNums.filter((num)=> num>4);
// console.log(newNums);

// const newNums=myNums.filter((num)=>{
//     return num>4
// })

//If we want to return a value using for-each loop we have to do like this
const newNums=[]

myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums);

books=[
    {
        title:'Book one', genre:'History', 
        publish:1980,
        edition:2000
    },
    {
        title:'Book two', genre:'fiction', 
        publish:1985,
        edition:2005
    },
    {
        title:'Book three', genre:'Non-Fiction', 
        publish:1983,
        edition:2003
    },
    {
        title:'Book four', genre:'History', 
        publish:1990,
        edition:2010
    },
    {
        title:'Book five', genre:'Non-Fiction', 
        publish:1995,
        edition:2015
    }
]

const userBooks=books.filter((bk)=>bk.genre==='History')
console.log(userBooks);

const query1=books.filter((bk)=>bk.publish>1985 && bk.genre==='History');
console.log(query1);


