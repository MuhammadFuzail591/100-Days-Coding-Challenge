//Q.No 3: Name Cases: Store a person's name in a variable, and then print that person's name in lowercase, uppercase, and titlecase.
var PersonName = "MuHamMad fuZail";
console.log("Original Name is ".concat(PersonName));
//LowerCase
console.log("LowerCase: ".concat(PersonName.toLowerCase()));
//UpperCase
console.log("UpperCase: ".concat(PersonName.toUpperCase()));
//TitleCase
console.log("Title Case: ".concat(totitleCase(PersonName)));
function totitleCase(str) {
    str = str.toLowerCase().split(" ");
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
}














function titlecase(str:string):string{
    str=str.toLowerCase.split(" ")
    for(let i=0;i<str.length;i++){
        str[i]=str[i].charAt(0).toUpperCase() + str.slice(1)
    }
    return str.join(' ')
}
