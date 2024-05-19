"use strict";
//Advanced Array Destructing
//Geven an array of objectts representing different laptops, each with properties make, model and year. Use array destructuring to assign the first and second laptops to variables. Then, log these variables
let Laptops = [{
        "Make": "Lenovo",
        "Model": "G-14",
        "Year": 2020
    }, {
        "Make": "Dell",
        "Model": "G1-1",
        "Year": 2024
    }, {
        "Make": "Mac Book",
        "Model": "G11",
        "Year": 2023
    }];
let [Laptop1, Laptop2, Laptop3] = Laptops;
console.log(Laptop1);
console.log(Laptop2);
console.log(Laptop3);
// function Laptops(Make:string, Model:string, Year:number):object{
//     let Laptop={
//         "Make":Make,
//         "Model":Model,
//         "Year":Year
//     }
//     return Laptop
// }
// let [Laptop1,Laptop2]=Laptops("Lenovo","G-14",2023)
// let var1=Laptops("Lenovo","G-14",2023)
// let var2=Laptops("Dell","Core I5",2024)
// console.log(var1)
// console.log(var2)
