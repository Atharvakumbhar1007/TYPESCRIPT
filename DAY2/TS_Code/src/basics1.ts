let firstName: String = "Omkar";
let LastName = "Jadhav";//Typescript infersthe datatype
let fullName: string = `${firstName} ${LastName}`;
console.log(fullName);

let age: number = 25;
let hexValue: number = 0xf000d;
let binary: number = 0b0101;
let octal: number = 0o755;

console.log(age, hexValue, binary, octal);

let isActive: boolean = true;
if (isActive) {
    console.log("Active");
}