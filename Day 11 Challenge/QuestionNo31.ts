//Question 31: No Users: Ensure your user list isn’t empty.

let arr:string[]=["Fuzail","Uzair","Ali","Ahmad","Admin"]
//let arr2:string[]=[]

if(arr.length==0){
    console.log("There is no user in the list")
}
else{
    for (let user of arr) {
        if (user === "Admin") {
            console.log(`Hello Admin...!! Would you like to see some reports..??`);
        }
        else {
            console.log(`Hello ${user} How are you doing..??`);
        }
}
}