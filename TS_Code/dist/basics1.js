"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let firstName = "Omkar";
let LastName = "Jadhav"; //Typescript infersthe datatype
let fullName = `${firstName} ${LastName}`;
console.log(fullName);
let age = 25;
let hexValue = 0xf000d;
let binary = 0b0101;
let octal = 0o755;
console.log(age, hexValue, binary, octal);
let isActive = true;
if (isActive) {
    console.log("Active");
}
//Array 
let numbers = [1, 2, 3, 4, 5];
let cities = ["Mumbai", "Pune", "Satara"];
console.log(numbers);
console.log(cities);
//Objtes
let product = {
    id: 101,
    title: "Laptop",
    price: 55000,
};
console.log(product);
//Turtle: fixed length array
let person = ["Atharva", 24];
let transaction = [12345, "Purchase", true, 55000]; //code is more readble
console.log(person, transaction);
console.log("Amount: ", transaction[3]);
/*to run the code usefirst -tsc
then second step -node ./dist/filename*/ 
//# sourceMappingURL=basics1.js.map