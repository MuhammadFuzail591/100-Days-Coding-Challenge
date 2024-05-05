function ItemsOnSandwich(...items:string[]){
    console.log("Items on sandwich")
    for(let item of items){
        console.log(`"${item}"`)
    }
}

ItemsOnSandwich("Chicken","Cheese")
ItemsOnSandwich("Salt","pepper","Tikka")