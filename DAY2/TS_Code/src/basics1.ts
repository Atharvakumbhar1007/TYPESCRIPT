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

//Array 
let numbers: number[] = [1, 2, 3, 4, 5];
let cities: Array<string> = ["Mumbai", "Pune", "Satara"];

console.log(numbers);
console.log(cities);

//Objtes
let product: { id: number, title: string, price: number } = {
    id: 101,
    title: "Laptop",
    price: 55000,
};
console.log(product);

//Turtle: fixed length array
let person: [string, number] = ["Atharva", 24];
let transaction: [id: number, type: string, active: boolean, amt: number] =
    [12345, "Purchase", true, 55000];//code is more readble
console.log(person, transaction);
console.log("Amount: ", transaction[3]);
/*to run the code usefirst -tsc
then second step -node ./dist/filename*/