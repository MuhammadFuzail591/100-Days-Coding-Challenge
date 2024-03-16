//Question 11: Names: Store the names of a few of your friends in an array called nemes. Print each person's name by accessing each element in the list, one at a time.

let name_Arr:string[]=["Junaid","Fuzail","Faisal"]

console.log(`The list of my friends is:`)
for(let i:number=0;i<name_Arr.length;i++){
    console.log(name_Arr[i])
}