
//Question 32: Checking Usernames: Ensure uniqueness in usernames.

let userNames:string[]=["Fuzail","Uzair","Ali","Ahmad","Admin"]

let newUsers:string[]=["Akbar","Ali","azam","Ahmad","admin"]
for(let user of newUsers){
    let Nmb:number=0
    for(let users of userNames){
        if(user===users){
            console.log(`${user}'s Name is already taken...!! Choose another one`)
            Nmb=1
            break
        }   
    }
    if(Nmb==0){
        console.log(`The ${user} name is available... You can continue`)
        continue
    }
}
