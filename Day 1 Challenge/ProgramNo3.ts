//Q.No 3: Name Cases: Store a person's name in a variable, and then print that person's name in lowercase, uppercase, and titlecase.

let PersonName:string="MuHamMad fuZail"

console.log(`Original Name is ${PersonName}`)
//LowerCase
console.log(`LowerCase: ${PersonName.toLowerCase()}`)

//UpperCase
console.log(`UpperCase: ${PersonName.toUpperCase()}`)

//TitleCase
console.log(`Title Case: ${totitleCase(PersonName)}`)

function totitleCase(str:any):string{
    str=str.toLowerCase().split(` `)
    for(let i=0;i<str.length;i++){
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1)
    }
    return str.join(` `)
}
