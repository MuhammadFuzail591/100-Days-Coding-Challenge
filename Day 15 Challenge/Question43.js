"use strict";
let OriginalArray = ["Fuzail", "Junaid", "Uzair"];
function makeGreat(names) {
    let greatMagicians = [];
    for (let i = 0; i < names.length; i++) {
        greatMagicians[i] = "The Great " + names[i];
    }
    return greatMagicians;
}
function printArray(array) {
    for (let item of array) {
        console.log(item);
    }
}
let greatArray = makeGreat(OriginalArray);
//Printing arrays
printArray(OriginalArray);
console.log(`===========Great Array============`);
printArray(greatArray);
