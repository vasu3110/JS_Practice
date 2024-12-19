const marvel_heroes=['Thor','Spiderman'];
const dc_heroes=['Superman','flash','batman'];

console.log(marvel_heroes);
console.log(dc_heroes);


//When we push another array into an existing array we see a nested array instead of merged array
marvel_heroes.push(dc_heroes);
console.log(marvel_heroes[2][0]);

marvel_heroes.pop();

//concat returns a new array whereas push changes the original array
const newHeroes=marvel_heroes.concat(dc_heroes);
console.log(newHeroes);

//Apart from the concat method we also use spread operator in js to concatenate to arrays
const all_new_heroes=[...marvel_heroes,...dc_heroes];
console.log(all_new_heroes);

const arr5=[1,2,3,[1,2,[4,5,[7,8]]]];
const flatarr5=arr5.flat(Infinity);
console.log(flatarr5);