"use strict";
//Cities: Describing cities with the function
function city(city, country = "India") {
    console.log(`"${city}" is in "${country}"`);
}
//Calling function with single parameter
city("HyderAbad");
//Calling with both parameters
city("Kolkata", "Japan");
//Calling with again single parameter
city("Bombay");
