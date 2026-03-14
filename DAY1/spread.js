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

//merging array
e = [...a, ...c];
console.log("Merge: ", e);

//Spread operator creates shallow copy
f = [[1, 4, 5], [3, 5], 8, 9];
g = [...f]; //shallow copy
h = structuredClone(f) //deep copy
console.log(g);
f[2] = 10;
f[1][1] = 45;
console.log("shallow copy after charging:", g);
//deep copy
console.log("Deep copy:", h);