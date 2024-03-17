//Question 19: Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message indicating the number of people you are inviting to dinner.
//Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guestList:string[]=["Fuzail","Junaid","Uzair","Javed"]
let numOfGusts:number=0
//For Loop
console.log(`First Solution`)
for(let guest of guestList){
    numOfGusts++
    console.log(`Hello dear ${guest}. You are invited to dinner`)
}
console.log(`Number of guest to which invitaiton is sent is ${numOfGusts}`)

//ForEach Statement
// console.log(`Second Solution`)
// guestList.forEach(guest=>{
//     console.log(`Hello dear ${guest}. You are invited to dinner`)
// })


