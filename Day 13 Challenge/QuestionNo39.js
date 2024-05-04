"use strict";
//Cities: Describing cities with the function
//Returning formatted string
function city1(city, country = "India") {
    return city + "," + country;
}
//Calling function with single parameter
let c1 = city1("HyderAbad");
console.log(`Calling function with single parameter ${c1}`);
//Calling with both parameters
let c2 = city1("Kolkata", "Japan");
console.log(`Calling with both parameters ${c2}`);
//Calling with again single parameter
let c3 = city1("Bombay");
console.log(`Calling with again single parameter ${c2}`);
