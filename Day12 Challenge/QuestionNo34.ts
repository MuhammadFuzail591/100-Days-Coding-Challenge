//Question No 34: Pizzas: Share your favorite pizzas and express your love for them

let Pizzas:string[]=["Fajita", "Tikka","Chicken"]

for(let pizza of Pizzas){
    if(pizza=="Fajita"){
        console.log(`Fajita is my favorite one`)
    }
    else if(pizza=="Tikka"){
        console.log(`Tikka is also good but not better than Fajita`)
    }
    else{
        console.log(`Chicken is not so favorite but will go`)
    }
}