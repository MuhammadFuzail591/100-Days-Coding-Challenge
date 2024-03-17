"use strict";
//Question 17: Shrinking Guest List: Unfortunately, your new table won't arrive in time, and you can only invite two guests.
let GuestList = ["Fuzail", "Uzair", "Ali", "Javed Iqbal AJ", "Zulqarnain"];
console.log(`The list before shrinking; [${GuestList}]`);
console.log(`Sorry..!! I cannot invite more than 2 people.`);
while (GuestList.length > 2) {
    let RemoveGuest = GuestList.pop();
    console.log(`Sorry ${RemoveGuest} I can't invite you to dinner`);
}
GuestList.forEach(person => {
    console.log(`Hello... Dear ${person} You are still invited to dinner...`);
});
