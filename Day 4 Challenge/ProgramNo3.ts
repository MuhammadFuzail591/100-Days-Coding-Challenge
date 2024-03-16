//Question 12: Greetings: Use the array from ProgramNo1. Instead of just printing each person's name, print a message to them. The message should be the same for each person, but personalized with their name.

let namArr:string[]=["Junaid","Fuzail","Faisal"]

// console.log(`The list of my friends is:`)
// for(let i:number=0;i<namArr.length;i++){
//     console.log(`Hello...!! My friend ${namArr[i]} How Are you doing..??`)
// }

for(let name of namArr){
    console.log(`Hello..!! My Friend ${name} How Are you doing..??`)
}