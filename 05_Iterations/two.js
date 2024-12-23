const myObj={
    js:'javascript',
    cpp:'C++',
    rb:'ruby',
    swift:'swft by apple'
}

// for (const key in myObj) {
//     console.log(`${key} shortcut is for ${myObj[key]}`);
// }

// const programming=["js","rb","py","java","cpp"]
// for (const key in programming) {
//     console.log(programming[key]);
// }


const map=new Map();
map.set('IN',"India");
map.set('US',"United States Of America");
map.set('Fr',"France");

//We cannot interate over a map using for-in loop
for (const key in map) {
    console.log(key);
}
