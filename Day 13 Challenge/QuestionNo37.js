"use strict";
//Write a function that take parameters as size and text to be printed on the shirt
//Creating function with the default parameters
//Creating function with default parameters
function MakeShirt(size = "Medium", text = "Programmer is the problem solver") {
    console.log(`The size of shirt is "${size}" and the text to be printed is "${text}".`);
}
//Calling function without giving parameters
MakeShirt();
//Calling function by passing parameters
MakeShirt("Small", "HAPPY NEW YEAR");
