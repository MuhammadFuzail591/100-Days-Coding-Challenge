//Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.

let List:string[]=["Fuzail","Junaid","Uzair"]
console.log(`Our list of Guests before making any changes: [${List}]`)
console.log(`We have found a bigger dinner table so can Invite more people`)

//Adding name at start of array
List.unshift("Ali")
//Adding name at the end of array
List.push("Ahsan")
//Adding name in the middle of the array
List.splice(List.length/2,0,"Akbar")

console.log(`Our new list of Guests is: [${List}]`)

for(let guest of List){
    console.log(`Hello dear ${guest}. You are invited to dinner`)
}