const myNumbers=[1,2,3,4,5,6,7];
const newNumbers=myNumbers.map((num)=> num+10)
console.log(newNumbers);

//This is called chaining where multiple methods are applied one after the other. Note that second map acts on the output of first map and so on
const newNums=myNumbers.map((num)=> num*10)
                       .map((num)=> num+1)
                       .filter((num)=> num>=40)
console.log(newNums);



