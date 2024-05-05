"use strict";
//Question 45: Cars: Create detailed car objectts with flexible properties.
function createCar(Name, Model, ...properties) {
    let Car = {
        "Name": Name,
        "Model": Model
    };
    for (let property in properties) {
        Car[properties[property][0]] = properties[property][1];
    }
    return Car;
}
console.log(createCar("Toyota Corrolla", 2018, ["Color", "Red"], ["Manufacturer", "Indus Motors"]));
console.log(createCar("Suzuki Mehran", 2010, ["Color", "White"], ["Manufacturer", "Suzuki Pakistan"]));
