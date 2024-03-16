//Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guestList:string[]=["Fuzail","Junaid","Uzair"]
//For Loop
console.log(`First Solution`)
for(let guest of guestList){
    console.log(`Hello dear ${guest}. You are invited to dinner`)
}


//ForEach Statement
console.log(`Second Solution`)
guestList.forEach(guest=>{
    console.log(`Hello dear ${guest}. You are invited to dinner`)
})