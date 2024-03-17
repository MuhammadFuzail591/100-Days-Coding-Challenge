//Question 29: Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are included.
let favFruits = ["Mango", "Banana", "Cheekoo", "Apple"];
console.log(`The list of favorite fruits is: [${favFruits}]`);
console.log(`Checking for presence of some fruits in it `);
console.log(`-------------Checking Mango--------------`);
console.log(favFruits.includes("Mango"));
if (favFruits.includes("Apple")) {
    console.log(`Apple is included in the list of fruits`);
}
else {
    console.log(`Apple is not included in the list of fruits`);
}
if (favFruits.includes("WaterMelon")) {
    console.log(`WaterMelon is included in the list of fruits`);
}
else {
    console.log(`WaterMelon is not included in the list of fruits`);
}
export {};
