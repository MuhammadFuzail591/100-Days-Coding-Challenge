"use strict";
//Combining array with spread Operator
//Suppose you're comparing prices of tw0 different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in asscending oreder, Then log the result
let Lap1 = [12000, 32000, 22000];
let Lap2 = [43000, 21000, 55000];
// let combinedData = [...Lap1,...Lap2].sort((a,b)=> a-b)
let combinedData = [...Lap1, ...Lap2];
console.log(combinedData.sort);
