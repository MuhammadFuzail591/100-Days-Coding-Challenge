//Question 28: Stages of Life: Determine a person’s life stage with an if-else chain.

let age:number=68

if(age<2){
    console.log(`Baby`)
}
else if(age==2 || age<4){
    console.log(`Toddler`)
}
else if(age==4 || age<13){
    console.log(`Kid`)
}
else if(age==13 || age<20){
    console.log(`Teen Ager`)
}
else if(age==20 || age<65){
    console.log(`Adult`)
}
else{
    console.log(`Elder`)
}