"use strict";
//Question 18:Seeing the World: Think of at least five places you'd like to visit.
let favoritePlaces = ["Turkey", "IslamAbad", "Dubai", "Lahore", "Sargodha"];
console.log(`The array in its original order [${favoritePlaces}]`);
console.log(`The array in its reverse order:[${favoritePlaces.reverse()}]`);
console.log(`The array in the alphabetical order:[${favoritePlaces.sort()}]`);
console.log(`The array in the reverse alphabetical order:[${favoritePlaces.sort().reverse()}]`);
for (let Place of favoritePlaces) {
    console.log(`${Place} is one of my favorite places in this world`);
}
