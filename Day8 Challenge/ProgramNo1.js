"use strict";
//Question 22: Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing.
let array = [2, 5, 6, 7, 4, 9];
//With Error
for (let i = 0; i < 8; i++) {
    console.log(array[i]);
}
//Solved
console.log(`=======================================`);
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
