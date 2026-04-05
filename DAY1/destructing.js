//Destructor Operator
const num = [1, 2, 3, 4, 5, 6, 7];
const [a, b, , c, d, , , z = 0] = num;
console.log(a, b, c, d, z);

x = 10;
y = 20;
[y, x] = [x, y];
//REST (...)
console.log("After swapping: ", x, y);
arr = [1, 2, 3, 4, 5];
let [num1, num2, ...remaining] = arr;
console.log(num1, "|", num2, "|", remaining);

//You can creating a function with n parameter
function sum(...nums) {
    return nums.reduce((sum, num) => sum + num, 0);
}
console.log("Sum of numbers = ", sum(3, 5, 3, 6, 4, 78, 9, 565, 0));
/*function adder(sum,num){
return sum + num;
}
return nums.reduce(adder,o)
*/
/**/
