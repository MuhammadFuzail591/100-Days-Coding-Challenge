//Question 30: Hello Admin: Greet users differently, especially 'admin'.

let userNames:string[]=["Fuzail","Admin","Uzair","Javed","Junaid"]


//First Solution
for(let user of userNames){
    if(user==="Admin"){
        console.log(`Hello Admin...!! Would you like to see some reports..??`)
    }
    else{
        console.log(`Hello ${user} How are you doing..??`)
    }
}

//Second Solution
console.log(`--------------------------------------------------`)
userNames.forEach(user=>{
    if(user==="Admin"){
        console.log(`Hello Admin...!! Would you like to see some reports..??`)
    }
    else{
        console.log(`Hello ${user} How are you doing..??`)
    }
})