//Question 45: Cars: Create detailed car objectts with flexible properties.


function createCar(Name:string, Model:number, ...properties:[string,any][]):Record<string,any>{
    let Car:Record<string,any>={
        "Name":Name,
        "Model":Model
    }

    for(let property in properties){
        Car[properties[property][0]]=properties[property][1]
    }

    return Car
}

console.log(createCar("Toyota Corrolla",2018,["Color","Red"],["Manufacturer","Indus Motors"]))


console.log(createCar("Suzuki Mehran",2010,["Color","White"],["Manufacturer","Suzuki Pakistan"]))
