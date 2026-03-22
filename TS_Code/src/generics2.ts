function getFirstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}//why? arr[0] can be a value or undefined)
const numbers = [1, 2, 3];
const names = ["Amit", "Sunil"];

const fn = getFirstElement(numbers);
const tn = getFirstElement(names);

//here T is a placeholder for datatype
console.log(fn?.toFixed(3));
console.log(tn?.length);