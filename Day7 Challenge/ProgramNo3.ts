//Question 21: Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

//TypeScript Object Datatype


// 1st Solution
let person1: {ID:number;Name:string;Description:string}={
    ID:1,
    Name:"Muhammd Fuzail",
    Description:"Student of BSSE in SMIU"
}

//2nd Solution
let person={
    ID:1,
    Name:"Muhammd Fuzail",
    Description:"Student of BSSE in SMIU"
}
console.log(`Person's ID is "${person.ID}", name is "${person.Name}" and description is "${person.Description}"`)