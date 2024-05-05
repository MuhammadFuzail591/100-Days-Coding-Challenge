let OriginalArray:string[]=["Fuzail","Junaid","Uzair"]

function makeGreat(names:string[]){
    let greatMagicians:string[]=[];
    for(let i=0;i<names.length;i++){
        greatMagicians[i]="The Great " + names[i]
    }

    return greatMagicians
}

function printArray(array:string[]){
    for(let item of array){
        console.log(item)
    }
}

let greatArray:string[]=makeGreat(OriginalArray)

//Printing arrays

printArray(OriginalArray)
console.log(`===========Great Array============`)
printArray(greatArray)