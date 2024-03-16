let OldList = ["Fuzail", "Junaid", "Uzair"];
console.log(`Our list of Guests before making any changes: ${OldList}`);
let UnableGuest = "Uzair";
console.log(`${UnableGuest} cannot come...`);
let NewGuest = "A.Raheem";
//My solution
OldList.splice(2, 1, NewGuest);
let NewList = OldList;
//Mentor's solution
//OldguestList[OldguestList.indexOf(UnableGuest)]=NewGuest
console.log(`Our new Guest List is ${NewList}`);
console.log(`First Solution`);
for (let guest of NewList) {
    console.log(`Hello dear ${guest}. You are invited to dinner`);
}
console.log(`Second Solution`);
NewList.forEach(guest => {
    console.log(`Hello dear ${guest}. You are invited to dinner`);
});
export {};
