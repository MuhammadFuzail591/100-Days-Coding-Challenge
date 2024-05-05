Question 41: Magicians: Display magician names from an array. 
let magiciansNames:string[]=["Fuzail","Junaid","Uzair"]

function showMagicians(names:string[]){
    for(let name of names){
        console.log(name)
    }
}

function showMagicians2(Names:string[]){
    Names.forEach(name => {
        console.log(name)
    });
}
//Calling function
showMagicians(magiciansNames)
//Calling second function
showMagicians2(magiciansNames)
