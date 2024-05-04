//Cities: Describing cities with the function
//Returning formatted string

function city1(city:string,country:string="India"):string{
    return city +","+ country
}

//Calling function with single parameter
let c1:string=city1("HyderAbad")
console.log(`Calling function with single parameter ${c1}`)


//Calling with both parameters
let c2:string=city1("Kolkata","Japan")

console.log(`Calling with both parameters ${c2}`)

//Calling with again single parameter

let c3:string=city1("Bombay")


console.log(`Calling with again single parameter ${c2}`)