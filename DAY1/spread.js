a = [34, 25, 3, 4];
b = a;
// b= a =>internally adress(reference of a is given to b)
console.log(a === b);
a[2] = 45;
console.log("b =", b)//primitives = int, float, char;

x = 45;
y = x;

console.log("Primitive comparison: ", x === y);
x = 10;
console.log("Primitive comparison: ", x === y);

//Spread Operator
c = [10, 560, 45, 899];
d = [...c];//actual copy - new object
//most framework like react / angular depend on chnge detection
console.log("Object Comparison: ", c === d);

console.log("Maximum value: ", Math.max(...c)); //Max needs values
