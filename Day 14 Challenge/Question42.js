"use strict";
let magicianNames = ["Fuzail", "Junaid", "Uzair"];
// function GreatMagicians(names:string[]){
//     for(let name of names){
//         console.log('The Great ' + name)
//     }
// }
// function GreatMagicians2(Names:string[]){
//     Names.forEach(name => {
//         console.log('The Great ' + name)
//     });
// }
// //Calling function
// GreatMagicians(magicianNames)
// //Calling second function
// GreatMagicians2(magicianNames)
function makeGreat(names) {
    for (let i = 0; i < names.length; i++) {
        names[i] = "The Great" + names[i];
    }
}
function printArray(array) {
    for (let item of array) {
        console.log(item);
    }
}
makeGreat(magicianNames);
printArray(magicianNames);
