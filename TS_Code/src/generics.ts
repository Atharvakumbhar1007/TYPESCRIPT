function getFirstElement(arr: any[]): any {
    if (Array.length > 0)
        return arr[0];
    else
        return null;
}
const numbers = [1, 2, 3];
const result = getFirstElement(numbers);
console.log(result.toUpperCase());
//no error as TS doesn't know what will be returned
//runtiime error =-> toUpperCase is not a function

