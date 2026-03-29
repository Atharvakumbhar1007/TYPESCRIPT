"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Pick is a utility type
const user = {
    name: "Swayam",
    age: 36
};
console.log(`User name:${user.name}`);
console.log(`User age:${user.age}`);
const pu = {
    name: "Aditya",
    age: 32,
    id: "ABC",
    logged: true
};
console.log(pu);
// type Display User:pick<User,name|age>;
// create a variable for display user
// Add data to it
//print the data
//# sourceMappingURL=user.js.map