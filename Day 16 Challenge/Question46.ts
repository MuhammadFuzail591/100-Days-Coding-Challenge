//Enhanced Laptop object
//Construct an object for a laptop including properties make, model, year and a method to log a sentece about the laptop

let Laptop={
    Name:"Lenovo",
    Model:"V-14",
    Year:2024,
    Description:function(){
        console.log(`The Company Name of Laptop is ${this.Name} and The model is  ${this.Model} And the year of manufacturing is ${this.Year}`);
    }
}

//Callinng Method
Laptop.Description()