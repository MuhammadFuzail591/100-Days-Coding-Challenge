//Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let vehicleArr = ["Civic", "Audi", "Corrolla"];
//First
console.log(`First Solution`);
for (let vehicle of vehicleArr) {
    console.log(`I all the times love ${vehicle}, and I wanna own it`);
}
//Second 
console.log(`Second Solution`);
vehicleArr.forEach(vehicle => {
    console.log(`I all the times love ${vehicle}, and I wanna own it`);
});
export {};
