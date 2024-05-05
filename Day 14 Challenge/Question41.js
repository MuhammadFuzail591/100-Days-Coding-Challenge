"use strict";
let magiciansNames = ["Fuzail", "Junaid", "Uzair"];
function showMagicians(names) {
    for (let name of names) {
        console.log(name);
    }
}
function showMagicians2(Names) {
    Names.forEach(name => {
        console.log(name);
    });
}
//Calling function
showMagicians(magiciansNames);
//Calling second function
showMagicians2(magiciansNames);
